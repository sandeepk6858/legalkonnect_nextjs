'use client'
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import HeartSvg from "@/components/Icons/heartSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import SocialPopup from "@/components/socialPopup";
import CheckSvg from "@/components/Icons/checkSvg";
import StarSvg from "@/components/Icons/starSvg";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Divider, fillheart } from "@nextui-org/react";
import Image from "next/image";
import BacthSvg from "@/components/batchSvg";
import { isPlanActive } from "../utils/helper/helper";
import { userfavoriteToggler } from "@/actions/UsersByRole/getuserdata";

const UserComponent = ({ fillheart, showDiv, showDivCount, data, path }) => {

    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {     
        setSocialPopupT(!socialPopupT);
    }
    const handleFavorite = async (model_id) => {
        const res = await userfavoriteToggler(model_id,path, "account/favorites/qualified-attorney");
        console.log(res);
    }
    

    return (
        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)]  border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 shadow-lg box-border">
            <Image className="w-full rounded-tr-[20px] rounded-tl-[20px]" style={{ display: showDiv ? 'block' : 'none' }}
                width={100}
                height={100}
                alt="cardimage"
                src={data?.graphics[0]?.url ? data?.graphics[0]?.url : "https://dummyimage.com/600x400/000/fff"}
            />
            <CardHeader className="px-5 relative w-full">
                <div className="flex justify-between">
                    <div className="flex relative">
                        {
                            data?.isOnline ?
                                <span className="border-2 border-green-500 bg-green-500 rounded-full w-4 h-4 absolute top-[8px] left-[52px] z-[5]"></span>
                                :
                                <span className="border-2 border-white bg-gray-200 rounded-full w-4 h-4 absolute top-[8px] left-[52px] z-[5]"></span>
                        }
                        <Avatar className="w-[68px] h-[68px]" src={(data.avatar[0]?.url) ? data.avatar[0]?.url : "https://legalkonnect.com/img/no_avatar.jpg"} />
                    </div>
                    <div className="flex flex-col px-2 text-blackcolorcolor text-lg fill-lightgrey">
                        <Link href={`/users/profile/${data.id}`} className="text-base">{data.first_name + " " + data.last_name}</Link>
                        <div className="flex items-center mt-[5px] gap-[10px]">
                            <p className="text-sm">{data.role.name}</p>
                            {
                                isPlanActive(data.subscriptionPlans[0]?.id, data.subscriptionPlans[0]?.user_subscriptions?.expire_date) &&
                                <BacthSvg className="ml-[10px]" width={`20px`} height={`20px`} color="fill-parrotgreen" />
                            }
                        </div>
                        <div className="flex ">
                            <StarSvg width={`18px`} height={`18px`} color={`fill-silver ${data.ratings[0]?.rating >= 1 ? 'fill-current text-yellow' : ''}`} />
                            <StarSvg width={`18px`} height={`18px`} color={`fill-silver ${data.ratings[0]?.rating >= 2 ? 'fill-current text-yellow' : ''}`} />
                            <StarSvg width={`18px`} height={`18px`} color={`fill-silver ${data.ratings[0]?.rating >= 3 ? 'fill-current text-yellow' : ''}`} />
                            <StarSvg width={`18px`} height={`18px`} color={`fill-silver ${data.ratings[0]?.rating >= 4 ? 'fill-current text-yellow' : ''}`} />
                            <StarSvg width={`18px`} height={`18px`} color={`fill-silver ${data.ratings[0]?.rating === 5 ? 'fill-current text-yellow' : ''}`} />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <Divider className="bg-lightgrey" />
                <div className="p-5">
                    <div className="flex">
                        <h6 className="text-gray text-sm">Fee Accepted:</h6>
                        <p className="pl-1 ">{data.userData.fee_type}</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Rate:</h6>
                        <p className="pl-1">${data.userData.rate}</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Country:</h6>
                        <p className="pl-1">{data.country}</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">State:</h6>
                        <p className="pl-1">{data.state}</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">County:</h6>
                        <p className="pl-1">{data.county}</p>
                    </div>
                </div>
                <Divider className="bg-lightgrey" />
            </CardBody>
            <CardFooter className="flex flex-col px-5">
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <div className="flex ">
                            <h5 className="text-sm font-bold">{data.userData.experience ? data.userData.experience : "N/A"}</h5>
                            <p className="text-darkgray pl-1 text-sm">yrs experience</p>
                        </div>
                        <div className="flex ">
                            <h5 className="text-sm font-bold">${data.userData.earned}</h5>
                            <p className="text-darkgray pl-1 text-sm">earned</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-2 mt-[20px]  w-full">
                    <div className="flex">
                        <CheckSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} />
                        <span className="text-sm font-bold pl-1" style={{ display: showDivCount ? 'block' : 'none' }}>0</span><p className="text-gray-600 pl-1 text-sm">jobs done</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <SocialPopup socialPopupT={socialPopupT} facebook_url={data.facebook_url} twitter_url={data.twitter_url} pintrest_url={data.pinterest_url} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <div onClick={() => handleFavorite(data.id)}>
                            {
                                data.favorite ?
                                    <HeartSvg width={`20px`} height={`20px`} fill={fillheart ? `fill-${fillheart}` : `fill-orangeprimary`} hover={`hover:fill-transparent`} stroke={`stroke-orangeprimary`} />
                                    :
                                    <HeartSvg width={`20px`} height={`20px`} fill={fillheart ? `fill-${fillheart}` : "fill-transparent"} hover={`hover:fill-orangeprimary`} stroke={`stroke-orangeprimary`} />
                            }
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
export default UserComponent;