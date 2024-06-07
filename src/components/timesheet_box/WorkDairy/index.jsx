import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

const WorkDairy = () => {
  return (
    <>
        <div className=" border-b-1 border-b-slate-300">
            <div className="flex justify-between items-center p-5">
            <div className="w-[100%] max-w-40">
                <p className="text-[16px] leading-[24px] font-normal">Mon, 06/03</p>
            </div>
            <div className="w-full max-w-4xl bg-lightgrey h-[9px]"></div>
            <div className="w-full max-w-20">
            <p className="text-[16px] leading-[24px] font-normal text-right">0:00 hrs</p>
            </div>
            </div>
        </div>
    </>
  );
};

export default WorkDairy;
