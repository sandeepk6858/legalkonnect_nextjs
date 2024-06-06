import React from "react";
import Filter from "@/components/Filter/Filter";
import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";
import JobSlider from "@/components/JobSlider/JobSlider";
import SocialPopup from "@/components/socialPopup";

const Findattorney = () => {
  return (
    <>
    <JobSlider />
    <Filter />
    <Cards />
    <SocialPopup />
    <Footer />  
    </>
);
};

export default Findattorney;
