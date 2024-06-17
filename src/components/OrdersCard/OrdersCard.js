
import { useState } from "react";
import HeartSvg from "../Icons/heartSvg"
import ShareSvg from "../Icons/shareSvg";
import CalendarSvg from "../Icons/calendarSvg";
import MoreOption from "../Icons/moreOptionSvg";
import SocialPopup from "../socialPopup";
import Link from "next/link";

const OrdersCard=() => {
     const [ socialPopupT, setSocialPopupT] = useState(false)

    const SocialPopupToggle=()=>{
        setSocialPopupT(!socialPopupT)
    }
    return(
        <>
            <div className="  w-full  md:max-w-[320px] lg:max-w-56 border 2xl:max-w-[582px] border-lightgrey rounded-2xl  mx-3 mb-5 shadow-lg transition-all duration-200 ease-in-out hover:scale-105">
                <h3 className=" w-full px-5 pt-4 font-semibold cursor-pointer">
                  <Link href="/jobs/1">Divorce</Link>
                </h3>
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
                    <button >
                     <Link href="/#">
                        <MoreOption width={'20'} height={'20'}  className={" bg-blue-300 rounded-xl cursor-pointer fill-current text-blueprimary  hover:bg-bluesecondary hover:fill-[white]"}/>
                     </Link>
                    </button>
                  
                </div>
            </div> 
        </>
    )
}
export default OrdersCard;