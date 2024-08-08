import JobSlider from "@/components/JobSlider/JobSlider";

export default function InvestigatorLayout({ children }) {
    return (<>
        <JobSlider />
        {children}
    </>);
}