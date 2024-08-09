"use client";
import { useReducer, useState,useEffect } from 'react';
import { validateInput } from "@/components/lib/validation/form/profileSetting/socialMedia";
import { socialMedia } from "@/components/utils";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import MailSvg from '@/components/Icons/socialMedia/mailSvg';
import FacebookSvg from '@/components/Icons/socialMedia/facebookSvg';
import LinkedinSvg from '@/components/Icons/socialMedia/linkedinSvg';
import InstaSvg from '@/components/Icons/socialMedia/instaSvg';
import TwitterSvg from '@/components/Icons/socialMedia/twitterSvg';
import { useSession } from '@/context/SessionContext';
import { toast } from 'react-hot-toast';
import SocialMediaActionAdd from '@/actions/account/socialMediaAction/add';
import SocialMediaActionRemove from '@/actions/account/socialMediaAction/remove';
import SocialMediaActionGet from '@/actions/account/socialMediaAction/get';
import SocialMediaItem from './social';

const UPDATE_FORM = 'UPDATE_FORM';
const SET_FORM_VALIDITY = 'SET_FORM_VALIDITY';

const initialFormState = {
    type: { value: "", hasError: false, error: "", touched: false },
    url: { value: "", hasError: false, error: "", touched: false },
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


const SocialMediaCard = () => {
    const [items, setItems] = useState([]);
    const session = useSession();
    const token = session?.user?.token;
    const user_id = session?.user?.userId;
    const [socialMediaForm, dispatchForm] = useReducer(formReducer, initialFormState);

    useEffect(() => {
        getSocialUser();
    }, []);

    const handleFieldChange = (name) => (e) => {
        const { value } = e.target;
        const { hasError, error } = validateInput(name, value, socialMediaForm);
        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value, hasError, error, touched: true },
        });
    };

    // Handle Blur
    const handleBlur = (name) => (e) => {
        const { value } = e.target;
        const { hasError, error } = validateInput(name, value, socialMediaForm);
        dispatchForm({
            type: UPDATE_FORM,
            data: { name, value, hasError, error, touched: true },
        });
    };

    /** 
     * Fetch social media data and display a toast message.
     */
    async function getSocialUser() {
        try {
            const result = await SocialMediaActionGet(token);
            if (result.success) {
                setItems(result?.data ?? [])
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error('An error occurred while fetching social media data.');
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const isValid = await new Promise((resolve) => {
            validateForm(socialMediaForm, (action) => {
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
                "url": socialMediaForm?.url?.value,
                "type": socialMediaForm?.type?.value,
            };
            const result = await SocialMediaActionAdd(data);

            if (result.success) {
                toast.success("Added successfully.");
                getSocialUser();
            } else {
                toast.error(result.message);
            }
        } else {
            toast.error("Please fix the errors in the form");
        }
    };

    const getSocialMediaName = (key) => {
        const media = socialMedia.find(item => item.key === key);
        return media ? media.name : key; // Return key if no match is found
    };

    const socialMediaSvgs = {
        fb: <FacebookSvg />,
        insta: <InstaSvg />,
        linkedin: <LinkedinSvg />,
        twitter: <TwitterSvg  />,
        mail: <MailSvg />,
        facebook: <FacebookSvg />,
        instagram: <InstaSvg />,
      };
      
      const getSocialMediaSvg = (key) => {
        return socialMediaSvgs[key] || key;
      };



    const handleRemove = async (id) => {
        const social_media_id = id;
        const data = {
            token,
            social_media_id,
            user_id
        };
        const result = await SocialMediaActionRemove(data);
        if (result.success) {
            toast.success("Removed successfully.");
            getSocialUser();
        } else {
            toast.error(result.message);
        }
    };

    return (
        <Card>
            <CardBody>
                <div className="sm:p-[20px]">
                    <div>
                        <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                            Social Media
                        </h3>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="flex justify-between gap-3 sm:items-end border-b border-[#F7F7F7] pb-[20px] flex-col sm:flex-row">

                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_76px)]">
                                <label className="text-[#474040] text-base">
                                    Social Media
                                </label>
                                <div>
                                    <select
                                        name="type"
                                        className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                        value={socialMediaForm.type.value}
                                        onChange={handleFieldChange("type")}
                                        onBlur={handleBlur("type")}
                                    >
                                        <option value="">Choose social media</option>
                                        {socialMedia && socialMedia.map((item, index) => (
                                            <option key={index} value={item?.key}>{item?.name}</option>
                                        ))}
                                    </select>
                                    {socialMediaForm.type.hasError && (
                                        <div className="error-msg text-red-600 mt-1 text-sm">
                                            {socialMediaForm.type.error}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_76px)]">
                                <label className="text-[#474040] text-base">
                                    Url
                                </label>
                                <div>
                                    <input
                                        name="url"
                                        type="text"
                                        className={`w-full border py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey ${socialMediaForm.url.touched && socialMediaForm.url.error ? "border-red-600" : "border-[#9b9898]"}`}
                                        placeholder="Write your URL"
                                        value={socialMediaForm.url.value}
                                        error={socialMediaForm.url.error}
                                        onChange={handleFieldChange("url")}
                                        onBlur={handleBlur("url")}
                                    />

                                    {socialMediaForm.url.touched && socialMediaForm.url.error && (
                                        <div className="error-msg text-red-600 mt-1 text-sm">
                                            {socialMediaForm.url.error}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="pb-[6px]">
                                <Button
                                    type='submit'
                                    radius="full"
                                    className="bg-orangeprimary text-white text-[14px]"
                                >
                                    Add
                                </Button>
                            </div>
                        </div>
                    </form>
                     
                    <div className="flex items-selected social-items-selected flex-wrap">
                        {items.map((item) => (
                            <SocialMediaItem
                                key={item?.id}
                                nickname={item?.nickname}
                                id={item?.id}
                                type={getSocialMediaName(item?.type)}
                                onRemove={handleRemove}
                                svg={getSocialMediaSvg(item?.type)}
                            />
                        ))}
                    </div>
                    <div className="pt-[30px]">
                        <h3 className="box-title text-bluesecondary text-[16px] pb-[15px] font-semibold">
                            Refer a friend
                        </h3>
                        <div className="flex flex-col gap-2 pt-3 w-full">
                            <label className="text-[#474040] text-base">
                                Your personal referral link
                            </label>
                            <div>
                                <input
                                    type="text"
                                    className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                                    placeholder="https://legalkonnect.com/refer/1aedb8d9dc4751e229a335e371db8058"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="share-wrap pt-3">
                        <span>Share your link</span>
                        <div className="share-items flex items-center gap-2 pt-3">
                            <Link
                                href="#"
                                className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                            >
                                <MailSvg />
                            </Link>
                            <Link
                                href="#"
                                className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                            >
                                <FacebookSvg />
                            </Link>
                            <Link
                                href="#"
                                className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                            >
                                <LinkedinSvg />
                            </Link>
                            <Link
                                href="#"
                                className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                            >
                                <InstaSvg />
                            </Link>
                            <Link
                                href="#"
                                className="w-[30px] h-[30px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]"
                            >
                                <TwitterSvg />
                            </Link>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default SocialMediaCard;
