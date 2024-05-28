// components/Header.js
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = () => {
        if (window.innerWidth <= 768) {
            setIsSubMenuOpen(!isSubMenuOpen);
        }
    };

    const closeSubMenu = () => {
        if (window.innerWidth > 768) {
            setIsSubMenuOpen(false);
        }
    };

    useEffect(() => {
        // Close submenu when window width changes
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsSubMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className='flex justify-between px-4 py-5 bg-white'>
                <div className='flex items-center'>
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
                <nav className='w-full' onMouseLeave={closeSubMenu} style={{ maxHeight: isOpen || window.innerWidth > 768 ? '100px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out', justifyContent: 'space-between', alignItems: 'center' }}>

                  
                    <div  className='flex justify-between  '>
                      <ul className='flex items-center gap-x-5'>
                       <Dropdown><DropdownTrigger><Button className='text-blackcolor font-normal text-base flex px-0 gap-x-2 outline-0 hover:text-orangeprimary' > Jobs 
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73666 0.419155L3.99999 2.68249L6.26333 0.419155C6.31733 0.365149 6.38145 0.322309 6.45201 0.293082C6.52257 0.263854 6.5982 0.24881 6.67457 0.24881C6.75095 0.24881 6.82658 0.263854 6.89714 0.293082C6.9677 0.322309 7.03182 0.365149 7.08583 0.419155C7.13983 0.473161 7.18267 0.537276 7.2119 0.607838C7.24113 0.678401 7.25617 0.754029 7.25617 0.830405C7.25617 0.906782 7.24113 0.98241 7.2119 1.05297C7.18267 1.12353 7.13983 1.18765 7.08583 1.24166L4.40832 3.91916C4.35436 3.97323 4.29026 4.01614 4.21969 4.04541C4.14912 4.07468 4.07347 4.08975 3.99707 4.08975C3.92068 4.08975 3.84503 4.07468 3.77446 4.04541C3.70389 4.01614 3.63979 3.97323 3.58582 3.91916L0.908324 1.24166C0.854247 1.18769 0.811344 1.12359 0.782072 1.05302C0.752799 0.982452 0.737732 0.906804 0.737732 0.830405C0.737732 0.754007 0.752799 0.678359 0.782072 0.607791C0.811344 0.537223 0.854247 0.473122 0.908324 0.419155C1.13582 0.197489 1.50916 0.191655 1.73666 0.419155Z" fill="currentColor"></path></svg>
                               </Button></DropdownTrigger>
                                <DropdownMenu  className='w-52 shadow-lg roounded-md'>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Job Posts</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Contracts</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Posts A Job</Link></DropdownItem>
                                   
                        </DropdownMenu>
                         </Dropdown>
                         <Dropdown>
                                <DropdownTrigger><Button className='text-blackcolor font-normal text-base flex px-0 gap-x-2 outline-0 hover:text-orangeprimary'> Talent
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73666 0.419155L3.99999 2.68249L6.26333 0.419155C6.31733 0.365149 6.38145 0.322309 6.45201 0.293082C6.52257 0.263854 6.5982 0.24881 6.67457 0.24881C6.75095 0.24881 6.82658 0.263854 6.89714 0.293082C6.9677 0.322309 7.03182 0.365149 7.08583 0.419155C7.13983 0.473161 7.18267 0.537276 7.2119 0.607838C7.24113 0.678401 7.25617 0.754029 7.25617 0.830405C7.25617 0.906782 7.24113 0.98241 7.2119 1.05297C7.18267 1.12353 7.13983 1.18765 7.08583 1.24166L4.40832 3.91916C4.35436 3.97323 4.29026 4.01614 4.21969 4.04541C4.14912 4.07468 4.07347 4.08975 3.99707 4.08975C3.92068 4.08975 3.84503 4.07468 3.77446 4.04541C3.70389 4.01614 3.63979 3.97323 3.58582 3.91916L0.908324 1.24166C0.854247 1.18769 0.811344 1.12359 0.782072 1.05302C0.752799 0.982452 0.737732 0.906804 0.737732 0.830405C0.737732 0.754007 0.752799 0.678359 0.782072 0.607791C0.811344 0.537223 0.854247 0.473122 0.908324 0.419155C1.13582 0.197489 1.50916 0.191655 1.73666 0.419155Z" fill="currentColor"></path></svg></Button></DropdownTrigger>
                                <DropdownMenu className='w-52 shadow-lg roounded-md'>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Hires</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Recently Viewed</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3'><Link className='text-blackcolor font-normal text-base' href="/support"> Saved Talent</Link></DropdownItem>
                                </DropdownMenu>
                         </Dropdown>
                         <Dropdown>
                                <DropdownTrigger><Button className='text-blackcolor font-normal text-base flex px-0 gap-x-2 outline-0 hover:text-orangeprimary'> Reports
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73666 0.419155L3.99999 2.68249L6.26333 0.419155C6.31733 0.365149 6.38145 0.322309 6.45201 0.293082C6.52257 0.263854 6.5982 0.24881 6.67457 0.24881C6.75095 0.24881 6.82658 0.263854 6.89714 0.293082C6.9677 0.322309 7.03182 0.365149 7.08583 0.419155C7.13983 0.473161 7.18267 0.537276 7.2119 0.607838C7.24113 0.678401 7.25617 0.754029 7.25617 0.830405C7.25617 0.906782 7.24113 0.98241 7.2119 1.05297C7.18267 1.12353 7.13983 1.18765 7.08583 1.24166L4.40832 3.91916C4.35436 3.97323 4.29026 4.01614 4.21969 4.04541C4.14912 4.07468 4.07347 4.08975 3.99707 4.08975C3.92068 4.08975 3.84503 4.07468 3.77446 4.04541C3.70389 4.01614 3.63979 3.97323 3.58582 3.91916L0.908324 1.24166C0.854247 1.18769 0.811344 1.12359 0.782072 1.05302C0.752799 0.982452 0.737732 0.906804 0.737732 0.830405C0.737732 0.754007 0.752799 0.678359 0.782072 0.607791C0.811344 0.537223 0.854247 0.473122 0.908324 0.419155C1.13582 0.197489 1.50916 0.191655 1.73666 0.419155Z" fill="currentColor"></path></svg></Button></DropdownTrigger>
                                <DropdownMenu className='w-52 shadow-lg roounded-md'>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Reports</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Recently Viewed</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3'><Link className='text-blackcolor font-normal text-base' href="/support"> Saved Talent</Link></DropdownItem>
                                </DropdownMenu>
                         </Dropdown>
                      </ul>
                      <ul className='flex items-center grow justify-end'>
                       <div className='border-2 border-orangesecondary max-w-xs w-full h-10 rounded-full flex items-center '>
                            <input type='text' placeholder="Find Work" className='rounded-full px-4 text-sm text-blackcolor focus:outline-0 grow'/>
                            <Dropdown >
                                <DropdownTrigger>
                                <Button className='text-blackcolor font-normal text-base flex px-0 gap-x-2 hover:text-orangeprimary w-20 shadow-btnshadow rounded-full hover:outline-0 outline-0'> 
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4023 16.3898L13.2609 12.2484C14.2875 10.9969 14.9062 9.39375 14.9062 7.64648C14.9062 3.63867 11.6543 0.386719 7.64648 0.386719C3.63516 0.386719 0.386719 3.63867 0.386719 7.64648C0.386719 11.6543 3.63516 14.9062 7.64648 14.9062C9.39375 14.9062 10.9934 14.291 12.2449 13.2645L16.3863 17.4023C16.6676 17.6836 17.1211 17.6836 17.4023 17.4023C17.6836 17.1246 17.6836 16.6676 17.4023 16.3898ZM7.64648 13.4613C4.43672 13.4613 1.82812 10.8527 1.82812 7.64648C1.82812 4.44023 4.43672 1.82812 7.64648 1.82812C10.8527 1.82812 13.4648 4.44023 13.4648 7.64648C13.4648 10.8527 10.8527 13.4613 7.64648 13.4613Z" fill="currentColor"></path>
                                </svg>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73666 0.419155L3.99999 2.68249L6.26333 0.419155C6.31733 0.365149 6.38145 0.322309 6.45201 0.293082C6.52257 0.263854 6.5982 0.24881 6.67457 0.24881C6.75095 0.24881 6.82658 0.263854 6.89714 0.293082C6.9677 0.322309 7.03182 0.365149 7.08583 0.419155C7.13983 0.473161 7.18267 0.537276 7.2119 0.607838C7.24113 0.678401 7.25617 0.754029 7.25617 0.830405C7.25617 0.906782 7.24113 0.98241 7.2119 1.05297C7.18267 1.12353 7.13983 1.18765 7.08583 1.24166L4.40832 3.91916C4.35436 3.97323 4.29026 4.01614 4.21969 4.04541C4.14912 4.07468 4.07347 4.08975 3.99707 4.08975C3.92068 4.08975 3.84503 4.07468 3.77446 4.04541C3.70389 4.01614 3.63979 3.97323 3.58582 3.91916L0.908324 1.24166C0.854247 1.18769 0.811344 1.12359 0.782072 1.05302C0.752799 0.982452 0.737732 0.906804 0.737732 0.830405C0.737732 0.754007 0.752799 0.678359 0.782072 0.607791C0.811344 0.537223 0.854247 0.473122 0.908324 0.419155C1.13582 0.197489 1.50916 0.191655 1.73666 0.419155Z" fill="currentColor"></path></svg></Button></DropdownTrigger>
                                <DropdownMenu className='w-52 shadow-lg roounded-md'>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Reports</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3 '><Link className='text-blackcolor font-normal text-base' href="/support"> Recently Viewed</Link></DropdownItem>
                                    <DropdownItem className='hover:bg-orangesecondary outline-0 hover:outline-0 p-3'><Link className='text-blackcolor font-normal text-base' href="/support"> Saved Talent</Link></DropdownItem>
                                </DropdownMenu>
                         </Dropdown>
                       </div>
                       <ul className='flex items-center gap-x-5 '> 
                       <li>  <Link href="/about" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                               How It Works
                            </Link></li>
                     
                        <li> <Link href="/about" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                               Support
                            </Link></li>
                        <li><Link href="/about" className='font-normal text-base text-blackcolor hover:text-orangeprimary'>
                              Login
                            </Link></li>
                      
                       </ul>
                      </ul>
                      
                       
                      
                       
                        
                        {/* Add more navigation links as needed */}
                    </div>
                </nav>
                {/* Toggle button */}
                <div className={`toggle ${window.innerWidth <= 768 ? '' : 'hidden'} ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
