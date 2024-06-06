'use client'
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import HeartSvg from "@/components/Icons/heartSvg";
import GravelSvg from "@/components/Icons/gravelSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import CalendarSvg from "@/components/Icons/calendarSvg";
import SocialPopup from "@/components/socialPopup";
import FixedSvg from "@/components/Icons/fixedprice";

import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

const FavoriteJobsCard = () => {
    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    return (
      
                <Card className="w-[calc(100%-25px)] md:w-[calc(50%-10px)] lg:w-[calc(25%-20px)] xl:w-[calc(25%-40px)] border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105">

            <CardHeader className=" p-0 relative shadow-md w-full">
                <Image
                    alt="nextui logo"
                    className="w-screen max-w-full h-64 rounded-b-none"
                    height={250}
                    layout="fill"
                    src="https://legalkonnect.com/storage/specializations/Bankruptcy.png"
                />
                <div className="absolute top-3 right-4 left-4 flex flex-wrap justify-end gap-2 h-40 overflow-y-auto z-10">
                <span className=" text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">Bankruptcy</span>
                
                </div>
                <div className="absolute w-full h-12 p-5 pb-10 bottom-0 left-0 flex gap-2 z-10 items-center bg-gradient-to-b from-transparent to-gray-900/50">
                    <CalendarSvg cuClass={`flex`} width={`16px`} height={`16px`} fill={`white`} />
                    <span className="text-white text-sm"> Project Length:</span>
                    <span className="text-white text-sm font-semibold">1 - 3 weeks</span>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <p className="text-base font-semibold py-4 px-5">Job Heading</p>
                <div className="pb-5 px-5 flex justify-between">
                    <p className="text-base">Posted 2 years ago</p>
                    <div className="flex gap-1 cursor-pointer relative z-50">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <HeartSvg width={`20px`} height={`20px`} fill={`fill-orangeprimary`} stroke={`stroke-orangeprimary`} />
                    </div>
                </div>
                <Divider className="bg-lightgrey" />
                <div className="px-5 py-2 flex gap-2 items-center cursor-pointer">
                    <b>Fixed price</b> 
                    <FixedSvg width={`18px`} height={`18px`} stroke={`blueprimary`}/>0
                    

                </div>
                <Divider className="bg-lightgrey" />
                <p className="p-5 text-base"> This is job description</p>

            </CardBody>

            <CardFooter className="flex justify-between justify-items-center px-5">
                <div className="flex items-center gap-1 py-2 relative">
                    <Link href="#">
                        <span className="border-2 border-lightgray bg-lightgray rounded-full w-3 h-3 absolute top-[0.4rem] right-[0.5rem] z-[5]"></span>
                        <Avatar className="w-12 h-12 " src="https://legalkonnect.com/img/no_avatar.jpg" />
                    </Link>
                    <p>Demo Account</p>
                </div>
                <div className="flex gap-4 py-2">
                    <div className="flex gap-2 items-center">
                        <GravelSvg width={`16px`} height={`16px`} fill={`fill-blueprimary`} />
                    </div>
                </div>
            </CardFooter>

            


        </Card>
    )
}
export default FavoriteJobsCard;