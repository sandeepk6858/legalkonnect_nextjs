'use client'
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import HeartSvg from "@/components/Icons/heartSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import SocialPopup from "@/components/socialPopup";
import CheckSvg from "@/components/Icons/checkSvg";
import StarSvg from "@/components/Icons/starSvg";
import BacthSvg from "@/components/batchSvg";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardBody, CardFooter, Divider, fillheart } from "@nextui-org/react";

const SupportCard = ({ fillheart, showDiv, showDivCount }) => {

    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    return (
        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)]  border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 shadow-lg box-border">
            <Image className="w-full rounded-tr-[20px] rounded-tl-[20px]" style={{ display: showDiv ? 'block' : 'none' }}
                width={100}
                height={100}
                alt="cardimage"
                src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
            />
            <CardHeader className="px-5 relative w-full">
                <Link href="users/profile/671" className="flex justify-between cursor-pointer">
                    <div className="flex relative">
                        <span className="border-2 border-white bg-gray-200 rounded-full w-4 h-4 absolute top-[8px] left-[52px] z-[5]"></span>
                        <Avatar className="w-[68px] h-[68px]" src="https://legalkonnect.com/img/no_avatar.jpg" />
                    </div>
                    <div className="flex flex-col px-2 text-blackcolorcolor text-lg fill-lightgrey">
                        <p className="text-base">para legal</p>
                        <div className="flex items-center mt-[5px] gap-[10px]">
                            <p className="text-sm">Paralegal/Support</p>
                            <BacthSvg className="ml-[10px]" width={`20px`} height={`20px`} color="fill-parrotgreen" />
                        </div>
                        <div className="flex ">
                            <StarSvg width={`18px`} height={`18px`} color="fill-silver hover:fill-current text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-silver hover:fill-current text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-silver hover:fill-yellow text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-silver hover:fill-yellow text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-silver hover:fill-yellow text-yellow" />
                        </div>

                    </div>
                </Link>
            </CardHeader>
            <CardBody className="p-0">
                <Divider className="bg-lightgrey" />
                <Link href="users/profile/671" className="p-5 cursor-pointer">
                    <div className="flex">
                        <h6 className="text-gray text-sm">Fee Accepted:</h6>
                        <p className="pl-1 ">N/A</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Rate:</h6>
                        <p className="pl-1">$</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Country:</h6>
                        <p className="pl-1">N/A</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">State:</h6>
                        <p className="pl-1">N/A</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Country:</h6>
                        <p className="pl-1">N/A</p>
                    </div>
                </Link>
                <Divider className="bg-lightgrey" />
            </CardBody>
            <CardFooter className="flex flex-col px-5">
                <Link href="users/profile8461">
                    <div className="flex justify-between  w-full">
                        <div className="flex ">
                            <h5 className="text-sm font-bold">?</h5>
                            <p className="text-darkgray pl-1 text-sm">yrs experience</p>
                        </div>
                        <div className="flex ">
                            <h5 className="text-sm font-bold">$0</h5>
                            <p className="text-darkgray pl-1 text-sm">earned</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <h5 className="text-sm font-bold">$0</h5>
                        <p className="text-darkgray pl-1 text-sm">earned</p>
                    </div>
                </Link>
                <div className="flex justify-between py-2 mt-[20px]  w-full">
                    <div className="flex">
                        <CheckSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`}  />
                        <span className="text-sm font-bold pl-1" style={{ display: showDivCount ? 'block' : 'none' }}>0</span><p className="text-gray-600 pl-1 text-sm">jobs done</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <Link href="/account/favorite/8461">
                        <HeartSvg width={`20px`} height={`20px`} fill={fillheart ? `fill-${fillheart}` : "fill-transparent"} hover={`hover:fill-orangeprimary`} stroke={`stroke-orangeprimary`} /></Link>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
export default SupportCard;