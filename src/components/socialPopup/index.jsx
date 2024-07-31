import FacebookSvg from "../Icons/facebookSvg";
import PintrestSvg from "../Icons/pintrestSvg";
import TwitterSvg from "../Icons/twitterSvg";
import Link from 'next/link'

const SocialPopup = ({ socialPopupT, facebook_url='https://www.facebook.com', twitter_url='https://twitter.com', pintrest_url='https://www.pinterest.com' }) => {

    return (
        socialPopupT && (
            <div className=" relative top-2 left-10 z-50">
                <Link href={facebook_url} target="_blank"><span className="animate-[social_1_0.3s_1] -top-10 -left-16 absolute">
                    <FacebookSvg width={30} height={30} />
                </span></Link>
                <Link href={twitter_url} target="_blank"><span className="animate-social_2 duration-300 -top-14 -left-8 absolute">
                    <TwitterSvg width={30} height={30} />
                </span></Link>
                <Link href={pintrest_url} target="_blank"><span className="bg-[#cb2027] rounded-full w-6 h-6 flex absolute animate-social_3 top-[-36px] left-[0px]">
                    <PintrestSvg className="z-10" width={30} height={30} fill={`white`} />
                </span></Link>
            </div>
        )
    )
}
export default SocialPopup;