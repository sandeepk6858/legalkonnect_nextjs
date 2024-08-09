import Link from "next/link";
import { formatDate } from "@/components/utils/functions";
const PortfolioCard = ({ data }) => {
    return (
        <div className="flex flex-wrap gap-3 pt-4 justify-between">
            {data && data?.map((item, index) => {
                return (
                    <div key={index} className="p-[20px] border border-[#EBEBEB] rounded-[3px] text-center w-full sm:w-[calc(50%_-_10px)]">
                        <div className="portfolio_item_header max-[426px]:flex-col flex gap-3 pb-4">
                            <Link
                                href=""
                                className="portfolio_item_title text-[16px] text-bluesecondary"
                            >
                                {item?.heading}
                            </Link>
                            <span className="portfolio_item_date flex justify-center items-center whitespace-nowrap text-[14px] text-bluesecondary py-[5px] px-[10px] rounded-[3px] bg-[#EAF1FD]">
                                {formatDate(item?.created_at)}
                            </span>
                        </div>
                        <div className="item_text break-words">
                            <p className="text-[16px] text-black font-light">
                                {item?.description}
                            </p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default PortfolioCard;