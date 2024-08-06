import JobSlider from "@/components/JobSlider/JobSlider";

export default function ForumLayout({ children }) {
    return (
        <>
            <div className="my-10">
                <JobSlider />
            </div>

            {children}
        </>
    );
}