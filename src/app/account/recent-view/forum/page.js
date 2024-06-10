"use client"
import React, { useState } from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import ClockSvg from "@/components/recent veiw clock";
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Divider, Avatar } from "@nextui-org/react";
import TranscriptCard from "@/components/card/transcripts";



const forum = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Default"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const [socialPopupT, setSocialPopupT] = useState(false);
    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }



    return (
        <>

            <div className="my-10">
                <JobSlider />
            </div>
            <div className="relative mt-10">
                <div className="bg-gray-100 mb-6">
                    <div className="max-w-[1250px] mx-auto px-4 box-border flex justify-between flex-col lg:flex-row">
                        <div className="flex items-center gap-x-9 overflow-x-auto" >
                            <div className="flex items-center">
                                <ClockSvg width={20} height={19} fill={`fill-orangeprimary`} />
                                <h5 className="ml-2.5 text-base font-semibold text-orangeprimary whitespace-nowrap">Favorites</h5>

                            </div>
                            <ul className="flex items-center gap-x-7">
                                <li className=" py-5  cursor-pointer ">
                                    <Link href="/account/favorites/jobs" className="font-normal text-blackcolor  whitespace-nowrap"> Jobs</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6]">
                                    <Link href="/account/favorites/qualified-attorney" className="font-normal text-blackcolor whitespace-nowrap"> Find an Attorney </Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer">
                                    <Link href="/account/favorites/substitute-attorney" className="font-normal  text-blackcolor whitespace-nowrap  "> Substitute Attorneys</Link>
                                </li>
                                <li className=" py-5  cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/transcripts" className="font-normal text-blackcolor  whitespace-nowrap"> Transcripts</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/motion" className="font-normal text-blackcolor   whitespace-nowrap "> Motions</Link>
                                </li>
                                <li className=" py-5 border-b-2 border-orangeprimary cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/forum" className="font-normal text-orangeprimary whitespace-nowrap "> Forums</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/forum" className="font-normal text-blackcolor whitespace-nowrap "> Experts</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/forum" className="font-normal text-blackcolor whitespace-nowrap "> Process Servers</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/forum" className="font-normal text-blackcolor whitespace-nowrap "> Court Reporter</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/forum" className="font-normal text-blackcolor whitespace-nowrap "> Investigator</Link>
                                </li>
                            </ul>
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
            </div>

            <div className="w-full lg:my-10 xl:px-10 my-5 md:px-5 flex flex-wrap justify-evenly gap-5">


            </div>
        </>
    );
};

export default forum;