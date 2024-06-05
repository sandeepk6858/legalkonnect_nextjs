import FacebookSvg from "../Icons/facebookSvg";
import PintrestSvg from "../Icons/pintrestSvg";
import TwitterSvg from "../Icons/twitterSvg";

const SocialPopup = ({ socialPopupT }) => {

    return (
        socialPopupT && (
            <div className=" relative top-2 left-10 z-50">
                <span class="animate-[social_1_0.3s_1] -top-10 -left-16 absolute">
                    <FacebookSvg width={30} height={30} />
                </span>
                <span class="animate-social_2 duration-300 -top-14 -left-8 absolute">
                    <TwitterSvg width={30} height={30} />
                </span>
                <span className="bg-[#cb2027] rounded-full w-6 h-6 flex absolute animate-social_3 top-[-36px] left-[0px]">
                    <PintrestSvg className="z-10" width={30} height={30} fill={`white`} />
                </span>
            </div>
        )
    )
}
export default SocialPopup;