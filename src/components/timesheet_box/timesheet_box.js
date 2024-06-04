// components/timesheet.js

"use client";
import { imageURL } from "@/components/utils/helper/helper";
import React, { useState } from "react";
import { Link, Button } from "@nextui-org/react";

const timesheetbox = () => {
  return (
    <>
      <div className="mb-[20px] px-[20px] py-[20px] border-1 border-slate-300 ">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-[30px]">
          <div className="flex flex-col pr-[0px] sm:pr-[40px] lg:pr-[100px] w-full md:w-3/4">
            <div>
              <p className="text-[15px] leading-[26px] font-[400] text-orangeprimary">
                Forget the old rules. You can have the best people. Right now.
                Right here.Forget the old rules. You can have the best people.
                Right now. Right here.
              </p>
              <p className="text-[15px] leading-[26px] font-[400]">
                Staffed by:
              </p>
            </div>
            <div className="mt-[20px]">
              <p className="text-[15px] leading-[26px] font-[400] text-orangeprimary">
                Hired by: Client Dev
              </p>
              <p className="text-[15px] leading-[26px] font-[400]">
                Client Dev
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <p className="text-[15px] leading-[26px] font-[400] text-left md:text-right">
              <span className="text-[15px] leading-[26px] font-[700]">
                Date:
              </span>{" "}
              February 22, 2023
            </p>
            <p className="flex justify-start md:justify-end">
              <Button
                href="/view_timesheet/slug"
                as={Link}
                color="primary"
                className="text-white w-[150px] flex justify-center items-center bg-orangeprimary py-[10px] px-[10px] rounded-[30px] font-[400] text-[18px] mt-[10px]"
              >
                See Timesheet
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default timesheetbox;
