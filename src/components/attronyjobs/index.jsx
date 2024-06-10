'use client'
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import HeartSvg from "@/components/Icons/heartSvg";
import GravelSvg from "@/components/Icons/gravelSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import CalendarSvg from "@/components/Icons/calendarSvg";
import SocialPopup from "@/components/socialPopup";

import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

const AttronyJobsCard = () => {
    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    return (
        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)] border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105">
            <CardHeader className=" p-0 relative shadow-md w-full">
                <Image
                    alt="nextui logo"
                    className="w-screen max-w-full h-64 rounded-b-none"
                    height={250}
                    layout="fill"
                    src="https://legalkonnect.com/storage/specializations/Bankruptcy.png"
                />
                <span className="absolute top-3 right-3 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 z-10">Bankruptcy</span>
                <div className="absolute w-full h-12 pl-5 bottom-0 left-0 flex gap-2 z-10 items-center bg-gradient-to-b from-transparent to-gray-900/50">
                    <CalendarSvg cuClass={`flex`} width={`16px`} height={`16px`} fill={`white`} />
                    <span className="text-white"> Project Length: <b>1 - 3 weeks</b></span>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <p className="text-base font-semibold py-4 px-5">Job Heading</p>
                <div className="pb-5 px-5 flex justify-between">
                    <p className="text-base">Posted 2 years ago</p>
                    <div className="flex pl-10 gap-1 cursor-pointer relative z-50">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <HeartSvg width={`20px`} height={`20px`} fill={`fill-transparent`} hover={`hover:fill-orangeprimary`} stroke={`stroke-orangeprimary`} />
                    </div>
                </div>
                <Divider className="bg-lightgrey" />
                <div className="p-5 cursor-pointer">
                    <div className="flex">
                        <h6 className="text-gray text-sm">Offer: </h6>
                        <p className="pl-1">90</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Country: </h6>
                        <p className="pl-1 ">United States</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">State: </h6>
                        <p className="pl-1">Arizona</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">County: </h6>
                        <p className="pl-1"> La Paz County</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Court Address: </h6>
                        <p className="pl-1">Park road,civil line</p>
                    </div>
                </div>
                <Divider className="bg-lightgrey" />
                <p className="p-5 text-base"> This is job description</p>

            </CardBody>

            <CardFooter className="flex justify-between justify-items-center px-5">
                <div className="flex py-2 relative">
                    <Link href="#">
                        <span className="border-2 border-lightgray bg-lightgray rounded-full w-3 h-3 absolute top-[0.4rem] right-[0.5rem] z-[5]"></span>
                        <Avatar className="w-12 h-12 " src="https://legalkonnect.com/img/no_avatar.jpg" />
                    </Link>
                </div>
                <div className="flex gap-4 py-2">
                    <p className="text-base">Rating: 3</p>
                    <div className="flex gap-2 items-center">
                        <GravelSvg width={`16px`} height={`16px`} fill={`fill-blueprimary`} />
                        <p className="text-base font-semibold text-blueprimary" >3</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
       
    )
}
export default AttronyJobsCard;