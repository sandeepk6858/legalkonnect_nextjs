import React from "react";
import {Button } from "@nextui-org/react";
import Image from "next/image";

const jobicon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.7273 14.7607 8 14.7607Z" fill="#1359C3"></path>
<path d="M11.6703 5.21766C11.4181 4.98838 11.0259 5.00635 10.7954 5.25979L7.01532 9.42216L5.18913 7.56563C4.94806 7.32148 4.55644 7.31776 4.31291 7.5582C4.06875 7.79801 4.06503 8.19026 4.30547 8.43441L6.59144 10.7582C6.70857 10.8772 6.86719 10.9435 7.03325 10.9435C7.03697 10.9435 7.04132 10.9435 7.04504 10.9441C7.21607 10.9404 7.37719 10.8673 7.49182 10.7409L11.7124 6.09329C11.9424 5.8392 11.9238 5.44757 11.6703 5.21766Z" fill="#1359C3"></path>
</svg>
const shareicon = <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4416 15.9352L14.478 15.9559L14.5048 15.9237C15.2924 14.9756 16.4791 14.3709 17.8047 14.3709C20.1695 14.3709 22.0934 16.2955 22.0933 18.6609C22.0933 21.0257 20.1694 22.9499 17.8046 22.9499C15.4396 22.9499 13.5154 21.0258 13.5154 18.6609C13.5154 18.1585 13.6029 17.6763 13.7623 17.228L13.7764 17.1885L13.7399 17.1678L8.55779 14.2254L8.52139 14.2048L8.49464 14.237C7.70715 15.1848 6.52058 15.7892 5.1953 15.7892C2.82994 15.7892 0.905469 13.8651 0.905469 11.5002C0.905469 9.13516 2.82994 7.21108 5.1953 7.21108C6.52058 7.21108 7.70726 7.81553 8.49474 8.76344L8.52149 8.79564L8.55789 8.77497L13.7399 5.83194L13.7764 5.81123L13.7623 5.77172C13.603 5.32337 13.5155 4.84133 13.5155 4.33902C13.5155 1.97408 15.4397 0.05 17.8047 0.05C20.1695 0.05 22.0934 1.97407 22.0932 4.33912C22.0932 6.7049 20.1693 8.62956 17.8045 8.62956C16.4788 8.62956 15.2919 8.02471 14.5044 7.0763L14.4776 7.04408L14.4412 7.06476L9.2595 10.0077L9.22304 10.0284L9.23708 10.0679C9.39637 10.5162 9.48392 10.9981 9.48392 11.5003C9.48392 12.0026 9.39637 12.4845 9.23708 12.9328L9.22304 12.9723L9.25951 12.993L14.4416 15.9352ZM20.6751 4.33902C20.6751 2.75609 19.3875 1.46838 17.8047 1.46838C16.2217 1.46838 14.9339 2.75608 14.9339 4.33902C14.9339 5.92275 16.2217 7.21108 17.8047 7.21108C19.3875 7.21108 20.6751 5.92274 20.6751 4.33902ZM2.32395 11.5003C2.32395 13.0832 3.61207 14.3709 5.1954 14.3709C6.77804 14.3709 8.06564 13.0831 8.06564 11.5003C8.06564 9.91727 6.77815 8.62956 5.1954 8.62956C3.61207 8.62956 2.32395 9.91725 2.32395 11.5003ZM14.9339 18.661C14.9339 20.2438 16.2217 21.5316 17.8047 21.5316C19.3875 21.5316 20.6751 20.2438 20.6751 18.661C20.6751 17.0776 19.3875 15.7893 17.8047 15.7893C16.2217 15.7893 14.9339 17.0775 14.9339 18.661Z" fill="#878787" stroke="white" stroke-width="0.1"></path>
</svg>
const hearticon = <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="" d="M11.5 20.7204C11.1725 20.7204 10.8569 20.6018 10.6108 20.3863C9.6817 19.5739 8.78589 18.8104 7.99555 18.1369L7.99152 18.1334C5.67436 16.1588 3.67341 14.4535 2.28118 12.7736C0.72489 10.8957 0 9.11514 0 7.16999C0 5.28011 0.648032 3.53658 1.8246 2.26035C3.0152 0.969017 4.64888 0.257812 6.42522 0.257812C7.75287 0.257812 8.96874 0.677551 10.039 1.50527C10.5791 1.92308 11.0687 2.43442 11.5 3.03086C11.9315 2.43442 12.4209 1.92308 12.9612 1.50527C14.0314 0.677551 15.2473 0.257812 16.5749 0.257812C18.3511 0.257812 19.9849 0.969017 21.1755 2.26035C22.3521 3.53658 23 5.28011 23 7.16999C23 9.11514 22.2752 10.8957 20.7189 12.7735C19.3267 14.4535 17.3259 16.1586 15.0091 18.133C14.2174 18.8076 13.3202 19.5723 12.3889 20.3867C12.1431 20.6018 11.8272 20.7204 11.5 20.7204ZM6.42522 1.60512C5.02966 1.60512 3.74764 2.16208 2.81498 3.17352C1.86847 4.20023 1.34713 5.61948 1.34713 7.16999C1.34713 8.80595 1.95515 10.2691 3.31842 11.914C4.63581 13.5037 6.59518 15.1735 8.86386 17.1069L8.86521 17.1081L8.86942 17.1116C9.66275 17.7877 10.5621 18.5542 11.498 19.3726C12.4397 18.5526 13.3404 17.7849 14.1353 17.1077L14.1414 17.1025C16.4079 15.1708 18.3653 13.5025 19.6817 11.914C21.0448 10.2691 21.6528 8.80595 21.6528 7.16999C21.6528 5.61948 21.1315 4.20023 20.185 3.17352C19.2525 2.16208 17.9703 1.60512 16.5749 1.60512C15.5526 1.60512 14.614 1.9301 13.7852 2.57094C13.0466 3.14229 12.5321 3.86455 12.2305 4.36992C12.0754 4.6298 11.8023 4.78492 11.5 4.78492C11.1976 4.78492 10.9246 4.6298 10.7695 4.36992C10.468 3.86455 9.95351 3.14229 9.21476 2.57094C8.38599 1.9301 7.44737 1.60512 6.42522 1.60512Z" fill="#FF738C"></path>
<path class="" d="M11.5 20.4626C11.1725 20.4626 10.8569 20.344 10.6108 20.1285C9.6817 19.3161 8.78589 18.5526 7.99555 17.8791L7.99152 17.8756C5.67436 15.9009 3.67341 14.1957 2.28118 12.5158C0.72489 10.6379 0 8.85733 0 6.91218C0 5.0223 0.648032 3.27877 1.8246 2.00253C3.0152 0.711205 4.64888 0 6.42522 0C7.75287 0 8.96874 0.419739 10.039 1.24746C10.5791 1.66527 11.0687 2.17661 11.5 2.77305C11.9315 2.17661 12.4209 1.66527 12.9612 1.24746C14.0314 0.419739 15.2473 0 16.5749 0C18.3511 0 19.9849 0.711205 21.1755 2.00253C22.3521 3.27877 23 5.0223 23 6.91218C23 8.85733 22.2752 10.6379 20.7189 12.5157C19.3267 14.1957 17.3259 15.9008 15.0091 17.8752C14.2174 18.5498 13.3202 19.3145 12.3889 20.1289C12.1431 20.344 11.8272 20.4626 11.5 20.4626ZM6.42522 1.34731C5.02966 1.34731 3.74764 1.90427 2.81498 2.91571C1.86847 3.94242 1.34713 5.36167 1.34713 6.91218C1.34713 8.54814 1.95515 10.0113 3.31842 11.6562C4.63581 13.2458 6.59518 14.9157 8.86386 16.8491L8.86521 16.8503L8.86942 16.8538C9.66275 17.5299 10.5621 18.2964 11.498 19.1148C12.4397 18.2948 13.3404 17.5271 14.1353 16.8499L14.1414 16.8447C16.4079 14.913 18.3652 13.2447 19.6817 11.6562C21.0448 10.0113 21.6528 8.54814 21.6528 6.91218C21.6528 5.36167 21.1315 3.94242 20.185 2.91571C19.2525 1.90427 17.9703 1.34731 16.5749 1.34731C15.5526 1.34731 14.614 1.67229 13.7852 2.31313C13.0466 2.88448 12.5321 3.60674 12.2305 4.11211C12.0754 4.37199 11.8023 4.52711 11.5 4.52711C11.1976 4.52711 10.9246 4.37199 10.7695 4.11211C10.468 3.60674 9.95351 2.88448 9.21476 2.31313C8.38599 1.67229 7.44737 1.34731 6.42522 1.34731Z" fill="#FF738C"></path>
<path class="full_heart" d="M6.42522 1.34731C5.02966 1.34731 3.74764 1.90427 2.81498 2.91571C1.86847 3.94242 1.34713 5.36167 1.34713 6.91218C1.34713 8.54814 1.95515 10.0113 3.31842 11.6562C4.63581 13.2458 6.59518 14.9157 8.86386 16.8491L8.86521 16.8503L8.86942 16.8538C9.66275 17.5299 10.5621 18.2964 11.498 19.1148C12.4397 18.2948 13.3404 17.5271 14.1353 16.8499L14.1414 16.8447C16.4079 14.913 18.3652 13.2447 19.6817 11.6562C21.0448 10.0113 21.6528 8.54814 21.6528 6.91218C21.6528 5.36167 21.1315 3.94242 20.185 2.91571C19.2525 1.90427 17.9703 1.34731 16.5749 1.34731C15.5526 1.34731 14.614 1.67229 13.7852 2.31313C13.0466 2.88448 12.5321 3.60674 12.2305 4.11211C12.0754 4.37199 11.8023 4.52711 11.5 4.52711C11.1976 4.52711 10.9246 4.37199 10.7695 4.11211C10.468 3.60674 9.95351 2.88448 9.21476 2.31313C8.38599 1.67229 7.44737 1.34731 6.42522 1.34731Z" fill="#FF738C"></path>
</svg>

