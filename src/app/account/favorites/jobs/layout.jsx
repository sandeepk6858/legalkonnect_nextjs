import JobSlider from "@/components/JobSlider/JobSlider";
import HeartSvg from "@/components/Icons/heartSvg";
import Link from "next/link";
import DropdownComponent from "@/components/Dropdown";

export default function JobsFavoriteLayout({ children }) {
    return (
        <>
            <div className="my-10">
                <JobSlider />
            </div>
            <div className="relative mt-10">
                <div className="bg-gray-100 mb-6">
                    <div className="max-w-[1250px] mx-auto px-4 box-border flex justify-between flex-col lg:flex-row">
                        <div className="flex items-center gap-x-9 overflow-x-auto" >
                            <div className="flex items-center">
                                <HeartSvg width={20} height={19} fill={`fill-orangeprimary`} />
                                <h5 className="ml-2.5 text-base font-semibold text-orangeprimary whitespace-nowrap">Favorites</h5>
                            </div>
                            <ul className="flex items-center gap-x-7">
                                <li className=" py-5 border-b-2 border-orangeprimary cursor-pointer ">
                                    <Link href="/account/favorites/jobs" className="text-sm font-normal text-orangeprimary whitespace-nowrap"> Jobs</Link>
                                </li>
                                <li className=" py-5 border-b-0  cursor-pointer hover:opacity-[0.6]">
                                    <Link href="/account/favorites/qualified-attorney" className="text-sm font-normal text-blackcolor whitespace-nowrap"> Qualified Attorneys</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/substitute-attorney" className="text-sm font-normal text-blackcolor whitespace-nowrap  "> Substitute Attorneys</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/transcripts" className="text-sm font-normal text-blackcolor whitespace-nowrap"> Transcripts</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolor cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/motion" className="text-sm font-normal text-blackcolor whitespace-nowrap "> Motions</Link>
                                </li>
                                <li className=" py-5 border-b-0 border-blackcolo cursor-pointer hover:opacity-[0.6] ">
                                    <Link href="/account/favorites/forum" className="text-sm font-normal text-blackcolor whitespace-nowrap "> Forums</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-2.5 py-5 lg:py-0 ">
                            <p className="text-sm font-normal text-blackcolor whitespace-nowrap">Sort by</p>
                            <DropdownComponent model="jobs" />
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}