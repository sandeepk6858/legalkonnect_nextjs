import JobSlider from "@/components/JobSlider/JobSlider";

export default function TranscriptLayout({ children }) {
    return (
        <>
            <section className="text-blackcolor body-font overflow-hidden">
                <div className="container px-[15px] lg:px-[40px] pt-[60px] md:pt-[80px] mx-auto ">
                    <JobSlider />
                </div>
            </section>
            {children}
        </>
    );
}