const Cards = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] mt-[20px] p-[20px]">
      <div class="container">
      <div className="cards_filters_topbar flex items-center gap-[20px] justify-end flex-wrap">
        <span>Filters applied</span>
        <Button className="bg-orangeprimary hover:bg-grey rounded-[22px] text-[#fff] text-[18px]">
        Apply Filters
      </Button> 
      <Button className="bg-grey hover:bg-orangeprimary rounded-[22px] text-[#fff] text-[18px]">
      Reset Filters
      </Button> 
      <Button className="bg-orangeprimary hover:bg-grey rounded-[22px] text-[#fff] text-[18px]">
      Close Filters
      </Button> 
       
      </div>
      </div>
      </div>

      <div className="cards_main_section p-[20px] flex gap-[10px] items-center flex-wrap justify-between">
      <div className="first-card lg:w-[calc(25%_-_10px)] sm:m-auto sm:mt-[15px] sm:justify-center">
      <Image className="w-full h-full rounded-tr-[20px] rounded-tl-[20px]"
      width={100}
      height={100}
      alt="cardimage"
      src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
    />
    <div className="bg-[#fff] p-[20px] shadow-[-1px_2px_8px_0px_rgba(215,215,215,1)] rounded-bl-[20px] rounded-br-[20px]">
    <div className="profile_rating_section flex items-center gap-[20px] relative">
      <div className="image_person">
    <Image className=""
      width={100}
      height={100}
      alt="profileimage"
      src="https://legalkonnect.com/img/no_avatar.jpg"
    />
    </div>
    <span className="bg-[#EDEDED] border-[3px] border-[#FFFFFF] w-[20px] h-[20px] rounded-[50%] absolute top-[7px] left-[68px]"></span>
    <div className="right_info_profile">
    Attorney Attorneys
    <div className="attorney_verify flex gap-[10px] items-center">
      <span>attorney</span>
      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.9529 6.99865C17.9338 6.81721 17.8313 6.65494 17.6756 6.55982L16.3723 5.76409L16.9589 4.35433C17.029 4.18585 17.0167 3.99429 16.9254 3.83629C16.8342 3.67828 16.6745 3.5718 16.4935 3.5482L14.9793 3.35137L14.9418 1.82497C14.9373 1.64251 14.8481 1.47259 14.7004 1.36532C14.5528 1.2581 14.3636 1.22575 14.1887 1.27782L12.7254 1.71376L12.0703 0.334588C11.992 0.169745 11.8414 0.0508006 11.6629 0.0128712C11.4844 -0.0250583 11.2983 0.0223242 11.1598 0.141074L10.0004 1.13451L8.84081 0.141034C8.70222 0.0222852 8.51628 -0.0250583 8.33777 0.0128712C8.15925 0.0508397 8.00863 0.169784 7.93035 0.334588L7.2752 1.71376L5.81188 1.27782C5.637 1.22575 5.44782 1.25806 5.30017 1.36532C5.15255 1.47259 5.0633 1.64251 5.0588 1.82497L5.02126 3.35137L3.50713 3.54828C3.32616 3.5718 3.16647 3.67828 3.07522 3.83629C2.98397 3.99437 2.97163 4.18585 3.04171 4.35441L3.62823 5.76409L2.32511 6.55979C2.16941 6.65494 2.06687 6.81721 2.04777 6.99861C2.0287 7.18009 2.09527 7.36017 2.2278 7.48552L3.33706 8.53477L2.47022 9.7918C2.36663 9.94203 2.33894 10.1319 2.39534 10.3055C2.45171 10.479 2.58573 10.6164 2.75784 10.6771L4.19799 11.1844L3.91733 12.6854C3.88381 12.8647 3.93576 13.0495 4.05787 13.1852C4.17998 13.3208 4.35826 13.3917 4.54025 13.3771L6.0622 13.2548L6.41622 14.7401C6.45856 14.9176 6.58118 15.0653 6.74786 15.1396C6.91457 15.2137 7.10637 15.2061 7.26656 15.1188L8.60734 14.388L9.53495 15.6009C9.64585 15.7458 9.81788 15.8309 10.0004 15.8309C10.1829 15.8309 10.3549 15.7458 10.4658 15.6009L11.3933 14.388L12.734 15.1188C12.8943 15.2061 13.0861 15.2139 13.2527 15.1396C13.4195 15.0654 13.542 14.9177 13.5844 14.7402L13.9384 13.2549L15.4605 13.3772C15.6422 13.3917 15.8207 13.3208 15.9428 13.1852C16.065 13.0496 16.1169 12.8648 16.0834 12.6854L15.8027 11.1845L17.2428 10.6771C17.4149 10.6165 17.549 10.4791 17.6053 10.3055C17.6617 10.132 17.634 9.94203 17.5304 9.79184L16.6636 8.53481L17.7729 7.48564C17.9054 7.36021 17.972 7.18017 17.9529 6.99865ZM13.5472 7.44232L12.1988 8.75669L12.5117 10.5807C12.5213 10.6228 12.5263 10.6666 12.5263 10.7116C12.5263 11.0348 12.2647 11.2969 11.9417 11.2976C11.941 11.2976 11.9403 11.2976 11.9395 11.2976C11.8463 11.2976 11.7527 11.2754 11.667 11.2303L10.0003 10.354L8.33359 11.2303C8.24792 11.2753 8.15425 11.2976 8.06097 11.2976C7.93953 11.2976 7.81863 11.2599 7.71652 11.1857C7.53609 11.0546 7.44574 10.8324 7.48344 10.6126L7.80172 8.75669L6.45329 7.44232C6.29356 7.2867 6.23606 7.05384 6.30497 6.84166C6.37395 6.62955 6.55727 6.47498 6.77797 6.44287L8.64144 6.17209L9.47479 4.48347C9.5735 4.28343 9.77717 4.15687 10.0002 4.15687C10.2232 4.15687 10.4269 4.28343 10.5256 4.48347L11.359 6.17209L13.2225 6.44287C13.4432 6.47498 13.6266 6.62955 13.6955 6.84166C13.7644 7.05384 13.7069 7.2867 13.5472 7.44232Z" fill="#14CE80"></path>
