'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Button } from "@nextui-org/react";

const 
JobSlider = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} left-arrow`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f16622" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          ></path>
        </svg>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} right-arrow`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f16622" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  const slides = [
    {
      title: "Find an attorney",
      link: "/find-attorney-legal-support",
      image: "https://legalkonnect.com/img/bakeel-1.png",
      alt: "Attorney",
      tooltip: "Here, you can find an attorney.",
    },
    {
      title: "substitute Attorney",
      link: "/substitute-attorneys",
      image: "https://legalkonnect.com/img/attorney-1.png",
      alt: "Attorney",
      tooltip: "Here, you can find an substitute attorney.",
    },
    {
      title: "Legal jobs",
      link: "/jobs",
      image: "https://legalkonnect.com/img/legal_jobs-1.png",
      alt: "Attorney",
      tooltip: "Here, you can post and search for legal jobs.",
    },
    {
      title: "substitute Attorney Jobs",
      link: "/substitute-attorneys-jobs",
      image: "https://legalkonnect.com/img/legal_jobs-1.png",
      alt: "Attorney",
      tooltip: "Here, you can request and search for a substitute attorney jobs.",
    },
    {
      title: "Legal Docs",
      link: "/motions",
      image: "https://legalkonnect.com/img/legal_docs-1.png",
      alt: "Attorney",
      tooltip: "Here, you can post and search for legal Docs",
    },
    {
      title: "Transcripts",
      link: "/transcripts",
      image: "https://legalkonnect.com/img/transcripts%20(2).png",
      alt: "Attorney",
      tooltip: "Here, you can post and search for legal transcripts.",
    },
    {
      title: "Questions Forum",
      link: "/forum",
      image: "https://legalkonnect.com/img/question_forum-1.png",
      alt: "Attorney",
      tooltip: "Here, you can post your legal question and offer a reward for the best answer",
    },
    {
      title: "Paralegal/Support",
      link: "/paralegal-support",
      image: "https://legalkonnect.com/img/Icons.png",
      alt: "Attorney",
      tooltip: "Here, you can search for paralegals and other legal support service providers.",
    },
    {
      title: "Experts",
      link: "/experts",
      image: "https://legalkonnect.com/img/expert.png",
      alt: "Attorney",
      tooltip: "Here, you can search for experts.",
    },
    {
      title: "Process Servers",
      link: "/process-servers",
      image: "https://legalkonnect.com/img/process_servers-1.png",
      alt: "Attorney",
      tooltip: "Here, you can search for process servers.",
    },
    {
      title: "Court Reporters",
      link: "/court-reporters",
      image: "https://legalkonnect.com/img/Captions.png",
      alt: "Attorney",
      tooltip: "Here, you can search for court reporters.",
    },
    {
      title: "Investigatorst",
      link: "/investigator",
      image: "https://legalkonnect.com/img/investigators.png",
      alt: "Attorney",
      tooltip: "Here, you can search for investigators.",
    },
  ];

  return (
    <div className="w-full m-[auto] px-[15px] lg:px-[40px] max-w-[1250px] relative mt-[25px] pb-[40px]">
      <Slider {...settings} className="categorySlider">
        {slides.map((slide, index) => (
          <div key={index} className="max-w-[125px] w-full  rounded-[8px] flex flex-col items-center justify-center shadow-customSec p-[8px] relative tooltip-container min-h-[106px]">
            <Link href={slide.link} className="flex justify-center items-center flex-col gap-2">
              <img src={slide.image} className="maw-w-[38px] h-[52px]" alt="" />
              <span className="text-[15px] text-center leading-[15px]">{slide.title}</span>
              <div className="tooltip_dropdown">
                {slide.tooltip}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobSlider;
