"use client";
import React, { useState } from "react";
import FixedSvg from "@/components/Icons/fixedprice";
import Link from "next/link";
import { Button, Avatar } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";
import GravelSvg from "@/components/Icons/gravelSvg";
import HeartSvg from "@/components/Icons/heartSvg";
import ChatSvg from "@/components/Icons/chatsvg";
import JobSvg from "@/components/Icons/jobpostSvg";
import LocationstrokeSvg from "@/components/Icons/locationstrokeSvg";
import BacthSvg from "@/components/batchSvg";
import ArrowSvg from "@/components/Icons/arrowSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import SocialPopup from "@/components/socialPopup";
import FlagSvg from "@/components/Icons/flagSvg";
const Jobslug = () => {
    const [socialPopupT, setSocialPopupT] = useState(false);
    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }
    return (
        <div>
        <JobSlider/>
        <div className=" mt-12 pt-10 border-t border-lightergray">
            <div className="w-full px-4 box-border z-10 flex justify-between gap-5 max-w-[1250px] mx-auto">
                <div className="max-w-[333px] shadow-[-1px_2px_8px_0px_#D7D7D7] w-full rounded-[3px]">
                    <div className="p-4">
                        <p className="text-base text-blackcolor">Heading Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-5">
                        <div className="flex gap-1 text-sm">
                            <b >Fixed price</b>
                            <Link href="#">
                                <FixedSvg width={`20px`} height={`20px`} stroke={`blueprimary`} />
                            </Link>
                            <p className="text-sm">1 to 9 employees</p>
                        </div>
                        <p className="text-sm">Posted 1 years ago</p>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-5 flex gap-3 flex-wrap">
                        <Button radius="full" className="text-sm bg-lightblue hover:bg-blueprimary hover:opacity-100 hover:text-white text-primary px-8 " > Corporate </Button>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-5 ">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex gap-1">
                                <Link href="#">
                                    <GravelSvg width={`18px`} height={`18px`} fill={`fill-blueprimary`} />
                                </Link>
                                <span className="text-blueprimary text-[14px]" >0</span>
                            </div>
                            <div className="flex gap-1">
                                <Link href="#">
                                    <HeartSvg width={`20px`} height={`20px`} fill={`fill-orangeprimary`} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-5 flex justify-between items-center">
                        <div className="flex gap-2 items-center relative">
                            <span className="border-2 border-textgreen bg-textgreen rounded-full w-2 h-2 absolute top-[3px] left-[30px] z-[5]"></span>
                            <Avatar src="https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg" size="md" />
                            <Link href="#">
                                <p className="text-[14px]">Client Dev</p>
                            </Link>
                        </div>
                        <div className="flex">
                            <Link href="#">
                                <span className="flex justify-center items-center border border-lightgray rounded-full w-10 h-10 bg-textgreen ">
                                    <ChatSvg width={`23px`} height={`23px`} className="fill-white" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-5">
                        <div className="flex items-center">
                            <BacthSvg width={`18px`} height={`18px`} />
                            <p className="ml-3 text-[13px]">Payment method verified</p>
                        </div>
                        <div className="pt-5 flex gap-1 text-[13px]">
                            <Link href="#" className="mr-2 inline-block">
                                <JobSvg width={`18px`} height={`18px`} stroke={`blueprimary`} />
                            </Link>
                            <b>48</b>Jobs Posted
                        </div>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-5 ">
                        <span className="flex justify-around w-24 rounded-sm items-center p-1 border-0 bg-lightgrey">
                            <Link href="#">
                                <LocationstrokeSvg width={`18px`} height={`18px`} className="fill-[red]"/>
                            </Link>
                            <p className="text-[13px]">Mohali</p>
                        </span>
                    </div>
                </div>
                <div className="shadow-[-1px_2px_8px_0px_#D7D7D7] rounded-[3px] w-full">
                    <div className="py-3 px-5 flex flex-wrap gap-10">
                        <div className="flex">
                            <Button color="bg-orangeprimary" className="flex gap-2 items-center text-base border rounded-full py-5 px-3  text-white bg-orangeprimary hover:bg-hovergray " >
                            <ArrowSvg width={`20px`} height={`20px`} /> 
                            Back to Search </Button>
                        </div>
                        <div className="flex gap-3 items-center ">
                           <SocialPopup socialPopupT={socialPopupT} /> 
                            <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} /> 
                            <Button color="bg-orangeprimary" className=" text-base border rounded-full py-5 text-white bg-orangeprimary hover:bg-hovergray " >
                            <FlagSvg width={`18px`} height={`18px`} className="fill-white" /> 
                            Flag </Button>
                        </div>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="py-5 px-8">
                        <p className=" text-bluesecondary font-semibold">General information</p>
                        <p className="text-gray">test by sbtest1</p>
                        <p className="pt-2 text-bluesecondary font-semibold">Preferred qualifications</p>
                        <div className="flex justify-between py-2 gap-5">
                            <span className="flex px-1 w-56 h-10 font-light rounded-sm items-center border-0 bg-lightgrey p-1 ">
                                <b className="px-1 font-medium">Talent Type: </b>Attorney
                            </span>
                            <span className="flex px-1 w-56 h-10  rounded-sm items-center border-0 bg-lightgrey p-1">
                                <b className="px-1 font-medium">Location: </b>
                            </span>
                            <span className="flex px-1 w-56 h-10  rounded-sm items-center border-0 bg-lightgrey p-1">
                                <b className="px-1 font-medium">Education: </b>
                            </span>
                        </div>
                        <div className="flex justify-between py-5 gap-5">
                            <span className="flex px-1 w-56 h-10 font-light rounded-sm items-center border-0 bg-lightgrey p-1">
                                <b className="px-1 font-medium">Experience: </b>10 yrs and more
                            </span>
                            <span className="flex px-1 w-56 h-10 font-light rounded-sm items-center border-0 bg-lightgrey p-1">
                                <b className="px-1 font-medium">Done cases: </b>50 - 25
                            </span>
                            <span className="flex gap-2 px-1 w-56 h-10  rounded-sm items-center border-0 bg-lightgrey p-1">
                                <Link href="#">
                                {/* <BacthSvg width={`20px`} height={`20px`} /> */}
                                </Link>
                                <b className="px-1 font-medium">Certified Attorney </b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Jobslug;