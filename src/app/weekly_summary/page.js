import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";

const Weeklysummary = () => {
  return (
    <>
    <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <div className="border-1 border-slate-300 p-8">
           <h2>Weekly summary</h2>
           <div>
           <Button href="/login" className="text-white btn420 flex justify-center items-center bg-orangeprimary py-[15px] px-[25px] mb-[30px] rounded-[30px] font-[400] text-[18px]">
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
                Filters
              </Button>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weeklysummary;
