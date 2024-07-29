'use client'
import React from "react";
import { Card, CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";
import BacthSvg from "../batchSvg";


const RecentForum = () => {
    return (
        <>

            <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)]  border-2 border-lightgrey rounded-md transition duration-300 ease-out hover:ease-in hover:scale-105 shadow-md box-border ">
                <div className="py-4 px-5">

                    <div className="flex flex-wrap justify-between ">
                        <div className="flex relative">
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-lg"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg"
                                width={41}
                            />
                            <span className="bg-textgreen p-1 w-2 h-2 rounded-full absolute z-10 right-[4px] top-[0]" ></span>
                        </div>

                        <div className="flex flex-col flex-wrap">
                            <Link href="/users/profile/440">
                                <p className="text-base text-black">Client Dev </p>
                            </Link>
                            <div className="flex gap-2">
                                <span className="text-sm text-black">admin</span>

                                <div className="cursor-pointer">
                                    <BacthSvg width={`20px`} height={`20px`} />
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="pt-7 flex flex-wrap justify-center">
                        <Link href="/forum/10">
                            <p className="text-blackcolor text-base">Welcome to Svit</p>
                        </Link>
                    </div>

                </div>
                <Divider className="bg-lightgrey" />

                <CardBody className="p-0">
                    <div className="flex justify-between py-4 px-5">
                        <p className="text-small" >08.04.2024</p>                     
                        <span className="text-small text-blueprimary font-semibold">Reward: 30$</span>
                    </div>
                    <Divider className="bg-lightgrey" />

                    <div className="py-4 px-5 flex flex-wrap justify-between gap-3">
                        <Link href="#" className="text-sm text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">
                        Civil Litigation
                        </Link>
                    </div>

                    <Divider className="bg-lightgrey" />

                    <CardFooter className="px-0 py-3 flex flex-wrap justify-between">
                        <div className="flex py-4 px-5 items-center">
                            <p className="text-base text-blackcolor" ><strong>1</strong> replies</p>
                        </div>
                        <div className="px-5 flex flex-wrap relative">
                            <Image
                                alt="nlogo"
                                className="w-10 h-10 rounded-3xl"
                                height={41}
                                radius="sm"
                                src="https://legalkonnect.com/img/no_avatar.jpg"
                                width={41}
                            />
                            <p className="text-small" ></p>
                            <div className="absolute z-10 top-[0] left-[-12px]">
                                <Image
                                    alt="nlogo"
                                    className="w-10 h-10 rounded-3xl"
                                    height={41}
                                    radius="sm"
                                    src="https://legalkonnect.com/img/no_avatar.jpg"
                                    width={41}
                                />
                                <p className="text-small" ></p>

                            </div>
                        </div>

                    </CardFooter>

                </CardBody>

            </Card>
        </>

    );
};

export default RecentForum;