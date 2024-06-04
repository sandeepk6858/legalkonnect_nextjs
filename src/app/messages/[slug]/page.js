"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import { Tooltip, Button, Link } from "@nextui-org/react";


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
              <form className="pr-[20px] w-[100%] padr0"  >
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
                  href="/forum"
                  as={Link}
                  color="primary"
                  className="text-white flex justify-center items-center bg-orangeprimary py-[15px] rounded-none font-[400] text-[18px]"
                >
                  Call
                </Button>
                <Button
                  href="/forum"
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
                        </Link>
                      </div>
                    </div>
                  </form>
                  </div>
                <Button 
                        className="text-white flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] rounded-[30px] font-[400] text-[18px]"
                    > Send
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3635 5.90584C13.2299 5.63003 13.0072 5.40733 12.7314 5.27377L2.45569 0.3014C1.77877 -0.0265516 0.964197 0.256367 0.636245 0.933285C0.46917 1.27818 0.455125 1.67753 0.597595 2.0333L2.38443 6.4995L0.597595 10.9662C0.319279 11.6668 0.661675 12.4605 1.36235 12.7388C1.52078 12.8017 1.68961 12.8344 1.86009 12.8352C2.06634 12.8352 2.26994 12.7886 2.45569 12.699L12.7314 7.72523C13.4084 7.39736 13.6914 6.58279 13.3635 5.90584ZM2.06028 11.8805C1.8346 11.9897 1.5631 11.8953 1.45385 11.6697C1.39818 11.5547 1.39355 11.4216 1.44106 11.303L3.18067 6.95346H12.2425L2.06028 11.8805ZM3.1807 6.04552L1.44108 1.69599C1.36868 1.52261 1.41363 1.32239 1.5532 1.19663C1.6883 1.06498 1.8923 1.0341 2.06028 1.11991L12.2425 6.04552H3.1807Z" fill="white"></path>
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
