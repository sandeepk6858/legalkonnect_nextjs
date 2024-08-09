"use client";
import { useReducer, useState,useEffect } from 'react';
import { validateInput } from "@/components/lib/validation/form/profileSetting/attorneyCredentails";
import { Card, CardBody,Autocomplete, AutocompleteItem,Button } from "@nextui-org/react";
import { useSession } from '@/context/SessionContext';
import { toast } from 'react-hot-toast';
import SearchSvg from '@/components/Icons/searchSvg';

const UPDATE_FORM = 'UPDATE_FORM';
const SET_FORM_VALIDITY = 'SET_FORM_VALIDITY';

const formState = {
    state: { value: "", hasError: false, error: "", touched: false },
    licenseNumber: { value: "", hasError: false, error: "", touched: false },
    isFormValid: false,
};

// Form Reducer
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

// Validate Form
const validateForm = (formState, dispatch) => {
    let isFormValid = true;
    for (const name in formState) {
        if (name !== "isFormValid") {
            const { value } = formState[name];
            const { hasError, error } = validateInput(name, value, formState);

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
    }

    dispatch({ type: SET_FORM_VALIDITY, isFormValid });
};

const Arizonas = [
    { value: "Arizpne", label: "Arizpne" },
    { value: "Alabama", label: "Alabama" },
    { value: "Alaska", label: "Alaska" },
    { value: "Delaware", label: "Delaware" },
    { value: "Florida", label: "Florida" },
  ];
  const AttorneyCredentials = () => {
    const session = useSession();
    const token = session?.user?.token;
   // const user_id = session?.user?.userId;

    const [attorneyForm, dispatchForm] = useReducer(formReducer, formState);

    useEffect(() => {
        getSocialUser();
    }, []);

    const handleFieldChange = (name) => (e) => {
        const { value } = e.target;
        const { hasError, error } = validateInput(name, value, attorneyForm);
        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value, hasError, error, touched: true },
        });
    };

    const handleBlur = (name) => (e) => {
        const { value } = e.target;
        const { hasError, error } = validateInput(name, value, attorneyForm);
        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value, hasError, error, touched: true },
        });
    };

    async function getSocialUser() {
        try {
            toast.error('An error occurred while fetching social media data.');
            // const result = await SocialMediaActionGet(token);
            // if (result.success) {
            //     setItems(result?.data ?? []);
            // } else {
            //     toast.error(result.message);
            // }
        } catch (error) {
            toast.error('An error occurred while fetching social media data.');
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const isValid = await new Promise((resolve) => {
            validateForm(attorneyForm, (action) => {
                dispatchForm(action);
                if (action.type === SET_FORM_VALIDITY) {
                    resolve(action.isFormValid);
                }
            });
        });

        if (isValid) {
            console.log("attorneyForm", attorneyForm);
            // Handle form submission logic here
        } else {
            toast.error("Please fix the errors in the form");
        }
    };

    return (
        <Card>
            <CardBody>
                <div className="sm:p-[20px]">
                    <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                        Attorney Credentials
                    </h3>
                    <form onSubmit={submitHandler}>
                        <div className="flex flex-wrap justify-between">
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <div className="icon absolute z-20 top-[74px] sm:top-[94px] left-[24px] sm:left-[42px]">
                                    <SearchSvg width={"20px"} height={"20px"} fill={"fill-orangeprimary"} />
                                </div>
                                <Autocomplete
                                    labelPlacement="outside"
                                    placeholder="Arizona"
                                    className="w-full relative"
                                    inputProps={{
                                        classNames: {
                                            input: "ml-1",
                                            inputWrapper: "h-[54px] mt-[8px] border border-[#9b9898] rounded-none pl-8",
                                        },
                                    }}
                                    value={attorneyForm.state.value} // Fixed
                                    onChange={handleFieldChange('state')}
                                    onBlur={handleBlur('state')}
                                >
                                    {Arizonas.map((Arizona) => (
                                        <AutocompleteItem
                                            key={Arizona.value}
                                            value={Arizona.value}
                                        >
                                            {Arizona.label}
                                        </AutocompleteItem>
                                    ))}
                                </Autocomplete>
                                {attorneyForm.state.hasError && <div className="text-red-500">{attorneyForm.state.error}</div>} {/* Fixed */}
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
                                <Autocomplete
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="w-full"
                                    inputProps={{
                                        classNames: {
                                            input: "ml-1",
                                            inputWrapper: "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
                                        },
                                    }}
                                    value={attorneyForm.licenseNumber.value} // Fixed
                                    onChange={handleFieldChange('licenseNumber')}
                                    onBlur={handleBlur('licenseNumber')}
                                >
                                    {/* Add AutocompleteItems as needed */}
                                </Autocomplete>
                                {attorneyForm.licenseNumber.hasError && <div className="text-red-500">{attorneyForm.licenseNumber.error}</div>} {/* Fixed */}
                            </div>
                        </div>
                        <div className="mt-5">
                            <Button
                                radius="full"
                                className="bg-orangeprimary text-white text-[14px]"
                                type="submit"
                            >
                                Add license number
                            </Button>
                        </div>
                    </form>
                </div>
            </CardBody>
        </Card>
    );
}

