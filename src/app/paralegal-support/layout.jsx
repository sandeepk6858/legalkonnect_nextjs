import JobSlider from "@/components/JobSlider/JobSlider";

export default function ParalegalLayout({ children }) {
    return (<>
        <JobSlider />
        {children}
    </>);
}