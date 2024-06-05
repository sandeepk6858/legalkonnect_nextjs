'use client';
import React from "react";
import AttronyJobsCard from "@/components/card/attronyjobs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import JobSlider from "@/components/JobSlider/JobSlider";

const JobsPage = () => {
    return (
              <>
              <JobSlider />
                <Filter />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <Footer /> 
           </>
    );
};
export default JobsPage;