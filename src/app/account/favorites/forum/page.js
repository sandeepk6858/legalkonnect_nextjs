import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";
import HeartSvg from "@/components/Icons/heartSvg";
import Link from "next/link";
import DropdownComponent from "@/components/Dropdown";


const Forum = async() => {

    return (
        <>
            <div className="my-10">
                <JobSlider />
            </div>
            <div className="relative mt-10 ">
                <div className="bg-gray-100 mb-6">
                    <div className="max-w-[1250px] mx-auto px-4 box-border flex justify-between flex-col lg:flex-row">
                        <div className="flex items-center gap-x-9 overflow-x-auto" >
                            <div className="flex items-center">
                                <HeartSvg width={20} height={19} fill={`fill-orangeprimary`} />
                                <h5 className="ml-2.5 text-base font-semibold text-orangeprimary whitespace-nowrap">Favorites</h5>
                            </div>
                            <ul className="flex items-center gap-x-7">
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer  hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/jobs" className="text-sm font-normal  text-blackcolor whitespace-nowrap"> Jobs</Link>
                                </li>
                                <li className=" py-5 border-b-0  cursor-pointer hover:opacity-[0.6]">
                                    <Link href="/account/favorites/qualified-attorney" className="text-sm font-normal text-blackcolor whitespace-nowrap"> Qualified Attorneys</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor  cursor-pointer hover:opacity-[0.6]">
                                    <Link href="/account/favorites/substitute-attorney" className="text-sm font-normal whitespace-nowrap text-blackcolor"> Substitute Attorneys</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor  cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/transcripts" className="text-sm font-normal  text-blackcolor whitespace-nowrap"> Transcripts</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/motion" className="text-sm font-normal text-blackcolor whitespace-nowrap "> Motions</Link>
                                </li>
                                <li className=" py-5 border-b-2 border-orangeprimary cursor-pointer  ">
                                    <Link href="/account/favorites/forum" className="text-sm font-normal text-orangeprimary whitespace-nowrap "> Forums</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-2.5 py-5 lg:py-0 ">
                            <p className="text-sm font-normal text-blackcolor whitespace-nowrap">Sort by</p>
                            <DropdownComponent model="forum" />
                        </div>
                    </div>
                </div>
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
export default Forum;