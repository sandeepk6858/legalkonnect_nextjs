import SupportCard from "@/components/support";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import JobSlider from "@/components/JobSlider/JobSlider";
import Legaldocs from "@/components/Legaldocs/Legaldocs";
const ParalegalSupport = () => {
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
           </>
    )
}
export default ParalegalSupport;