"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShareSvg from "@/components/Icons/shareSvg";
import PencilSvg from "@/components/Icons/pencilSvg"
import SocialPopup from "@/components/socialPopup";
import AttachmentSvg from "@/components/Icons/attachment";
import WorkHistoryCard from "@/components/card/account/workHistory";
import PortfolioCard from "@/components/card/account/portfolio";
import SlickSlider from "@/components/slickslider";

const ProfileDetails = ({ profileData }) => {
    const router = useRouter();
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["By Date"]));
    const [selected, setSelected] = React.useState("Portfolio");

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const handleClick = () => {
        router.push('/account/edit/settings')
    }
    const [socialPopupT, setSocialPopupT] = useState(false);

    const SocialPopupToggle = () => {
        setSocialPopupT(!socialPopupT);
    }

    const ShareLinks = {
        "facebook_url": profileData?.facebook_url,
        "twitter_url": profileData?.twitter_url,
        "pinterest_url": profileData?.pinterest_url
    }

    const TalentTypes = (talent_types) => {
        return (
            <div className="simple_p_wrapper text-[16px] font-light">
                {talent_types?.map((element, index) => (
                    <p key={index}>{element?.name}</p>
                ))}
            </div>
        );
    };

    const getYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };

    
    return (
        <div className="profile_s_header max-[640px]:pt-[50px] p-[20px] w-[100%] max-w-[700px] lg:w-[70%] shadow-customSec">
            <div className="flex w-full flex-col relative">
                <div className="flex gap-4 items-center absolute max-[640px]:top-[-32px] right-0 z-20">
                    <div className="right flex gap-4 items-center">
                        <SocialPopup link={ShareLinks} socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                        <div>
                            <button
                                className="brrad_btn_w_icon gap-2 items-center flex group_one hover:bg-[#1359C3] hover:text-white rounded-[50px] px-[20px] py-[10px] text-[14px] text-center text-bluesecondary bg-[#EAF1FD] max-w-[130px]"
                                onClick={(e) => {
                                    e.preventDefault;
                                    handleClick();
                                }}
                            >
                                <PencilSvg />
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
                <Tabs
                    aria-label="Options"
                    color="primary"
                    variant="underlined"
                    classNames={{
                        tabList:
                            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-bluesecondary",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-bluesecondary",
                    }}
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                >
                    <Tab
                        key="General Information"
                        title={
                            <div className="flex items-center space-x-2">
                                <span>General Information</span>
                            </div>
                        }
                    >
                        <div className="tab-content-item flex flex-col gap-3 pt-[50px]">
                            <div className="content_group">
                               <SlickSlider data={profileData?.gallery}/>
                            </div>
                            <div className="content_group mt-[30px] lg:mt-[0px">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    About me
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">
                                    {profileData && profileData?.about_me}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    Address
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">
                                    {profileData && profileData?.address}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    Email
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">
                                    {profileData && profileData?.email}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Location
                                </h3>
                                <div className="blue_infos_block flex-wrap flex justify-between gap-2 pt-2">
                                    <div className="blue_info_item bg-[#EAF1FD] rounded-[3px] py-[10px] px-[15px] max-[426px]:w-full w-[calc(50%_-_10px)] flex flex-col gap-2">
                                        <h3 className="box-title text-[16px] text-bluesecondary font-semibold">
                                            Country
                                        </h3>
                                        <p className="text-[16px] text-bluesecondary">
                                            United States
                                        </p>
                                    </div>
                                    <div className="blue_info_item bg-[#EAF1FD] rounded-[3px] py-[10px] px-[15px] max-[426px]:w-full w-[calc(50%_-_10px)] flex flex-col gap-2">
                                        <h3 className="box-title text-[16px] text-bluesecondary font-semibold">
                                            State
                                        </h3>
                                        <p className="text-[16px] text-bluesecondary">
                                            Alaska
                                        </p>
                                    </div>
                                    <div className="blue_info_item bg-[#EAF1FD] rounded-[3px] py-[10px] px-[15px] max-[426px]:w-full w-[calc(50%_-_10px)] flex flex-col gap-2">
                                        <h3 className="box-title text-[16px] text-bluesecondary font-semibold">
                                            County
                                        </h3>
                                        <p className="text-[16px] text-bluesecondary">
                                            Alaska
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Specialization
                                </h3>
                                <div className="blue_infos_block pt-2">
                                    {profileData && profileData?.specialization.map((item, index) => {
                                        if (!item) return null;
                                        return (
                                            <div
                                                key={index}
                                                className="blue_info_item bg-[#EAF1FD] text-bluesecondary rounded-[3px] py-[10px] px-[15px] max-[426px]:w-full w-[calc(50%_-_10px)] flex flex-col gap-2"
                                            >
                                                <p>
                                                    {item}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Education
                                </h3>
                                <div className="blue_infos_block pt-2">
                                    {profileData && profileData.educations.map((item, index) => {
                                        if (!item) return null;

                                        return (
                                            <div
                                                key={index}
                                                className="blue_info_item bg-[#EAF1FD] text-bluesecondary rounded-[3px] py-[10px] px-[15px] max-[426px]:w-full w-[calc(50%_-_10px)] flex flex-col gap-2"
                                            >
                                                <p>
                                                    {`${item.degree} | ${item.university} ${getYear(item.start_year)} - ${getYear(item.end_year)}`}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    Experience
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">

                                    {profileData?.experience != null || profileData?.experience != null ?
                                        <b>{profileData.experience} yrs</b>
                                        : <b>0-1 Yrs</b>
                                    }
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    Talent type
                                </h3>
                                {profileData && TalentTypes(profileData?.talent_types)}
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    # of cases handled
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">
                                    {profileData && profileData?.cases > 10 ?
                                        `10-${profileData?.cases} cases`
                                        :
                                        `0-${profileData?.cases} cases`
                                    }

                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    Fee type
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">
                                    {profileData && profileData?.fee_type}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold text-black">
                                    Description of Services offered and prices
                                </h3>
                                <div className="simple_p_wrapper text-[16px] font-light">
                                {profileData && profileData?.service_description}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Resume/CV
                                </h3>
                                <div className="blue_infos_block pt-2">
                                    {profileData?.resume?.length > 0 && profileData.resume.map((doc, index) => (
                                        <div
                                            key={doc.id || index} // Use unique ID or index as key
                                            className="blue_info_item bg-[#EAFDEA] text-bluesecondary rounded-[3px] py-[10px] px-[15px] w-[calc(50%_-_10px)] flex flex-col gap-2"
                                        >
                                            <Link
                                                href={`/storage/uploads/${doc?.url}`} // Adjust URL based on document name or path
                                                className="attached_file_item flex items-center gap-1"
                                                download={doc?.name} // Use document name for download attribute
                                            >
                                                <div className="icon">
                                                    <AttachmentSvg />
                                                </div>
                                                <p className="name text-[#027E4A]">{doc?.name}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Documents & Sertificates
                                </h3>
                                <div className="blue_infos_block pt-2">
                                {profileData?.documents?.length > 0 && profileData.documents.map((doc, index) => (
                                        <div
                                            key={doc.id || index} // Use unique ID or index as key
                                            className="blue_info_item bg-[#EAFDEA] text-bluesecondary rounded-[3px] py-[10px] px-[15px] w-[calc(50%_-_10px)] flex flex-col gap-2"
                                        >
                                            <Link
                                                href={`/storage/uploads/${doc?.url}`} // Adjust URL based on document name or path
                                                className="attached_file_item flex items-center gap-1"
                                                download={doc?.name} // Use document name for download attribute
                                            >
                                                <div className="icon">
                                                    <AttachmentSvg />
                                                </div>
                                                <p className="name text-[#027E4A]">{doc?.name}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        key="Work history"
                        title={
                            <div className="flex items-center space-x-2">
                                <span>Work history</span>
                            </div>
                        }
                    >
                        <div className="flex justify-between max-[426px]:flex-col max-[426px]:gap-2 items-center">
                            <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                                Work history & feedback
                            </h3>
                            <div className="sort_select_wrpr flex gap-2 items-center">
                                <label className="little_text_label text-[16px] text-black">
                                    Sort by
                                </label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button variant="bordered" className="capitalize">
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
                                        <DropdownItem key="By Date">By Date</DropdownItem>
                                        <DropdownItem key="By Price">By Price</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        < WorkHistoryCard data={profileData?.work_history} />
                    </Tab>
                    <Tab
                        key="Portfolio"
                        title={
                            <div className="flex items-center space-x-2">
                                <span>Portfolio</span>
                            </div>
                        }
                    >
                        <div>
                            <div className="flex justify-between max-[426px]:flex-col max-[426px]:gap-3 items-center">
                                <h3 className="box-title text-bluesecondary text-[16px] font-semibold">
                                    Portfolio
                                </h3>
                                <div className="sort_select_wrpr flex gap-2 items-center">
                                    <label className="little_text_label text-[16px] text-black">
                                        Sort by
                                    </label>
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button variant="bordered" className="capitalize">
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
                                            <DropdownItem key="By Date">By Date</DropdownItem>
                                            <DropdownItem key="By Price">By Price</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <PortfolioCard  data={profileData?.portfolios} />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default ProfileDetails;