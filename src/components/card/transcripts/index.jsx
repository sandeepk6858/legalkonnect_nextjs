'use client'
import React, { useState } from "react";
import { Avatar, LinkIcon } from "@nextui-org/react";
import Link from "next/link";
import HeartSvg from "@/components/Icons/heartSvg";
import GravelSvg from "@/components/Icons/gravelSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import SocialPopup from "@/components/socialPopup";
import LocationSvg from "@/components/Icons/locationSvg";

import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

const TranscriptCard = ({ showDiv, showDivCount }) => {
    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    return (

        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)]  border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 shadow-md box-border ">
            <CardHeader className="w-full">
                <div className="p-5 flex flex-wrap ">
                    <div className="text-sm font-normal flex ">
                        <span>Posted 08-07-2022 09:44:05</span>
                    </div>
                    <Link href="#" className="text-base font-normal"> Transcript test</Link>
                </div>

            </CardHeader>

            <Divider className="bg-lightgrey" />
            <div className="p-5 flex flex-wrap text-center">
                <span className="text-sm font-medium text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-2 "> Criminal</span>
            </div>
            <div className="flex flex-wrap" style={{ display: showDiv ? 'block' : 'none' }}>
                <Divider className="bg-lightgrey nn" />

                <div className="p-5 flex flex-wrap">
                    <span className="flex flex-wrap" >jkhkljgh hjvfhgcf </span>
                </div>
                <Divider className="bg-lightgrey" />

            </div>

            <div className="p-5 flex flex-wrap" style={{ display: showDivCount ? 'block' : 'none' }}>

                <span className="text-sm font-semibold flex gap-1">
                    <LocationSvg width={`18px`} height={`18px`} fill={`blackcolor`} stroke={`fill-current blackcolor`} />
                    1004 9th Ave N, Texas City, TX 77590, United States
                </span>

            </div>
            <Divider className="bg-lightgrey" />


            <CardBody className="p-5">

                <div className="flex flex-wrap justify-between ">
                    <div className="flex">
                        <b className="font-semibold text-blueprimary">10$</b>
                    </div>
                    <div className="flex gap-2">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <HeartSvg width={`20px`} height={`20px`} fill={`orangeprimary`} stroke={`fill-orangeprimary`} />
                    </div>
                </div>

            </CardBody>

            <Divider className="bg-lightgrey" />

            <CardFooter className="p-5 flex flex-wrap justify-between items-center ">

                <div className="flex gap-1 py-2 relative">
                    <span className="border-2 border-lightgrey bg-gray-200 rounded-full w-2 h-2 absolute top-[10px] left-[25px] z-[5]"></span>
                    <Avatar className="w-8 h-8" src="https://legalkonnect.com/img/no_avatar.jpg" />
                    <Link href="#" className="flex items-center gap-1 ">
                        <p className="text-sm font-normal">Demo Account</p>
                    </Link>

                </div>
                <div className="flex py-2">
                    <div className="flex gap-2 items-center">
                        <Link href="#" className="flex flex-wrap items-center gap-1 ">
                            <GravelSvg width={`16px`} height={`16px`} fill={`fill-blueprimary`} />
                            <span className="text-blueprimary" >5</span>

                        </Link>
                    </div>
                </div>

            </CardFooter>
        </Card>


    )
}
export default TranscriptCard;