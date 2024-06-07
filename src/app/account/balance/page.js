'use client'
import { useState } from 'react';
import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";
import { Link, Button } from "@nextui-org/react";
import Modal from '@/components/popup/popup';



const balance = () => {
    const [activeTab, setActiveTab] = useState('step1');

  
    return (
        <>
            <div className="relative">
                <JobSlider />
            </div>

            
            

            



        </>
    );
};

export default balance;
