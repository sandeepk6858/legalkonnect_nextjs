import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";
import Selectbox from "@/components/selectbox/selectbox";
import Weeklysummaryfpopup from "@/components/weeklysummaryf-popup/weeklysummaryf-popup";


const Weeklysummary = () => {
  return (
    <>
      <section className="text-blackcolor overflow-hidden  ">
        <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor overflow-hidden pb-[60px] md:pb-[80px]">
        <div className="container max-w-[1200px] px-[15px] lg:px-[40px] mx-auto ">
          <div className="border-1 border-slate-300 p-8 ">
            <div className="flex gap-[20px] justify-between items-center">
              <h2 className=" text-xl leading-4 font-semibold">
                Weekly summary
              </h2>
              <div className="flex gap-2">
                <Weeklysummaryfpopup />

                <Button
                  href=""
                  className="text-white btn420 flex justify-center items-center bg-orangeprimary py-[15px] px-[15px] rounded-[30px] font-[400] text-[18px]"
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
                </Button>
              </div>
            </div>

            <div className="w-full flex gap-9 mt-8">
              <div className="w-1/2">
                <Selectbox />
              </div>
              <div className="w-1/2">
                <Selectbox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weeklysummary;
