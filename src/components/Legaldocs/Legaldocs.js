"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React, { useState } from "react";
import { Link, Button } from "@nextui-org/react";
import SocialPopup from "@/components/socialPopup";
import ShareSvg from "@/components/Icons/shareSvg";

const Legaldocs = () => {
  const [socialPopupT, setSocialPopupT] = useState(false);

  const SocialPopupToggle = () => {
      setSocialPopupT(!socialPopupT);
  }
  return (
    <>
    <div className="w_wid p-[20px] lf:p-[30px] w-1/1 md:w-1/3 lg:w-1/4 flex flex-col items-start bg-[#fff] shadow-[-1px_2px_8px_0px_rgba(215,215,215,1)] rounded-[20px]">
              <div className="flex justify-between items-center w-[100%]">
                <h2 className="text-[20px] leading-[24px] font-font-medium cursor-pointer">
                  Heading of transcript
                </h2>
                <div className="flex pl-10 gap-1 cursor-pointer relative z-50">
                        <SocialPopup socialPopupT={socialPopupT} />
                        <ShareSvg width={`20px`} height={`20px`} fill={`fill-blueprimary`} hover={`hover:fill-bluesecondary`} SocialPopupToggle={SocialPopupToggle} />
                    </div>
              </div>
              <span className="inline-block text-[16px] pt-[10px] font-medium mb-[40px]">
                Posted 24-01-2022 17:40:04
              </span>
              <p className="text-[14px] mb-[7px] leading-[20px]">
                Offer: <span className="font-medium text-blackcolor">66</span>
              </p>
              <p className="text-[14px] mb-[7px] leading-[20px]">
                Document Type:{" "}
                <span className="font-medium text-blackcolor">Motion</span>
              </p>
              <p className="text-[14px] mb-[7px] leading-[20px]">
                Country:{" "}
                <span className="font-medium text-blackcolor">
                  United States
                </span>
              </p>
              <p className="text-[14px] mb-[7px] leading-[20px]">
                State:{" "}
                <span className="font-medium text-blackcolor">Arizona</span>
              </p>
              <p className="text-[14px] mb-[7px] leading-[20px]">
                County:{" "}
                <span className="font-medium text-blackcolor">
                  La Paz County
                </span>
              </p>
              <p className="text-[14px] mb-[7px] leading-[20px]">
                Legal Issue:{" "}
                <span className="font-medium text-blackcolor">
                  Legal issues to be mentioned here
                </span>
              </p>

              <div className="flex items-center justify-between flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-[30px] w-full">
                <Link className="text-orangeprimary inline-flex items-center cursor-pointer font-semibold">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <span className="text-blueprimary gap-[5px] inline-flex items-center leading-none text-[16px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 12.3334H1.16667C0.523333 12.3334 0 12.8567 0 13.5V14.8334C0 15.4767 0.523333 16 1.16667 16H9.16667C9.81 16 10.3333 15.4767 10.3333 14.8334V13.5C10.3333 12.8567 9.81 12.3334 9.16667 12.3334ZM9.33333 14.8334C9.33333 14.9254 9.25867 15 9.16667 15H1.16667C1.07467 15 1 14.9254 1 14.8334V13.5C1 13.408 1.07467 13.3334 1.16667 13.3334H9.16667C9.25867 13.3334 9.33333 13.408 9.33333 13.5V14.8334Z"
                      fill="#1359C3"
                    ></path>
                    <path
                      d="M10.2273 6.29867C10.5526 5.90334 10.8246 5.50001 10.9699 5.13C10.9746 5.13 10.9793 5.13134 10.9833 5.13134C11.2806 5.13134 11.5786 5.018 11.8046 4.79134L12.2726 4.32401C12.7259 3.87067 12.7259 3.134 12.2726 2.68067L9.93258 0.340671C9.47925 -0.112662 8.74259 -0.112662 8.28992 0.340671L7.82192 0.808671C7.59325 1.03734 7.48059 1.338 7.48325 1.63867C7.26259 1.72734 7.07392 1.84534 6.96992 1.91134C6.05059 2.496 4.82725 3.72001 4.24325 4.63934C4.17725 4.742 4.05992 4.93001 3.97192 5.14934C3.67125 5.14734 3.37059 5.25934 3.14125 5.488L2.67392 5.95667C2.45459 6.176 2.33325 6.46734 2.33325 6.778C2.33325 7.08867 2.45459 7.38 2.67392 7.59934L5.01392 9.93934C5.24059 10.166 5.53792 10.2793 5.83525 10.2793C6.13259 10.2793 6.43058 10.166 6.65658 9.93934L7.12459 9.47134C7.35392 9.242 7.46658 8.93934 7.46325 8.638C7.68192 8.55 7.87125 8.436 7.97392 8.37067C8.17725 8.24134 8.39925 8.076 8.62792 7.88934C10.3126 9.85134 12.7193 12.4973 13.1513 12.93C13.5339 13.3127 14.0346 13.67 14.5693 13.67C14.8886 13.67 15.2213 13.542 15.5473 13.2153C15.6673 13.0953 15.9473 12.8153 15.9926 12.3633C16.0419 11.8727 15.7959 11.3527 15.2619 10.8193C14.8353 10.3907 12.1953 7.98867 10.2273 6.29867ZM8.52858 1.51534L8.99658 1.04734C9.02792 1.016 9.06925 1 9.11125 1C9.15258 1 9.19458 1.016 9.22592 1.04734L11.5659 3.38734C11.6293 3.45067 11.6293 3.55334 11.5659 3.61667L11.0979 4.084C11.0346 4.14667 10.9319 4.14667 10.8686 4.084L8.52858 1.744C8.46592 1.68067 8.46592 1.57867 8.52858 1.51534ZM6.41725 8.764L5.94925 9.232C5.88592 9.294 5.78325 9.294 5.72059 9.232L3.38059 6.892C3.33925 6.85067 3.33325 6.80267 3.33325 6.778C3.33325 6.75334 3.33925 6.70534 3.38059 6.66334L3.84859 6.19534C3.87992 6.164 3.92192 6.148 3.96325 6.148C4.00459 6.148 4.04659 6.164 4.07792 6.19534L6.41792 8.53534C6.48059 8.59801 6.48059 8.70134 6.41725 8.764ZM7.03659 7.74L4.87259 5.576C5.04992 4.84934 7.18259 2.716 7.90925 2.53867L10.0733 4.70267C9.89792 5.42534 7.76259 7.56334 7.03659 7.74ZM14.8413 12.5087C14.6939 12.6567 14.4919 12.8553 13.8586 12.2227C13.4846 11.8487 11.1079 9.244 9.37125 7.22C9.40125 7.19067 9.52325 7.07067 9.55392 7.03934C11.5846 8.78134 14.1846 11.1553 14.5553 11.5253C14.9793 11.9493 15.0059 12.182 14.9979 12.2627C14.9899 12.3533 14.9253 12.4247 14.8413 12.5087Z"
                      fill="#1359C3"
                    ></path>
                  </svg>
                  6
                </span>
              </div>
              <Link className="inline-flex items-center">
                {/* <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/> */}
                <img
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  src={imageURL("no_avatar.jpg")}
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Demo Account
                  </span>
                </span>
              </Link>
            </div>
     
    </>
  );
};

export default Legaldocs;
