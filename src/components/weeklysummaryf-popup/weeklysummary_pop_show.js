"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Selectbox from "../selectbox/selectbox";
import Link from "next/link";
import FilterSvg from "../Icons/filterSvg";

const Weeklysummarypopshow = () => {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal);
  };

  return (
    <Button
    href=""
    className="w-full btn420 flex justify-center border-1 border-orangeprimary items-center bg-none py-[15px] px-[15px] rounded-[30px] font-[400] text-[14px] md:text-[18px]"
    color="primary"
    variant="Report Site"
    onClick={handleModal}
  >
    
    {/* <FilterSvg width={`20px`} height={`20px`} fill={`white`} /> */}
    <span>Show</span><b>contract</b><span>grouped by</span><b>day</b>
  </Button>
  );
};

export default Weeklysummarypopshow;
