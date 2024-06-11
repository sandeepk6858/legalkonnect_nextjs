"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Avatar } from "@nextui-org/react";
import JobSlider from "@/components/JobSlider/JobSlider";
import JobSlugs from "@/components/jobslugs/JobSlugs";
const Jobslug = () => {
   
    return (
        <div>
            <JobSlider/>
            <JobSlugs></JobSlugs>
        </div>
    )
}
export default Jobslug;