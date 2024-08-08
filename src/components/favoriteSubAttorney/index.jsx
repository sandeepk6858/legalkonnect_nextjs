'use client'
import React, { useState } from "react";
import { Avatar, Button, LinkIcon } from "@nextui-org/react";
import Link from "next/link";
import HeartSvg from "@/components/Icons/heartSvg";
import GravelSvg from "@/components/Icons/gravelSvg";
import ShareSvg from "@/components/Icons/shareSvg";
import CalendarSvg from "@/components/Icons/calendarSvg";
import SocialPopup from "@/components/socialPopup";
import FixedSvg from "@/components/Icons/fixedprice";
import CourtSvg from "@/components/courtaddress";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { diffForHumans } from "../utils/helper/helper";
import { favoriteToggler } from "@/actions/favorite/favoriteData";

const FavoriteSubstitueAttorney = ({ showDiv, showDivCount, showCount, data }) => {
    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    const [showHideToggle, setshowHideToggle] = useState(false);

    const handleFavorite = async (model_id) => {
        const res = await favoriteToggler(model_id, "substitute-attorney", '/account/favorites/substitute-attorney');
    }

    return (
        <Card className="w-[calc(100%-25px)] md:w-[calc(50%-10px)] lg:w-[calc(25%-20px)] xl:w-[calc(25%-40px)] border-2 border-lightgrey rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105">

            <CardHeader className=" p-0 relative shadow-md w-full">
                <Image
                    alt="nextui logo"
                    className="w-screen max-w-full h-64 rounded-b-none"
                    height={250}
                    layout="fill"
                    src={data.substituteAttorney?.attachments[0]?.url ? data.substituteAttorney?.attachments[0]?.url : "https://dummyimage.com/600x400/000/fff"}
                />
                <div className="absolute top-3 right-4 left-4 flex flex-wrap justify-end gap-2 overflow-y-auto z-10">


                    {data.substituteAttorney?.specializations.length > 0 && <Link href="#" className="flex flex-wrap gap-1">
                        <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">{data.substituteAttorney?.specializations[0].name}</span>
                    </Link>}
                    {data.substituteAttorney?.specializations.length > 1 && <Link href="#" className="flex flex-wrap gap-1">
                        <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl  px-5 py-1 inline-block h-max">{data.substituteAttorney?.specializations[1].name}</span>
                    </Link>}
                    {showHideToggle &&
                        data.substituteAttorney?.specializations.slice(2).map((s, index) => (
                            <Link href="#" className="flex flex-wrap gap-1" key={index + 2}>
                                <span className="p-2 text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-3xl px-5 py-1 inline-block h-max">
                                    {s.name}
                                </span>
                            </Link>
                        ))
                    }

                    {data.substituteAttorney?.specializations.length > 2 && <Button onClick={() => setshowHideToggle(!showHideToggle)} className="text-lg font-semibold text-blueprimary bg-lightblue hover:bg-blueprimary hover:text-white rounded-sm h-7">{showHideToggle ? 'Hide tags' : `${data.substituteAttorney?.specializations.length - 2} more`}</Button>}

                </div>
                <div className="absolute w-full h-12 p-5 pb-10 bottom-0 left-0 flex gap-2 z-10 items-center bg-gradient-to-b from-transparent to-gray-900/50">
                    <CalendarSvg cuClass={`flex`} width={`16px`} height={`16px`} fill={`white`} />
                    <span className="text-white text-sm"> Project Length:</span>
                    <span className="text-white text-sm font-semibold">{data?.substituteAttorney?.ProjectDuration?.name}</span>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <Link href={`/substitute-attorneys-jobs/${data?.substituteAttorney?.id}`}>
                    <p className="text-base font-bold py-4 px-5">{data?.substituteAttorney?.title}</p>
                    {/* <p className="line-clamp-1 overflow-hidden text-lg font-semibold my-4 px-6">Job Heading</p> */}
                </Link>
                <div className="pb-5 px-5 flex justify-between">
                    <p className="text-base">Posted {diffForHumans(data?.substituteAttorney?.created_at)}</p>
                    <div className="flex gap-1 cursor-pointer relative z-50">
                        <SocialPopup socialPopupT={socialPopupT} facebook_url={data.facebook_url} twitter_url={data.twitter_url} pintrest_url={data.pinterest_url} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <div onClick={() => handleFavorite(data?.substituteAttorney?.id)}>
                            <HeartSvg width={`20px`} height={`20px`} fill={`fill-orangeprimary`} stroke={`stroke-orangeprimary`} style={{ display: showCount ? 'block' : 'none' }} />
                        </div>
                    </div>
                </div>
                <Divider className="bg-lightgrey" />
                <div className="py-2 px-5 flex flex-wrap" style={{ display: showDiv ? 'block' : 'none' }}>
                    <div>
                        <CourtSvg width={`18px`} height={`18px`} />
                        <p className="py-1 font-semibold">Court Address: {data?.substituteAttorney?.court.location}</p>
                    </div>

                </div>

                <Divider className="bg-lightgrey" />
                <div className="px-5 py-3 flex gap-2 items-center">
                    <b>{data?.substituteAttorney?.price}$</b>
                    <div>
                        <FixedSvg width={`18px`} height={`18px`} stroke={`blueprimary`} />
                    </div>{data?.substituteAttorney?.hire_count}

                </div>
                <Divider className="bg-lightgrey" />
                <p className="p-5 text-base line-clamp-2">{data?.substituteAttorney?.description}</p>
                <Divider className="bg-lightgrey" />

            </CardBody>

            <CardFooter className="flex flex-wrap justify-between justify-items-center px-5">
                <div className="flex flex-wrap items-center gap-1 py-2 relative">
                    {
                        data?.substituteAttorney?.user?.isOnline ?
                            <span className="border-2 border-textgreen bg-green-600 rounded-full w-3 h-3 absolute top-[7px] left-[27px] z-[5]"></span>
                            :
                            <span className="border-2 border-lightgrey bg-gray-200 rounded-full w-3 h-3 absolute top-[7px] left-[27px] z-[5]"></span>
                    }
                    <Avatar className="w-12 h-12 " src={(data?.substituteAttorney?.user?.avatar[0]?.url) ? data?.substituteAttorney?.user?.avatar[0]?.url : "https://legalkonnect.com/img/no_avatar.jpg"} />
                    <Link href={`/users/profile/${data?.substituteAttorney?.user?.id}`} className="flex items-center gap-1 ">
                        <p>{data?.substituteAttorney?.user?.first_name + " " + data?.substituteAttorney?.user?.last_name}</p>
                    </Link>

                </div>
                <div className="flex gap-4 py-2">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center gap-1 ">
                            <GravelSvg width={`16px`} height={`16px`} fill={`fill-blueprimary`} />
                            <span className="text-blueprimary">{data?.substituteAttorney?.orders.length}</span>
                        </div>
                    </div>
                </div>
            </CardFooter>

        </Card>
    );
};
export default FavoriteSubstitueAttorney;