<path d="M8.60419 16.3128L8.28654 15.8975L7.82736 16.1477C7.5701 16.288 7.27924 16.362 6.98619 16.362C6.73827 16.362 6.4978 16.3109 6.2712 16.2101C5.77437 15.9889 5.40245 15.5409 5.27632 15.0118L5.15511 14.5033L4.63402 14.5452C4.58742 14.5489 4.54012 14.5509 4.49332 14.5509C3.9959 14.5509 3.51977 14.3388 3.18704 13.9693C3.00645 13.7687 2.87684 13.5297 2.80411 13.2744L1.24795 14.8305C1.10432 14.9741 1.04529 15.1819 1.09201 15.3795C1.13861 15.5772 1.28431 15.7366 1.47697 15.8008L4.32582 16.7503L5.27542 19.5992C5.33964 19.7919 5.49905 19.9376 5.69663 19.9842C5.74128 19.9947 5.78644 19.9999 5.83124 19.9999C5.98487 19.9999 6.1344 19.9394 6.24553 19.8282L9.24411 16.8297C8.99552 16.7112 8.77431 16.5353 8.60419 16.3128Z" fill="#14CE80"></path>
<path d="M18.7531 14.8306L17.197 13.2745C17.1243 13.5297 16.9946 13.7687 16.8141 13.9693C16.4812 14.3389 16.0051 14.5509 15.5077 14.5509C15.4609 14.5509 15.4135 14.549 15.367 14.5452L14.8459 14.5034L14.7246 15.012C14.5985 15.5411 14.2265 15.989 13.7297 16.2102C13.5032 16.3109 13.2627 16.3622 13.0147 16.3622C12.7217 16.3622 12.4308 16.288 12.1735 16.1478L11.7145 15.8976L11.397 16.3129C11.2268 16.5354 11.0056 16.7112 10.757 16.8299L13.7553 19.8284C13.8665 19.9395 14.0161 20 14.1697 20C14.2145 20 14.2597 19.9948 14.3043 19.9843C14.5019 19.9377 14.6613 19.792 14.7255 19.5994L15.6751 16.7505L18.524 15.8009C18.7167 15.7366 18.8623 15.5773 18.909 15.3796C18.9557 15.1819 18.8967 14.9741 18.7531 14.8306Z" fill="#14CE80"></path>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"></rect>
</clipPath>
</defs>
</svg></span>
    </div>
    <div className="attorney_reviews flex gap-[5px] mt-[10px]">
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
    </div>
    </div>
    </div>
    <div className="card_price_profile mt-[20px]">
      <p>Fee Accepted: <span> N/A</span></p>
      <p>Rate: <span>117$</span></p>
      <p>Country:  <span> N/A</span></p>
      <p>State: <span> N/A</span></p>
    </div>
    <div className="card_experience flex items-center justify-between mt-[20px]">
      <div className="card_experience_left">
        <p><span className="mr-[5px]"><b>25</b></span>yrs experience</p>
      </div>
      <div className="card_experience_right">
        <p><span className="mr-[5px]"><b>$0</b></span>earned</p>
      </div>
    </div>
    <div className="job_done_card flex items-center gap-10 mt-[10px] justify-between">
      <div className="flex items-center gap-[5px]">
        <span>{jobicon}</span>
        <span><b>0</b></span>
        <span>jobs done</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <span>{shareicon}</span>
        <span>{hearticon}</span>
      </div>
    </div>
    </div>
      </div>
      <div className="first-card lg:w-[calc(25%_-_10px)] sm:m-auto sm:mt-[15px] sm:justify-center">
      <Image className="w-full h-full rounded-tr-[20px] rounded-tl-[20px]"
      width={100}
      height={100}
      alt="cardimage"
      src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
    />
    <div className="bg-[#fff] p-[20px] shadow-[-1px_2px_8px_0px_rgba(215,215,215,1)] rounded-bl-[20px] rounded-br-[20px]">
    <div className="profile_rating_section flex items-center gap-[20px] relative">
      <div className="image_person">
    <Image className=""
      width={100}
      height={100}
      alt="profileimage"
      src="https://legalkonnect.com/img/no_avatar.jpg"
    />
    </div>
    <span className="bg-[#EDEDED] border-[3px] border-[#FFFFFF] w-[20px] h-[20px] rounded-[50%] absolute top-[7px] left-[68px]"></span>
    <div className="right_info_profile">
    Attorney Attorneys
    <div className="attorney_verify flex gap-[10px] items-center">
      <span>attorney</span>
      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.9529 6.99865C17.9338 6.81721 17.8313 6.65494 17.6756 6.55982L16.3723 5.76409L16.9589 4.35433C17.029 4.18585 17.0167 3.99429 16.9254 3.83629C16.8342 3.67828 16.6745 3.5718 16.4935 3.5482L14.9793 3.35137L14.9418 1.82497C14.9373 1.64251 14.8481 1.47259 14.7004 1.36532C14.5528 1.2581 14.3636 1.22575 14.1887 1.27782L12.7254 1.71376L12.0703 0.334588C11.992 0.169745 11.8414 0.0508006 11.6629 0.0128712C11.4844 -0.0250583 11.2983 0.0223242 11.1598 0.141074L10.0004 1.13451L8.84081 0.141034C8.70222 0.0222852 8.51628 -0.0250583 8.33777 0.0128712C8.15925 0.0508397 8.00863 0.169784 7.93035 0.334588L7.2752 1.71376L5.81188 1.27782C5.637 1.22575 5.44782 1.25806 5.30017 1.36532C5.15255 1.47259 5.0633 1.64251 5.0588 1.82497L5.02126 3.35137L3.50713 3.54828C3.32616 3.5718 3.16647 3.67828 3.07522 3.83629C2.98397 3.99437 2.97163 4.18585 3.04171 4.35441L3.62823 5.76409L2.32511 6.55979C2.16941 6.65494 2.06687 6.81721 2.04777 6.99861C2.0287 7.18009 2.09527 7.36017 2.2278 7.48552L3.33706 8.53477L2.47022 9.7918C2.36663 9.94203 2.33894 10.1319 2.39534 10.3055C2.45171 10.479 2.58573 10.6164 2.75784 10.6771L4.19799 11.1844L3.91733 12.6854C3.88381 12.8647 3.93576 13.0495 4.05787 13.1852C4.17998 13.3208 4.35826 13.3917 4.54025 13.3771L6.0622 13.2548L6.41622 14.7401C6.45856 14.9176 6.58118 15.0653 6.74786 15.1396C6.91457 15.2137 7.10637 15.2061 7.26656 15.1188L8.60734 14.388L9.53495 15.6009C9.64585 15.7458 9.81788 15.8309 10.0004 15.8309C10.1829 15.8309 10.3549 15.7458 10.4658 15.6009L11.3933 14.388L12.734 15.1188C12.8943 15.2061 13.0861 15.2139 13.2527 15.1396C13.4195 15.0654 13.542 14.9177 13.5844 14.7402L13.9384 13.2549L15.4605 13.3772C15.6422 13.3917 15.8207 13.3208 15.9428 13.1852C16.065 13.0496 16.1169 12.8648 16.0834 12.6854L15.8027 11.1845L17.2428 10.6771C17.4149 10.6165 17.549 10.4791 17.6053 10.3055C17.6617 10.132 17.634 9.94203 17.5304 9.79184L16.6636 8.53481L17.7729 7.48564C17.9054 7.36021 17.972 7.18017 17.9529 6.99865ZM13.5472 7.44232L12.1988 8.75669L12.5117 10.5807C12.5213 10.6228 12.5263 10.6666 12.5263 10.7116C12.5263 11.0348 12.2647 11.2969 11.9417 11.2976C11.941 11.2976 11.9403 11.2976 11.9395 11.2976C11.8463 11.2976 11.7527 11.2754 11.667 11.2303L10.0003 10.354L8.33359 11.2303C8.24792 11.2753 8.15425 11.2976 8.06097 11.2976C7.93953 11.2976 7.81863 11.2599 7.71652 11.1857C7.53609 11.0546 7.44574 10.8324 7.48344 10.6126L7.80172 8.75669L6.45329 7.44232C6.29356 7.2867 6.23606 7.05384 6.30497 6.84166C6.37395 6.62955 6.55727 6.47498 6.77797 6.44287L8.64144 6.17209L9.47479 4.48347C9.5735 4.28343 9.77717 4.15687 10.0002 4.15687C10.2232 4.15687 10.4269 4.28343 10.5256 4.48347L11.359 6.17209L13.2225 6.44287C13.4432 6.47498 13.6266 6.62955 13.6955 6.84166C13.7644 7.05384 13.7069 7.2867 13.5472 7.44232Z" fill="#14CE80"></path>
