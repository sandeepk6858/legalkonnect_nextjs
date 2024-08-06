import FacebookSvg from "../Icons/facebookSvg";
import PintrestSvg from "../Icons/pintrestSvg";
import TwitterSvg from "../Icons/twitterSvg";
import Link from "next/link";

const SocialPopup = ({ link, socialPopupT }) => {

    return (
        socialPopupT && (
            <div className=" relative top-2 left-10 z-50">
                <span className="animate-[social_1_0.3s_1] -top-10 -left-16 absolute">
                    <Link href={`${link?.facebook_url}`}>
                        <FacebookSvg width={30} height={30} />
                    </Link>
                </span>
                <span className="animate-social_2 duration-300 -top-14 -left-8 absolute">
                    <Link href={`${link?.twitter_url}`}>
                        <TwitterSvg width={30} height={30} />
                    </Link>
                </span>
                <span className="bg-[#cb2027] rounded-full w-6 h-6 flex absolute animate-social_3 top-[-36px] left-[0px]">
                    <Link href={`${link?.pinterest_url}`}>
                        <PintrestSvg className="z-10" width={30} height={30} fill={`white`} />
                    </Link>
                </span>
            </div>
        )
    )
}
export default SocialPopup;