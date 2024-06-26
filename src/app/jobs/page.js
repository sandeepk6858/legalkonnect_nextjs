import Filter from "@/components/Filter/Filter";
import AttronyJobsCard from "@/components/attronyjobs";
import JobSlider from "@/components/JobSlider/JobSlider";
import SocialPopup from "@/components/socialPopup";
const JobsPage = () => {
    return (
        <>
        <JobSlider />
        <Filter/>
        <SocialPopup/>
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
    )
}
export default JobsPage;