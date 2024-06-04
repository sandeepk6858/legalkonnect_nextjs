import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

const Timecount = () => {
  return (
    <>
    <div className="flex flex-wrap gap-3 justify-between items-center p-[30px] rounded-[15px] bg-[#fef4ef] my-[30px]">
    <div className="">
        <p className="text-[14px] leading-[24px] font-[500]">Last 24 hours</p>
        <p className="text-[22px] leading-[33px] font-[500]">0:0 hrs</p>
    </div>
    <div className="">
        <p className="text-[14px] leading-[24px] font-[500]">This week</p>
        <p className="text-[22px] leading-[33px] font-[500]">0:0 hrs</p>
    </div>
    <div className="">
        <p className="text-[14px] leading-[24px] font-[500]">Last week</p>
        <p className="text-[22px] leading-[33px] font-[500]">0:0 hrs</p>
    </div>
    <div className="">
        <p className="text-[14px] leading-[24px] font-[500]">Since start</p>
        <p className="text-[22px] leading-[33px] font-[500]">0 hrs</p>
    </div>
    </div>
    </>
  );
};

export default Timecount;
