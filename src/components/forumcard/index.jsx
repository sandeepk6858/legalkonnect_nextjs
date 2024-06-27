'use client'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";
import BacthSvg from "../batchSvg";


const ForumCard = () => {
    return (
        <>

            <Card className="w-[calc(100%-25px)] md:w-[calc(50%-25px)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)]  border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 shadow-md box-border ">

                <CardHeader className=" p-0 relative shadow-md w-full">
                    <Image
                        alt="nextui logo"
                        className="w-screen max-w-full h-64 rounded-b-none"
                        height={250}
                        layout="fill"
                        src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"

                    />
                    <div className="py-2 px-5 absolute top-3 right-4 left-4 flex flex-wrap justify-end gap-2  overflow-y-auto z-10">
                        <Link href="/forum/15" className=" text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">
                            Estate Planning Lawyer
                        </Link>
                    </div>

                </CardHeader>

                <CardBody className="p-0">
                    <Link href="/forum/15">
                        <p className="text-base font-semibold my-4 px-5 text-blackcolor line-clamp-1">What Is Computer</p>
                    </Link>
                    <Divider className="bg-lightgrey" />
                    <div className="flex justify-between py-4 px-5">
                        <p className="text-small" >08.04.2024</p>
                        <Link href="/forum/15" className="text-small text-blueprimary font-semibold">
                            Reward: 1000$
                        </Link>
                    </div>
                    <Divider className="bg-lightgrey" />

                    <div className="flex gap-6 py-4 px-5 items-center">
                        <Link href="/forum/15">
                            <p className="text-base text-blackcolor" ><strong>1</strong> replies</p></Link>
                        <Link href="/forum/15"> <Image
                            alt="nlogo"
                            className="w-10 h-10 rounded-3xl"
                            height={41}
                            radius="sm"
                            src="https://legalkonnect.com/storage/uploads/z1qPFvt7TuzZfpNjRO4YLmB0ER7R99ibxHhjPiWQ.jpg"
                            width={41}
                        />
                            <p className="text-small" ></p>
                        </Link>
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
                            src="https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg"
                            width={41}
                        />
                        <span className="bg-textgreen p-1 w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                    </div>

                    <div className="flex flex-col flex-wrap">
                        <Link href="/users/profile/672">
                            <p className="text-base text-black">Client Dev </p>
                        </Link>
                        <div className="flex gap-2">
                            <span className="text-sm text-black">Client</span>

                            <div className="cursor-pointer">
                                <BacthSvg width={`20px`} height={`20px`} />
                            </div>

                        </div>

                    </div>
                </CardFooter>

            </Card>




        </>

    );
};

export default ForumCard;

