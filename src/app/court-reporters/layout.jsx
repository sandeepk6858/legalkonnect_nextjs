import JobSlider from "@/components/JobSlider/JobSlider";

export default function CourtReportersLayout({ children }) {
    return (<>
        <JobSlider />
        {children}
    </>);
}