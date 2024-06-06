import React from "react";
import Filter from "@/components/Filter/Filter";
import Cards from "@/components/Cards/Cards";
import Footer from "@/components/Footer/Footer";
import JobSlider from "@/components/JobSlider/JobSlider";
import SupportCard from "@/components/card/support";

const Processservers = () => {
  return (
    <>
    <JobSlider />
    <Filter />
    <section className="text-blackcolor body-font overflow-hidden">
        <div className="px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
          <div className="flex flex-wrap lg:flex-nowrap gap-[20px] xl:gap-[30px]">
          <SupportCard />
            <SupportCard />
            <SupportCard />
            <SupportCard />
          </div>
        </div>
      </section>
    <Footer />  
    </>
);
};

export default Processservers;
