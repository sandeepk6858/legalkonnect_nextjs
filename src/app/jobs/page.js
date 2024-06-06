import Filter from "@/components/Filter/Filter";
import AttronyJobsCard from "@/components/card/attronyjobs";
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
           <Footer /> 
        </>
    )
}
export default JobsPage;