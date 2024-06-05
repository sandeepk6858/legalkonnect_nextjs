// components/Header.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import DropdowniconSvg from "@/components/Icons/dropdowniconSvg";
import SearchiconheaderSvg from "@/components/Icons/searchiconheaderSvg";
import ToggleiconheaderSvg from "@/components/Icons/ToggleiconheaderSvg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { title: 'Jobs', links: ['Job Posts', 'Contracts', 'Posts A Job'] },
        { title: 'Talent', links: ['Hires', 'Recently Viewed', 'Saved Talent'] },
        { title: 'Reports', links: ['Reports', 'Recently Viewed', 'Saved Talent'] },
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
                <div className='flex items-center max-w-72 min-w-40'>
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
                        <ul className='flex items-center gap-x-5 jobs_header_section'>
                            {navItems.map((item, index) => (
                                <Dropdown key={index}>
                                    <DropdownTrigger>
                                        <Button className='text-blackcolor font-normal text-base flex px-0 gap-x-2 outline-0 hover:text-orangeprimary'>
                                            {item.title}
                                            <DropdowniconSvg cuClass width={`8px`} height={`8px`} fill={`black`} />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className='w-52 shadow-lg rounded-md bg-white'>
                                        {item.links.map((link, linkIndex) => (
                                            <DropdownItem key={linkIndex} className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3'>
                                                <Link className='text-blackcolor font-normal text-base' href={`/${link.toLowerCase().replace(/ /g, '-')}`}>
                                                    {link}
                                                </Link>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            ))}
                        </ul>
                        <ul className='flex items-center grow justify-end gap-x-5 jobs_header_section'>
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
                       <li>  <Link href="/about" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                               How It Works
                            </Link></li>
                     
                        <li> <Link href="/about" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                               Support
                            </Link></li>
                        <li><Link href="/about" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                              Login
                            </Link></li>
                            <li> <button className='text-white font-normal text-sm sm:text-base rounded-full bg-orangeprimary px-3 sm:px-4 h-9 sm:h-10 cursor hover:bg-blueprimary grow whitespace-nowrap'>Sign up</button></li>
                       </ul>
                      
                        </ul>
                    </div>
                </nav>
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
