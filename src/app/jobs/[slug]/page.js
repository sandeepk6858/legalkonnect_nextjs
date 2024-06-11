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
import Attachment from "@/components/Icons/attachment";
import StarSvg from "@/components/Icons/starSvg";
const Jobslug = () => {
    const [socialPopupT, setSocialPopupT] = useState(false);
    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }
    return (
        <div>
        <JobSlider/>
        <div className=" mt-12 pt-10 border-t border-lightergray pb-10 ">
            <div className="w-full px-4 box-border z-10 flex justify-between gap-5 max-w-[1250px] mx-auto flex-col lg:flex-row">
                <div className=" w-full lg:max-w-[333px] shadow-[-1px_2px_8px_0px_#D7D7D7] w-full rounded-[3px] h-fit">
                    <div className="p-4">
                        <p className="text-base text-blackcolor">Heading Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-4 sm:p-5">
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
                    <div className="p-4 sm:p-5 flex gap-3 flex-wrap">
                        <Button radius="full" className="text-sm bg-lightblue hover:bg-blueprimary hover:opacity-100 hover:text-white text-primary px-8 " > Corporate </Button>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-4 sm:p-5 ">
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
                    <div className="p-4 sm:p-5 flex justify-between items-center">
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
                    <div className="p-4 sm:p-5">
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
                    <div className="p-4 sm:p-5">
                        <span className="flex justify-around w-24 rounded-sm items-center p-1 border-0 bg-lightgrey">
                            <Link href="#">
                                <LocationstrokeSvg width={`18px`} height={`18px`} className="fill-[red]"/>
                            </Link>
                            <p className="text-[13px]">Mohali</p>
                        </span>
                    </div>
                </div>
                <div className="shadow-[-1px_2px_8px_0px_#D7D7D7] rounded-[3px] w-full">
                    <div className="py-3 px-4 lg:px-5 flex flex-wrap gap-3 lg:gap-10">
                        <div className="flex">
                            <Button color="bg-orangeprimary" className="flex gap-2 items-center text-base border rounded-full py-5 px-3  text-white bg-orangeprimary hover:bg-hovergray " >
                            <ArrowSvg width={`20px`} height={`20px`} /> 
                            Back to Search </Button>
                        </div>
                        <div className="flex gap-3 items-center ">
                           <div className="absolute cursor-pointer">
                           <SocialPopup socialPopupT={socialPopupT} /> 
                           <ShareSvg  width={`20px`} height={`20px`} fill={`fill-grey`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} /> 
                           </div>
                            <Button color="bg-orangeprimary" className=" text-base border rounded-full py-5 text-white bg-orangeprimary hover:bg-hovergray ml-10" >
                            <FlagSvg width={`18px`} height={`18px`} className="fill-white" /> 
                            Flag </Button>
                        </div>
                    </div>
                    <hr className="w-full text-lightergray"></hr>
                    <div className="p-4 lg:p-8">
                        <div className="mb-5">
                            <p className=" text-bluesecondary font-semibold mb-1">General information</p>
                            <p className="text-gray">job description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                        </div>
                        <div className="mb-5">
                            <p className=" text-bluesecondary font-semibold mb-3">Attached documents</p>
                            <div className="flex flex-wrap gap-2.5">
                                <Link href="#" className="flex gap-2 items-center bg-lightGreen p-2.5 w-[48%] text-base text-textgreen">
                                    <Attachment/> pepsi.png
                                </Link>
                                <Link href="#" className="flex gap-2 items-center bg-lightGreen p-2.5 w-[48%] text-base text-textgreen">
                                    <Attachment/> pepsi.png
                                </Link>
                                <Link href="#" className="flex gap-2 items-center bg-lightGreen p-2.5 w-[48%] text-base text-textgreen">
                                    <Attachment/> pepsi.png
                                </Link>
                                <Link href="#" className="flex gap-2 items-center bg-lightGreen p-2.5  w-[48%] text-base text-base text-textgreen">
                                    <Attachment/> pepsi.png
                                </Link>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className=" text-bluesecondary font-semibold mb-3">Preferred qualifications</p>
                            <div className="flex flex-wrap gap-2.5">
                               <div className="bg-lightgrey p-2.5 flex items-center gap-1 w-full lg:w-[32%]">
                                 <p className="text-[15px]">Talent Type:</p>
                                 <p className="opacity-[0.7] text-[15px]">Law Firm</p>
                               </div>
                               <div className="bg-lightgrey p-2.5 flex items-center gap-1 w-full lg:w-[32%]">
                                 <p className="text-[15px]">Location:</p>
                                 <p className="opacity-[0.7] text-[15px]">U.S. only, Worldwide</p>
                               </div>
                               <div className="bg-lightgrey p-2.5 flex items-center gap-1 w-full lg:w-[32%]">
                                 <p className="text-[15px]">Education:</p>
                                 <p className="opacity-[0.7] text-[15px]">xyz</p>
                               </div>
                               <div className="bg-lightgrey p-2.5 flex items-center gap-1 w-full lg:w-[32%]">
                                 <p className="text-[15px]">Experience:</p>
                                 <p className="opacity-[0.7] text-[15px]">5 yrs - 3 yrs</p>
                               </div>
                               <div className="bg-lightgrey p-2.5 flex items-center gap-1 w-full lg:w-[32%]">
                                 <p className="text-[15px]">Done cases:</p>
                                 <p className="opacity-[0.7] text-[15px]">50 and more</p>
                               </div>
                               <div className="bg-lightgrey p-2.5 flex items-center gap-1 w-full lg:w-[32%]">
                                 <BacthSvg width={`18px`} height={`18px`} />
                                 <p className="text-[15px]">Certified Attorney</p>
                                
                               </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className=" text-bluesecondary font-semibold mb-3">Orders</p>
                            <div className="flex flex-wrap gap-2.5 p-4 sm:p-5 border-1 border-lightblue">
                                <div className="w-full">
                                    <div className="flex justify-between gap-y-3 sm:gap-y-0 sm:gap-x-3 flex-col sm:flex-row">
                                        <div className="flex justify-start cursor-pointer gap-x-2 items-center">
                                            <div className="flex relative">
                                                <span className="border-2 border-white bg-gray-200 rounded-full w-[10px] h-[10px] absolute top-[8px] z-[5] right-[-2px] top-[1px]"></span>
                                                <Avatar className="w-[30px] h-[30px]" src="https://legalkonnect.com/img/no_avatar.jpg" />
                                            </div>
                                            <Link href="users/profile/671" className="text-sm">Attorney Attorneys</Link>
                                        </div>
                                        <div className="bg-statusbg text-parrotgreen py-1.5 px-2.5 text-sm w-fit">Pending</div>
                                    </div>
                                    <div className="flex justify-between gapx-3 mt-3">
                                        <p className="text-base font-light">Fixed price $0</p>
                                        <p className="text-base">1 year ago</p>
                                    </div>
                                    <Link href="/orders/info/117" className="font-normal text-white bg-orangeprimary rounded-full py-2 px-4 mt-3 block max-w-[150px] text-center">View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className=" text-bluesecondary font-semibold mb-3">Clients recent history</p>
                            <div>
                                <div className="p-4 sm:p-5 border-1 border-lightblue mb-4">
                                   <div>
                                        <div className="flex justify-between flex-col gap-y-3 sm:gap-y-0 sm:flex-row">
                                            <div className="flex gap-x-2 items-start max-w-[567px]">
                                                <p className="text-base text-blackcolor font-semibold">test heading history</p>
                                                <ul className="flex">
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`gray`} /></li>
                                                </ul>
                                            </div>
                                            <div>
                                            <div className="bg-statusbg text-parrotgreen py-1.5 px-2.5 text-sm w-fit">Job in Progress</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 justify-between mt-4 flex-col sm:flex-row">
                                            <p className="max-w-[567px] text-base">
                                            et wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd f
                                            </p>
                                            <div className="flex justify-between flex-row sm:flex-col items-start ">
                                                <p className="text-base whitespace-nowrap">2 weeks ago</p>
                                                <p className="text-base whitespace-nowrap">Fixed Price <b className="font-semibold">$</b></p>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div className="p-4 sm:p-5 border-1 border-lightblue mb-4">
                                   <div>
                                        <div className="flex justify-between flex-col gap-y-3 sm:gap-y-0 sm:flex-row">
                                            <div className="flex gap-x-2 items-start max-w-[567px]">
                                                <p className="text-base text-blackcolor font-semibold">test heading history</p>
                                                <ul className="flex">
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`gray`} /></li>
                                                </ul>
                                            </div>
                                            <div>
                                            <div className="bg-statusbg text-parrotgreen py-1.5 px-2.5 text-sm w-fit">Job in Progress</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 justify-between mt-4 flex-col sm:flex-row">
                                            <p className="max-w-[567px] text-base">
                                            et wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd f
                                            </p>
                                            <div className="flex justify-between flex-row sm:flex-col items-start ">
                                                <p className="text-base whitespace-nowrap">2 weeks ago</p>
                                                <p className="text-base whitespace-nowrap">Fixed Price <b className="font-semibold">$</b></p>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div className="p-4 sm:p-5 border-1 border-lightblue mb-4">
                                   <div>
                                        <div className="flex justify-between flex-col gap-y-3 sm:gap-y-0 sm:flex-row">
                                            <div className="flex gap-x-2 items-start max-w-[567px]">
                                                <p className="text-base text-blackcolor font-semibold">test heading history</p>
                                                <ul className="flex">
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`gray`} /></li>
                                                </ul>
                                            </div>
                                            <div>
                                            <div className="bg-statusbg text-parrotgreen py-1.5 px-2.5 text-sm w-fit">Job in Progress</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 justify-between mt-4 flex-col sm:flex-row">
                                            <p className="max-w-[567px] text-base">
                                            et wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd f
                                            </p>
                                            <div className="flex justify-between flex-row sm:flex-col items-start ">
                                                <p className="text-base whitespace-nowrap">2 weeks ago</p>
                                                <p className="text-base whitespace-nowrap">Fixed Price <b className="font-semibold">$</b></p>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div className="p-4 sm:p-5 border-1 border-lightblue mb-4">
                                   <div>
                                        <div className="flex justify-between flex-col gap-y-3 sm:gap-y-0 sm:flex-row">
                                            <div className="flex gap-x-2 items-start max-w-[567px]">
                                                <p className="text-base text-blackcolor font-semibold">test heading history</p>
                                                <ul className="flex">
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`orange`} /></li>
                                                    <li><StarSvg width={`18px`} height={`18px`} fill={`gray`} /></li>
                                                </ul>
                                            </div>
                                            <div>
                                            <div className="bg-statusbg text-parrotgreen py-1.5 px-2.5 text-sm w-fit">Job in Progress</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 justify-between mt-4 flex-col sm:flex-row">
                                            <p className="max-w-[567px] text-base">
                                            et wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd fet wear erwerrcqc wefcvxc jdfjksdf sdf dlfkdfljkdsd jkdfkljdf lkjdfklsdfd f
                                            </p>
                                            <div className="flex justify-between flex-row sm:flex-col items-start ">
                                                <p className="text-base whitespace-nowrap">2 weeks ago</p>
                                                <p className="text-base whitespace-nowrap">Fixed Price <b className="font-semibold">$</b></p>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                               
                                
                               
                                <Button className="bg-lightgrey  text-sm rounded-full mt-4 hover:text-white hover:bg-blueprimary">View more <b>(20)</b></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Jobslug;