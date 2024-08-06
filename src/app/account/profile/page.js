import JobSlider from "@/components/JobSlider/JobSlider";
import UserProfileCard from "@/components/card/account/profile";
const Profile = () => {
  return (
    <>
      <div className="px-[30px]">
        <JobSlider />
        <div className="w-full max-w-[1250px] m-[auto] flex-col lg:justify-center items-center lg:items-start lg:flex-row flex gap-3 mt-16 pb-8">
          <UserProfileCard />
        </div>
      </div>
    </>
  );
};
export default Profile;