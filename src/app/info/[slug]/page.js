"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import ScriptsCards from "@/components/scripts_cards/scripts_cards";
import JobSlider from "@/components/JobSlider/JobSlider";
import Slider from "react-slick";
import Filter from "@/components/Filter/Filter";
import MoreOptionSvg from "@/components/Icons/moreOptionSvg";
import CertifiedSvg from "@/components/Icons/certifiedSvg";

const InfoJob = () => {
  return (
    <>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] pt-[60px] md:pt-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden bg-bglightgrey">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[20px] pt-[30px] md:pt-[30px] mb-[20px]">
          <div className="flex flex-wrap justify-between gap-[20px] xl:gap-[30px] ">
            <Link
              href="#"
              className="flex items-center gap-2 text-[16px] font-semibold text-bluesecondary cursor-pointer"
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.666 5.5L1.33268 5.5"
                  stroke="#1359C3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6 10.1667L1.33333 5.49999L6 0.83332"
                  stroke="#1359C3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span>Back</span>
            </Link>
            <Link href="#" className=" cursor-pointer">
              <svg
                width="20"
                height="6"
                viewBox="0 0 20 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.5C8.625 0.5 7.5 1.625 7.5 3C7.5 4.375 8.625 5.5 10 5.5C11.375 5.5 12.5 4.375 12.5 3C12.5 1.625 11.375 0.5 10 0.5ZM17.5 0.5C16.125 0.5 15 1.625 15 3C15 4.375 16.125 5.5 17.5 5.5C18.875 5.5 20 4.375 20 3C20 1.625 18.875 0.5 17.5 0.5ZM2.5 0.5C1.125 0.5 0 1.625 0 3C0 4.375 1.125 5.5 2.5 5.5C3.875 5.5 5 4.375 5 3C5 1.625 3.875 0.5 2.5 0.5Z"
                  fill="#1359C3"
                ></path>
              </svg>
            </Link>
          </div>
          <h2 className="text-[36px] leading-[40px] font-[400] text-bluesecondary mt-[50px]">
            Divorce
          </h2>
          <div className="flex justify-between items-center">
            <ul className="flex gap-[20px] mt-[50px]">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-bluesecondary"
                >
                  View Job posting
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="#"
                  className="text-bluesecondary font-bold before:content-[''] before:absolute before:w-full before:h-[1px] pb-[20px] before:bg-bluesecondary before:bottom-[-2px] before:left-0"
                >
                  Job Details
                </Link>
              </li>
            </ul>
            <div className="flex gap-[40px] items-center mt-[30px]">
              <p className="text-yellow bg-yellowbglight py-[5px] px-[10px]">
                Sign contract to start
              </p>
              <div className="flex gap-[10px] items-center">
                <img src={imageURL("no_avatar.jpg")} height={30} width={30} />
                <p>Attorney Attorneys</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[20px] pt-[30px] md:pt-[30px] mb-[0px]">
          <div className=" myshadow p-[20px]">
            <h3 className="text-[16px] font-[600] text-bluesecondary mb-[20px]">
              Job Details
            </h3>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-[20px] xl:gap-[30px]">
              <div className=" w-full md:w-1/2">
                <div className="mb-[20px]">
                  <p className="text-[14px] font-[400] leading-[17px]">
                    Posted 2 years ago
                  </p>
                  <p className="text-[16px] leading-[24px] font-[400] text-bluesecondary">
                    Divorce
                  </p>
                </div>
                <div className="mb-[15px]">
                  <p className="text-[16px] leading-[24px] font-[400] text-bluesecondary flex gap-1">
                    <span>Fixed price</span>{" "}
                    <span>
                      <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6377 11.5647C12.1294 10.9595 11.4357 10.6162 10.6573 10.6162H9.20818V9.50273C9.53141 9.12832 9.80029 8.70457 10.0108 8.27973C10.4246 8.2098 10.84 7.78088 11.0561 7.1684C11.3201 6.4198 11.2022 5.74791 10.7741 5.50688C10.954 4.5367 10.689 3.37802 10.0603 2.50492C9.36155 1.53446 8.2812 1 7.01607 1C5.75089 1 4.66995 1.53452 3.97117 2.50502C3.34448 3.37549 3.07706 4.52964 3.25365 5.49789C2.81238 5.73067 2.68293 6.41021 2.95024 7.16846C3.17354 7.80092 3.58211 8.22553 4.00737 8.28302C4.23003 8.73177 4.46744 9.1788 4.84454 9.56776V10.6162H3.37755C2.5991 10.6162 1.8874 10.9595 1.37917 11.5647C0.906174 12.1281 0.642578 12.8839 0.642578 13.6749V15.1939C0.642578 15.3501 0.734753 15.4927 0.875252 15.561C3.13249 16.6596 5.26647 17 7.04274 16.9999C7.9778 16.9999 8.81513 16.9056 9.5187 16.7778C11.7339 16.3757 13.1092 15.5808 13.1672 15.5472C13.2933 15.4742 13.3564 15.3396 13.3564 15.1939V13.6749C13.3563 12.884 13.1107 12.1281 12.6377 11.5647ZM7.48427 13.2995C7.48427 13.454 7.35908 13.5791 7.20468 13.5791H6.79423C6.63978 13.5791 6.51463 13.4539 6.51463 13.2995V12.8891C6.51463 12.7346 6.63983 12.6095 6.79423 12.6095H7.20468C7.35913 12.6095 7.48427 12.7347 7.48427 12.8891V13.2995ZM7.74652 11.9209C7.59207 11.8377 7.41543 11.8013 7.22763 11.8013H6.80705C6.61931 11.8013 6.4426 11.8377 6.28815 11.9209L5.60856 11.2377C5.63776 11.1815 5.65257 11.1122 5.65257 11.0444V10.3173C6.02968 10.5977 6.50827 10.7699 6.99905 10.7699C7.51153 10.7699 7.96907 10.5816 8.40005 10.2787V11.0444C8.40005 11.0976 8.42682 11.1537 8.44524 11.2003L7.74652 11.9209ZM4.63444 2.98211C5.01726 2.45034 5.74146 1.81648 7.01737 1.81648C8.29327 1.81648 9.01742 2.45029 9.40023 2.98201C9.99584 3.80916 10.1036 4.79965 9.95528 5.45473C7.28339 6.10836 6.00366 3.599 5.95091 3.49271C5.87291 3.33347 5.70159 3.24318 5.52549 3.26866C5.34997 3.29425 5.21104 3.43038 5.18162 3.60531C5.17866 3.62303 4.89039 5.19098 4.08134 5.46255C3.93034 4.80778 4.03641 3.81261 4.63444 2.98211ZM3.63824 6.30241C4.76702 6.39162 5.43967 5.41826 5.73526 4.63976C5.91385 4.86462 6.13957 5.11302 6.41373 5.3499C7.20296 6.03192 8.11361 6.37966 9.0895 6.37966C9.43638 6.37966 10.0103 6.3357 10.3712 6.24719C10.3954 6.35661 10.4025 6.59585 10.2963 6.89683C10.174 7.24366 9.99665 7.41875 9.91999 7.46405C9.83326 7.43313 9.73785 7.43227 9.64982 7.46265C9.54273 7.49961 9.45578 7.57929 9.40982 7.68283C8.94426 8.73026 8.03835 9.95343 7.01731 9.95343C5.99396 9.95343 5.0874 8.7266 4.62194 7.67599C4.57432 7.56857 4.48269 7.48679 4.37042 7.45166C4.3306 7.43927 4.28955 7.43313 4.24867 7.43313C4.19625 7.43313 4.1441 7.44326 4.09513 7.46314C4.01761 7.41632 3.84193 7.24124 3.72034 6.89689C3.62628 6.62995 3.62138 6.42249 3.63824 6.30241ZM1.45061 13.6749C1.45061 12.5976 2.13537 11.4242 3.37755 11.4242H4.6763L5.76145 12.5258C5.72745 12.6316 5.7065 12.7583 5.7065 12.8754V13.296C5.7065 13.6025 5.83477 13.8792 6.03754 14.0781L5.67541 16.1111C4.38658 15.9752 2.95902 15.6298 1.45061 14.9362V13.6749V13.6749ZM6.5045 16.169L6.81605 14.3872H7.21863L7.53071 16.1707C7.20328 16.1828 6.86038 16.1838 6.5045 16.169ZM12.5482 14.9473C12.1173 15.1709 10.9445 15.6915 9.32999 15.9805C9.02577 16.0349 8.70033 16.0825 8.34671 16.118L7.97656 14.0782C8.17928 13.8793 8.2923 13.6025 8.2923 13.296V12.8754C8.2923 12.7584 8.28929 12.6316 8.25529 12.5258L9.35838 11.4243H10.6572C11.8993 11.4243 12.5482 12.5977 12.5482 13.675V14.9473H12.5482Z"
                          fill="#1359C3"
                          stroke="#1359C3"
                          stroke-width="0.1"
                        ></path>
                      </svg>
                    </span>
                    <span>0</span>
                  </p>
                  <p className="text-[14px] font-[400] leading-[17px] mt-[36px]">
                    Divorce from wife
                  </p>
                  <p className="text-[16px] leading-[24px] font-[600] text-black mt-[36px]">
                    Suggested questions
                  </p>
                  <p className="text-[14px] font-[400] leading-[17px] mt-[15px]">
                    Do you have any questions about the job description?
                  </p>
                  <p className="text-[14px] font-[400] leading-[17px] mt-[36px]">
                    Do you have any suggestions to make this project/case run
                    successfully?
                  </p>
                  <p className="text-[14px] font-[400] leading-[17px] mt-[36px]">
                    testtset
                  </p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <h3 className="text-[16px] font-[600] text-bluesecondary mb-[20px]">
                  Job Details
                </h3>
                <div>
                  <p className="gap-[10px] flex bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">Talent Type:</span>
                    <span>Attorney</span>
                  </p>
                  <p className="gap-[10px] flex bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">Location:</span>
                    <span>U.S. only</span>
                  </p>
                  <p className="gap-[10px] flex bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">Education:</span>
                    <span></span>
                  </p>
                  <p className="gap-[10px] flex bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">Experience:</span>
                    <span>10 yrs and more</span>
                  </p>
                  <p className="gap-[10px] flex bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">Done cases:</span>
                    <span>50 - 25</span>
                  </p>
                  <p className="gap-[20px] flex bg-bglightgrey p-[15px] mb-[15px]">
                    <span>
                      <CertifiedSvg width="20px" height="20px" />
                    </span>
                    <span className="text-[15px] font-[600]">
                      Certified Attorney
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[20px] pt-[30px] md:pt-[30px] mb-[10px]">
          <div className=" myshadow p-[20px]">
            <h3 className="text-[16px] font-[600] text-bluesecondary mb-[20px]">
              Terms
            </h3>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-[20px] xl:gap-[30px]">
              <div className=" w-full md:w-1/3">
                <div className="mb-[20px]">
                  <p className="text-[16px] font-[600] text-bluesecondary mb-[20px]">
                    For this job fixed price
                  </p>
                </div>
              </div>
              <div className=" w-full md:w-1/3">
                <h3 className="text-[16px] font-[400] text-black mb-[10px]">
                  Fixed rate
                </h3>
                <div>
                  <p className="gap-[10px] flex justify-between bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">33</span>
                    <span> / fixed</span>
                  </p>
                </div>
              </div>
              <div className=" w-full md:w-1/3">
                <h3 className="text-[16px] font-[400] text-black mb-[10px]">
                  You'll Receive
                </h3>
                <div>
                  <p className="gap-[10px] flex justify-between bg-bglightgrey p-[15px] mb-[15px]">
                    <span className="text-[15px] font-[600]">$30</span>
                    <span> / fixed</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-[50px]">
              <label className="text-[16px] font-[600] text-black mb-[20px]">
                Description*
              </label>
              <textarea className="w-full h-[200px] border-1 border-slate-200 mt-[10px]"></textarea>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-[20px] xl:gap-[30px]">
              <div className=" w-full md:w-1/2">
                <label className="text-[16px] font-[400] text-black mb-[10px]">
                Amount*
                </label>
                <div>
                <div>
                  <input type="text" className="gap-[10px] w-full flex justify-between bg-bglightgrey p-[15px] mb-[15px]"
                  />
                </div>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <label className="text-[16px] font-[400] text-black mb-[10px]">
                Date*
                </label>
                <div>
                  <input type="text" className="gap-[10px] w-full flex justify-between bg-bglightgrey p-[15px] mb-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[20px] pt-[30px] md:pt-[30px] mb-[10px]">
          <div className=" myshadow p-[20px]">
            <h3 className="text-[16px] font-[600] text-bluesecondary mb-[20px]">
              Additional details
            </h3>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-[20px] xl:gap-[30px]">
              <div className=" w-full">
                <div className="mb-[20px]">
                  <p className="text-[16px] font-[400] text-black mb-[20px]">
                    Cover Letter
                  </p>
                  <div>
                    <p className="gap-[10px] flex justify-between bg-bglightgrey p-[15px] mb-[15px]">
                      <span className="text-[15px] font-[400]">
                        ewfdwefwe 34rf342ferfergfergg gergergregfdb
                        vergergergregerwgg
                      </span>
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Link className="gap-[10px] flex items-center bg-lightgreen p-[15px] mb-[15px]">
                      <span>
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
                      </span>
                      <span className="text-[15px] font-[400] text-parrotgreen">
                        Review Legal Konnect 13.4.22 - Response.docx
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[20px] pt-[30px] md:pt-[30px] mb-[10px]">
          <div className=" myshadow p-[20px]">
            <h3 className="text-[16px] font-[600] text-bluesecondary mb-[20px]">
              Confirm Contract
            </h3>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-[20px] xl:gap-[30px]">
              <div className=" w-full">
                <div className="mb-[20px]">
                  <p className="text-[16px] font-[400] text-black mb-[20px]">
                    Your Signature
                  </p>

                  <div className="relative">
                    <textarea className="w-full h-[200px] border-1 border-slate-200 "></textarea>
                    <Button
                      href="/"
                      as={Link}
                      color="primary"
                      className="text-bluesecondary w-[250px] absolute top-0 bottom-0 left-0 right-0 z[1] h-[50px] flex justify-center items-center bg-[#eaf1fd] py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[16px]"
                    >
                      Touch to write your signature
                    </Button>
                  </div>
                  <Button
                    href="/"
                    as={Link}
                    color="primary"
                    className="text-white w-[150px] h-[50px] flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mt-[40px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoJob;
