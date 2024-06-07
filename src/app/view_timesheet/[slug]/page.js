import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";
import Timecount from "@/components/timesheet_box/timecount";
import WorkDairy from "@/components/timesheet_box/WorkDairy";

const Viewtimesheet = () => {
  return (
    <>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[40px] pb-[60px] md:pb-[80px]">
          <Timecount />
          <div className=" border-1 border-slate-300 rounded-[15px]">
            <div className=" border-b-1 border-b-slate-300">
              <div className="p-[20px] flex justify-between items-center">
                <h2 className="text-[22px] leading-[33px] font-[500]">
                  Work Dairy
                </h2>
                <Button
                  href=""
                  as={Link}
                  color="primary"
                  className="text-white w-[120px] flex justify-center items-center bg-greencolour py-[15px] px-[15px] rounded-[30px] font-[400] text-[18px]"
                >
                  Unblock
                </Button>
              </div>
            </div>
            <h2 className="text-[16px] leading-[24px] font-[600] px-[20px] pt-[30px] pb-[10px]">
              Jun 02 - Jun 09
            </h2>
            <WorkDairy />
            <WorkDairy />
            <WorkDairy />
            <WorkDairy />
            <WorkDairy />
            <WorkDairy />
            <WorkDairy />
            <div className="flex justify-between py-[20px] px-[15px] rounded-[15px]">
              <div className="">
                <p className="text-[14px] leading-[24px] font-[500]">
                Tracked
                </p>
                <p className="text-[22px] leading-[33px] font-[500]">0:0 hrs</p>
              </div>
              <div className="text-right">
                <p className="text-[14px] leading-[24px] font-[500]">
                Total amount
                </p>
                <p className="text-[22px] leading-[33px] font-[500]">$0.00</p>
                <p className="text-[12px] leading-[24px] font-[500]">
                (0:0 hrs @ $12.50/hr)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Viewtimesheet;
