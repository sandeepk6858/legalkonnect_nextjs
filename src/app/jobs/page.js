'use client';
import React from "react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import GavelSvg from "@/components/Icons/gavelSvg";
import StarSvg from "@/components/Icons/starSvg";
import CheckSvg from "@/components/Icons/checkSvg";
import ShareSvg from "@/components/Icons/shareSvg";

const JobsPage = () => {
    return (
        <div className="w-full  m-[auto] px-8 py-12 z-10 flex flex-wrap flex-row flex-col-2 gap-5">
            <div className="border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 ">
                <div className="pt-5 px-3">
                    <div className="flex gap-4 cursor-pointer relative">
                        <a href="#">
                            <span className="border-2 border-lightgray bg-lightgray rounded-full w-3 h-3 absolute top-[5px] left-[54px] z-[5]"></span>
                            <Avatar className="w-[68px] h-[68px] " src="https://legalkonnect.com/img/no_avatar.jpg" />
                        </a>

                        <div className="flex flex-col px-2 text-black text-lg">
                            <p className="text-base">para legal</p>
                            <p className="text-sm">Paralegal/Support</p>
                            <div className="flex ">
                                <StarSvg hover={`hover:fill-yellow-500 text-yellow`} fill={`lightgray`} stroke={`lightgray`} height={`18px`} width={`18px`} />
                                <StarSvg hover={`hover:fill-yellow-500 text-yellow`} fill={`lightgray`} stroke={`lightgray`} height={`18px`} width={`18px`} />
                                <StarSvg hover={`hover:fill-yellow-500 text-yellow`} fill={`lightgray`} stroke={`lightgray`} height={`18px`} width={`18px`} />
                                <StarSvg hover={`hover:fill-yellow-500 text-yellow`} fill={`lightgray`} stroke={`lightgray`} height={`18px`} width={`18px`} />
                                <StarSvg hover={`hover:fill-yellow-500 text-yellow`} fill={`lightgray`} stroke={`lightgray`} height={`18px`} width={`18px`} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full text-lightergray"></hr>
                <div className="p-5 cursor-pointer">
                    <div className="flex">
                        <h6 className="text-gray text-sm">Fee Accepted:</h6>
                        <p className="pl-1">N/A</p>
                    </div>
                    <div className="flex">
                        <h6 className="text-gray text-sm">Rate:</h6>
                        <p className="pl-1 ">$</p>
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
                <hr className="w-full text-lightergray"></hr>

                <div className="p-5">
                    <div className="flex cursor-pointer">
                        <h5 className="text-sm font-bold">?</h5>
                        <p className="text-darkgray pl-1 text-sm">yrs experience</p>
                        <div className="flex pl-6">
                            <h5 className="text-sm font-bold">$0</h5>
                            <p className="text-darkgray pl-1 text-sm">earned</p>
                        </div>

                    </div>
                    <div className="flex py-2">
                        <CheckSvg height={`14px`} width={`14px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} />
                        <span className="text-sm font-bold pl-1">0</span><p className="text-gray-600 pl-1 text-sm">jobs done</p>
                        <div className="flex pl-10 gap-1 cursor-pointer">
                            <Link href="#">
                                <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} />
                            </Link>
                            <GavelSvg width={`20px`} height={`20px`} fill={`fill-transparent`} hover={`hover:fill-orangeprimary`} stroke={`stroke-hovergray`} />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default JobsPage;