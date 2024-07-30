'use client'
import React, { useState } from "react";
import { Avatar, Button, LinkIcon } from "@nextui-org/react";
import Link from "next/link";
import HeartSvg from "@/components/Icons/heartSvg";
import GravelSvg from "@/components/Icons/gravelSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import CalendarSvg from "@/components/Icons/calendarSvg";
import SocialPopup from "@/components/socialPopup";
import FixedSvg from "@/components/Icons/fixedprice";
import CourtSvg from "@/components/courtaddress";

import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

<<<<<<< HEAD
const FavoriteJobsCard = ({ showDiv, showDivCount, data }) => {
=======
const FavoriteJobsCard = ({ showDiv, showDivCount, showCount }) => {
>>>>>>> cc03d1cf57dc9236b5040dc3dc5d415854b13a3c
    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    function diffForHumans(dateString) {
        const date = new Date(dateString); // Convert the input string to a Date object
        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };

        for (const [unit, value] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / value);
            if (interval >= 1) {
                return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
            }
        }
        return 'Just now';
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
                <div className="absolute top-3 right-4 left-4 flex flex-wrap justify-end gap-2 overflow-y-auto z-10">
                    <Link href="#" className="flex flex-wrap gap-1">
                        <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">Bankruptcy</span>
                    </Link>
<<<<<<< HEAD
                    <Link href="#">
                        <span className=" text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">Criminal</span>
                    </Link>
=======
                    
                    <Button className="text-lg font-semibold text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-sm h-7"> 2 more</Button>

                    {/* <Button className="text-lg font-semibold text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-sm h-7"> hide tags</Button> */}
                    
>>>>>>> cc03d1cf57dc9236b5040dc3dc5d415854b13a3c
                </div>
                <div className="absolute w-full h-12 p-5 pb-10 bottom-0 left-0 flex gap-2 z-10 items-center bg-gradient-to-b from-transparent to-gray-900/50">
                    <CalendarSvg cuClass={`flex`} width={`16px`} height={`16px`} fill={`white`} />
                    <span className="text-white text-sm"> Project Length:</span>
                    <span className="text-white text-sm font-semibold">1 - 3 weeks</span>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <Link href="#">
<<<<<<< HEAD
                    <p className="text-base font-bold py-4 px-5">{data.jobs.heading}</p>
=======
                    <p className="line-clamp-1 overflow-hidden text-lg font-semibold my-4 px-6">Job Heading</p>
>>>>>>> cc03d1cf57dc9236b5040dc3dc5d415854b13a3c
                </Link>
                <div className="pb-5 px-5 flex justify-between">
                    <p className="text-base">Posted {diffForHumans(data.jobs.created_at)}</p>
                    <div className="flex gap-1 cursor-pointer relative z-50">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <HeartSvg width={`20px`} height={`20px`} fill={`fill-orangeprimary`} stroke={`stroke-orangeprimary`} style={{ display: showCount ? 'block' : 'none' }}/>
                    </div>
                </div>
                <Divider className="bg-lightgrey" />
                <div className="py-2 px-5 flex flex-wrap" style={{ display: showDiv ? 'block' : 'none' }}>
                    <Link href="#">
                        <CourtSvg width={`18px`} height={`18px`} />
<<<<<<< HEAD
                        <p className="py-1 font-semibold">Court Address: {data.jobs.court_address}</p>
=======
                        <p className="py-1 font-medium text-base">Court Address: 300 E 26th St # 116A, Bryan, TX 77803, United States</p>
>>>>>>> cc03d1cf57dc9236b5040dc3dc5d415854b13a3c
                    </Link>

                </div>

                <Divider className="bg-lightgrey" />
                <div className="px-5 py-3 flex gap-2 items-center">
                    <b>{data.jobs.fixed_price}$</b>
                    <Link href="#">
                        <FixedSvg width={`18px`} height={`18px`} stroke={`blueprimary`} />
                    </Link>{data.jobs.hire_count}

                </div>
                <Divider className="bg-lightgrey" />
<<<<<<< HEAD
                <p className="p-5 text-base line-clamp-2">{data.jobs.description}</p>
=======
                <p className="my-4 px-5 text-base line-clamp-2"> This is job description</p>
                <Divider className="bg-lightgrey" />
>>>>>>> cc03d1cf57dc9236b5040dc3dc5d415854b13a3c

            </CardBody>

            <CardFooter className="flex flex-wrap justify-between justify-items-center px-5">
                <div className="flex flex-wrap items-center gap-1 py-2 relative">

                    <span className="border-2 border-lightgrey bg-gray-200 rounded-full w-3 h-3 absolute top-[7px] left-[27px] z-[5]"></span>
                    <Avatar className="w-12 h-12 " src="https://legalkonnect.com/img/no_avatar.jpg" />
                    <Link href="#" className="flex items-center gap-1 ">
                        <p>Demo Account</p>
                    </Link>

                </div>
                <div className="flex gap-4 py-2">
                    <div className="flex gap-2 items-center">
                        <Link href="#" className="flex items-center gap-1 ">
                            <GravelSvg width={`16px`} height={`16px`} fill={`fill-blueprimary`} />
                            <span className="text-blueprimary" style={{ display: showDivCount ? 'block' : 'none' }}>0</span>

                        </Link>
                    </div>
                </div>
            </CardFooter>

        </Card>
    );
};
export default FavoriteJobsCard;