
'use client'
import { imageURL } from "@/components/utils/helper/helper";
import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import ScriptsCards from "@/components/scripts_cards/scripts_cards";
import JobSlider from "@/components/JobSlider/JobSlider";
import Slider from "react-slick";
import Filter from "@/components/Filter/Filter";

const Transcripts = () => {
  return (
    <>

     <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] pt-[60px] md:pt-[80px] mx-auto ">
        <JobSlider />
        </div>
      </section>
      <section className="text-blackcolor body-font overflow-hidden ">
      <Filter />
      </section>
     <section className="text-blackcolor body-font overflow-hidden">
        <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <div className="flex flex-wrap gap-[20px] xl:gap-[30px]">
          <ScriptsCards />
            <ScriptsCards />
            <ScriptsCards />
            <ScriptsCards />
            <ScriptsCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Transcripts;