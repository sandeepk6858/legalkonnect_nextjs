import JobSlider from "@/components/JobSlider/JobSlider";

export default function AttorneyLayout({ children }) {
    return (<>
        <JobSlider />
        {children}
    </>);
}