import Filter from "@/components/Filter/Filter";
import AttronyJobsCard from "@/components/card/attronyjobs";
import Filter from "@/components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import JobSlider from "@/components/JobSlider/JobSlider";
import SocialPopup from "@/components/socialPopup";
const JobsPage = () => {
    return (
        <>
        <JobSlider />
        <Filter/>
        <SocialPopup/>
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <Footer /> 
        </>
    )
}
export default JobsPage;