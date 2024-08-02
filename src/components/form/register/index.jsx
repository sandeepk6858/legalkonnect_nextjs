"use client";
import { useState, useReducer } from 'react';
import Link from "next/link";
import { validateInput } from "@/components/lib/validation/form/register";
import FormField from './filed';

// Action type constants
const UPDATE_FORM = 'UPDATE_FORM';
const SET_FORM_VALIDITY = 'SET_FORM_VALIDITY';

// Initial state for the form
const initialFormState = {
    email: { value: "", hasError: false, error: "", touched: false },
    password: { value: "", hasError: false, error: "", touched: false },
    confirm_password: { value: "", hasError: false, error: "", touched: false },
    phone: { value: "", hasError: false, error: "", touched: false },
    first_name: { value: "", hasError: false, error: "", touched: false },
    last_name: { value: "", hasError: false, error: "", touched: false },
    role: { value: "attorney", hasError: false, error: "", touched: false },
    policy: { value: false, hasError: false, error: "" },
    acceptance: { value: false, hasError: false, error: "" },
    isFormValid: false,
};

// Form reducer function
const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched } = action.data;
            return {
                ...state,
                [name]: { ...state[name], value, hasError, error, touched },
            };
        case SET_FORM_VALIDITY:
            return { ...state, isFormValid: action.isFormValid };
        default:
            return state;
    }
};

