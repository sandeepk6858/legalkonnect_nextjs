"use client";
import React from "react";
import { Avatar, link } from "@nextui-org/react";
import Link from "next/link";


const ParalegalSupport = () => {

    return (
        <div className="w-full max-w-[1250px] m-[auto] px-8 py-12 z-10">
            {/* <div className="grid grid-cols-5 ">
                <div className="border-2 rounded-3xl transition duration-300 ease-out hover:ease-in hover:scale-105 ">
                    <div className="pt-5 pl-5">
                        <div className="flex gap-4 cursor-pointer relative">
                            <a href="#">
                                <span className="border-2 border-#e1e1e1 rounded-full w-3 h-3 absolute top-[5px] left-[54px] z-[5]"></span>
                                <Avatar className="w-full h-full" src="https://legalkonnect.com/img/no_avatar.jpg" />
                            </a>

                            <div className="flex flex-col px-2 text-black text-lg">
                                <p className="text-lg">para legal</p>
                                <p className="text-sm">Paralegal/Support</p>
                                <div className="flex ">
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#e1e1e1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#e1e1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#e1e1e1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#e1e1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#e1e1e1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#e1e1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#e1e1e1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#e1e1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#e1e1e1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#e1e1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="w-full"></hr>
                    <div className="p-5 cursor-pointer">
                        <div className="flex">
                            <h6 className="text-gray-500 text-sm">Fee Accepted:</h6>
                            <p className="pl-1">N/A</p>
                        </div>
                        <div className="flex">
                            <h6 className="text-gray-500 text-sm">Rate:</h6>
                            <p className="pl-1 ">$</p>
                        </div>
                        <div className="flex">
                            <h6 className="text-gray-500 text-sm">Country:</h6>
                            <p className="pl-1">N/A</p>
                        </div>
                        <div className="flex">
                            <h6 className="text-gray-500 text-sm">State:</h6>
                            <p className="pl-1">N/A</p>
                        </div>
                        <div className="flex">
                            <h6 className="text-gray-500 text-sm">Country:</h6>
                            <p className="pl-1">N/A</p>
                        </div>

                    </div>
                    <hr className="w-full"></hr>

                    <div className="p-5">
                        <div className="flex cursor-pointer">
                            <h5 className="text-sm font-bold">?</h5>
                            <p className="text-gray-600 pl-1 text-sm">yrs experience</p>
                            <div className="flex pl-6">
                                <h5 className="text-sm font-bold">$0</h5>
                                <p className="text-gray-600 pl-1 text-sm">earned</p>
                            </div>

                        </div>
                        <div className="flex py-2">
                            <svg className="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.7273 14.7607 8 14.7607Z" fill="#1359C3"></path>
                                <path d="M11.6703 5.21766C11.4181 4.98838 11.0259 5.00635 10.7954 5.25979L7.01532 9.42216L5.18913 7.56563C4.94806 7.32148 4.55644 7.31776 4.31291 7.5582C4.06875 7.79801 4.06503 8.19026 4.30547 8.43441L6.59144 10.7582C6.70857 10.8772 6.86719 10.9435 7.03325 10.9435C7.03697 10.9435 7.04132 10.9435 7.04504 10.9441C7.21607 10.9404 7.37719 10.8673 7.49182 10.7409L11.7124 6.09329C11.9424 5.8392 11.9238 5.44757 11.6703 5.21766Z" fill="#1359C3"></path>
                            </svg>
                            <span className="text-sm font-bold pl-1">0</span><p className="text-gray-600 pl-1 text-sm">jobs done</p>

                            <div className="flex pl-10 gap-1 cursor-pointer">
                            <Link href={`#`} className="text-black hover:text-blue-400">
                            <svg width="20" height="20" viewBox="0 0 23 23" className="fill-black hover:fill-blue-400" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4416 15.9352L14.478 15.9559L14.5048 15.9237C15.2924 14.9756 16.4791 14.3709 17.8047 14.3709C20.1695 14.3709 22.0934 16.2955 22.0933 18.6609C22.0933 21.0257 20.1694 22.9499 17.8046 22.9499C15.4396 22.9499 13.5154 21.0258 13.5154 18.6609C13.5154 18.1585 13.6029 17.6763 13.7623 17.228L13.7764 17.1885L13.7399 17.1678L8.55779 14.2254L8.52139 14.2048L8.49464 14.237C7.70715 15.1848 6.52058 15.7892 5.1953 15.7892C2.82994 15.7892 0.905469 13.8651 0.905469 11.5002C0.905469 9.13516 2.82994 7.21108 5.1953 7.21108C6.52058 7.21108 7.70726 7.81553 8.49474 8.76344L8.52149 8.79564L8.55789 8.77497L13.7399 5.83194L13.7764 5.81123L13.7623 5.77172C13.603 5.32337 13.5155 4.84133 13.5155 4.33902C13.5155 1.97408 15.4397 0.05 17.8047 0.05C20.1695 0.05 22.0934 1.97407 22.0932 4.33912C22.0932 6.7049 20.1693 8.62956 17.8045 8.62956C16.4788 8.62956 15.2919 8.02471 14.5044 7.0763L14.4776 7.04408L14.4412 7.06476L9.2595 10.0077L9.22304 10.0284L9.23708 10.0679C9.39637 10.5162 9.48392 10.9981 9.48392 11.5003C9.48392 12.0026 9.39637 12.4845 9.23708 12.9328L9.22304 12.9723L9.25951 12.993L14.4416 15.9352ZM20.6751 4.33902C20.6751 2.75609 19.3875 1.46838 17.8047 1.46838C16.2217 1.46838 14.9339 2.75608 14.9339 4.33902C14.9339 5.92275 16.2217 7.21108 17.8047 7.21108C19.3875 7.21108 20.6751 5.92274 20.6751 4.33902ZM2.32395 11.5003C2.32395 13.0832 3.61207 14.3709 5.1954 14.3709C6.77804 14.3709 8.06564 13.0831 8.06564 11.5003C8.06564 9.91727 6.77815 8.62956 5.1954 8.62956C3.61207 8.62956 2.32395 9.91725 2.32395 11.5003ZM14.9339 18.661C14.9339 20.2438 16.2217 21.5316 17.8047 21.5316C19.3875 21.5316 20.6751 20.2438 20.6751 18.661C20.6751 17.0776 19.3875 15.7893 17.8047 15.7893C16.2217 15.7893 14.9339 17.0775 14.9339 18.661Z"  stroke="white" strokeWidth="0.1"></path>
                                </svg></Link>
         

                                <a href="#" ><svg width="20" height="20" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="" d="M11.5 20.7204C11.1725 20.7204 10.8569 20.6018 10.6108 20.3863C9.6817 19.5739 8.78589 18.8104 7.99555 18.1369L7.99152 18.1334C5.67436 16.1588 3.67341 14.4535 2.28118 12.7736C0.72489 10.8957 0 9.11514 0 7.16999C0 5.28011 0.648032 3.53658 1.8246 2.26035C3.0152 0.969017 4.64888 0.257812 6.42522 0.257812C7.75287 0.257812 8.96874 0.677551 10.039 1.50527C10.5791 1.92308 11.0687 2.43442 11.5 3.03086C11.9315 2.43442 12.4209 1.92308 12.9612 1.50527C14.0314 0.677551 15.2473 0.257812 16.5749 0.257812C18.3511 0.257812 19.9849 0.969017 21.1755 2.26035C22.3521 3.53658 23 5.28011 23 7.16999C23 9.11514 22.2752 10.8957 20.7189 12.7735C19.3267 14.4535 17.3259 16.1586 15.0091 18.133C14.2174 18.8076 13.3202 19.5723 12.3889 20.3867C12.1431 20.6018 11.8272 20.7204 11.5 20.7204ZM6.42522 1.60512C5.02966 1.60512 3.74764 2.16208 2.81498 3.17352C1.86847 4.20023 1.34713 5.61948 1.34713 7.16999C1.34713 8.80595 1.95515 10.2691 3.31842 11.914C4.63581 13.5037 6.59518 15.1735 8.86386 17.1069L8.86521 17.1081L8.86942 17.1116C9.66275 17.7877 10.5621 18.5542 11.498 19.3726C12.4397 18.5526 13.3404 17.7849 14.1353 17.1077L14.1414 17.1025C16.4079 15.1708 18.3653 13.5025 19.6817 11.914C21.0448 10.2691 21.6528 8.80595 21.6528 7.16999C21.6528 5.61948 21.1315 4.20023 20.185 3.17352C19.2525 2.16208 17.9703 1.60512 16.5749 1.60512C15.5526 1.60512 14.614 1.9301 13.7852 2.57094C13.0466 3.14229 12.5321 3.86455 12.2305 4.36992C12.0754 4.6298 11.8023 4.78492 11.5 4.78492C11.1976 4.78492 10.9246 4.6298 10.7695 4.36992C10.468 3.86455 9.95351 3.14229 9.21476 2.57094C8.38599 1.9301 7.44737 1.60512 6.42522 1.60512Z" fill="#FF738C"></path>
                                    <path className="" d="M11.5 20.4626C11.1725 20.4626 10.8569 20.344 10.6108 20.1285C9.6817 19.3161 8.78589 18.5526 7.99555 17.8791L7.99152 17.8756C5.67436 15.9009 3.67341 14.1957 2.28118 12.5158C0.72489 10.6379 0 8.85733 0 6.91218C0 5.0223 0.648032 3.27877 1.8246 2.00253C3.0152 0.711205 4.64888 0 6.42522 0C7.75287 0 8.96874 0.419739 10.039 1.24746C10.5791 1.66527 11.0687 2.17661 11.5 2.77305C11.9315 2.17661 12.4209 1.66527 12.9612 1.24746C14.0314 0.419739 15.2473 0 16.5749 0C18.3511 0 19.9849 0.711205 21.1755 2.00253C22.3521 3.27877 23 5.0223 23 6.91218C23 8.85733 22.2752 10.6379 20.7189 12.5157C19.3267 14.1957 17.3259 15.9008 15.0091 17.8752C14.2174 18.5498 13.3202 19.3145 12.3889 20.1289C12.1431 20.344 11.8272 20.4626 11.5 20.4626ZM6.42522 1.34731C5.02966 1.34731 3.74764 1.90427 2.81498 2.91571C1.86847 3.94242 1.34713 5.36167 1.34713 6.91218C1.34713 8.54814 1.95515 10.0113 3.31842 11.6562C4.63581 13.2458 6.59518 14.9157 8.86386 16.8491L8.86521 16.8503L8.86942 16.8538C9.66275 17.5299 10.5621 18.2964 11.498 19.1148C12.4397 18.2948 13.3404 17.5271 14.1353 16.8499L14.1414 16.8447C16.4079 14.913 18.3652 13.2447 19.6817 11.6562C21.0448 10.0113 21.6528 8.54814 21.6528 6.91218C21.6528 5.36167 21.1315 3.94242 20.185 2.91571C19.2525 1.90427 17.9703 1.34731 16.5749 1.34731C15.5526 1.34731 14.614 1.67229 13.7852 2.31313C13.0466 2.88448 12.5321 3.60674 12.2305 4.11211C12.0754 4.37199 11.8023 4.52711 11.5 4.52711C11.1976 4.52711 10.9246 4.37199 10.7695 4.11211C10.468 3.60674 9.95351 2.88448 9.21476 2.31313C8.38599 1.67229 7.44737 1.34731 6.42522 1.34731Z" fill="#FF738C"></path>
                                    <path className="full_heart" d="M6.42522 1.34731C5.02966 1.34731 3.74764 1.90427 2.81498 2.91571C1.86847 3.94242 1.34713 5.36167 1.34713 6.91218C1.34713 8.54814 1.95515 10.0113 3.31842 11.6562C4.63581 13.2458 6.59518 14.9157 8.86386 16.8491L8.86521 16.8503L8.86942 16.8538C9.66275 17.5299 10.5621 18.2964 11.498 19.1148C12.4397 18.2948 13.3404 17.5271 14.1353 16.8499L14.1414 16.8447C16.4079 14.913 18.3652 13.2447 19.6817 11.6562C21.0448 10.0113 21.6528 8.54814 21.6528 6.91218C21.6528 5.36167 21.1315 3.94242 20.185 2.91571C19.2525 1.90427 17.9703 1.34731 16.5749 1.34731C15.5526 1.34731 14.614 1.67229 13.7852 2.31313C13.0466 2.88448 12.5321 3.60674 12.2305 4.11211C12.0754 4.37199 11.8023 4.52711 11.5 4.52711C11.1976 4.52711 10.9246 4.37199 10.7695 4.11211C10.468 3.60674 9.95351 2.88448 9.21476 2.31313C8.38599 1.67229 7.44737 1.34731 6.42522 1.34731Z" fill="#FF738C"></path>
                                </svg></a>
                            </div>

                        </div>

                    </div>

                </div>
            </div> */}

        </div>
    )
}
export default ParalegalSupport;