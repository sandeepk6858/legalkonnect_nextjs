
import Link from "next/link";
import { useState } from "react";
import HeartSvg from "../Icons/heartSvg"
import ShareSvg from "../Icons/shareSvg";
import CalendarSvg from "../Icons/calendarSvg";

import SocialPopup from "../socialPopup";

const OrdersCard=() => {
     const [ socialPopupT, setSocialPopupT] = useState(false)

    const SocialPopupToggle=()=>{
        setSocialPopupT(!socialPopupT)

    }
    return(
        <>
            <div className="  w-full  md:max-w-[320px] lg:max-w-56 border 2xl:max-w-[582px] border-lightgrey rounded-2xl  mx-3 mb-5 shadow-lg	">
                <h3 className=" w-full px-5 pt-4 font-semibold">Divorce</h3>
                <div className=" w-full px-5 py-4 flex justify-between items-center border-b border-lightgrey ">
                    <div className="w-full">
                        <p className="">Posted 2 years ago</p>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                         <SocialPopup  socialPopupT={socialPopupT}/>
                         <ShareSvg width={"17px"} height={"17px"} fill={`fill-grey`} hover={'hover:fill-bluesecondary'} SocialPopupToggle={SocialPopupToggle} />
                        <HeartSvg width={`20px`} height={`20px`} fill={`fill-transparent`} hover={`hover:fill-orangeprimary`} stroke={`stroke-orangeprimary`} />
                    </div>
                </div>
                <p className="px-5 py-3 text-sm font-semibold border-b border-lightgrey">Fixed Price</p>
                <div className=" w-full p-5 text-sm flex items-center font-semibold border-b border-lightgrey cursor-pointer">
                    
                    <CalendarSvg cuClass={'fill-blackcolor'} width={`16px`} height={`16px`} fill={''} />
                    <p className="font ml-2">Project Length: {"1-7"} days</p>
                </div>
                <div className="w-full p-5 pb-8 flex justify-between items-center text-sm ">
                    <div className="flex gap-2">    
                        <p>Milestone: </p>
                        <p className="font-semibold">{"1 to 3 months"}</p>
                    </div>
                    <Link href={"/"} >
                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-blue-300 rounded-xl cursor-pointer  hover:bg-bluesecondary hover:fill-white ">
                        <path d="M7.5 6.24999C6.8125 6.24999 6.25 6.81249 6.25 7.49999C6.25 8.18749 6.8125 8.74999 7.5 8.74999C8.1875 8.74999 8.75 8.18749 8.75 7.49999C8.75 6.81249 8.1875 6.24999 7.5 6.24999ZM11.25 6.24999C10.5625 6.24999 10 6.81249 10 7.49999C10 8.18749 10.5625 8.74999 11.25 8.74999C11.9375 8.74999 12.5 8.18749 12.5 7.49999C12.5 6.81249 11.9375 6.24999 11.25 6.24999ZM3.75 6.24999C3.0625 6.24999 2.5 6.81249 2.5 7.49999C2.5 8.18749 3.0625 8.74999 3.75 8.74999C4.4375 8.74999 5 8.18749 5 7.49999C5 6.81249 4.4375 6.24999 3.75 6.24999Z" fill="#063d8f"></path>
                        </svg>
                    </Link>
                </div>
            </div> 
        </>
    )
}
export default OrdersCard;