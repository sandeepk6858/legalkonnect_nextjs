import JobSlider from "@/components/JobSlider/JobSlider";

export default function ProcessServerLayout({ children }) {
    return (<>
        <JobSlider />
        {children}
    </>);
}