<path d="M8.60419 16.3128L8.28654 15.8975L7.82736 16.1477C7.5701 16.288 7.27924 16.362 6.98619 16.362C6.73827 16.362 6.4978 16.3109 6.2712 16.2101C5.77437 15.9889 5.40245 15.5409 5.27632 15.0118L5.15511 14.5033L4.63402 14.5452C4.58742 14.5489 4.54012 14.5509 4.49332 14.5509C3.9959 14.5509 3.51977 14.3388 3.18704 13.9693C3.00645 13.7687 2.87684 13.5297 2.80411 13.2744L1.24795 14.8305C1.10432 14.9741 1.04529 15.1819 1.09201 15.3795C1.13861 15.5772 1.28431 15.7366 1.47697 15.8008L4.32582 16.7503L5.27542 19.5992C5.33964 19.7919 5.49905 19.9376 5.69663 19.9842C5.74128 19.9947 5.78644 19.9999 5.83124 19.9999C5.98487 19.9999 6.1344 19.9394 6.24553 19.8282L9.24411 16.8297C8.99552 16.7112 8.77431 16.5353 8.60419 16.3128Z" fill="#14CE80"></path>
<path d="M18.7531 14.8306L17.197 13.2745C17.1243 13.5297 16.9946 13.7687 16.8141 13.9693C16.4812 14.3389 16.0051 14.5509 15.5077 14.5509C15.4609 14.5509 15.4135 14.549 15.367 14.5452L14.8459 14.5034L14.7246 15.012C14.5985 15.5411 14.2265 15.989 13.7297 16.2102C13.5032 16.3109 13.2627 16.3622 13.0147 16.3622C12.7217 16.3622 12.4308 16.288 12.1735 16.1478L11.7145 15.8976L11.397 16.3129C11.2268 16.5354 11.0056 16.7112 10.757 16.8299L13.7553 19.8284C13.8665 19.9395 14.0161 20 14.1697 20C14.2145 20 14.2597 19.9948 14.3043 19.9843C14.5019 19.9377 14.6613 19.792 14.7255 19.5994L15.6751 16.7505L18.524 15.8009C18.7167 15.7366 18.8623 15.5773 18.909 15.3796C18.9557 15.1819 18.8967 14.9741 18.7531 14.8306Z" fill="#14CE80"></path>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"></rect>
</clipPath>
</defs>
</svg></span>
    </div>
    <div className="attorney_reviews flex gap-[5px] mt-[10px]">
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
    </div>
    </div>
    </div>
    <div className="card_price_profile mt-[20px]">
      <p>Fee Accepted: <span> N/A</span></p>
      <p>Rate: <span>117$</span></p>
      <p>Country:  <span> N/A</span></p>
      <p>State: <span> N/A</span></p>
    </div>
    <div className="card_experience flex items-center justify-between mt-[20px]">
      <div className="card_experience_left">
        <p><span className="mr-[5px]"><b>25</b></span>yrs experience</p>
      </div>
      <div className="card_experience_right">
        <p><span className="mr-[5px]"><b>$0</b></span>earned</p>
      </div>
    </div>
    <div className="job_done_card flex items-center gap-10 mt-[10px] justify-between">
      <div className="flex items-center gap-[5px]">
        <span>{jobicon}</span>
        <span><b>0</b></span>
        <span>jobs done</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <span>{shareicon}</span>
        <span>{hearticon}</span>
      </div>
    </div>
    </div>
      </div>
      <div className="first-card lg:w-[calc(25%_-_10px)] sm:m-auto sm:mt-[15px] sm:justify-center">
      <Image className="w-full h-full rounded-tr-[20px] rounded-tl-[20px]"
      width={100}
      height={100}
      alt="cardimage"
      src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
    />
    <div className="bg-[#fff] p-[20px] shadow-[-1px_2px_8px_0px_rgba(215,215,215,1)] rounded-bl-[20px] rounded-br-[20px]">
    <div className="profile_rating_section flex items-center gap-[20px] relative">
      <div className="image_person">
    <Image className=""
      width={100}
      height={100}
      alt="profileimage"
      src="https://legalkonnect.com/img/no_avatar.jpg"
    />
    </div>
    <span className="bg-[#EDEDED] border-[3px] border-[#FFFFFF] w-[20px] h-[20px] rounded-[50%] absolute top-[7px] left-[68px]"></span>
    <div className="right_info_profile">
    Attorney Attorneys
    <div className="attorney_verify flex gap-[10px] items-center">
      <span>attorney</span>
      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.9529 6.99865C17.9338 6.81721 17.8313 6.65494 17.6756 6.55982L16.3723 5.76409L16.9589 4.35433C17.029 4.18585 17.0167 3.99429 16.9254 3.83629C16.8342 3.67828 16.6745 3.5718 16.4935 3.5482L14.9793 3.35137L14.9418 1.82497C14.9373 1.64251 14.8481 1.47259 14.7004 1.36532C14.5528 1.2581 14.3636 1.22575 14.1887 1.27782L12.7254 1.71376L12.0703 0.334588C11.992 0.169745 11.8414 0.0508006 11.6629 0.0128712C11.4844 -0.0250583 11.2983 0.0223242 11.1598 0.141074L10.0004 1.13451L8.84081 0.141034C8.70222 0.0222852 8.51628 -0.0250583 8.33777 0.0128712C8.15925 0.0508397 8.00863 0.169784 7.93035 0.334588L7.2752 1.71376L5.81188 1.27782C5.637 1.22575 5.44782 1.25806 5.30017 1.36532C5.15255 1.47259 5.0633 1.64251 5.0588 1.82497L5.02126 3.35137L3.50713 3.54828C3.32616 3.5718 3.16647 3.67828 3.07522 3.83629C2.98397 3.99437 2.97163 4.18585 3.04171 4.35441L3.62823 5.76409L2.32511 6.55979C2.16941 6.65494 2.06687 6.81721 2.04777 6.99861C2.0287 7.18009 2.09527 7.36017 2.2278 7.48552L3.33706 8.53477L2.47022 9.7918C2.36663 9.94203 2.33894 10.1319 2.39534 10.3055C2.45171 10.479 2.58573 10.6164 2.75784 10.6771L4.19799 11.1844L3.91733 12.6854C3.88381 12.8647 3.93576 13.0495 4.05787 13.1852C4.17998 13.3208 4.35826 13.3917 4.54025 13.3771L6.0622 13.2548L6.41622 14.7401C6.45856 14.9176 6.58118 15.0653 6.74786 15.1396C6.91457 15.2137 7.10637 15.2061 7.26656 15.1188L8.60734 14.388L9.53495 15.6009C9.64585 15.7458 9.81788 15.8309 10.0004 15.8309C10.1829 15.8309 10.3549 15.7458 10.4658 15.6009L11.3933 14.388L12.734 15.1188C12.8943 15.2061 13.0861 15.2139 13.2527 15.1396C13.4195 15.0654 13.542 14.9177 13.5844 14.7402L13.9384 13.2549L15.4605 13.3772C15.6422 13.3917 15.8207 13.3208 15.9428 13.1852C16.065 13.0496 16.1169 12.8648 16.0834 12.6854L15.8027 11.1845L17.2428 10.6771C17.4149 10.6165 17.549 10.4791 17.6053 10.3055C17.6617 10.132 17.634 9.94203 17.5304 9.79184L16.6636 8.53481L17.7729 7.48564C17.9054 7.36021 17.972 7.18017 17.9529 6.99865ZM13.5472 7.44232L12.1988 8.75669L12.5117 10.5807C12.5213 10.6228 12.5263 10.6666 12.5263 10.7116C12.5263 11.0348 12.2647 11.2969 11.9417 11.2976C11.941 11.2976 11.9403 11.2976 11.9395 11.2976C11.8463 11.2976 11.7527 11.2754 11.667 11.2303L10.0003 10.354L8.33359 11.2303C8.24792 11.2753 8.15425 11.2976 8.06097 11.2976C7.93953 11.2976 7.81863 11.2599 7.71652 11.1857C7.53609 11.0546 7.44574 10.8324 7.48344 10.6126L7.80172 8.75669L6.45329 7.44232C6.29356 7.2867 6.23606 7.05384 6.30497 6.84166C6.37395 6.62955 6.55727 6.47498 6.77797 6.44287L8.64144 6.17209L9.47479 4.48347C9.5735 4.28343 9.77717 4.15687 10.0002 4.15687C10.2232 4.15687 10.4269 4.28343 10.5256 4.48347L11.359 6.17209L13.2225 6.44287C13.4432 6.47498 13.6266 6.62955 13.6955 6.84166C13.7644 7.05384 13.7069 7.2867 13.5472 7.44232Z" fill="#14CE80"></path>
