// components/Header.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button ,  Avatar, User} from "@nextui-org/react";
import DropdowniconSvg from "@/components/Icons/dropdowniconSvg";
import SearchiconheaderSvg from "@/components/Icons/searchiconheaderSvg";
import ToggleiconheaderSvg from "@/components/Icons/toggleiconheaderSvg";
import Headerheart from '../Icons/headerheartSvg';
import Notify from '../Icons/notificationSvg';
import Headerchat from '../Icons/headerheartSvg/headerchatSvg';
import BalanceIcon from '../Icons/balanceSvg';
import Settingsvg from '../Icons/settingSvg';
import MyorderSvg from '../Icons/myorderSvg';
import SupportSvg from '../Icons/supportSvg';
import HistorySvg from '../Icons/historySvg';
import LogoutSvg from '../Icons/logoutSvg';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { 
            title: 'Jobs', 
            links: [
                { title: 'Jobs', link: 'jobs' },
                { title: 'Orders', link: 'orders' },
                { title: 'Create Job', link: 'jobs/create' }
            ]
        },
        { 
            title: 'Talent', 
            links: [
                { title: 'Orders', link: 'orders' },
                { title: 'Recent Viewed Jobs', link: 'account/recent-view/jobs' },
                { title: 'Favorites Jobs', link: 'account/favorites/jobs' }
            ]
        },
        { 
            title: 'Reports', 
            links: [
                { title: 'Weekly Summary', link: 'weekly_summary' },
                { title: 'Balance', link: 'account/balance' },
                { title: 'Timesheet', link: 'timesheet' }
            ]
        }
    ];
    

    const subNavItems = [
        { title: 'Find An Attorney', href: '/find-attorney-legal-support' },
        { title: 'Substitute Attorney', href: '/substitute-attorneys' },
        { title: 'Legal Jobs', href: '/jobs' },
        { title: 'Substitute Attorney Jobs', href: '/substitute-attorneys-jobs' },
        { title: 'Legal Docs', href: '/motions' },
        { title: 'Transcripts', href: '/transcripts' },
        { title: 'Questions Forum', href: '/forum' },
        { title: 'Paralegal/Support', href: '/paralegal-support' },
        { title: 'Experts', href: '/experts' },
        { title: 'Process Servers', href: '/process-servers' },
        { title: 'Court Reporters', href: '/court-reporters' },
        { title: 'Investigators', href: '/investigator' },
    ];

    return (
        <>
            <div className='flex justify-between px-4 py-5 bg-white gap-x-2 sm:gap-x-5 border-b-[0.1px] border-lightgrey sticky top-0 z-[99999]'>
                <div className='flex items-center max-w-72 sm:min-w-40'>
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
                </div>
                <nav className={`w-full navbar ${isOpen ? 'open' : 'closed'}`}>
                    <div className='jobs_header_section flex justify-between gap-x-5 grow'>
                        <ul className='flex items-center gap-x-5 jobs_header_section '>
                        {navItems.map((item, index) => (
                    <li key={index}>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button className="text-black font-normal text-base flex px-0 gap-x-2 outline-0 hover:text-orangeprimary">
                                    {item.title}
                                    <DropdowniconSvg cuClass width="8px" height="8px" fill="black" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu className="w-52 shadow-lg rounded-md bg-white dropdownlist">
                                {item.links.map((linkItem, linkIndex) => (
                                    
                                    <DropdownItem key={linkIndex} className="hover:bg-orangesecondary outline-0 hover:outline-0 p-3">
                                        <Link className="text-black font-normal text-base" href={`/${linkItem.link}`}>
                                            {linkItem.title}
                                        </Link>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                ))}
                        </ul>
                        <ul className='flex items-center grow justify-end gap-x-5 jobs_header_section py-[2px]'>
                            <div className='border-2 border-orangesecondary max-w-xs w-full h-11 rounded-full flex items-center'>
                                <input type='text' placeholder="Find Work" className='rounded-full px-4 text-sm text-blackcolor focus:outline-0 grow' />
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button className='text-blackcolor font-normal text-base flex px-0 gap-x-2 hover:text-orangeprimary w-20 h-11 shadow-btnshadow rounded-full hover:outline-0 outline-0'>
                                        <SearchiconheaderSvg cuClass width={`18px`} height={`18px`} fill={`black`} />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className='w-52 shadow-lg rounded-md bg-white'>
                                        {subNavItems.map((subNavItem, subNavIndex) => (
                                            <DropdownItem key={subNavIndex} className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3'>
                                                <Link className='text-blackcolor font-normal text-base' href={subNavItem.href}>
                                                    {subNavItem.title}
                                                </Link>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <ul className='how_it_work_section flex items-center gap-x-5'> 
                                <li>
                                    <Link href="/how-it-works" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                                        How It Works
                                    </Link>
                                </li>
                                <li> 
                                    <Link href="/support" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                                        Login
                                    </Link>
                                </li>
                                <li> 
                                    <Link href="/register" className='text-white font-normal text-sm sm:text-base rounded-full bg-orangeprimary px-3 sm:px-4 h-9 sm:h-10 cursor hover:bg-blueprimary grow whitespace-nowrap block flex items-center'>
                                    Sign up
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </nav>
                            {/* <ul className='how_it_work_section flex items-center w-[100%] xl:w-max  flex justify-end items-center'> 
                                <li className='w-[22px] h-[20px]'>
                                    <Link href="/account/favorites/jobs" className='font-normal text-base text-blackcolor hover:text-orangeprimary '>
                                        <Headerheart />
                                     </Link>
                                </li>
                                <li className='w-[22px] h-[20px] relative ml-2 sm:ml-5'>
                                    <Link href="/account/favorites/jobs" className='font-normal text-base text-blackcolor hover:text-orangeprimary relative'>
                                    <Notify/>
                                    <span className='w-[10px] h-[10px] border-1 border-white rounded-full bg-orangeprimary block absolute top-[-2px] right-[-5px]'></span>
                                    </Link>
                                   
                                    <div className='fixed bg-white shadow-[1px_2px_8px_0px_rgba(215,215,215,1)] p-4 left-[15px]  sm:left-[unset] right-[15px] max-w-full sm:max-w-[500px] top-[80px] h-[350px] overflow-y-auto scrollbar-thin rounded-[3px]'>
                                       <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <div className='mb-[10px]'>
                                            <p className='text-[13px] text-orangeprimary font-semibold'>2024-05-23 11:23:15</p>
                                            <p className='text-[15px] text-blackcolor font-normal'>Milestone test sh for <Link href="order/420" className='underline decoration-1'>test 123</Link> is confirmed, payment of $97 credited to your account.</p>
                                        </div>
                                        <p className='text-gray text-center cursor-pointer'>Show more</p>
                                    </div> 
                                </li>
                                <li className='w-[22px] h-[20px] ml-2 sm:ml-5'>
                                    <Link href="/account/favorites/jobs" className='font-normal text-base text-blackcolor hover:text-orangeprimary relative'>
                                    <Headerchat/>
                                    <span className='w-[10px] h-[10px] border-1 border-white rounded-full bg-orangeprimary block absolute top-[-2px] right-[-5px]'></span>
                                    </Link>
                                </li>
                                <div className=" w-max ml-3 sm:ml-5">
                                    <Dropdown placement="bottom-start" className='rounded-[3px]'>
                                                    <DropdownTrigger>

                                                    <User
                                                        as="button"
                                                        avatarProps={{
                                                        isBordered: true,
                                                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                                        }}
                                                    
                                                        className="transition-transform "
                                                        name={<span className="text-[0px] xl:text-base font-semibold flex items-center gap-x-2">Attorney Dev <span  className='hidden sm:block'> 
                                                            <svg width="10" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.7366 0.419155L3.99993 2.68249L6.26326 0.419155C6.31727 0.365149 6.38138 0.322309 6.45195 0.293082C6.52251 0.263854 6.59814 0.24881 6.67451 0.24881C6.75089 0.24881 6.82652 0.263854 6.89708 0.293082C6.96764 0.322309 7.03176 0.365149 7.08576 0.419155C7.13977 0.473161 7.18261 0.537276 7.21184 0.607838C7.24107 0.678401 7.25611 0.754029 7.25611 0.830405C7.25611 0.906782 7.24107 0.98241 7.21184 1.05297C7.18261 1.12353 7.13977 1.18765 7.08576 1.24166L4.40826 3.91916C4.3543 3.97323 4.2902 4.01614 4.21963 4.04541C4.14906 4.07468 4.07341 4.08975 3.99701 4.08975C3.92062 4.08975 3.84497 4.07468 3.7744 4.04541C3.70383 4.01614 3.63973 3.97323 3.58576 3.91916L0.908263 1.24166C0.854186 1.18769 0.811283 1.12359 0.782011 1.05302C0.752738 0.982452 0.737671 0.906804 0.737671 0.830405C0.737671 0.754007 0.752738 0.678359 0.782011 0.607791C0.811283 0.537223 0.854186 0.473122 0.908263 0.419155C1.13576 0.197489 1.5091 0.191655 1.7366 0.419155Z" fill="#5D5D5D"></path>
                                                            </svg>
                                                        </span></span>}
                                                    />
                                                    </DropdownTrigger>
                                                    <DropdownMenu aria-label="User Actions" variant="flat" >
                                                    <DropdownItem key="Balance" className="h-full gap-2 border-b-1 border-lightgrey ">
                                                        <Link href="/account/balance" className='flex gap-x-2 items-center py-[10px]'>
                                                            <BalanceIcon/>
                                                            <p className='leading-normal text-base'> Balance: <span className='font-bold inline-block'>$345</span></p>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem key="settings">
                                                    <Link href="/account/edit/settings" className='flex gap-x-2 items-center py-[0px]'>
                                                            <Settingsvg/>
                                                            <p className='leading-normal text-base'> Settings</p>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem key="My_Orders">
                                                    <Link href="/orders" className='flex gap-x-2 items-center py-[0px]'>
                                                            <MyorderSvg/>
                                                            <p className='leading-normal text-base'>My Orders</p>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem key="Support">
                                                    <Link href="/support" className='flex gap-x-2 items-center py-[0px]'>
                                                            <SupportSvg/>
                                                            <p className='leading-normal text-base'>Support</p>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem key="Support">
                                                    <Link href="/account/profile?section=history" className='flex gap-x-2 items-center py-[0px]'>
                                                            <HistorySvg/>
                                                            <p className='leading-normal text-base'>History</p>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem key="Support">
                                                    <Link href="/logout" className='flex gap-x-2 items-center py-[0px]'>
                                                            <LogoutSvg/>
                                                            <p className='leading-normal text-base'>Logout</p>
                                                        </Link>
                                                    </DropdownItem>
                                                    
                                                    
                                                    
                                                    
                                                    </DropdownMenu>
                                    </Dropdown>
                                </div>
                             </ul> */}
                <div className='xl:hidden flex items-center'>
                    <button className='mobile-menu-button' onClick={toggleMenu}>
                        <ToggleiconheaderSvg className= "text-blackcolor" width={`24px`} height={`24px`} fill={`black`}/>
                    </button>
                </div>
            </div>
            <div className='bg-lightblue px-8 py-2 lg:flex items-center justify-center flex-wrap'>
                <div className='flex gap-4 items-cente main_navbar_section_sub xlg:gap-8'>
                    {subNavItems.map((item, index) => (
                        <Link key={index} href={item.href} className='hover:text-orangeprimary text-md'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
