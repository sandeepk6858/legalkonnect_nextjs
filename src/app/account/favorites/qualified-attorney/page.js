"use client"
import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import HeartSvg from "@/components/Icons/heartSvg";
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import support from "@/app/support/page";
import SupportCard from "@/components/support";
const favQualifyAttorney = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Default"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <>
            <div className="relative">
                <JobSlider />
                <div className="relative mt-10">
                    <div className="bg-gray-100 mb-6">
                        <div className="max-w-[1250px] mx-auto px-4 box-border flex justify-between flex-col lg:flex-row">
                            <div className="flex items-center gap-x-9 overflow-x-auto" >
                                <div className="flex items-center">
                                    <HeartSvg width={20} height={19} fill={`fill-orangeprimary`} />
                                    <h5 className="ml-2.5 text-base font-semibold text-orangeprimary whitespace-nowrap">Favorites</h5>
                                </div>
                                <ul className="flex items-center gap-x-7">
                                    <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6]">
                                        <Link href="/account/favorites/jobs" className="text-sm font-normal text-blackcolor whitespace-nowrap"> Jobs</Link>
                                    </li>
                                    <li className=" py-5 border-b-2 border-orangeprimary cursor-pointer">
                                        <Link href="/account/favorites/qualified-attorney" className="text-sm font-normal text-orangeprimary whitespace-nowrap"> Qualified Attorneys</Link>
                                    </li>
                                    <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                        <Link href="/account/favorites/substitute-attorney" className="text-sm font-normal text-blackcolor whitespace-nowrap  "> Substitute Attorneys</Link>
                                    </li>
                                    <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                        <Link href="/account/favorites/transcripts" className="text-sm font-normal text-blackcolor whitespace-nowrap"> Transcripts</Link>
                                    </li>
                                    <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                        <Link href="/account/favorites/motion" className="text-sm font-normal text-blackcolor whitespace-nowrap "> Motions</Link>
                                    </li>
                                    <li className=" py-5 border-b-0 border-blackcolo cursor-pointer hover:opacity-[0.6] ">
                                        <Link href="/account/favorites/forum" className="text-sm font-normal text-blackcolor whitespace-nowrap "> Forums</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-x-2.5 py-5 lg:py-0 ">
                                <p className="text-sm font-normal text-blackcolor whitespace-nowrap">Sort by</p>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            className="capitalize bg-gray-50 border-1 border-blackcolor rounded-none min-w-36 text-grey text-left flex justify-start "

                                        >
                                            {selectedValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeys}
                                        onSelectionChange={setSelectedKeys}

                                    >
                                        <DropdownItem key="Default">Default</DropdownItem>
                                        <DropdownItem key="By Date">By Date</DropdownItem>
                                        <DropdownItem key="By Price">By Price</DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full relative lg:px-6">
                    <div className=" flex flex-wrap justify-evenly gap-4">
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />
                        <SupportCard fillheart="orangeprimary" />


                    </div>

                </div>
            </div>



        </>
    );
};

export default favQualifyAttorney;