// Validate form fields
const validateForm = (formState, dispatch) => {
    let isFormValid = true;
    for (const name in formState) {
        const item = formState[name];
        const { value } = item;
        // Pass confirm_password value when validating confirm_password field
        const confirmPasswordValue = formState.password.value;
        const { hasError, error } = validateInput(name, value, name === "confirm_password" ? confirmPasswordValue : undefined);

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

const RegisterForm = ({ roles }) => {
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const [registerForm, dispatchForm] = useReducer(formReducer, initialFormState);

    // Handle role option click
    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    // Input change handler
    const handleInputChange = (name) => (e) => {
        const { value, checked } = e.target;
        const inputValue = name === "policy" || name === "acceptance" ? checked : value;
        const confirmPasswordValue = name === "confirm_password" ? registerForm.password.value : undefined;
        const { hasError, error } = validateInput(name, inputValue, confirmPasswordValue);
        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value: inputValue, hasError, error, touched: true },
        });
    };

    const handleBlur = (name) => (e) => {
        const { value } = e.target;
        const confirmPasswordValue = name === "confirm_password" ? registerForm.password.value : undefined;
        const { hasError, error } = validateInput(name, value, confirmPasswordValue);
        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value, hasError, error, touched: true },
        });
    };

    // Submit handler
    const submitHandler = async (e) => {
        e.preventDefault();
        const isValid = await new Promise((resolve) => {
            validateForm(registerForm, (action) => {
                dispatchForm(action);
                if (action.type === SET_FORM_VALIDITY) {
                    resolve(action.isFormValid);
                }
            });
        });

        // Check if the form is valid
        if (isValid) {
            console.log("Form is valid", registerForm);
        } else {
            console.log("Form is not valid!!!");
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <p className="text-blueprimary text-base">
                Create a free account to get started
            </p>

            <div className="flex flex-col gap-2 pt-3">
                <label className="text-[#474040] text-base">Who you are?*</label>
                <div className="relative">
                    <div
                        className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selected?.name || "Attorney"}
                        <input name="role" type="hidden" value={selected?.key} />
                    </div>
                    {isOpen && (
                        <div className="absolute z-10 w-full border border-[#9b9898] bg-white mt-1 max-h-60 overflow-y-auto">
                            {roles?.map((option) => (
                                <div
                                    key={option?.key}
                                    className="py-2.5 px-3.5 text-grey text-base cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option?.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col md:justify-between md:flex-row gap-2 pt-4">
                <FormField
                    name="first_name"
                    placeholder="First name"
                    value={registerForm.first_name.value}
                    error={registerForm.first_name.error}
                    touched={registerForm.first_name.touched}
                    onChange={handleInputChange("first_name")}
                    onBlur={handleBlur("first_name")}
                />
                <FormField
                    name="last_name"
                    placeholder="Last name"
                    value={registerForm.last_name.value}
                    error={registerForm.last_name.error}
                    touched={registerForm.last_name.touched}
                    onChange={handleInputChange("last_name")}
                    onBlur={handleBlur("last_name")}
                />
            </div>

            <div className="flex flex-col md:justify-between md:flex-row gap-2 pt-4">
                <FormField
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={registerForm.email.value}
                    error={registerForm.email.error}
                    touched={registerForm.email.touched}
                    onChange={handleInputChange("email")}
                    onBlur={handleBlur("email")}
                />

                <FormField
                    name="phone"
                    placeholder="Your phone number"
                    value={registerForm.phone.value}
                    error={registerForm.phone.error}
                    touched={registerForm.phone.touched}
                    onChange={handleInputChange("phone")}
                    onBlur={handleBlur("phone")}
                />
            </div>

            <div className="flex flex-col md:justify-between md:flex-row gap-2 pt-4">
                <FormField
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={registerForm.password.value}
                    error={registerForm.password.error}
                    touched={registerForm.password.touched}
                    onChange={handleInputChange("password")}
                    onBlur={handleBlur("password")}
                />
                <FormField
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    value={registerForm?.confirm_password.value}
                    error={registerForm?.confirm_password.error}
                    touched={registerForm?.confirm_password.touched}
                    onChange={handleInputChange("confirm_password")}
                    onBlur={handleBlur("confirm_password")}
                />
            </div>

            <p className="text-[16px] text-grey font-light pt-4">
                After registration you can add more license numbers (if you have) in your Profile Settings page
            </p>

            <div className="flex pt-5 flex-col">
                <div className="flex gap-3">
                    <div>
                        <input
                            name="policy"
                            type="checkbox"
                            className={`w-[25px] h-[25px] ${registerForm.policy.hasError ? "border-red-600" : "border-stone-300"}`}
                            checked={registerForm.policy.value}
                            onChange={handleInputChange("policy")}
                        />
                    </div>
                    <p className="text-[#474040] text-base">
                        I accept the Terms & Privacy Policy.
                    </p>
                </div>
                {registerForm.policy.hasError && (
                    <div className="error-msg text-red-600 mt-1 text-sm">{registerForm.policy.error}</div>
                )}
            </div>

            <div className="flex pt-5 flex-col">
                <div className="flex gap-3">
                    <div>
                        <input
                            name="acceptance"
                            type="checkbox"
                            className={`w-[25px] h-[25px] ${registerForm.acceptance.hasError ? "border-red-600" : "border-stone-300"}`}
                            checked={registerForm.acceptance.value}
                            onChange={handleInputChange("acceptance")}
                        />
                    </div>
                    <p className="text-[#474040] text-base">
                        I accept receiving other promotions via email or text by using the site
                    </p>
                </div>
                {registerForm.acceptance.hasError && (
                    <div className="error-msg text-red-600 mt-1 text-sm">{registerForm.acceptance.error}</div>
                )}
            </div>

            <div className="flex flex-col md:flex-row justify-between pt-[18px] gap-2.5 md:gap-[0]">
                <button className="flex justify-center items-center py-2.5 px-[15px] min-h-[37px] max-h-[37px] rounded-[22px] bg-[#f16622] text-[14px]">
                    Sign Up
                </button>
                <Link
                    href="https://legalkonnect.com/redirect/google"
                    className="hover:text-bluesecondary py-2.5 px-[15px] gap-1 min-h-[37px] max-h-[37px] text-[14px] rounded-[22px] bg-white text-black flex justify-center items-center"
                    style={{
                        boxShadow:
                            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04)",
                    }}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.6203 12.2464 10.9586 13.5 9 13.5C6.51488 13.5 4.5 11.4851 4.5 9C4.5 6.51488 6.51488 4.5 9 4.5C10.1471 4.5 11.1908 4.93275 11.9854 5.63963L14.1068 3.51825C12.7673 2.26988 10.9755 1.5 9 1.5C4.85813 1.5 1.5 4.85813 1.5 9C1.5 13.1419 4.85813 16.5 9 16.5C13.1419 16.5 16.5 13.1419 16.5 9C16.5 8.49713 16.4483 8.00625 16.3541 7.53113Z"
                            fill="#FFC107"
                        ></path>
                        <path
                            d="M2.36475 5.50912L4.82887 7.31625C5.49562 5.6655 7.11037 4.5 9 4.5C10.1471 4.5 11.1907 4.93275 11.9854 5.63962L14.1067 3.51825C12.7672 2.26987 10.9755 1.5 9 1.5C6.11925 1.5 3.621 3.12637 2.36475 5.50912Z"
                            fill="#FF3D00"
                        ></path>
                        <path
                            d="M9.00012 16.5C10.9374 16.5 12.6976 15.7586 14.0285 14.553L11.7072 12.5887C10.9289 13.1806 9.97791 13.5008 9.00012 13.5C7.04937 13.5 5.39299 12.2561 4.76899 10.5202L2.32324 12.4046C3.56449 14.8335 6.08524 16.5 9.00012 16.5Z"
                            fill="#4CAF50"
                        ></path>
                        <path
                            d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.9428 11.3312 12.41 12.0574 11.706 12.5891L11.7071 12.5884L14.0284 14.5526C13.8641 14.7019 16.5 12.75 16.5 9C16.5 8.49712 16.4482 8.00625 16.3541 7.53113Z"
                            fill="#1976D2"
                        ></path>
                    </svg>
                    Log In with Google
                </Link>
                <Link
                    href="https://legalkonnect.com/redirect/google"
                    className=" hover:text-bluesecondary py-2.5 gap-1 px-[15px] min-h-[37px] max-h-[37px] rounded-[22px] text-[14px] bg-white text-black flex justify-center items-center"
                    style={{
                        boxShadow:
                            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04)",
                    }}
                >
                    <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0)">
                            <path
                                d="M15.1169 16.5001C15.6046 16.5001 16 16.1047 16 15.617V1.38306C16 0.895312 15.6046 0.5 15.1169 0.5H0.883062C0.39525 0.5 0 0.895312 0 1.38306V15.617C0 16.1047 0.39525 16.5001 0.883062 16.5001H15.1169Z"
                                fill="#395185"
                            ></path>
                            <path
                                d="M11.0396 16.5001V10.304H13.1194L13.4308 7.88933H11.0396V6.34758C11.0396 5.64845 11.2338 5.17202 12.2364 5.17202L13.5151 5.17145V3.01177C13.2938 2.98233 12.5348 2.91658 11.6518 2.91658C9.80819 2.91658 8.54607 4.04189 8.54607 6.10852V7.88933H6.46094V10.304H8.54607V16.5001H11.0396Z"
                                fill="white"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect
                                    y="0.5"
                                    width="16"
                                    height="16"
                                    fill="white"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    Log In with Facebook
                </Link>
            </div>
            <div className="pt-6 md:pt-12">
                <span className="text-black text-base font-light">
                    Already have an account?{" "}
                    <Link className="text-blueprimary  hover:underline" href="/login">
                        Log In
                    </Link>
                </span>
            </div>
        </form>
    )
}
export default RegisterForm;