"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import { Tooltip, Button, Link } from "@nextui-org/react";
import VideoSvg from "@/components/Icons/videoSvg";

const messages = () => {
  return (
    <>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] pb-[60px] md:pb-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>

      <section className="text-blackcolor body-font overflow-hidden px-[15px] lg:px-[40px] pb-[60px] md:pb-[80px]">
        <div className="container px-[15px] border-2 border-slate-300 max-w-[1200px] mx-auto p-[30px]">
          <div className="flex gap-[30px] mediawrap">
            <div className="mediacol md:w-1/3 border-r-2 border-slate-300">
              <div className="flex flex-wrap items-center gap-[20px]">
                <h3>Messages</h3>
                <form className="pr-[20px] w-[100%] padr0">
                  <div className="flex">
                    <div></div>
                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search..."
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orangeprimary rounded-e-lg border border-orangeprimary hover:bg-orangeprimary focus:ring-4 focus:outline-none"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="mediacol md:w-2/3">
              <div className="flex items-center justify-between gap-[15px] procal">
                <div className="flex items-center gap-[15px]">
                  <img className="w-[50px]" src={imageURL("no_avatar.jpg")} />
                  <h3 className="text-[16px] leading-[26px] font-semibold">
                    Attorney Attorneys
                  </h3>
                </div>
                <div className="flex gap-[50px] btnvid">
                  <Button
                    href="#"
                    as={Link}
                    color="primary"
                    className="text-white flex justify-center items-center bg-orangeprimary py-[15px] rounded-none font-[400]"
                  >
                    <VideoSvg />
                  </Button>
                  <Button
                    href="#"
                    as={Link}
                    color="primary"
                    className="text-white flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px]"
                  >
                    Delete chat
                  </Button>
                </div>
              </div>
              <div className="pt-[300px] padt0">
                <div className="flex items-center gap-[15px] widwrap">
                  {/* <img className="w-[50px]" src={imageURL("https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg")} /> */}
                  <div className="flex items-center gap-[15px] w-[100%]">
                    <img
                      className="w-[50px]"
                      src="https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg"
                    />
                    <form className="w-[100%]">
                      <div className="flex">
                        <div className="relative w-full flex items-center gap-[15px]">
                          <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Type your message here..."
                            required
                          />
                          <Link
                            href="#"
                            className=" flex gap-[10px] items-center text-textgreen  p-[10px]"
                            download="Screenshot_4.png"
                          >
                            <div className="icon">
                              <svg
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0927 6.45741C12.4359 6.11424 12.4359 5.5579 12.0927 5.21458C11.7495 4.8714 11.1931 4.8714 10.8499 5.21458L3.73772 12.3267C2.65983 13.4048 2.65983 15.1588 3.73787 16.2367C4.27682 16.7756 4.98483 17.0451 5.69269 17.0451C6.4007 17.0451 7.10871 16.7756 7.64766 16.2367L11.0463 12.8382L11.0464 12.8381L16.7668 7.11751C18.4018 5.48252 18.4018 2.82214 16.7668 1.18715C15.1318 -0.447836 12.4714 -0.447683 10.8365 1.18715L2.98348 9.04013C2.96928 9.05416 2.95662 9.06927 2.94365 9.08407L1.65611 10.3716C0.598209 11.4295 0.015625 12.8411 0.015625 14.3461C0.015625 15.8511 0.598209 17.2625 1.65611 18.3204C2.714 19.3783 4.12545 19.9609 5.63043 19.9609C7.13541 19.9609 8.54701 19.3783 9.60491 18.3204L16.0799 11.8455C16.423 11.5023 16.423 10.9458 16.0799 10.6026C15.7367 10.2593 15.1802 10.2593 14.837 10.6026L8.36192 17.0776C7.63606 17.8036 6.66605 18.2032 5.63043 18.2032C4.59481 18.2032 3.62481 17.8036 2.89894 17.0776C2.17292 16.3517 1.77314 15.3816 1.77314 14.3461C1.77314 13.3105 2.17292 12.3405 2.89894 11.6144L9.37389 5.1395C9.38808 5.12531 9.4009 5.11021 9.41387 5.09525L12.0791 2.42999C13.0288 1.48027 14.5743 1.48027 15.5238 2.42983C16.4735 3.37954 16.4735 4.92496 15.5238 5.87467L13.5173 7.88122C13.5171 7.88137 13.517 7.88152 13.5168 7.88167L6.40482 14.9938C6.01221 15.3864 5.37332 15.3864 4.98071 14.9938C4.58795 14.6012 4.58795 13.9623 4.98071 13.5696L12.0927 6.45741Z"
                                  fill="#1359C3"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <Button className="text-white flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px]">
                    {" "}
                    Send
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3635 5.90584C13.2299 5.63003 13.0072 5.40733 12.7314 5.27377L2.45569 0.3014C1.77877 -0.0265516 0.964197 0.256367 0.636245 0.933285C0.46917 1.27818 0.455125 1.67753 0.597595 2.0333L2.38443 6.4995L0.597595 10.9662C0.319279 11.6668 0.661675 12.4605 1.36235 12.7388C1.52078 12.8017 1.68961 12.8344 1.86009 12.8352C2.06634 12.8352 2.26994 12.7886 2.45569 12.699L12.7314 7.72523C13.4084 7.39736 13.6914 6.58279 13.3635 5.90584ZM2.06028 11.8805C1.8346 11.9897 1.5631 11.8953 1.45385 11.6697C1.39818 11.5547 1.39355 11.4216 1.44106 11.303L3.18067 6.95346H12.2425L2.06028 11.8805ZM3.1807 6.04552L1.44108 1.69599C1.36868 1.52261 1.41363 1.32239 1.5532 1.19663C1.6883 1.06498 1.8923 1.0341 2.06028 1.11991L12.2425 6.04552H3.1807Z"
                        fill="white"
                      ></path>
                    </svg>
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

export default messages;
