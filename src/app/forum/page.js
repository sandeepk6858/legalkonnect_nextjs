'use client'
import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import ChatQuestionMarkSvg from '@/components/Icons/chatQuestionMark'
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ForumCard from "@/components/forumcard";

const ForumPage = () => {
    return (
        <>

            <div className="my-10">
                <JobSlider />
            </div>


            <div className="bg-lightgrey my-4 ">
                <Navbar className="max-w-[1140px] mx-auto bg-transparent">
                    <NavbarContent className="flex gap-4" justify="center">
                        <NavbarItem isActive className="leading-[3]" >
                            <Link href="#" className="text-base font-semibold flex gap-x-2" aria-current="page" >
                                <ChatQuestionMarkSvg iconColor={`white`} width={`20px`} height={`21px`} />
                                Forum
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent className="flex gap-4" justify="center">
                        <NavbarItem isActive className=" leading-[3] border-b-2 border-transparent hover:border-blueprimary">
                            <Link href="#" className="text-sm font-normal hover:text-blueprimary" aria-current="page">
                                New
                            </Link>
                        </NavbarItem>
                        <NavbarItem className=" border-b-2 border-transparent hover:border-blueprimary leading-[3]">
                            <Link href="#" className="text-sm font-normal hover:text-blueprimary" color="foreground">
                                Popular
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button as={Link} className="bg-orangeprimary hover:bg-hovergray text-white rounded-3xl" href="#" variant="flat">
                                Ask Question
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>

            <div className="w-full lg:my-10 xl:px-2 my-5 md:px-5 flex flex-wrap justify-evenly gap-4 ">
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
            </div>

        </>
    )
}
export default ForumPage;