'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProfileDetails from "../profileDetails";
import UserProfile from "@/actions/user/profile";
import { useSession } from '@/context/SessionContext';
import { toast } from 'react-hot-toast';
import { UserRole } from "@/components/utils/roles";
import { useRouter } from "next/navigation";
import UserSvg from "@/components/Icons/user";
import CheckSvg from "@/components/Icons/checkSvg";
import { UserRating } from "@/components/utils/functions";

const UserProfileCard = () => {
    const session = useSession();
    const [profileData, setProfileData] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const data = {
                    token: session?.user?.token,
                    id: session?.user?.userId
                };

                const result = await UserProfile(data);
                if (result.success) {
                    setProfileData(result?.data[0]);
                } else {
                    toast(result.message);
                }
            } catch (err) {
                console.error("An error occurred:", err); // Log unexpected errors
                toast("An unexpected error occurred.");
            }
        };

        fetchProfileData();
    }, [router]); // Add session as dependency



    const HandelRole = (roleKey) => {
        const roleObject = UserRole[roleKey];
        return roleObject && roleObject.name;
    };

    return (
        <div className="w-full max-w-[1250px] m-[auto] flex-col lg:justify-center items-center lg:items-start lg:flex-row flex gap-3 mt-16 pb-8">
            <div className="card_item attorney_card shadow-customSec p-[20px] h-[300px] w-[100%] max-w-[400px] lg:w-[30%]">
                <div className="card_header flex gap-4">
                    <div className="img_wrpr_wrpr relative">
                        <span className="online_status online block absolute bg-[#14CE80] border border-white w-[12px] h-[12px] rounded-[50%] right-[0] left-[50px]"></span>
                        <div className="img_wrpr">
                            {profileData && profileData?.avatar ? <img
                                src={profileData?.avatar}
                                alt=""
                                className="w-[70px] h-[70px]"
                            /> : <UserSvg />}
                        </div>
                    </div>
                    <div className="right_info">
                        <Link href="#" className="attorney_name text-[16px]">
                            {profileData && profileData?.first_name + ' ' + profileData?.last_name}
                        </Link>
                        <div className="attorney_verif text-[14px]">
                            <span>{profileData && HandelRole(profileData?.role?.name)}</span>
                        </div>
                        <div className="stars_rating_row">
                            <div
                                className="Stars flex"
                                aria-label="Rating of this product is 2.3 out of 5."
                            >
                                <UserRating rating={profileData?.rating[0]?.rating ?? 0} />
                                <span className="stars_rating_number pl-1"> {profileData?.rating[0]?.rating ?? 0}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="card_row flex justify-between border border-[#F9F9F9] py-2">
                    <span className="card_price text-bluesecondary text-[14px]">
                        <b> {profileData && profileData?.rate}$ {profileData && profileData?.role?.name}</b> / {profileData && profileData?.fee_type}
                    </span>
                    <span className="card_location text-[14px]">{profileData && profileData?.address}</span>
                </div>
                {profileData &&
                    <div className="card_row border-b py-4 border-[#F9F9F9]">
                     {profileData?.specialization.map((item, index) => {
                            item && item != null ? (
                                <div className="card_tags hover:bg-[#1359C3] hover:text-white rounded-[50px] px-[21px] py-[5px] text-[14px] text-center text-bluesecondary bg-[#EAF1FD] block max-w-[92px]">
                                    <Link key={index} href="#" className="card_tag">
                                        {item}
                                    </Link>
                                </div>
                            ) : ('')
                        })}
                    </div>
                }
                <div className="card_row">
                    <ul className="attorney_card_footer flex flex-wrap justify-between pt-5">
                        <li className="w-[50%] mb-[10px] text-[13px]">
                            {profileData?.experience != null || profileData?.experience != null ?
                                <b>{profileData.experience} yrs experience</b>
                                : <b>0-1 yrs experience</b>
                            }
                        </li>
                        <li className="cases_li flex items-center w-[50%] mb-[10px] gap-1 text-[13px]">
                            <CheckSvg width={`16px`} height={`16px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} />
                            <b>
                                {profileData && profileData?.cases > 10 ?
                                    `10-${profileData?.cases}`
                                    :
                                    `0-${profileData?.cases}`
                                }

                            </b> cases
                        </li>
                        <li className="w-[50%] mb-[10px] text-[13px]">
                            <b>$ {profileData && profileData?.rate}</b> earned
                        </li>
                    </ul>
                </div>
            </div>
            <ProfileDetails profileData={profileData} />
        </div>
    )
}
export default UserProfileCard;