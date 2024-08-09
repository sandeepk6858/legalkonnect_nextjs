import { getTranscript } from "@/actions/transcript";
import TranscriptCard from "@/components/card/transcripts";
import Filter from "@/components/Filter/Filter";

const Transcripts = async ({ searchParams }) => {
    const params = {}
    const data = await getTranscript(params);

    return (
        <>
            <section className="text-blackcolor body-font overflow-hidden ">
                <Filter />
            </section>
            <section className="text-blackcolor body-font overflow-hidden">
                <div className="container px-[15px] lg:px-[40px] py-[60px] md:py-[80px] mx-auto ">
                    <div className="flex flex-wrap gap-[20px] xl:gap-[30px]">
                        {data?.data?.transcripts?.length > 0 ? data.data.transcripts.map((item) => (
                            item && <TranscriptCard key={item.id} data={item} />
                        ))
                            :
                            <div>No item found</div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Transcripts;