<path d="M8.60419 16.3128L8.28654 15.8975L7.82736 16.1477C7.5701 16.288 7.27924 16.362 6.98619 16.362C6.73827 16.362 6.4978 16.3109 6.2712 16.2101C5.77437 15.9889 5.40245 15.5409 5.27632 15.0118L5.15511 14.5033L4.63402 14.5452C4.58742 14.5489 4.54012 14.5509 4.49332 14.5509C3.9959 14.5509 3.51977 14.3388 3.18704 13.9693C3.00645 13.7687 2.87684 13.5297 2.80411 13.2744L1.24795 14.8305C1.10432 14.9741 1.04529 15.1819 1.09201 15.3795C1.13861 15.5772 1.28431 15.7366 1.47697 15.8008L4.32582 16.7503L5.27542 19.5992C5.33964 19.7919 5.49905 19.9376 5.69663 19.9842C5.74128 19.9947 5.78644 19.9999 5.83124 19.9999C5.98487 19.9999 6.1344 19.9394 6.24553 19.8282L9.24411 16.8297C8.99552 16.7112 8.77431 16.5353 8.60419 16.3128Z" fill="#14CE80"></path>
<path d="M18.7531 14.8306L17.197 13.2745C17.1243 13.5297 16.9946 13.7687 16.8141 13.9693C16.4812 14.3389 16.0051 14.5509 15.5077 14.5509C15.4609 14.5509 15.4135 14.549 15.367 14.5452L14.8459 14.5034L14.7246 15.012C14.5985 15.5411 14.2265 15.989 13.7297 16.2102C13.5032 16.3109 13.2627 16.3622 13.0147 16.3622C12.7217 16.3622 12.4308 16.288 12.1735 16.1478L11.7145 15.8976L11.397 16.3129C11.2268 16.5354 11.0056 16.7112 10.757 16.8299L13.7553 19.8284C13.8665 19.9395 14.0161 20 14.1697 20C14.2145 20 14.2597 19.9948 14.3043 19.9843C14.5019 19.9377 14.6613 19.792 14.7255 19.5994L15.6751 16.7505L18.524 15.8009C18.7167 15.7366 18.8623 15.5773 18.909 15.3796C18.9557 15.1819 18.8967 14.9741 18.7531 14.8306Z" fill="#14CE80"></path>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"></rect>
</clipPath>
</defs>
</svg></span>
    </div>
    <div className="attorney_reviews flex gap-[5px] mt-[10px]">
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
    </div>
    </div>
    </div>
    <div className="card_price_profile mt-[20px]">
      <p>Fee Accepted: <span> N/A</span></p>
      <p>Rate: <span>117$</span></p>
      <p>Country:  <span> N/A</span></p>
      <p>State: <span> N/A</span></p>
    </div>
    <div className="card_experience flex items-center justify-between mt-[20px]">
      <div className="card_experience_left">
        <p><span className="mr-[5px]"><b>25</b></span>yrs experience</p>
      </div>
      <div className="card_experience_right">
        <p><span className="mr-[5px]"><b>$0</b></span>earned</p>
      </div>
    </div>
    <div className="job_done_card flex items-center gap-10 mt-[10px] justify-between">
      <div className="flex items-center gap-[5px]">
        <span>{jobicon}</span>
        <span><b>0</b></span>
        <span>jobs done</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <span>{shareicon}</span>
        <span>{hearticon}</span>
      </div>
    </div>
    </div>
      </div>
      <div className="first-card lg:w-[calc(25%_-_10px)] sm:m-auto sm:mt-[15px] sm:justify-center">
      <Image className="w-full h-full rounded-tr-[20px] rounded-tl-[20px]"
      width={100}
      height={100}
      alt="cardimage"
      src="https://legalkonnect.com/storage/specializations/Estate%20Planning%20Lawyer.png"
    />
    <div className="bg-[#fff] p-[20px] shadow-[-1px_2px_8px_0px_rgba(215,215,215,1)] rounded-bl-[20px] rounded-br-[20px]">
    <div className="profile_rating_section flex items-center gap-[20px] relative">
      <div className="image_person">
    <Image className=""
      width={100}
      height={100}
      alt="profileimage"
      src="https://legalkonnect.com/img/no_avatar.jpg"
    />
    </div>
    <span className="bg-[#EDEDED] border-[3px] border-[#FFFFFF] w-[20px] h-[20px] rounded-[50%] absolute top-[7px] left-[68px]"></span>
    <div className="right_info_profile">
    Attorney Attorneys
    <div className="attorney_verify flex gap-[10px] items-center">
      <span>attorney</span>
      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.9529 6.99865C17.9338 6.81721 17.8313 6.65494 17.6756 6.55982L16.3723 5.76409L16.9589 4.35433C17.029 4.18585 17.0167 3.99429 16.9254 3.83629C16.8342 3.67828 16.6745 3.5718 16.4935 3.5482L14.9793 3.35137L14.9418 1.82497C14.9373 1.64251 14.8481 1.47259 14.7004 1.36532C14.5528 1.2581 14.3636 1.22575 14.1887 1.27782L12.7254 1.71376L12.0703 0.334588C11.992 0.169745 11.8414 0.0508006 11.6629 0.0128712C11.4844 -0.0250583 11.2983 0.0223242 11.1598 0.141074L10.0004 1.13451L8.84081 0.141034C8.70222 0.0222852 8.51628 -0.0250583 8.33777 0.0128712C8.15925 0.0508397 8.00863 0.169784 7.93035 0.334588L7.2752 1.71376L5.81188 1.27782C5.637 1.22575 5.44782 1.25806 5.30017 1.36532C5.15255 1.47259 5.0633 1.64251 5.0588 1.82497L5.02126 3.35137L3.50713 3.54828C3.32616 3.5718 3.16647 3.67828 3.07522 3.83629C2.98397 3.99437 2.97163 4.18585 3.04171 4.35441L3.62823 5.76409L2.32511 6.55979C2.16941 6.65494 2.06687 6.81721 2.04777 6.99861C2.0287 7.18009 2.09527 7.36017 2.2278 7.48552L3.33706 8.53477L2.47022 9.7918C2.36663 9.94203 2.33894 10.1319 2.39534 10.3055C2.45171 10.479 2.58573 10.6164 2.75784 10.6771L4.19799 11.1844L3.91733 12.6854C3.88381 12.8647 3.93576 13.0495 4.05787 13.1852C4.17998 13.3208 4.35826 13.3917 4.54025 13.3771L6.0622 13.2548L6.41622 14.7401C6.45856 14.9176 6.58118 15.0653 6.74786 15.1396C6.91457 15.2137 7.10637 15.2061 7.26656 15.1188L8.60734 14.388L9.53495 15.6009C9.64585 15.7458 9.81788 15.8309 10.0004 15.8309C10.1829 15.8309 10.3549 15.7458 10.4658 15.6009L11.3933 14.388L12.734 15.1188C12.8943 15.2061 13.0861 15.2139 13.2527 15.1396C13.4195 15.0654 13.542 14.9177 13.5844 14.7402L13.9384 13.2549L15.4605 13.3772C15.6422 13.3917 15.8207 13.3208 15.9428 13.1852C16.065 13.0496 16.1169 12.8648 16.0834 12.6854L15.8027 11.1845L17.2428 10.6771C17.4149 10.6165 17.549 10.4791 17.6053 10.3055C17.6617 10.132 17.634 9.94203 17.5304 9.79184L16.6636 8.53481L17.7729 7.48564C17.9054 7.36021 17.972 7.18017 17.9529 6.99865ZM13.5472 7.44232L12.1988 8.75669L12.5117 10.5807C12.5213 10.6228 12.5263 10.6666 12.5263 10.7116C12.5263 11.0348 12.2647 11.2969 11.9417 11.2976C11.941 11.2976 11.9403 11.2976 11.9395 11.2976C11.8463 11.2976 11.7527 11.2754 11.667 11.2303L10.0003 10.354L8.33359 11.2303C8.24792 11.2753 8.15425 11.2976 8.06097 11.2976C7.93953 11.2976 7.81863 11.2599 7.71652 11.1857C7.53609 11.0546 7.44574 10.8324 7.48344 10.6126L7.80172 8.75669L6.45329 7.44232C6.29356 7.2867 6.23606 7.05384 6.30497 6.84166C6.37395 6.62955 6.55727 6.47498 6.77797 6.44287L8.64144 6.17209L9.47479 4.48347C9.5735 4.28343 9.77717 4.15687 10.0002 4.15687C10.2232 4.15687 10.4269 4.28343 10.5256 4.48347L11.359 6.17209L13.2225 6.44287C13.4432 6.47498 13.6266 6.62955 13.6955 6.84166C13.7644 7.05384 13.7069 7.2867 13.5472 7.44232Z" fill="#14CE80"></path>
