"use client"
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { formatDateString, imageURL, isPlanActive } from "../utils/helper/helper";
import BacthSvg from "../batchSvg";

const FavoriteForum = ({ data }) => {

    const [showHideToggle, setshowHideToggle] = useState(false);

    return (
        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-10px)] lg:w-[calc(25%-20px)] xl:w-[calc(25%-40px)] border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105">
            <CardHeader className=" p-0 relative shadow-md w-full">
                <Image
                    alt="nextui logo"
                    className="w-screen max-w-full h-64 rounded-b-none"
                    height={250}
                    layout="fill"
                    src={data?.forum?.attachments[0]?.url ? data.forum?.attachments[0]?.url : "https://dummyimage.com/600x400/000/fff"}
                />
                <div className="absolute top-3 right-4 left-4 flex flex-wrap justify-end gap-2 overflow-y-auto z-10">

                    {data.forum?.Specializations.length > 0 && <Link href="#" className="flex flex-wrap gap-1">
                        <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">{data.forum?.Specializations[0].name}</span>
                    </Link>}
                    {data.forum?.Specializations.length > 1 && <Link href="#" className="flex flex-wrap gap-1">
                        <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">{data.forum?.Specializations[1].name}</span>
                    </Link>}
                    {showHideToggle &&
                        data.forum?.Specializations.slice(2).map((s, index) => (
                            <Link href="#" className="flex flex-wrap gap-1" key={index + 2}>
                                <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 inline-block h-max">
                                    {s.name}
                                </span>
                            </Link>
                        ))
                    }

                    {data.forum?.Specializations.length > 2 && <Button onClick={() => setshowHideToggle(!showHideToggle)} className="text-lg font-semibold text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-sm h-7">{showHideToggle ? 'Hide tags' : `${data.forum?.Specializations.length - 2} more`}</Button>}


                </div>
            </CardHeader>
            <CardBody className="p-0">
                <Link href={`/forum/${data.forum.id}`}>
                    <p className="text-base font-semibold py-4 px-5">{data.forum?.question}</p>
                </Link>
                <Divider className="bg-lightgrey" />
                <div className="flex justify-between py-4 px-5">
                    <p className="text-small" >{formatDateString(data.forum.created_at)}</p>
                    <Link href="#" className="text-small text-blueprimary font-semibold">
                        Reward: {data.forum.reward}$
                    </Link>
                </div>
                <Divider className="bg-lightgrey" />

                <div className="flex gap-6 py-4 px-5 items-center">
                    <p className="text-base" ><strong>{data.forum.forum_answers.length}</strong> replies</p>
                    <div className="flex">
                        {data.forum.forum_answers.length >= 1 && <Image
                            alt="nlogo"
                            className="w-10 h-10 rounded-3xl"
                            height={41}
                            radius="sm"
                            src={data.forum.forum_answers[0]?.author?.avatar[0]?.url ? data.forum.forum_answers[0]?.author?.avatar[0]?.url : imageURL("no_avatar.jpg")}
                            width={41}
                        />}
                        {data.forum.forum_answers.length >= 2 && <Image
                            alt="nlogo"
                            className="w-10 h-10 rounded-3xl"
                            height={41}
                            radius="sm"
                            src={data.forum.forum_answers[1]?.author?.avatar[0]?.url ? data.forum.forum_answers[1]?.author?.avatar[0]?.url : imageURL("no_avatar.jpg")}
                            width={41}
                        />}
                        {data.forum.forum_answers.length >= 3 && <Image
                            alt="nlogo"
                            className="w-10 h-10 rounded-3xl"
                            height={41}
                            radius="sm"
                            src={data.forum.forum_answers[2]?.author?.avatar[0]?.url ? data.forum.forum_answers[2]?.author?.avatar[0]?.url : imageURL("no_avatar.jpg")}
                            width={41}
                        />}
                    </div>
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
                        src={data.forum.author?.avatar[0]?.url ? data.forum.author?.avatar[0]?.url : imageURL("no_avatar.jpg")}
                        width={41}
                    />
                    {
                        data.forum.author?.isOnline ?
                            <span className="bg-textgreen w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                            :
                            <span className="bg-gray-500 w-3 h-3 rounded-full absolute z-10 right-[-0.1rem] top-[-0.1rem]" ></span>
                    }
                </div>

            <div className="flex flex-col flex-wrap">
                <Link href={`/users/profile/${data.forum.author?.id}`}>
                    <p className="text-base text-black">{data.forum.author?.first_name} {data.forum.author?.last_name}</p>
                </Link>
                <div className="flex gap-2">
                    <span className="text-sm text-black">{data.forum.author?.role?.name}</span>
                    {
                        isPlanActive(data.forum.author.subscriptionPlans[0].id , data.forum.author.subscriptionPlans[0].user_subscriptions.expire_date) &&
                        <div className="cursor-pointer">
                            <BacthSvg width={`20px`} height={`20px`} />
                        </div>
                    }
                </div>
            </div>
        </CardFooter>
        </Card >
    )
}

export default FavoriteForum;