export default AttorneyCredentials; 
// const AttorneyCredentails = () => {
//     const [attorneyForm, dispatchForm] = useReducer(formReducer, initialFormState);

//     useEffect(() => {
//         getSocialUser();
//     }, []);

//     const handleFieldChange = (name) => (e) => {
//         const { value } = e.target;
//         const { hasError, error } = validateInput(name, value, attorneyForm);
//         dispatchForm({
//             type: UPDATE_FORM,
//             data: { name, value, hasError, error, touched: true },
//         });
//     };

//     // Handle Blur
//     const handleBlur = (name) => (e) => {
//         const { value } = e.target;
//         const { hasError, error } = validateInput(name, value, attorneyForm);
//         dispatchForm({
//             type: UPDATE_FORM,
//             data: { name, value, hasError, error, touched: true },
//         });
//     };

//     /** 
//      * Fetch social media data and display a toast message.
//      */
//     async function getSocialUser() {
//         try {
//             const result = await SocialMediaActionGet(token);
//             if (result.success) {
//                 setItems(result?.data ?? [])
//             } else {
//                 toast.error(result.message);
//             }
//         } catch (error) {
//             toast.error('An error occurred while fetching social media data.');
//         }
//     }

//     const submitHandler = async (event) => {
//         event.preventDefault();
//         const isValid = await new Promise((resolve) => {
//             validateForm(attorneyForm, (action) => {
//                 dispatchForm(action);
//                 if (action.type === SET_FORM_VALIDITY) {
//                     resolve(action.isFormValid);
//                 }
//             });
//         });

//         if (isValid) {
//             console.log("attorneyForm",attorneyForm);
//         } else {
//             toast.error("Please fix the errors in the form");
//         }
//     };

//     return (
//         <Card>
//             <CardBody>
//                 <div className="sm:p-[20px]">
//                     <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
//                         Attorney Credentials
//                     </h3>
//                     <div className="flex flex-wrap justify-between">
//                         <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
//                             <div className="icon absolute z-20 top-[74px] sm:top-[94px] left-[24px] sm:left-[42px]">
//                             <SearchSvg width={"20px"} height={"20px"} fill={"fill-orangeprimary"}/>
//                             </div>
//                             <Autocomplete
//                                 labelPlacement="outside"
//                                 placeholder="Arizona"
//                                 className="w-full relative"
//                                 inputProps={{
//                                     classNames: {
//                                         input: "ml-1",
//                                         inputWrapper:
//                                             "h-[54px] mt-[8px] border border-[#9b9898] rounded-none pl-8",
//                                     },
//                                 }}
//                             >
//                                 {Arizonas.map((Arizona) => (
//                                     <AutocompleteItem
//                                         key={Arizona.value}
//                                         value={Arizona.value}
//                                     >
//                                         {Arizona.label}
//                                     </AutocompleteItem>
//                                 ))}
//                             </Autocomplete>
//                         </div>
//                         <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_10px)]">
//                             <Autocomplete
//                                 labelPlacement="outside"
//                                 placeholder=""
//                                 className="w-full"
//                                 inputProps={{
//                                     classNames: {
//                                         input: "ml-1",
//                                         inputWrapper:
//                                             "h-[54px] mt-[8px] border border-[#9b9898] rounded-none",
//                                     },
//                                 }}
//                             >
//                                 <AutocompleteItem
//                                     key=""
//                                     value=""
//                                 ></AutocompleteItem>
//                             </Autocomplete>
//                         </div>
//                     </div>
//                     <div className="mt-5">
//                         <Button
//                             radius="full"
//                             className="bg-orangeprimary text-white text-[14px]"
//                         >
//                             Add license number
//                         </Button>
//                     </div>
//                 </div>
//             </CardBody>
//         </Card>
//     )
// }
// export default AttorneyCredentails;