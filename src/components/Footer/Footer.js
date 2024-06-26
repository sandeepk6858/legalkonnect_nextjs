import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const twittericon = <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5609 3.14844C12.5698 3.2728 12.5698 3.39719 12.5698 3.52154C12.5698 7.31467 9.68275 11.6852 4.40609 11.6852C2.78045 11.6852 1.27031 11.2144 0 10.3972C0.230973 10.4238 0.453031 10.4327 0.692891 10.4327C2.03424 10.4327 3.26903 9.97967 4.25507 9.20683C2.99365 9.18017 1.93654 8.35403 1.57232 7.21697C1.75 7.2436 1.92765 7.26138 2.11422 7.26138C2.37182 7.26138 2.62946 7.22583 2.86929 7.16368C1.55457 6.89716 0.568504 5.74235 0.568504 4.34768V4.31216C0.950469 4.52536 1.39467 4.65861 1.86545 4.67635C1.0926 4.16111 0.586277 3.28169 0.586277 2.28676C0.586277 1.75377 0.728383 1.26519 0.977129 0.838795C2.38957 2.57991 4.51268 3.71694 6.89336 3.84133C6.84895 3.62813 6.82229 3.40607 6.82229 3.18399C6.82229 1.60275 8.10149 0.314697 9.69158 0.314697C10.5177 0.314697 11.2639 0.661143 11.788 1.22079C12.4365 1.09643 13.0583 0.856568 13.6091 0.527897C13.3959 1.19415 12.9428 1.7538 12.3477 2.1091C12.9251 2.04695 13.4847 1.88702 13.9999 1.66496C13.6091 2.23346 13.1205 2.73979 12.5609 3.14844Z" fill="white"></path>
</svg>
const fbicon = <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53166 14V7.43079H0V5.06556H1.53166V3.04535C1.53166 1.45785 2.43642 0 4.52117 0C5.36526 0 5.98942 0.09177 5.98942 0.09177L5.94024 2.30049C5.94024 2.30049 5.3037 2.29347 4.60907 2.29347C3.85727 2.29347 3.73683 2.68638 3.73683 3.33851V5.06556H6L5.90153 7.43079H3.73683V14H1.53166Z" fill="white"></path>
</svg>

const instaicon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1.26131C8.86905 1.26131 9.09043 1.26842 9.82855 1.30205C10.511 1.33323 10.8817 1.44725 11.1284 1.54312C11.4551 1.6701 11.6883 1.8218 11.9332 2.06675C12.1782 2.3117 12.3299 2.54488 12.4569 2.87159C12.5528 3.11828 12.6668 3.48895 12.6979 4.1714C12.7316 4.90957 12.7387 5.13095 12.7387 7C12.7387 8.86911 12.7316 9.09048 12.6979 9.8286C12.6668 10.5111 12.5528 10.8817 12.4569 11.1284C12.3299 11.4551 12.1782 11.6884 11.9332 11.9333C11.6883 12.1782 11.4551 12.33 11.1284 12.4569C10.8817 12.5528 10.511 12.6668 9.82855 12.6979C9.09054 12.7316 8.86916 12.7387 7 12.7387C5.13078 12.7387 4.90941 12.7316 4.1714 12.6979C3.4889 12.6668 3.11828 12.5528 2.87159 12.4569C2.54488 12.33 2.31164 12.1782 2.0667 11.9333C1.82175 11.6883 1.67005 11.4551 1.54312 11.1284C1.44725 10.8818 1.33317 10.5111 1.30205 9.8286C1.26837 9.09048 1.26126 8.86911 1.26126 7C1.26126 5.13095 1.26837 4.90957 1.30205 4.17145C1.33323 3.48895 1.44725 3.11828 1.54312 2.87159C1.67005 2.54488 1.82175 2.3117 2.0667 2.06675C2.3117 1.82175 2.54488 1.6701 2.87159 1.54312C3.11823 1.44725 3.4889 1.33323 4.1714 1.30205C4.90952 1.26842 5.13089 1.26131 7 1.26131V1.26131ZM7 0C5.0989 0 4.86052 0.00803906 4.11392 0.0421094C3.3688 0.076125 2.85994 0.194469 2.41473 0.3675C1.95437 0.546383 1.56401 0.78575 1.17485 1.17491C0.785695 1.56406 0.546383 1.95442 0.3675 2.41473C0.194414 2.85999 0.076125 3.36886 0.0421094 4.11392C0.00803906 4.86052 0 5.0989 0 7C0 8.9011 0.00803906 9.13948 0.0421094 9.88608C0.076125 10.6312 0.194414 11.1401 0.3675 11.5853C0.546328 12.0456 0.785695 12.436 1.17485 12.8251C1.56401 13.2143 1.95437 13.4536 2.41473 13.6325C2.85999 13.8056 3.3688 13.9239 4.11387 13.9579C4.86052 13.992 5.0989 14 7 14C8.9011 14 9.13948 13.992 9.88608 13.9579C10.6311 13.9239 11.14 13.8056 11.5852 13.6325C12.0456 13.4537 12.4359 13.2143 12.8251 12.8251C13.2143 12.436 13.4536 12.0456 13.6325 11.5853C13.8055 11.14 13.9239 10.6312 13.9579 9.88613C13.992 9.13948 14 8.9011 14 7C14 5.0989 13.992 4.86052 13.9579 4.11392C13.9239 3.36886 13.8055 2.85999 13.6325 2.41478C13.4536 1.95442 13.2143 1.56406 12.8251 1.17491C12.4359 0.78575 12.0456 0.546328 11.5853 0.3675C11.14 0.194469 10.6311 0.076125 9.88608 0.0421094C9.13948 0.00803906 8.9011 0 7 0ZM7 3.40539C5.01473 3.40539 3.40539 5.01484 3.40539 7C3.40539 8.98527 5.01473 10.5946 7 10.5946C8.98521 10.5946 10.5946 8.98527 10.5946 7C10.5946 5.01479 8.98521 3.40539 7 3.40539V3.40539ZM7 9.33335C5.71134 9.33335 4.66665 8.28866 4.66665 7C4.66665 5.71134 5.71134 4.66665 7 4.66665C8.28866 4.66665 9.33335 5.71134 9.33335 7C9.33335 8.28866 8.28866 9.33335 7 9.33335ZM11.5766 3.26337C11.5766 3.72734 11.2005 4.10337 10.7366 4.10337C10.2727 4.10337 9.89658 3.72734 9.89658 3.26337C9.89658 2.79945 10.2727 2.42337 10.7366 2.42337C11.2005 2.42337 11.5766 2.79945 11.5766 3.26337V3.26337Z" fill="white"></path>
</svg>

