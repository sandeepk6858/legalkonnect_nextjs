import React from "react";
import Filter from "@/components/Filter/Filter";
import AttronyJobsCard from "@/components/card/attronyjobs";
import Footer from "@/components/Footer/Footer";
import JobSlider from "@/components/JobSlider/JobSlider";

const Subsituteattorneyjobs = () => {
  return (
    <>
    <JobSlider />
    <Filter />
    <AttronyJobsCard />
    <Footer />  
    </>
);
};

export default Subsituteattorneyjobs;
