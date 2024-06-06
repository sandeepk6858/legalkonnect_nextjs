'use client'
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import HeartSvg from "@/components/Icons/heartSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import SocialPopup from "@/components/socialPopup";
import CheckSvg from "@/components/Icons/checkSvg";
import StarSvg from "@/components/Icons/starSvg";
import BacthSvg from "@/components/batchSvg";

import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

const SupportCard = () => {

    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    return (
        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)]  border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 shadow-lg box-border">
            <CardHeader className="px-5 relative w-full">
                <div className="flex justify-between cursor-pointer">
                    <div className="flex relative">
                        <span className="border-2 border-white bg-lightgray rounded-full w-4 h-4 absolute top-[8px] left-[52px] z-[5]"></span>
                        <Avatar className="w-[68px] h-[68px]" src="https://legalkonnect.com/img/no_avatar.jpg" />
                    </div>
                    <div className="flex flex-col px-2 text-blackcolorcolor text-lg">
                        <p className="text-base">para legal</p>
                        <p className="text-sm">Paralegal/Support</p>
                        <div className="flex py-1">
                            <StarSvg width={`18px`} height={`18px`} color="fill-lightgray hover:fill-current text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-lightgray hover:fill-current text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-lightgray hover:fill-current text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-lightgray hover:fill-current text-yellow" />
                            <StarSvg width={`18px`} height={`18px`} color="fill-lightgray hover:fill-current text-yellow" />
                            <BacthSvg width={`20px`} height={`20px`} fill={`green`} />
                        </div>
                        
                    </div>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <Divider className="bg-lightgrey" />
                <div className="p-5 cursor-pointer">
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
                </div>
                <Divider className="bg-lightgrey" />
            </CardBody>
            <CardFooter className="flex flex-col px-5">
                <div className="flex justify-between cursor-pointer w-full">
                    <div className="flex ">
                        <h5 className="text-sm font-bold">?</h5>
                        <p className="text-darkgray pl-1 text-sm">yrs experience</p>
                    </div>
                    <div className="flex ">
                        <h5 className="text-sm font-bold">$0</h5>
                        <p className="text-darkgray pl-1 text-sm">earned</p>
                    </div>
                </div>
                <div className="flex justify-between py-2 cursor-pointer w-full">
                    <div className="flex">
                        <CheckSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} />
                        <span className="text-sm font-bold pl-1">0</span><p className="text-gray-600 pl-1 text-sm">jobs done</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <HeartSvg width={`20px`} height={`20px`} fill={`fill-transparent`} hover={`hover:fill-orangeprimary`} stroke={`stroke-orangeprimary`} />
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
export default SupportCard;