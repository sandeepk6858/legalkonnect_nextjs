'use client'
import React from "react";
import ChatQuestionMarkSvg from '@/components/Icons/chatQuestionMark'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image,Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const ForumPage = () => {
    return (
        <>
            <div className="bg-lightgrey my-4 ">
                <Navbar className="max-w-[1140px] mx-auto bg-transparent">
                    <NavbarContent className="flex gap-4" justify="center">
                        <NavbarItem isActive className="leading-[3]" >
                            <Link href="#" className="text-base flex gap-x-2" aria-current="page" >
                                <ChatQuestionMarkSvg iconColor={`white`} width={`20px`} height={`21px`} />
                                Forum
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent className="flex gap-4" justify="center">
                        <NavbarItem isActive className=" leading-[3] border-b-2 border-transparent hover:border-blueprimary">
                            <Link href="#" className="text-sm hover:text-blueprimary" aria-current="page">
                                New
                            </Link>
                        </NavbarItem>
                        <NavbarItem className=" border-b-2 border-transparent hover:border-blueprimary leading-[3]">
                            <Link href="#" className="text-sm hover:text-blueprimary" color="foreground">
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

            <div className="w-full justify-center py-12 flex gap-5 flex-wrap px-5 mx-auto">
                <Card className="w-[24%] hover:scale-105">
                    <CardHeader className="p-0 relative shadow-md">
                        <Image
                            alt="nextui logo"
                            className="w-full max-w-full rounded-b-none"
                            height={250}
                            radius="sm"
                            src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
                            width={500}
                        />
                        <span className="absolute top-3 right-3 text-blueprimary bg-[#EAF1FD] hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 z-10">Estate Planning Lawyer</span>
                    </CardHeader>
                    <CardBody className="p-0">
                        <p className="text-base font-semibold py-4 px-5">What Is Computer</p>
                        <Divider className="bg-lightgrey" />
                        <div className="flex justify-between py-4 px-5">
                            <p className="text-small" >08.04.2024</p>
                            <Link href="#" className="text-small text-blueprimary font-semibold">
                                Reward: 1000$
                            </Link>
                        </div>
                        <Divider className="bg-lightgrey" />
                        
                        <div className="flex gap-6 py-4 px-5 items-center">
                            <p className="text-base" ><strong>1</strong> replies</p>
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-3xl"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <p className="text-small" ></p>
                        </div>
                    </CardBody>

                    <CardFooter className="flex justify-between py-4 px-5">
                        <p className="text-base text-black">Posted by :</p>
                        <div className="flex relative">
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-lg"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <span className="bg-textgreen w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                        </div>
                        <p className="text-base text-black">Client Dev <br />client</p>
                    </CardFooter>
                </Card>
                <Card className="w-[24%] hover:scale-105">
                    <CardHeader className="p-0 relative">
                        <Image
                            alt="nextui logo"
                            className="w-full max-w-full rounded-b-none"
                            height={250}
                            radius="sm"
                            src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
                            width={500}
                        />
                        <span className="absolute top-3 right-3 text-blueprimary bg-[#EAF1FD] hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 z-10">Estate Planning Lawyer</span>
                    </CardHeader>
                    <CardBody className="p-0">
                        <p className="text-base font-semibold py-4 px-5">What Is Computer</p>
                        <Divider className="bg-lightgrey" />
                        <div className="flex justify-between py-4 px-5">
                            <p className="text-small" >08.04.2024</p>
                            <Link href="#" className="text-small text-blueprimary font-semibold">
                                Reward: 1000$
                            </Link>
                        </div>
                        <Divider className="bg-lightgrey" />

                        <div className="flex gap-6 py-4 px-5 items-center">
                            <p className="text-base" ><strong>1</strong> replies</p>
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-3xl"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <p className="text-small" ></p>
                        </div>
                    </CardBody>

                    <CardFooter className="flex justify-between py-4 px-5">
                        <p className="text-base text-black">Posted by :</p>
                        <div className="flex relative">
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-lg"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <span className="bg-textgreen w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                        </div>
                        <p className="text-base text-black">Client Dev <br />client</p>
                    </CardFooter>
                </Card>
                <Card className="w-[24%] hover:scale-105">
                    <CardHeader className="p-0 relative">
                        <Image
                            alt="nextui logo"
                            className="w-full max-w-full rounded-b-none"
                            height={250}
                            radius="sm"
                            src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
                            width={500}
                        />
                        <span className="absolute top-3 right-3 text-blueprimary bg-[#EAF1FD] hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 z-10">Estate Planning Lawyer</span>
                    </CardHeader>
                    <CardBody className="p-0">
                        <p className="text-base font-semibold py-4 px-5">What Is Computer</p>
                        <Divider className="bg-lightgrey" />
                        <div className="flex justify-between py-4 px-5">
                            <p className="text-small" >08.04.2024</p>
                            <Link href="#" className="text-small text-blueprimary font-semibold">
                                Reward: 1000$
                            </Link>
                        </div>
                        <Divider className="bg-lightgrey" />

                        <div className="flex gap-6 py-4 px-5 items-center">
                            <p className="text-base" ><strong>1</strong> replies</p>
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-3xl"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <p className="text-small" ></p>
                        </div>
                    </CardBody>

                    <CardFooter className="flex justify-between py-4 px-5">
                        <p className="text-base text-black">Posted by :</p>
                        <div className="flex relative">
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-lg"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <span className="bg-hovergray w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                        </div>
                        <p className="text-base text-black">Client Dev <br />client</p>
                    </CardFooter>
                </Card>
                <Card className="w-[24%] hover:scale-105">
                    <CardHeader className="p-0 relative">
                        <Image
                            alt="nextui logo"
                            className="w-full max-w-full rounded-b-none"
                            height={250}
                            radius="sm"
                            src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
                            width={500}
                        />
                        <span className="absolute top-3 right-3 text-blueprimary bg-[#EAF1FD] hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 z-10">Estate Planning Lawyer</span>
                    </CardHeader>
                    <CardBody className="p-0">
                        <p className="text-base font-semibold py-4 px-5">What Is Computer</p>
                        <Divider className="bg-lightgrey" />
                        <div className="flex justify-between py-4 px-5">
                            <p className="text-small" >08.04.2024</p>
                            <Link href="#" className="text-small text-blueprimary font-semibold">
                                Reward: 1000$
                            </Link>
                        </div>
                        <Divider className="bg-lightgrey" />

                        <div className="flex gap-6 py-4 px-5 items-center">
                            <p className="text-base" ><strong>1</strong> replies</p>
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-3xl"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <p className="text-small" ></p>
                        </div>
                    </CardBody>

                    <CardFooter className="flex justify-between py-4 px-5">
                        <p className="text-base text-black">Posted by :</p>
                        <div className="flex relative">
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-lg"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                                width={41}
                            />
                            <span className="bg-hovergray w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                        </div>
                        <p className="text-base text-black">Client Dev <br />client</p>
                    </CardFooter>
                </Card>
            </div>


        </>
    )
}
export default ForumPage;