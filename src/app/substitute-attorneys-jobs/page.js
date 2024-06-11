'use client'
import React, { useState } from "react";
import Filter from "@/components/Filter/Filter";
import AttronyJobsCard from "@/components/card/attronyjobs";
import JobSlider from "@/components/JobSlider/JobSlider";

const Subsituteattorneyjobs = () => {
  const [showRequestButton, setShowRequestButton] = useState(true);
  const [showSortBy, setShowSortBy] = useState(true);
  const [dropdownDateShow, setdropdownDateShow] = useState(true);
  const [counrtsMap, setCounrtsMap] = useState(true)
  const [bids, setBids] = useState(true)

  return (
    <>
      <JobSlider />
      <Filter showRequestButton={showRequestButton} showSortBy={showSortBy} dropdownDateShow={dropdownDateShow} counrtsMap={counrtsMap} Bids={bids}/>
      <section className="text-blackcolor body-font overflow-hidden">
        <div className="px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <div className="flex flex-wrap lg:flex-nowrap gap-[20px] xl:gap-[30px]">
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard /> 
          </div> 
        </div>
      </section> 
    </>
);
};

export default Subsituteattorneyjobs;
