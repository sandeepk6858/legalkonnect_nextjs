import Link from 'next/link';
import Image from "next/image";
import Headerheart from '../Icons/headerheartSvg';
import Notify from '../Icons/notificationSvg';
import Headerchat from '../Icons/headerheartSvg/headerchatSvg';
import BalanceIcon from '../Icons/balanceSvg';
import Settingsvg from '../Icons/settingSvg';
import MyorderSvg from '../Icons/myorderSvg';
import SupportSvg from '../Icons/supportSvg';
import HistorySvg from '../Icons/historySvg';
import LogoutSvg from '../Icons/logoutSvg';

import Navbar from './navbar';

const Header = () => {

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
                            priority 
                        />
                    </Link>
                </div>
                <Navbar navItems={navItems} subNavItems={subNavItems} />
            </div>
            <div className='bg-lightblue px-[15px] py-2 lg:flex items-center justify-start '>
                <div className='flex gap-4 items-cente flex-wrap main_navbar_section_sub xlg:gap-8'>
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
