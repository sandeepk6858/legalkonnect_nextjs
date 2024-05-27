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
                <nav onMouseLeave={closeSubMenu} style={{ maxHeight: isOpen || window.innerWidth > 768 ? '100px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out', justifyContent: 'space-between', alignItems: 'center' }}>

                  
                    <div style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                      <ul className='flex items-center'>
                       <Dropdown><DropdownTrigger><Button className='text-black font-normal text-base flex px-0 gap-x-2 hover:text-orangeprimary' > Jobs 
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73666 0.419155L3.99999 2.68249L6.26333 0.419155C6.31733 0.365149 6.38145 0.322309 6.45201 0.293082C6.52257 0.263854 6.5982 0.24881 6.67457 0.24881C6.75095 0.24881 6.82658 0.263854 6.89714 0.293082C6.9677 0.322309 7.03182 0.365149 7.08583 0.419155C7.13983 0.473161 7.18267 0.537276 7.2119 0.607838C7.24113 0.678401 7.25617 0.754029 7.25617 0.830405C7.25617 0.906782 7.24113 0.98241 7.2119 1.05297C7.18267 1.12353 7.13983 1.18765 7.08583 1.24166L4.40832 3.91916C4.35436 3.97323 4.29026 4.01614 4.21969 4.04541C4.14912 4.07468 4.07347 4.08975 3.99707 4.08975C3.92068 4.08975 3.84503 4.07468 3.77446 4.04541C3.70389 4.01614 3.63979 3.97323 3.58582 3.91916L0.908324 1.24166C0.854247 1.18769 0.811344 1.12359 0.782072 1.05302C0.752799 0.982452 0.737732 0.906804 0.737732 0.830405C0.737732 0.754007 0.752799 0.678359 0.782072 0.607791C0.811344 0.537223 0.854247 0.473122 0.908324 0.419155C1.13582 0.197489 1.50916 0.191655 1.73666 0.419155Z" fill="currentColor"></path></svg>
                               </Button></DropdownTrigger>
                                <DropdownMenu >
                                    <DropdownItem className='hover:bg-orangesecondary'><Link className='text-black ' href="/support"> Job Posts</Link></DropdownItem>
                                    <DropdownItem ><Link className='text-black' href="/support"> Contracts</Link></DropdownItem>
                                    <DropdownItem ><Link className='text-black' href="/support"> Posts A Job</Link></DropdownItem>
                        </DropdownMenu>
                         </Dropdown>
                         <Dropdown>
                                <DropdownTrigger><Button> Talent</Button></DropdownTrigger>
                                <DropdownMenu >
                                    <DropdownItem ><Link href="/support"> Hires</Link></DropdownItem>
                                    <DropdownItem ><Link href="/support"> Recently Viewed</Link></DropdownItem>
                                    <DropdownItem ><Link href="/support"> Saved Talent</Link></DropdownItem>
                                </DropdownMenu>
                         </Dropdown>
                         <Dropdown>
                                <DropdownTrigger><Button> Reports</Button></DropdownTrigger>
                                <DropdownMenu >
                                    <DropdownItem ><Link href="/support"> Reports</Link></DropdownItem>
                                    <DropdownItem ><Link href="/support"> Recently Viewed</Link></DropdownItem>
                                    <DropdownItem ><Link href="/support"> Saved Talent</Link></DropdownItem>
                                </DropdownMenu>
                         </Dropdown>
                      </ul>
                      
                       
                      
                        <li style={{ position: 'relative' }}>
                            <a href="#" onMouseEnter={toggleSubMenu} onClick={toggleSubMenu}>Services</a>
                            {/* Submenu */}
                            <ul style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#333', padding: '10px', display: window.innerWidth > 768 || isSubMenuOpen ? 'block' : 'none' }}>
                                <li><Link href="/service1">Service 1</Link></li>
                                <li><Link href="/service2">Service 2</Link></li>
                                {/* Add more submenu items as needed */}
                            </ul>
                        </li>
                        <li>
                            <Link href="/about" className='text-#000'>
                                About
                            </Link>
                        </li>
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
