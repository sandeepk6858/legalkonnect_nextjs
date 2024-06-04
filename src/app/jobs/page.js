import Filter from "@/components/Filter/Filter";
import AttronyJobsCard from "@/components/card/attronyjobs";
import SocialPopup from "@/components/socialPopup";

const JobsPage = () => {
    return (
        <>
        <Filter/>
        <SocialPopup/>
        <div className="w-full m-[auto] px-4 py-12 z-10 flex flex-wrap flex-row flex-col-2 gap-5 justify-center">
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
           <AttronyJobsCard />
        </div>
        </>
    )
}
export default JobsPage;