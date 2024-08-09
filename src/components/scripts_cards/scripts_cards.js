"use client";
import { formatDateString, imageURL } from "@/components/utils/helper/helper";
import React, { useState } from "react";
import { Link, Button } from "@nextui-org/react";
const ScriptsCards = ({ data, model }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleIcons = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <div className="w_wid p-[20px] lf:p-[30px] w-1/1 md:w-1/3 lg:w-1/4 flex flex-col items-start bg-[#fff] shadow-lg rounded-[20px]">
        <div className="flex justify-between items-center w-[100%]">
          <Link href={`/${model}/${data[model]?.id}`} className="text-[20px] leading-[24px] font-font-medium cursor-pointer text-blackcolor">
            {data[model]?.title}
          </Link>
          <div className="share_btn relative" onClick={toggleIcons}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4416 15.9352L14.478 15.9559L14.5048 15.9237C15.2924 14.9756 16.4791 14.3709 17.8047 14.3709C20.1695 14.3709 22.0934 16.2955 22.0933 18.6609C22.0933 21.0257 20.1694 22.9499 17.8046 22.9499C15.4396 22.9499 13.5154 21.0258 13.5154 18.6609C13.5154 18.1585 13.6029 17.6763 13.7623 17.228L13.7764 17.1885L13.7399 17.1678L8.55779 14.2254L8.52139 14.2048L8.49464 14.237C7.70715 15.1848 6.52058 15.7892 5.1953 15.7892C2.82994 15.7892 0.905469 13.8651 0.905469 11.5002C0.905469 9.13516 2.82994 7.21108 5.1953 7.21108C6.52058 7.21108 7.70726 7.81553 8.49474 8.76344L8.52149 8.79564L8.55789 8.77497L13.7399 5.83194L13.7764 5.81123L13.7623 5.77172C13.603 5.32337 13.5155 4.84133 13.5155 4.33902C13.5155 1.97408 15.4397 0.05 17.8047 0.05C20.1695 0.05 22.0934 1.97407 22.0932 4.33912C22.0932 6.7049 20.1693 8.62956 17.8045 8.62956C16.4788 8.62956 15.2919 8.02471 14.5044 7.0763L14.4776 7.04408L14.4412 7.06476L9.2595 10.0077L9.22304 10.0284L9.23708 10.0679C9.39637 10.5162 9.48392 10.9981 9.48392 11.5003C9.48392 12.0026 9.39637 12.4845 9.23708 12.9328L9.22304 12.9723L9.25951 12.993L14.4416 15.9352ZM20.6751 4.33902C20.6751 2.75609 19.3875 1.46838 17.8047 1.46838C16.2217 1.46838 14.9339 2.75608 14.9339 4.33902C14.9339 5.92275 16.2217 7.21108 17.8047 7.21108C19.3875 7.21108 20.6751 5.92274 20.6751 4.33902ZM2.32395 11.5003C2.32395 13.0832 3.61207 14.3709 5.1954 14.3709C6.77804 14.3709 8.06564 13.0831 8.06564 11.5003C8.06564 9.91727 6.77815 8.62956 5.1954 8.62956C3.61207 8.62956 2.32395 9.91725 2.32395 11.5003ZM14.9339 18.661C14.9339 20.2438 16.2217 21.5316 17.8047 21.5316C19.3875 21.5316 20.6751 20.2438 20.6751 18.661C20.6751 17.0776 19.3875 15.7893 17.8047 15.7893C16.2217 15.7893 14.9339 17.0775 14.9339 18.661Z"
                fill="#878787"
                stroke="white"
                strokeWidth="0.1"
              ></path>
            </svg>
            {isShown && (
              <ul className="social-icon flex relative right-[-36px] top-[-24px]">
                <li>
                  <Link target="_blank"
                    href={data.facebook_url ? data.facebook_url : "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalkonnect.com%2Fusers%2Fprofile%2F440%26quote%3DClient+Dev"}

                    className="facebook"
                  >
                    <img src="https://legalkonnect.com/img/social-facebook.svg" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={data.twitter_url ? data.twitter_url : "https://twitter.com/intent/tweet?text=Client+Dev+https%3A%2F%2Flegalkonnect.com%2Fusers%2Fprofile%2F440"}

                    className="twitter"
                  >
                    <img src="https://legalkonnect.com/img/social-twitter.svg" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={data.pinterest_url ? data.pinterest_url : "https://pinterest.com/pin/create/button/?url=https%3A%2F%2Flegalkonnect.com%2Fusers%2Fprofile%2F440&amp;media=/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg&amp;description=Client+Dev"}

                    className="pinterest"
                  >
                    <img
                      className="w-[35px] max-w-[none]"
                      src="https://legalkonnect.com/img/social-pinterest.svg"
                    />
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <span className="inline-block text-[16px] pt-[10px] font-medium mb-[40px]">
          Posted {formatDateString(data[model]?.created_at)}
        </span>
        <div className="flex flex-col justify-start items-start text-blackcolor">
          <p className="text-[14px] mb-[7px] leading-[20px]">
            Offer: <span className="font-medium text-blackcolor">{data[model]?.offer}</span>
          </p>
          <p className="text-[14px] mb-[7px] leading-[20px]">
            Document Type:{" "}
            <span className="font-medium text-blackcolor">{data[model]?.doc_type}</span>
          </p>
          <p className="text-[14px] mb-[7px] leading-[20px]">
            Country:{" "}
            <span className="font-medium text-blackcolor">
              {model === "motions" ? data[model]?.Country?.name : data[model]?.country_name?.name}
            </span>
          </p>
          <p className="text-[14px] mb-[7px] leading-[20px]">
            State:{" "}
            <span className="font-medium text-blackcolor">{data[model]?.state}</span>
          </p>
          <p className="text-[14px] mb-[7px] leading-[20px]">
            County:{" "}
            <span className="font-medium text-blackcolor">
              {data[model]?.county}
            </span>
          </p>
          <p className="text-[14px] mb-[7px] leading-[20px]">
            Legal Issue:{" "}
            <span className="font-medium text-blackcolor">
              {data[model]?.legal_issue}
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center w-full mt-[30px]">
          <div className="inline-flex items-center">
            <img
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              src={data[model]?.user?.avatar[0]?.url ? data[model]?.user.avatar[0].url : imageURL("no_avatar.jpg")}
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-black">
                <Link href={"/users/profile/" + data[model]?.user?.id} className="text-black">
                  {data[model]?.user?.first_name + " " + (data[model]?.user?.last_name ? data[model]?.user.last_name : "")}
                </Link>
              </span>
            </span>
          </div>
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
            {data[model]?.orders?.length}
          </span>
        </div>
      </div>
    </>
  );
};
export default ScriptsCards;
