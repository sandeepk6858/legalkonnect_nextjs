import FavoriteJobsCard from "@/components/favoritejobs";
import { fetchData } from "@/actions/favorite/favoriteData";

const favjobs = async ({ searchParams }) => {

    const sort = searchParams.sort || 'date';
    let jobs = await fetchData("jobs", sort);

    // console.log(jobs);
    return (
        <>
            <div className="w-full">
                <div className="xl:m-8 lg:m-4 md:m-4 m-3 flex flex-wrap justify-evenly gap-5">
                    {
                        jobs?.data?.items?.length > 0 ? jobs?.data?.items.map((job) => (
                            job?.jobs && <FavoriteJobsCard key={job.id} data={job} jobs={[]} setJobs={[]}/>
                        ))
                        :
                        <div>No jobs found</div>
                    }
                </div>

            </div>

        </>
    );
};

export default favjobs;
