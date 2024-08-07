import JobSlider from "@/components/JobSlider/JobSlider";

export default function ExpertsLayout({ children }) {
    return (<>
        <JobSlider />
        {children}
    </>);
}