'use client'
import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar, User } from "@nextui-org/react";
import DropdowniconSvg from "@/components/Icons/dropdowniconSvg";
import SearchiconheaderSvg from "@/components/Icons/searchiconheaderSvg";
import ToggleiconheaderSvg from "@/components/Icons/toggleiconheaderSvg";
import Link from 'next/link';
import { signOut } from "next-auth/react"
import { useSession } from '@/context/SessionContext';

//export default () => <button onClick={() => signOut()}>Sign out</button>
const Navbar = ({ navItems, subNavItems }) => {
    const session = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = async () => {
    await signOut({ callbackUrl: '/api/signout' });
    };

    return (
        <>
            <nav className={`w-full navbar ${isOpen ? 'open' : 'closed'}`}>
                <div className='jobs_header_section flex justify-between gap-x-5 grow'>
                    <ul className='flex items-center jobs_header_section '>
                        {navItems && navItems.map((item, index) => (
                            <li key={index}>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button className="text-black dropfirst font-normal text-base flex px-0 gap-x-2 outline-0 hover:text-orangeprimary">
                                            {item.title}
                                            <DropdowniconSvg cuClass width="8px" height="8px" fill="black" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className="w-52 shadow-lg rounded-md bg-white dropdownlist">
                                        {item && item.links.map((linkItem, linkIndex) => (

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
                                {session && session?.user ? (
                                    <Link onClick={() => handleSignOut()} href="#" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                                        Sign out
                                    </Link>
                                ) : (
                                    <Link href="/login" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                                        Login
                                    </Link>
                                )}
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
            <div className='xl:hidden flex items-center'>
                <button className='mobile-menu-button' onClick={toggleMenu}>
                    <ToggleiconheaderSvg className="text-blackcolor" width={`24px`} height={`24px`} fill={`black`} />
                </button>
            </div>
        </>
    );
}
export default Navbar;