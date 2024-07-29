"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React, { useState } from "react";
import Image from "next/image";
import JobSlider from "@/components/JobSlider/JobSlider";
import { Tooltip, Button, Link } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import LocationSvg from "@/components/Icons/locationSvg";
import SocialPopup from "@/components/socialPopup";
import ShareSvg from "@/components/Icons/shareSvg";
import VerifiedSVG from "@/components/Icons/VerifiedSVG";
import MakeBidPopUp from "@/components/makeBidPopUp";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";



const profile = () => {
  const [socialPopupT, setSocialPopupT] = useState(false);

  const SocialPopupToggle = () => {
    setSocialPopupT(!socialPopupT);
  };

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["By Date"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[20px]  border-2 border-slate-300 max-w-[1200px] mx-auto p-[30px]">
          <div className="flex justify-between flex-wrap ">
            <div className="flex gap-[10px] flex-wrap">
              <img
                className="w-[80px] h-[80px]"
                src={imageURL("header_profile_img.jpg")}
              />
              <span className="online_person"></span>

              <div>
                <Link href="#">
                  <h3 className="text-[22px] md:text-[26px] leading-[24px] font-medium text-blackcolor">
                    Attorney Attorneys
                  </h3>
                </Link>
                <br></br>
                <Link className="text-[14px] mt-[0px] text-blackcolor" href="">
                  <LocationSvg width={20} height={20} />
                  <span>lko</span>
                </Link>
                <div className="mb10 mt-3 flex items-center gap-6">
                  <Link
                    className=" bg-orangeprimary p-[5px] rounded-[50px] text-[#fff]"
                    href="mailto:attorney@attorney.com"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M1.70908 1.67287H12.288C13.2324 1.67287 14 2.44051 14 3.38486V10.6151C14 11.5595 13.2324 12.3271 12.288 12.3271H1.71198C0.767638 12.3271 0 11.5595 0 10.6151V3.38775C-0.00289726 2.44341 0.764742 1.67287 1.70908 1.67287ZM0.779225 10.6151C0.779225 11.1279 1.19636 11.545 1.70908 11.545H12.288C12.8007 11.545 13.2179 11.1279 13.2179 10.6151V3.38775C13.2179 2.87503 12.8007 2.45789 12.288 2.45789H1.71198C1.19925 2.45789 0.782123 2.87503 0.782123 3.38775V10.6151H0.779225Z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5.17096 6.9102L1.747 3.83965C1.58768 3.69481 1.5732 3.44858 1.71803 3.28637C1.86287 3.12704 2.1091 3.11256 2.27131 3.2574L6.99302 7.49535L7.91419 6.67267C7.91708 6.66977 7.91998 6.66688 7.91998 6.66398C7.94026 6.6437 7.96053 6.62632 7.98371 6.60894L11.7321 3.2545C11.8943 3.10966 12.1405 3.12415 12.2854 3.28637C12.4302 3.44858 12.4157 3.69481 12.2535 3.83965L8.78901 6.93627L12.239 10.1662C12.3955 10.3139 12.4042 10.5601 12.2564 10.7194C12.1782 10.8005 12.0739 10.844 11.9696 10.844C11.874 10.844 11.7785 10.8092 11.7031 10.7397L8.20096 7.46348L7.25083 8.31223C7.17551 8.37886 7.08282 8.41072 6.99012 8.41072C6.89743 8.41072 6.80183 8.37596 6.72941 8.30933L5.75321 7.43451L2.27131 10.7426C2.196 10.815 2.09751 10.8498 2.00191 10.8498C1.89763 10.8498 1.79625 10.8092 1.71803 10.7281C1.5703 10.5717 1.57609 10.3226 1.73252 10.1748L5.17096 6.9102Z"
                          fill="#fff"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="14"
                            height="14"
                            transform="matrix(-1 0 0 1 14 0)"
                            fill="white"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <span>
                    <SocialPopup socialPopupT={socialPopupT} />
                    <ShareSvg
                      width={`20px`}
                      height={`20px`}
                      fill={`fill-blueprimary`}
                      hover={`hover:fill-bluesecondary`}
                      SocialPopupToggle={SocialPopupToggle}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-[20px] flex-wrap">
              {/* <Tooltip
                className="bg-orangeprimary p-[10px] text-white w-[150px]"
                content="Make a bid for this attorney to handle your case"
              > */}
                {/* <Button
                  href=""
                  as={Link}
                  color="primary"
                  className="text-white w-[150px] h-[50px] btn420 flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[0px] rounded-[30px] font-[400] text-[18px]"
                >
                  Make a Bid
                </Button> */}
                <MakeBidPopUp />
              {/* </Tooltip> */}
              <Button
                href="/messages/slug"
                as={Link}
                color="primary"
                className="text-white w-[150px] btn420 h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[0px] rounded-[30px] font-[400] text-[18px]"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6145 2.57116C12.1097 1.35427 10.1158 0.684101 8 0.684101C5.88418 0.684101 3.89026 1.35427 2.38546 2.5712C0.847176 3.81524 0 5.47936 0 7.25705C0 9.03478 0.847176 10.699 2.38546 11.9429C3.89026 13.1599 5.88418 13.8301 8 13.8301C8.21541 13.8301 8.43245 13.8229 8.64846 13.8087L10.0111 16.0557C10.1068 16.2134 10.2763 16.3115 10.4608 16.3159C10.465 16.316 10.4691 16.316 10.4733 16.316C10.653 16.316 10.8215 16.2266 10.922 16.0769L13.807 11.7815C15.2223 10.5564 16 8.95451 16 7.25713C16 5.47932 15.1529 3.81519 13.6145 2.57116ZM13.0127 11.0377L10.4966 14.7712L9.39933 12.9619C9.30078 12.7993 9.12481 12.7016 8.93721 12.7016C8.91909 12.7016 8.90089 12.7025 8.88264 12.7043C8.59065 12.7339 8.29368 12.7488 7.99991 12.7488C4.18481 12.7488 1.08105 10.2851 1.08105 7.25692C1.08105 4.22875 4.18481 1.76511 7.99991 1.76511C11.815 1.76511 14.9188 4.22875 14.9188 7.25692C14.9189 8.6684 14.2419 10.011 13.0127 11.0377Z"
                    fill="white"
                  ></path>
                  <path
                    d="M13.0127 11.0377L10.4966 14.7712L9.39933 12.9619C9.30078 12.7993 9.12481 12.7016 8.93721 12.7016C8.91909 12.7016 8.90089 12.7025 8.88264 12.7043C8.59065 12.7339 8.29368 12.7488 7.99991 12.7488C4.18481 12.7488 1.08105 10.2851 1.08105 7.25692C1.08105 4.22875 4.18481 1.76511 7.99991 1.76511C11.815 1.76511 14.9188 4.22875 14.9188 7.25692C14.9189 8.6684 14.2419 10.011 13.0127 11.0377Z"
                    fill="white"
                  ></path>
                </svg>
                Write Message
              </Button>
              <Link href="tel:7412583698" className="call_btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pro_svgcall"
                >
                  <path
                    d="M15.6413 12.6447L13.1703 10.1735C12.6782 9.68328 11.8631 9.69818 11.3538 10.2077L10.109 11.4523C10.0303 11.4089 9.94889 11.3636 9.8633 11.3156C9.07718 10.88 8.00123 10.283 6.86902 9.14998C5.73346 8.01455 5.13589 6.93695 4.69898 6.15032C4.65287 6.06698 4.6087 5.98663 4.56507 5.91032L5.40057 5.07607L5.81133 4.66481C6.32142 4.15457 6.33549 3.33977 5.84447 2.84815L3.37352 0.37665C2.8825 -0.114276 2.0671 -0.0993832 1.557 0.410849L0.860607 1.11125L0.879637 1.13014C0.646126 1.4281 0.450997 1.77174 0.305787 2.14233C0.171932 2.49508 0.0885941 2.83169 0.0504876 3.169C-0.275785 5.87387 0.960263 8.34592 4.31474 11.7004C8.95164 16.337 12.6884 15.9868 12.8496 15.9697C13.2007 15.9277 13.5372 15.8438 13.8791 15.711C14.2465 15.5675 14.5899 15.3726 14.8877 15.1396L14.9029 15.1532L15.6084 14.4623C16.1174 13.9522 16.1321 13.1371 15.6413 12.6447Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="container flex flex-wrap m0px m-[0px]">
            <div className="md:w-1/3 pr-[0px] md:pr-[20px] md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 wid100 mb20 ">
              <div className="flex items-center justify-between gap-3 mb-[30px] ">
              <Button
                href="/login"
                className="text-white w-[200px] btn420 h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px]"
              >
                {" "}
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.666 5.5L1.33268 5.5"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6 10.1667L1.33333 5.49999L6 0.83332"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Back to Search
              </Button>
              {/* <span>
                <SocialPopup socialPopupT={socialPopupT} />
                <ShareSvg
                  width={`20px`}
                  height={`20px`}
                  fill={`fill-blueprimary`}
                  hover={`hover:fill-bluesecondary`}
                  SocialPopupToggle={SocialPopupToggle}
                />
              </span> */}
              </div>
              <h3 className="text-[18px] leading-[24px] font-semibold">
                View Profile
              </h3>
              <p className="bg-orangeprimary p-[10px] text-white text-[16px] font-medium rounded-[6px] my-[30px]">
                General Information
              </p>
              <div className="">
                <p className="text-[16px] leading-[24px] text-blackcolor mb-[20px]">
                  Hourly Fee: $ 25
                </p>
                <p className="text-[16px] leading-[24px] text-blackcolor mb-[20px]">
                  Earned: $ 50
                </p>
              </div>
              <div>
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  Verified
                </h4>
                <p className="text-[16px] leading-[24px] text-blackcolor flex gap-2">
                  <span>Attorney</span> <span><VerifiedSVG  width={25} height={25} /></span>
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  Languages
                </h4>
                <p className="text-[16px] leading-[24px] text-blackcolor">
                  Arabic (Fluent), Afrikaans (Basic)
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  Education
                </h4>
                <p className="text-[16px] leading-[24px] text-blackcolor">
                  MCA | lko 2014 - 2018
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  Location
                </h4>
                <p className="text-[16px] leading-[24px] text-blackcolor">
                  Country
                </p>
                <p className="text-[16px] leading-[24px] text-[#858181]">
                  Afghanistan
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  State
                </h4>
                <p className="text-[16px] leading-[24px] text-[#858181]">
                  Alaska
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  County
                </h4>
                <p className="text-[16px] leading-[24px] text-[#858181]">
                  Autauga County
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                  Talent Type
                </h4>
                <p className="text-[16px] leading-[24px] text-[#858181]">
                  Process server
                </p>
              </div>
              <div className="mt-[25px]">
                <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[10px] font-semibold">
                  Specialization
                </h4>
                <p className="text-[16px] leading-[24px] text-[#858181]">
                  <Link
                    className="bg-[#eaf1fd] py-[5px] px-[25px] rounded-[20px] mr-[10px] apppad"
                    href="#"
                  >
                    Appellate
                  </Link>
                  <Link
                    className="bg-[#eaf1fd] py-[5px] px-[25px] rounded-[20px] apppad"
                    href="#"
                  >
                    Personal Injury Lawyer
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:w-2/3 pl-[0px] md:pl-[30px] wid100">
              <div className="flex flex-wrap list-none -mb-1">
                <div className=" w-[100%]">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[22px] leading-[32px] text-blackcolor font-bold">
                        About me
                      </h3>
                      <p className="text-[16px] leading-[24px] text-blackcolor">
                        <b>Fee type</b>{" "}
                        <span className="text-[16px] leading-[24px] text-[#858181]">
                          fixed
                        </span>
                      </p>
                    </div>
                    {/* <h3 className="text-[22px] leading-[32px] text-blackcolor font-bold">
                      About me
                    </h3> */}
                    <p className="text-[16px] leading-[24px] text-blackcolor mb-[20px]">
                      Attorney
                    </p>
                    <div className="mt-[25px]">
                      <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                        Description Of Services Offered And Prices
                      </h4>
                      <p className="text-[16px] leading-[24px] text-[#858181]">
                        test rtset
                      </p>
                    </div>
                    <div className="mt-[20px]">
                      <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                        Resume/CV
                      </h4>
                      <Link
                        href="#"
                        className=" flex gap-[10px] items-center text-textgreen bg-[#eafdea] p-[10px] mt-[10px] max-w-[340px]"
                        download="Screenshot_4.png"
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
                              fill="#f16622"
                            ></path>
                          </svg>
                        </div>
                        <p className="name">Screenshot_4.png</p>
                      </Link>
                    </div>
                    <div className="mt-[20px]">
                      <h4 className="text-[16px] leading-[24px] text-blackcolor mb-[0px] font-semibold">
                        Documents & Sertificates
                      </h4>
                      <Link
                        href="#"
                        className=" flex gap-[10px] items-center text-textgreen bg-[#eafdea] p-[10px] mt-[10px] max-w-[340px]"
                        download="Screenshot_4.png"
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
                              fill="#f16622"
                            ></path>
                          </svg>
                        </div>
                        <p className="name">instagram.png</p>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className=" w-1/2">
                  <div className="text-right">
                    <p className="text-[16px] leading-[24px] text-blackcolor mb-[20px]">
                      <b>Fee type</b>{" "}
                      <span className="text-[16px] leading-[24px] text-[#858181]">
                        fixed
                      </span>
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="flex flex-wrap list-none mt-[50px] border-t-[1px] border-slate-300 pt-[40px]">
                <div className=" w-1/2 wid480">
                  <div className="">
                    <h3 className="text-[18px] leading-[26px] text-blackcolor font-bold">
                      Work History & Feedback
                    </h3>
                  </div>
                </div>
                <div className=" w-1/2 wid480">
                  <div className="sort_select_wrpr flex gap-2 items-center justify-end">
                    <label className="little_text_label text-[16px] text-black">
                      Sort by
                    </label>
                    <Dropdown className="">
                      <DropdownTrigger>
                        <Button variant="bordered" className="sort_drop_pro">
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
              </div>
              <p className="text-[16px] !p-[20px] mt-[30px] text-center leading-[24px] border-b-greyborder border-t-greyborder border-b-[2px] border-t-[2px]">
                No record found !!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default profile;