const linkedin = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.17714 13.9995V4.55374H0.176084V13.9995H3.17714ZM1.677 3.2633C2.72352 3.2633 3.37493 2.53798 3.37493 1.63156C3.35543 0.704706 2.72356 -0.000488281 1.69686 -0.000488281C0.670319 -0.000488281 -0.000976562 0.70472 -0.000976562 1.63156C-0.000976562 2.53802 0.650272 3.2633 1.65741 3.2633H1.67691H1.677ZM4.83821 13.9995H7.83927V8.72454C7.83927 8.44223 7.85877 8.16021 7.93802 7.9584C8.15497 7.39435 8.64876 6.81016 9.47778 6.81016C10.5637 6.81016 10.9982 7.67637 10.9982 8.94617V13.9995H13.9991V8.58333C13.9991 5.68196 12.5185 4.33198 10.544 4.33198C8.92503 4.33198 8.2142 5.27869 7.8193 5.92349H7.83934V4.55354H4.83828C4.87767 5.43988 4.83828 13.9993 4.83828 13.9993L4.83821 13.9995Z" fill="white"></path>
</svg>

export default function Footer() {
  return (
    <>
    <div className="footer_main bg-[#898989] text-[#fff] p-[40px] border-b-[1px] border-color-[#fff]">
      <div className='container'>
        <div className='footer_left_main flex items-center justify-between'>
      <div className="footer_left w-full">
      <Link href="/">
                        <Image
                            src="https://legalkonnect.com/storage/uploads/03-07-2024-legal-logo.png"
                            alt="logoImage"
                            width={270}
                            height={40}
                            quality={100}
                            className="cursor-pointer"
                        />
                    </Link>
                    <ul className="social-item flex items-center gap-[20px] mt-[40px]">
                    <li className='bg-[#f16622] rounded-[50%] w-[30px] h-[30px] flex items-center justify-center'>
                        <a href="">{twittericon}</a>
                    </li>
                    <li className='bg-[#f16622] rounded-[50%] w-[30px] h-[30px] flex items-center justify-center'>
                        <a href="">{fbicon}</a>
                    </li>
                    <li className='bg-[#f16622] rounded-[50%] w-[30px] h-[30px] flex items-center justify-center'>
                        <a href="">{instaicon}</a>
                    </li>
                    <li className='bg-[#f16622] rounded-[50%] w-[30px] h-[30px] flex items-center justify-center'>
                        <a href="">{linkedin}</a>
                    </li>
                </ul>
                <div className='mt-[40px]'><p>Copyright legalkonnect.com All Rights Reserved 2024</p></div>
                    </div>
                    <div className='footer_right_main w-full'>
                      <div className='footer_nav_right flex justify-between'>
                      <ul class="ft-menu-item mb-[20px] md:mt-[30px] md:w-full sm:mt-[30px] sm:w-full">
                    <li class="ft-menu-title font-semibold mb-[10px]">legalkonnect</li>

                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact-support">Contact</a>
                        </li>
						<li>
                            <a href="/promos">Pages</a>
                        </li>
                                                    <li>
                                <a href="https://legalkonnect.com/login">Log In</a>
                            </li>
                                            </ul>

                                            <ul class="ft-menu-item mb-[20px] md:mt-[30px] md:w-full sm:mt-[30px] sm:w-full">
                        <li class="ft-menu-title font-semibold mb-[10px]">Discover</li>
                                                    <li>
                                <a href="#">Browse lawyer</a>
                            </li>
                            <li>
                                <a href="#">Find work</a>
                            </li>
                                                <li>
                            <a href="/how-it-works">How it works</a>
                        </li>
                                                    <li>
                                <a href="#">Post a project</a>
                            </li>
                                            </ul>

                                            <ul class="ft-menu-item md:mt-[30px] md:w-full sm:mt-[30px] sm:w-full">
                        <li class="ft-menu-title font-semibold mb-[10px]">Resources</li>
                                                    <li>
                                <a href="/register">Become a member</a>
                            </li>
                                                <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="/support">Support</a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    </div>
      </div>
    </div>

<div className='footer_bottom bg-[#898989] p-[20px]'>
  <div className="container">
<ul className='flex items-center gap-[10px] text-[#fff]'>
                <li>
                    <a href="/terms-of-service">Terms of Service</a>
                </li>
                <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                </li>
            </ul>
</div>
</div>
</>
    
  );
}
