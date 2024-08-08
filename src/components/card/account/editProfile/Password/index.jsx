"use client";
import { useReducer, useCallback } from 'react';
import { validateInput } from "@/components/lib/validation/form/profileSetting/resetPassword";
import FormField from './filed';
import { Card, CardBody, Button } from "@nextui-org/react";
import { toast } from 'react-hot-toast';
import { useSession } from '@/context/SessionContext';
import ResetPasswordAction from '@/actions/resetPassword';

const UPDATE_FORM = 'UPDATE_FORM';
const SET_FORM_VALIDITY = 'SET_FORM_VALIDITY';

// Initial state for the form
const initialFormState = {
    currentPassword: { value: "", hasError: false, error: "", touched: false },
    newPassword: { value: "", hasError: false, error: "", touched: false },
    confirmPassword: { value: "", hasError: false, error: "", touched: false },
    isFormValid: false,
};

// Form reducer function
const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                [action.data.name]: {
                    ...state[action.data.name],
                    value: action.data.value,
                    hasError: action.data.hasError,
                    error: action.data.error,
                    touched: action.data.touched,
                },
            };
        case SET_FORM_VALIDITY:
            return { ...state, isFormValid: action.isFormValid };
        default:
            return state;
    }
};

// Validate a single field
const validateField = (name, value, confirmPasswordValue) => {
    return validateInput(name, value, name === "confirmPassword" ? confirmPasswordValue : undefined);
};

// Validate the entire form
const validateForm = (formState, dispatch) => {
    let isFormValid = true;
    for (const name in formState) {
        const item = formState[name];
        const { value } = item;
        const confirmPasswordValue = formState.newPassword.value;
        const { hasError, error } = validateField(name, value, confirmPasswordValue);

        if (hasError) {
            isFormValid = false;
        }

        dispatch({
            type: UPDATE_FORM,
            data: {
                name,
                value,
                hasError,
                error,
                touched: true,
            },
        });
    }

    dispatch({ type: SET_FORM_VALIDITY, isFormValid });
};

const ResetPasswordCard = () => {
    const session = useSession();
    const token = session?.user?.token;
    const user_id = session?.user?.userId;
    const [resetPasswordForm, dispatchForm] = useReducer(formReducer, initialFormState);

    // Handler for input changes and blur events
    const handleFieldChange = useCallback((name) => (e) => {
        const { value } = e.target;
        const confirmPasswordValue = name === "confirmPassword" ? resetPasswordForm.newPassword.value : undefined;
        const { hasError, error } = validateField(name, value, confirmPasswordValue);

        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value, hasError, error, touched: true },
        });
    }, [resetPasswordForm]);

    // Submit handler
    const submitHandler = async (e) => {
        e.preventDefault();
        const isValid = await new Promise((resolve) => {
            validateForm(resetPasswordForm, (action) => {
                dispatchForm(action);
                if (action.type === SET_FORM_VALIDITY) {
                    resolve(action.isFormValid);
                }
            });
        });

        if (isValid) {

            const data = {
                token,
                user_id,
                current_password:resetPasswordForm?.currentPassword?.value,
                password:resetPasswordForm?.newPassword?.value
            };
            const result = await ResetPasswordAction(data);

            if (result.success) {
                toast.success("Password successfully changed");
            } else {
                toast.error(result.message);
            }
        } else {
            toast.error("Please fix the errors in the form");
        }
    };

    return (
        <Card>
            <CardBody className="sm:p-[20px]" >
                <form onSubmit={submitHandler}>
                    <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                        Password
                    </h3>
                    <div className="flex flex-col gap-3">
                        <FormField
                            name="currentPassword"
                            type="password"
                            placeholder="Current password"
                            value={resetPasswordForm.currentPassword.value}
                            error={resetPasswordForm.currentPassword.error}
                            touched={resetPasswordForm.currentPassword.touched}
                            onChange={handleFieldChange("currentPassword")}
                            onBlur={handleFieldChange("currentPassword")}
                        />
                        <FormField
                            name="newPassword"
                            type="password"
                            placeholder="New password"
                            value={resetPasswordForm.newPassword.value}
                            error={resetPasswordForm.newPassword.error}
                            touched={resetPasswordForm.newPassword.touched}
                            onChange={handleFieldChange("newPassword")}
                            onBlur={handleFieldChange("newPassword")}
                        />
                        <FormField
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={resetPasswordForm.confirmPassword.value}
                            error={resetPasswordForm.confirmPassword.error}
                            touched={resetPasswordForm.confirmPassword.touched}
                            onChange={handleFieldChange("confirmPassword")}
                            onBlur={handleFieldChange("confirmPassword")}
                        />
                        <div className="pt-4">
                            <Button
                                type='submit'
                                radius="full"
                                className="bg-orangeprimary text-white text-[14px]"
                            >
                                Change Password
                            </Button>
                        </div>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
};

export default ResetPasswordCard;
