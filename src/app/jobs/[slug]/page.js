"use client";
import React, { useState } from "react";
import Link from "next/link";
import JobSlider from "@/components/JobSlider/JobSlider";
import JobSlugs from "@/components/jobslugs/JobSlugs";

const Jobslug = ({params}) => {
    
    const { slug } = params;  

    // console.log(slug);

    return (
        <div>
            <JobSlider/>
            <JobSlugs />
        </div>
    )
}
export default Jobslug;