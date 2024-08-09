import { formatDate,UserRating } from "@/components/utils/helper/helper";
const WorkHistoryCard = ({ data }) => {
    return (
        <div className="feedback_items_wrpr flex gap-4 flex-col pt-4">
            {data && data?.map((item, index) => {
                return (
                    <div key={index} className="feedback_item p-[20px] border border-[#EBEBEB] rounded-[3px]">
                        <div className="feedback_item_header flex justify-between max-[426px]:flex-col max-[426px]:gap-2">
                            <div className="left flex gap-2 items-center">
                                <h3 className="feedback_item_title text-[16px]">
                                    {item?.heading}
                                </h3>
                                <ul className="stars_rating flex gap-1">
                                    <UserRating rating={item?.rating ?? 0} />
                                </ul>
                            </div>
                            <div className="job_progress bg-[#20C9AC50] text-[#14CE80] py-[5px] px-[10px] rounded-[3px] text-[14px] whitespace-nowrap flex justify-center items-center">
                                {item?.status?.name}
                            </div>
                        </div>
                        <div className="feedback_item_body flex justify-between pt-3">
                            <div className="left">
                                <p className="text-[16px] break-all">{item?.description}</p>
                            </div>
                            <div className="right flex flex-col max-[426px]:gap-2 gap-8">
                                <span className="date text-[16px] text-black">
                                    {formatDate(item?.created_at)}
                                </span>
                                <div className="price flex gap-1">
                                    <span className="text-[16px]">Fixed Price</span>
                                    <span>
                                        <b>${item?.fixed_price}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default WorkHistoryCard;