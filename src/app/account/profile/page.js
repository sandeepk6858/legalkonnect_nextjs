import React from "react";
import JobSlider from "@/components/JobSlider/JobSlider";

const Profile = () => {
  return (
    <>
      <div className="px-[30px]">
        <JobSlider />
        <div className="w-full max-w-[1250px] m-[auto] flex gap-3 mt-16">
          {/* <div classclassNameName="w-[30%] shadow-customSec">

            </div> */}
          <div className="card_item attorney_card shadow-customSec p-[20px] w-[30%]">
            <div className="card_header flex gap-4">
              <div className="img_wrpr_wrpr relative">
                <span className="online_status online block absolute bg-[#14CE80] border border-white w-[20px] h-[20px] rounded-[50%] right-[0] left-[50px]"></span>
                <div className="img_wrpr">
                  <img
                    src="https://legalkonnect.com/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>
              <div className="right_info">
                <a href="" className="attorney_name text-[16px]">
                  Client Dev
                </a>
                <div className="attorney_verif text-[14px]">
                  <span>Admin</span>
                </div>
                <div className="stars_rating_row">
                  <div
                    className="Stars"
                    aria-label="Rating of this product is 2.3 out of 5."
                  ></div>
                  <span className="stars_rating_number">4.4</span>
                </div>
              </div>
            </div>
            <div className="card_row flex justify-between border border-[#F9F9F9] py-2">
              <span className="card_price text-bluesecondary text-[14px]">
                <b>25$ admin</b> / both
              </span>
              <span className="card_location text-[14px]">Mohali</span>
            </div>
            <div className="card_row border-b py-4 border-[#F9F9F9]">
              <div className="card_tags hover:bg-[#1359C3] hover:text-white rounded-[50px] px-[21px] py-[5px] text-[14px] text-center text-bluesecondary bg-[#EAF1FD] block max-w-[92px]">
                <a href="" className="card_tag">
                  Criminal
                </a>
              </div>
            </div>
            <div className="card_row">
              <ul className="attorney_card_footer flex flex-wrap justify-between pt-5">
                <li className="w-[50%] mb-[10px] text-[13px]">
                  <b>10</b> yrs experience
                </li>
                <li className="cases_li flex items-center w-[50%] mb-[10px] gap-1 text-[13px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.7273 14.7607 8 14.7607Z"
                      fill="#1359C3"
                    ></path>
                    <path
                      d="M11.6703 5.21766C11.4181 4.98838 11.0259 5.00635 10.7954 5.25979L7.01532 9.42216L5.18913 7.56563C4.94806 7.32148 4.55644 7.31776 4.31291 7.5582C4.06875 7.79801 4.06503 8.19026 4.30547 8.43441L6.59144 10.7582C6.70857 10.8772 6.86719 10.9435 7.03325 10.9435C7.03697 10.9435 7.04132 10.9435 7.04504 10.9441C7.21607 10.9404 7.37719 10.8673 7.49182 10.7409L11.7124 6.09329C11.9424 5.8392 11.9238 5.44757 11.6703 5.21766Z"
                      fill="#1359C3"
                    ></path>
                  </svg>
                  <b>10-50 </b> cases
                </li>
                <li className="w-[50%] mb-[10px] text-[13px]">
                  <b>$ 1007</b> earned
                </li>
              </ul>
            </div>
          </div>
          <div className="profile_s_header p-[20px] flex gap-4 w-[70%] shadow-customSec">
            <div className="left">
              <ul className="tabs-item flex gap-4 items-center">
                <li className="text-[14px] text-black cursor-pointer">
                  General Information
                </li>
                <li className="text-[14px] text-black cursor-pointer">
                  Work history
                </li>
                <li className="portfolio_my_profile_tab text-[14px] text-black cursor-pointer">
                  Portfolio
                </li>
              </ul>
            </div>
            <div className="right flex gap-4">
              <div
                className="share_btn"
                onclick="this.classList.toggle('show')"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4416 15.9352L14.478 15.9559L14.5048 15.9237C15.2924 14.9756 16.4791 14.3709 17.8047 14.3709C20.1695 14.3709 22.0934 16.2955 22.0933 18.6609C22.0933 21.0257 20.1694 22.9499 17.8046 22.9499C15.4396 22.9499 13.5154 21.0258 13.5154 18.6609C13.5154 18.1585 13.6029 17.6763 13.7623 17.228L13.7764 17.1885L13.7399 17.1678L8.55779 14.2254L8.52139 14.2048L8.49464 14.237C7.70715 15.1848 6.52058 15.7892 5.1953 15.7892C2.82994 15.7892 0.905469 13.8651 0.905469 11.5002C0.905469 9.13516 2.82994 7.21108 5.1953 7.21108C6.52058 7.21108 7.70726 7.81553 8.49474 8.76344L8.52149 8.79564L8.55789 8.77497L13.7399 5.83194L13.7764 5.81123L13.7623 5.77172C13.603 5.32337 13.5155 4.84133 13.5155 4.33902C13.5155 1.97408 15.4397 0.05 17.8047 0.05C20.1695 0.05 22.0934 1.97407 22.0932 4.33912C22.0932 6.7049 20.1693 8.62956 17.8045 8.62956C16.4788 8.62956 15.2919 8.02471 14.5044 7.0763L14.4776 7.04408L14.4412 7.06476L9.2595 10.0077L9.22304 10.0284L9.23708 10.0679C9.39637 10.5162 9.48392 10.9981 9.48392 11.5003C9.48392 12.0026 9.39637 12.4845 9.23708 12.9328L9.22304 12.9723L9.25951 12.993L14.4416 15.9352ZM20.6751 4.33902C20.6751 2.75609 19.3875 1.46838 17.8047 1.46838C16.2217 1.46838 14.9339 2.75608 14.9339 4.33902C14.9339 5.92275 16.2217 7.21108 17.8047 7.21108C19.3875 7.21108 20.6751 5.92274 20.6751 4.33902ZM2.32395 11.5003C2.32395 13.0832 3.61207 14.3709 5.1954 14.3709C6.77804 14.3709 8.06564 13.0831 8.06564 11.5003C8.06564 9.91727 6.77815 8.62956 5.1954 8.62956C3.61207 8.62956 2.32395 9.91725 2.32395 11.5003ZM14.9339 18.661C14.9339 20.2438 16.2217 21.5316 17.8047 21.5316C19.3875 21.5316 20.6751 20.2438 20.6751 18.661C20.6751 17.0776 19.3875 15.7893 17.8047 15.7893C16.2217 15.7893 14.9339 17.0775 14.9339 18.661Z"
                    fill="#878787"
                    stroke="white"
                    stroke-width="0.1"
                  ></path>
                </svg>
                <ul className="social-icon flex">
                  <li>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalkonnect.com%2Fusers%2Fprofile%2F440%26quote%3DClient+Dev"
                      onclick="window.open(this.href,'facebook','width=500,height=700');return false;"
                      class="facebook"
                    >
                      <img src="https://legalkonnect.com/img/social-facebook.svg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/intent/tweet?text=Client+Dev+https%3A%2F%2Flegalkonnect.com%2Fusers%2Fprofile%2F440"
                      onclick="window.open(this.href,'twitter','width=500,height=700');return false;"
                      target="_blank"
                      class="twitter"
                    >
                      <img src="https://legalkonnect.com/img/social-twitter.svg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Flegalkonnect.com%2Fusers%2Fprofile%2F440&amp;media=/storage/uploads/fIQuQpNGWBpdVpkVvkhZ4c0tbJbIGKaiH0UEc8hY.jpg&amp;description=Client+Dev"
                      onclick="window.open(this.href,'pinterest','width=500,height=700');return false;"
                      target="_blank"
                      className="pinterest"
                    >
                      <img src="https://legalkonnect.com/img/social-pinterest.svg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className="brrad_btn_w_icon gap-2 items-center flex hover:bg-[#1359C3] hover:text-white rounded-[50px] px-[20px] py-[10px] text-[14px] text-center text-bluesecondary bg-[#EAF1FD] max-w-[130px]"
                  onclick="window.location.href = '/account/edit/settings';"
                >
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.384 1.11692C10.5615 0.294359 9.22307 0.294359 8.4005 1.11692L1.55227 7.96517C1.54313 7.97413 1.53445 7.98366 1.52627 7.99367C1.47012 8.06225 1.5585 7.87548 0.0542613 11.5287C-0.0541838 11.7921 0.0058864 12.0923 0.207261 12.2937C0.4088 12.4953 0.709151 12.5551 0.972283 12.4467C4.59503 10.955 4.46139 11.0247 4.53581 10.9487L11.3841 4.10042C12.2066 3.27788 12.2066 1.93948 11.384 1.11692ZM0.704487 11.7965L1.05256 10.9511L1.54983 11.4484L0.704487 11.7965ZM2.25427 11.1583L1.34262 10.2467L1.92274 8.83782L3.66314 10.5782L2.25427 11.1583ZM4.28472 10.2053L2.29568 8.21623L6.90873 3.60317L8.89775 5.5922L4.28472 10.2053ZM9.39503 5.09494L7.40601 3.10592L7.90328 2.60865L9.8923 4.5977L9.39503 5.09494ZM10.8868 3.60322L10.3895 4.10047L8.40053 2.11145L8.89778 1.6142C9.44617 1.0658 10.3384 1.06583 10.8868 1.6142C11.4351 2.16256 11.4351 3.05483 10.8868 3.60322Z"
                      fill="#1359C3"
                    ></path>
                  </svg>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
