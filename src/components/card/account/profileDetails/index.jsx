"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { imageURL } from "@/components/utils/helper/helper";
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

const ProfileDetails = ({ profileData }) => {
    const router = useRouter();
    const [isShown, setIsShown] = useState(false);
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
    const backgroundImage = imageURL("star_rating_grey.svg");
   // console.log("profileData", profileData);
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
                                            State
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
                                    <div className="blue_info_item bg-[#EAF1FD] text-bluesecondary rounded-[3px] py-[10px] px-[15px] max-[426px]:w-full w-[calc(50%_-_10px)] flex flex-col gap-2">
                                        <p>Criminal</p>
                                    </div>
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
                                    test rtset
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Resume/CV
                                </h3>
                                <div className="blue_infos_block pt-2">
                                    <div className="blue_info_item bg-[#EAFDEA] text-bluesecondary rounded-[3px] py-[10px] px-[15px] w-[calc(50%_-_10px)] flex flex-col gap-2">
                                        <Link
                                            href="/storage/uploads/G7qQDQVlKoxhN6XzWyQtin6KRPd2CF4pydctpHwE.jpg"
                                            className="atached_file_item flex items-center gap-1"
                                            download="SB.jpg"
                                        >
                                            <div className="icon">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.4742 5.16591C10.7487 4.89137 10.7487 4.4463 10.4742 4.17164C10.1996 3.8971 9.75444 3.8971 9.47991 4.17164L3.79018 9.86137C2.92787 10.7238 2.92787 12.127 3.7903 12.9893C4.22145 13.4205 4.78786 13.636 5.35415 13.636C5.92056 13.636 6.48697 13.4205 6.91812 12.9893L9.63701 10.2705L9.63713 10.2704L14.2135 5.69399C15.5214 4.386 15.5214 2.25769 14.2135 0.949697C12.9055 -0.358293 10.7772 -0.358171 9.46916 0.949697L3.18678 7.23208C3.17543 7.24331 3.1653 7.2554 3.15492 7.26724L2.12489 8.29727C1.27857 9.14359 0.8125 10.2729 0.8125 11.4769C0.8125 12.6808 1.27857 13.81 2.12489 14.6563C2.9712 15.5026 4.10036 15.9687 5.30435 15.9687C6.50833 15.9687 7.63761 15.5026 8.48393 14.6563L13.6639 9.47636C13.9384 9.20182 13.9384 8.75663 13.6639 8.48209C13.3894 8.20743 12.9442 8.20743 12.6696 8.48209L7.48954 13.662C6.90885 14.2429 6.13284 14.5626 5.30435 14.5626C4.47585 14.5626 3.69984 14.2429 3.11915 13.662C2.53834 13.0814 2.21851 12.3052 2.21851 11.4769C2.21851 10.6484 2.53834 9.87235 3.11915 9.29154L8.29911 4.11158C8.31047 4.10023 8.32072 4.08814 8.3311 4.07618L10.4633 1.94397C11.2231 1.1842 12.4594 1.1842 13.2191 1.94384C13.9788 2.70361 13.9788 3.93995 13.2191 4.69972L11.6138 6.30495C11.6137 6.30507 11.6136 6.3052 11.6135 6.30532L5.92386 11.995C5.60977 12.3091 5.09866 12.3091 4.78457 11.995C4.47036 11.681 4.47036 11.1698 4.78457 10.8556L10.4742 5.16591Z"
                                                        fill="#027E4A"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="name text-[#027E4A]">SB.jpg</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="content_group">
                                <h3 className="box-title text-[16px] font-semibold">
                                    Documents & Sertificates
                                </h3>
                                <div className="blue_infos_block pt-2">
                                    <div className="blue_info_item bg-[#EAFDEA] text-bluesecondary rounded-[3px] py-[10px] px-[15px] w-[calc(50%_-_10px)] flex flex-col gap-2">
                                        <Link
                                            href="/storage/uploads/G7qQDQVlKoxhN6XzWyQtin6KRPd2CF4pydctpHwE.jpg"
                                            className="atached_file_item flex items-center gap-1"
                                            download="SB.jpg"
                                        >
                                            <div className="icon">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.4742 5.16591C10.7487 4.89137 10.7487 4.4463 10.4742 4.17164C10.1996 3.8971 9.75444 3.8971 9.47991 4.17164L3.79018 9.86137C2.92787 10.7238 2.92787 12.127 3.7903 12.9893C4.22145 13.4205 4.78786 13.636 5.35415 13.636C5.92056 13.636 6.48697 13.4205 6.91812 12.9893L9.63701 10.2705L9.63713 10.2704L14.2135 5.69399C15.5214 4.386 15.5214 2.25769 14.2135 0.949697C12.9055 -0.358293 10.7772 -0.358171 9.46916 0.949697L3.18678 7.23208C3.17543 7.24331 3.1653 7.2554 3.15492 7.26724L2.12489 8.29727C1.27857 9.14359 0.8125 10.2729 0.8125 11.4769C0.8125 12.6808 1.27857 13.81 2.12489 14.6563C2.9712 15.5026 4.10036 15.9687 5.30435 15.9687C6.50833 15.9687 7.63761 15.5026 8.48393 14.6563L13.6639 9.47636C13.9384 9.20182 13.9384 8.75663 13.6639 8.48209C13.3894 8.20743 12.9442 8.20743 12.6696 8.48209L7.48954 13.662C6.90885 14.2429 6.13284 14.5626 5.30435 14.5626C4.47585 14.5626 3.69984 14.2429 3.11915 13.662C2.53834 13.0814 2.21851 12.3052 2.21851 11.4769C2.21851 10.6484 2.53834 9.87235 3.11915 9.29154L8.29911 4.11158C8.31047 4.10023 8.32072 4.08814 8.3311 4.07618L10.4633 1.94397C11.2231 1.1842 12.4594 1.1842 13.2191 1.94384C13.9788 2.70361 13.9788 3.93995 13.2191 4.69972L11.6138 6.30495C11.6137 6.30507 11.6136 6.3052 11.6135 6.30532L5.92386 11.995C5.60977 12.3091 5.09866 12.3091 4.78457 11.995C4.47036 11.681 4.47036 11.1698 4.78457 10.8556L10.4742 5.16591Z"
                                                        fill="#027E4A"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="name text-[#027E4A]">aaaa.png</p>
                                        </Link>
                                    </div>
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
                        <div className="feedback_items_wrpr flex gap-4 flex-col pt-4">
                            <div className="feedback_item p-[20px] border border-[#EBEBEB] rounded-[3px]">
                                <div className="feedback_item_header flex justify-between max-[426px]:flex-col max-[426px]:gap-2">
                                    <div className="left flex gap-2 items-center">
                                        <h3 className="feedback_item_title text-[16px]">
                                            test 123
                                        </h3>
                                        <ul className="stars_rating flex gap-1">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <li
                                                    key={index}
                                                    className="flex bg-cover bg-no-repeat bg-center w-[12px] h-[12px]"
                                                    style={{
                                                        backgroundImage: `url(${backgroundImage})`,
                                                    }}
                                                ></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="job_progress bg-[#20C9AC50] text-[#14CE80] py-[5px] px-[10px] rounded-[3px] text-[14px] whitespace-nowrap flex justify-center items-center">
                                        Job in Progress
                                    </div>
                                </div>
                                <div className="feedback_item_body flex justify-between pt-3">
                                    <div className="left">
                                        <p className="text-[16px] break-all">test</p>
                                    </div>
                                    <div className="right flex flex-col max-[426px]:gap-2 gap-8">
                                        <span className="date text-[16px] text-black">
                                            May 2024
                                        </span>
                                        <div className="price flex gap-1">
                                            <span className="text-[16px]">Fixed Price</span>
                                            <span>
                                                <b>$</b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feedback_item p-[20px] border border-[#EBEBEB] rounded-[3px]">
                                <div className="feedback_item_header flex justify-between max-[426px]:flex-col max-[426px]:gap-2">
                                    <div className="left flex gap-2 items-center">
                                        <h3 className="feedback_item_title text-[16px]">
                                            test 123
                                        </h3>
                                        <ul className="stars_rating flex gap-1">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <li
                                                    key={index}
                                                    className="flex bg-cover bg-no-repeat bg-center w-[12px] h-[12px]"
                                                    style={{
                                                        backgroundImage: `url(${backgroundImage})`,
                                                    }}
                                                ></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="job_progress bg-[#20C9AC50] text-[#14CE80] py-[5px] px-[10px] rounded-[3px] text-[14px] whitespace-nowrap flex justify-center items-center">
                                        Job in Progress
                                    </div>
                                </div>
                                <div className="feedback_item_body flex justify-between pt-3">
                                    <div className="left">
                                        <p className="text-[16px] break-all">test</p>
                                    </div>
                                    <div className="right flex flex-col max-[426px]:gap-2 gap-8">
                                        <span className="date text-[16px] text-black">
                                            May 2024
                                        </span>
                                        <div className="price flex gap-1">
                                            <span className="text-[16px]">Fixed Price</span>
                                            <span>
                                                <b>$</b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feedback_item p-[20px] border border-[#EBEBEB] rounded-[3px]">
                                <div className="feedback_item_header flex justify-between max-[426px]:flex-col max-[426px]:gap-2">
                                    <div className="left flex gap-2 items-center">
                                        <h3 className="feedback_item_title text-[16px]">
                                            test 123
                                        </h3>
                                        <ul className="stars_rating flex gap-1">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <li
                                                    key={index}
                                                    className="flex bg-cover bg-no-repeat bg-center w-[12px] h-[12px]"
                                                    style={{
                                                        backgroundImage: `url(${backgroundImage})`,
                                                    }}
                                                ></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="job_progress bg-[#20C9AC50] text-[#14CE80] py-[5px] px-[10px] rounded-[3px] text-[14px] whitespace-nowrap flex justify-center items-center">
                                        Job in Progress
                                    </div>
                                </div>
                                <div className="feedback_item_body flex justify-between pt-3">
                                    <div className="left">
                                        <p className="text-[16px] break-all">test</p>
                                    </div>
                                    <div className="right flex flex-col max-[426px]:gap-2 gap-8">
                                        <span className="date text-[16px] text-black">
                                            May 2024
                                        </span>
                                        <div className="price flex gap-1">
                                            <span className="text-[16px]">Fixed Price</span>
                                            <span>
                                                <b>$</b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <div className="flex flex-wrap gap-3 pt-4 justify-between">
                                <div className="p-[20px] border border-[#EBEBEB] rounded-[3px] text-center w-full sm:w-[calc(50%_-_10px)]">
                                    <div className="portfolio_item_header max-[426px]:flex-col flex gap-3 pb-4">
                                        <Link
                                            href=""
                                            className="portfolio_item_title text-[16px] text-bluesecondary"
                                        >
                                            Control your workflow: hire, classNameify and pay
                                            your talent
                                        </Link>
                                        <span className="portfolio_item_date flex justify-center items-center whitespace-nowrap text-[14px] text-bluesecondary py-[5px] px-[10px] rounded-[3px] bg-[#EAF1FD]">
                                            Feb 2023
                                        </span>
                                    </div>
                                    <div className="item_text break-words">
                                        <p className="text-[16px] text-black font-light">
                                            Control your workflow: hire, classNameify and pay your
                                            talent
                                        </p>
                                    </div>
                                </div>
                                <div className="p-[20px] border border-[#EBEBEB] rounded-[3px] text-center w-full sm:w-[calc(50%_-_10px)]">
                                    <div className="portfolio_item_header max-[426px]:flex-col flex gap-3 pb-4">
                                        <Link
                                            href=""
                                            className="portfolio_item_title text-[16px] text-bluesecondary"
                                        >
                                            Control your workflow: hire, classNameify and pay
                                            your talent
                                        </Link>
                                        <span className="portfolio_item_date flex justify-center items-center whitespace-nowrap text-[14px] text-bluesecondary py-[5px] px-[10px] rounded-[3px] bg-[#EAF1FD]">
                                            Feb 2023
                                        </span>
                                    </div>
                                    <div className="item_text break-words">
                                        <p className="text-[16px] text-black font-light">
                                            Control your workflow: hire, classNameify and pay your
                                            talent
                                        </p>
                                    </div>
                                </div>
                                <div className="p-[20px] border border-[#EBEBEB] rounded-[3px] text-center w-full sm:w-[calc(50%_-_10px)]">
                                    <div className="portfolio_item_header max-[426px]:flex-col flex gap-3 pb-4">
                                        <Link
                                            href=""
                                            className="portfolio_item_title text-[16px] text-bluesecondary"
                                        >
                                            Control your workflow: hire, classNameify and pay
                                            your talent
                                        </Link>
                                        <span className="portfolio_item_date flex justify-center items-center whitespace-nowrap text-[14px] text-bluesecondary py-[5px] px-[10px] rounded-[3px] bg-[#EAF1FD]">
                                            Feb 2023
                                        </span>
                                    </div>
                                    <div className="item_text break-words">
                                        <p className="text-[16px] text-black font-light">
                                            Control your workflow: hire, classNameify and pay your
                                            talent
                                        </p>
                                    </div>
                                </div>
                                <div className="p-[20px] border border-[#EBEBEB] rounded-[3px] text-center w-full sm:w-[calc(50%_-_10px)]">
                                    <div className="portfolio_item_header max-[426px]:flex-col flex gap-3 pb-4">
                                        <Link
                                            href=""
                                            className="portfolio_item_title text-[16px] text-bluesecondary"
                                        >
                                            Control your workflow: hire, classNameify and pay
                                            your talent
                                        </Link>
                                        <span className="portfolio_item_date flex justify-center items-center whitespace-nowrap text-[14px] text-bluesecondary py-[5px] px-[10px] rounded-[3px] bg-[#EAF1FD]">
                                            Feb 2023
                                        </span>
                                    </div>
                                    <div className="item_text break-words">
                                        <p className="text-[16px] text-black font-light">
                                            Control your workflow: hire, classNameify and pay your
                                            talent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default ProfileDetails;