<path d="M8.60419 16.3128L8.28654 15.8975L7.82736 16.1477C7.5701 16.288 7.27924 16.362 6.98619 16.362C6.73827 16.362 6.4978 16.3109 6.2712 16.2101C5.77437 15.9889 5.40245 15.5409 5.27632 15.0118L5.15511 14.5033L4.63402 14.5452C4.58742 14.5489 4.54012 14.5509 4.49332 14.5509C3.9959 14.5509 3.51977 14.3388 3.18704 13.9693C3.00645 13.7687 2.87684 13.5297 2.80411 13.2744L1.24795 14.8305C1.10432 14.9741 1.04529 15.1819 1.09201 15.3795C1.13861 15.5772 1.28431 15.7366 1.47697 15.8008L4.32582 16.7503L5.27542 19.5992C5.33964 19.7919 5.49905 19.9376 5.69663 19.9842C5.74128 19.9947 5.78644 19.9999 5.83124 19.9999C5.98487 19.9999 6.1344 19.9394 6.24553 19.8282L9.24411 16.8297C8.99552 16.7112 8.77431 16.5353 8.60419 16.3128Z" fill="#14CE80"></path>
<path d="M18.7531 14.8306L17.197 13.2745C17.1243 13.5297 16.9946 13.7687 16.8141 13.9693C16.4812 14.3389 16.0051 14.5509 15.5077 14.5509C15.4609 14.5509 15.4135 14.549 15.367 14.5452L14.8459 14.5034L14.7246 15.012C14.5985 15.5411 14.2265 15.989 13.7297 16.2102C13.5032 16.3109 13.2627 16.3622 13.0147 16.3622C12.7217 16.3622 12.4308 16.288 12.1735 16.1478L11.7145 15.8976L11.397 16.3129C11.2268 16.5354 11.0056 16.7112 10.757 16.8299L13.7553 19.8284C13.8665 19.9395 14.0161 20 14.1697 20C14.2145 20 14.2597 19.9948 14.3043 19.9843C14.5019 19.9377 14.6613 19.792 14.7255 19.5994L15.6751 16.7505L18.524 15.8009C18.7167 15.7366 18.8623 15.5773 18.909 15.3796C18.9557 15.1819 18.8967 14.9741 18.7531 14.8306Z" fill="#14CE80"></path>
</g>
<defs>
<clipPath id="clip0">
<rect width="20" height="20" fill="white"></rect>
</clipPath>
</defs>
</svg></span>
    </div>
    <div className="attorney_reviews flex gap-[5px] mt-[10px]">
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
      <span>
      <Image className="w-[12px] h-[12px]"
      width={100}
      height={100}
      alt="reviewimage"
      src="https://legalkonnect.com/img/star_rating_grey.svg"
    />
      </span>
    </div>
    </div>
    </div>
    <div className="card_price_profile mt-[20px]">
      <p>Fee Accepted: <span> N/A</span></p>
      <p>Rate: <span>117$</span></p>
      <p>Country:  <span> N/A</span></p>
      <p>State: <span> N/A</span></p>
    </div>
    <div className="card_experience flex items-center justify-between mt-[20px]">
      <div className="card_experience_left">
        <p><span className="mr-[5px]"><b>25</b></span>yrs experience</p>
      </div>
      <div className="card_experience_right">
        <p><span className="mr-[5px]"><b>$0</b></span>earned</p>
      </div>
    </div>
    <div className="job_done_card flex items-center gap-10 mt-[10px] justify-between">
      <div className="flex items-center gap-[5px]">
        <span>{jobicon}</span>
        <span><b>0</b></span>
        <span>jobs done</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <span>{shareicon}</span>
        <span>{hearticon}</span>
      </div>
    </div>
    </div>
      </div>
      </div>
    </>
  );
};

export default Cards;
