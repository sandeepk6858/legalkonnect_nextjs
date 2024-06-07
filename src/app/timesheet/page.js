"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Timesheetbox from "@/components/timesheet_box/timesheet_box";
import JobSlider from "@/components/JobSlider/JobSlider";


const timesheet = () => {
  return (
    <>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-[15px] lg:px-[40px] pb-[60px] md:pb-[80px]">
          <Timesheetbox />
          <Timesheetbox />
          <Timesheetbox />
          
        </div>
      </section>
    </>
  );
};

export default timesheet;
