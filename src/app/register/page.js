import React from "react";

const Register = () => {
  return (
    <>
      <div
        className="bg-[url('https://legalkonnect.com/img/sign_up_bg.jpg')] flex bg-cover bg-no-repeat bg-center"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        <div className="w-full max-w-[1250px] m-[auto] justify-between items-center flex px-5 flex-col lg:flex-row">
          <div className="w-full max-w-[530px]">
            <p className="text-lg sm:text-xl md:text-4xl font-semibold text-white leading-[30px] md:leading-[44px] max-[1024px]:text-center">
              Are you new to LegalKonnect?
              <br /> Sign up and connect.
            </p>
            <div>
                <div class="flex">
                    <div class="icon_wrpr_blue bg-orangesecondary min-h-[50px] min-w-[50px] w-[50px] h-[50px] rounded-[3px] flex justify-center items-center">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.85 22.5714C23.584 22.387 23.2189 22.4533 23.0346 22.7193C22.856 22.9771 22.6537 23.2277 22.4328 23.4644C22.2849 23.6231 22.0813 23.8145 21.8598 24.0029C21.6134 24.2127 21.5836 24.5825 21.7933 24.829C21.9092 24.9652 22.0741 25.0351 22.2399 25.0351C22.3741 25.0351 22.509 24.9892 22.6194 24.8954C22.8778 24.6754 23.1097 24.457 23.2899 24.2636C23.549 23.9859 23.7872 23.6909 23.9979 23.3867C24.1822 23.1208 24.116 22.7557 23.85 22.5714Z" fill="#fff"></path>
                            <path d="M21.2973 25.1987C21.1598 24.9057 20.8111 24.7796 20.518 24.917L20.4996 24.9253C20.2036 25.0559 20.0695 25.4018 20.2002 25.6979C20.2969 25.917 20.5115 26.0474 20.7365 26.0474C20.8156 26.0474 20.8959 26.0313 20.9728 25.9974C20.9871 25.9911 21.0012 25.9846 21.0155 25.978C21.3085 25.8406 21.4346 25.4918 21.2973 25.1987Z" fill="#1359C3"></path>
                            <path d="M28.2495 1.52351H1.75048C0.785213 1.52351 0 2.30884 0 3.27399V19.695C0 20.6601 0.785213 21.4453 1.75048 21.4453H14.0895C14.6125 23.6584 15.7954 25.2258 16.8291 26.23C18.3381 27.6959 20.0677 28.4765 20.7362 28.4765C21.4047 28.4765 23.1343 27.6959 24.6433 26.23C25.6771 25.2258 26.86 23.6584 27.383 21.4454H28.2495C29.2147 21.4454 30 20.6601 30 19.695V3.27399C30 2.30884 29.2147 1.52351 28.2495 1.52351ZM26.4843 19.0441C26.4844 22.1312 25.0593 24.179 23.8638 25.3533C22.4456 26.7463 20.9909 27.2881 20.7362 27.3045C20.4815 27.2881 19.0267 26.7463 17.6086 25.3533C16.4131 24.179 14.9881 22.1312 14.9881 19.0441V16.1586C17.0055 15.5751 18.8931 14.7767 20.7364 13.7274C22.5382 14.75 24.5104 15.584 26.4843 16.1582V19.0441ZM28.8281 19.695C28.8281 20.014 28.5685 20.2735 28.2495 20.2735H27.5868C27.6316 19.8808 27.6563 19.4714 27.6563 19.0441V15.7143C27.6563 15.4498 27.4791 15.2182 27.2239 15.1489C25.0962 14.5711 22.9551 13.6707 21.0322 12.5452C20.8494 12.4382 20.6231 12.4383 20.4402 12.5453C18.4627 13.7028 16.4374 14.5543 14.2486 15.1489C13.9934 15.2182 13.8162 15.4499 13.8162 15.7143V19.0441C13.8162 19.4714 13.8408 19.8808 13.8857 20.2735H1.75048C1.43144 20.2735 1.17187 20.0139 1.17187 19.695V9.7265H28.8281V19.695ZM28.8281 8.55468H1.17187V6.21106H28.8281V8.55468ZM28.8281 5.03912H1.17187V3.27399C1.17187 2.95495 1.43144 2.69538 1.75048 2.69538H28.2495C28.5685 2.69538 28.8281 2.95495 28.8281 3.27399V5.03912Z" fill="#fff"></path>
                            <path d="M7.03106 13.8283C6.6778 13.8283 6.329 13.8997 6.00615 14.0359C5.69074 13.9022 5.3441 13.8283 4.98058 13.8283C3.5267 13.8283 2.34381 15.0111 2.34381 16.4649C2.34381 17.9187 3.52664 19.1016 4.98058 19.1016C5.3441 19.1016 5.69074 19.0277 6.00609 18.894C6.329 19.0302 6.6778 19.1016 7.03106 19.1016C8.48501 19.1016 9.66789 17.9187 9.66789 16.4649C9.66789 15.0111 8.48501 13.8283 7.03106 13.8283ZM4.98058 17.9297C4.17281 17.9297 3.51568 17.2727 3.51568 16.4649C3.51568 15.6572 4.17281 15.0002 4.98058 15.0002C5.78824 15.0002 6.44536 15.6572 6.44536 16.4649C6.44536 17.2726 5.78824 17.9297 4.98058 17.9297ZM7.17632 17.9226C7.45464 17.5047 7.61724 17.0035 7.61724 16.4649C7.61724 15.9264 7.45464 15.4253 7.17638 15.0074C7.91612 15.0806 8.49596 15.7063 8.49596 16.4649C8.49596 17.2236 7.91612 17.8494 7.17632 17.9226Z" fill="#fff"></path>
                            <path d="M5.94351 11.1915H2.92963C2.60601 11.1915 2.34369 11.4538 2.34369 11.7774C2.34369 12.1009 2.60601 12.3633 2.92963 12.3633H5.94351C6.26712 12.3633 6.52944 12.1009 6.52944 11.7774C6.52944 11.4538 6.26712 11.1915 5.94351 11.1915Z" fill="#fff"></path>
                            <path d="M7.67554 11.1915H7.64776C7.32415 11.1915 7.06183 11.4538 7.06183 11.7774C7.06183 12.1009 7.32415 12.3633 7.64776 12.3633H7.67554C7.99909 12.3633 8.26147 12.1009 8.26147 11.7774C8.26147 11.4538 7.99909 11.1915 7.67554 11.1915Z" fill="#fff"></path>
                            <path d="M23.9525 17.6968C23.7238 17.4681 23.3528 17.468 23.1239 17.6967L19.9905 20.8299L18.3485 19.1878C18.1197 18.9592 17.7486 18.9591 17.5198 19.1878C17.291 19.4167 17.291 19.7877 17.5198 20.0165L19.5762 22.0729C19.6906 22.1873 19.8405 22.2446 19.9905 22.2446C20.1404 22.2446 20.2904 22.1873 20.4047 22.0729L23.9524 18.5255C24.1813 18.2967 24.1813 17.9257 23.9525 17.6968Z" fill="#fff"></path>
                        </svg>
                    </div>
                    <div class="text_wrpr w-full max-w-[268px]">
                        <h3 class="text-white text-[18px]">Convenient and Safe Payments</h3>
                        <p className="text-white text-[16px]">Securely escrow your payments and release as work is performed</p>
                    </div>
                </div>  
            </div>
          </div>
          <div className="text-white bg-[white] rounded-[3px] shadow-custom p-[20px] md:p-[30px] w-full max-w-[400px] md:max-w-[530px] max-[1024px]:mt-[25px]">
            <div>
              <p className="text-blueprimary text-base font-semibold">
                Log in and connect
              </p>
              <div className="flex flex-col gap-2 pt-3">
                <label className="text-[#474040] text-base">Your email</label>
                <input
                  type="email"
                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                  placeholder="donald.phillips@example.com"
                />
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <div className="flex justify-between">
                  <label className="text-sm sm:text-base text-orangesecondary">
                    Password
                  </label>
                  <p className="text-sm sm:text-base text-orangesecondary hover:underline cursor-pointer">
                    <a href="/forgot">Forgot password</a>
                  </p>
                </div>
                <input
                  type="password"
                  className="w-full border border-[#9b9898] py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey"
                />
              </div>
              <div className="flex gap-2 pt-5">
                <div>
                  <input type="checkbox" className="w-[25px] h-[25px]" />
                </div>
                <p className="text-[#474040] text-base">Keep me logged in</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between pt-[18px] gap-2.5 md:gap-[0]">
                <button className="flex justify-center items-center py-2.5 px-[15px] min-h-[37px] max-h-[37px] rounded-[22px] bg-[#f16622] text-[14px]">
                  Log In
                </button>
                <a
                  href="https://legalkonnect.com/redirect/google"
                  class="hover:text-orangesecondary py-2.5 px-[15px] gap-1 min-h-[37px] max-h-[37px] text-[14px] rounded-[22px] bg-white text-black flex justify-center items-center"
                  style={{
                    boxShadow:
                      "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.6203 12.2464 10.9586 13.5 9 13.5C6.51488 13.5 4.5 11.4851 4.5 9C4.5 6.51488 6.51488 4.5 9 4.5C10.1471 4.5 11.1908 4.93275 11.9854 5.63963L14.1068 3.51825C12.7673 2.26988 10.9755 1.5 9 1.5C4.85813 1.5 1.5 4.85813 1.5 9C1.5 13.1419 4.85813 16.5 9 16.5C13.1419 16.5 16.5 13.1419 16.5 9C16.5 8.49713 16.4483 8.00625 16.3541 7.53113Z"
                      fill="#FFC107"
                    ></path>
                    <path
                      d="M2.36475 5.50912L4.82887 7.31625C5.49562 5.6655 7.11037 4.5 9 4.5C10.1471 4.5 11.1907 4.93275 11.9854 5.63962L14.1067 3.51825C12.7672 2.26987 10.9755 1.5 9 1.5C6.11925 1.5 3.621 3.12637 2.36475 5.50912Z"
                      fill="#FF3D00"
                    ></path>
                    <path
                      d="M9.00012 16.5C10.9374 16.5 12.6976 15.7586 14.0285 14.553L11.7072 12.5887C10.9289 13.1806 9.97791 13.5008 9.00012 13.5C7.04937 13.5 5.39299 12.2561 4.76899 10.5202L2.32324 12.4046C3.56449 14.8335 6.08524 16.5 9.00012 16.5Z"
                      fill="#4CAF50"
                    ></path>
                    <path
                      d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.9428 11.3312 12.41 12.0574 11.706 12.5891L11.7071 12.5884L14.0284 14.5526C13.8641 14.7019 16.5 12.75 16.5 9C16.5 8.49712 16.4482 8.00625 16.3541 7.53113Z"
                      fill="#1976D2"
                    ></path>
                  </svg>
                  Log In with Google
                </a>
                <a
                  href="https://legalkonnect.com/redirect/google"
                  class=" hover:text-orangesecondary py-2.5 gap-1 px-[15px] min-h-[37px] max-h-[37px] rounded-[22px] text-[14px] bg-white text-black flex justify-center items-center"
                  style={{
                    boxShadow:
                      "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M15.1169 16.5001C15.6046 16.5001 16 16.1047 16 15.617V1.38306C16 0.895312 15.6046 0.5 15.1169 0.5H0.883062C0.39525 0.5 0 0.895312 0 1.38306V15.617C0 16.1047 0.39525 16.5001 0.883062 16.5001H15.1169Z"
                        fill="#395185"
                      ></path>
                      <path
                        d="M11.0396 16.5001V10.304H13.1194L13.4308 7.88933H11.0396V6.34758C11.0396 5.64845 11.2338 5.17202 12.2364 5.17202L13.5151 5.17145V3.01177C13.2938 2.98233 12.5348 2.91658 11.6518 2.91658C9.80819 2.91658 8.54607 4.04189 8.54607 6.10852V7.88933H6.46094V10.304H8.54607V16.5001H11.0396Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          y="0.5"
                          width="16"
                          height="16"
                          fill="white"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Log In with Facebook
                </a>
              </div>
              <div className="pt-6 md:pt-12">
                <span className="text-black text-base font-light">
                  New to legalkonnect.com?{" "}
                  <a
                    className="text-blueprimary  font-semibold hover:underline"
                    href="#"
                  >
                    Sign Up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
