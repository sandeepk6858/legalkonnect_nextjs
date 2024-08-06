import React, { useRef } from 'react';
import Slider from 'react-slick';
import { imageURL } from "@/components/utils/helper/helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
    const mainSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navSliderRef.current
    };

    const navSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        // vertical: true, // Make the nav slider vertical

       
    };

    return (
        <div className='relative'>
            <Slider {...mainSliderSettings} ref={mainSliderRef} className='pr-[140px]'>
                <div >
                    <img src="https://legalkonnect.com/storage/uploads/pages/3f9f881c-763a-4d64-ad8e-6f0d310b4f4b.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://legalkonnect.com/storage/uploads/pages/ff51ee13-f024-45b7-b177-a2d8a1280e1f.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://legalkonnect.com/storage/uploads/pages/28fa1c1d-67c9-4dc1-902c-a93fa0be0b56.jpg" alt="Slide 3" />
                </div>
                <div>
                    <img src="https://legalkonnect.com/storage/uploads/pages/3f9f881c-763a-4d64-ad8e-6f0d310b4f4b.jpg" alt="Slide 1" />
                </div>
            </Slider>
            <Slider {...navSliderSettings} ref={navSliderRef} className=''>
                <div>  <img src="https://legalkonnect.com/storage/uploads/pages/3f9f881c-763a-4d64-ad8e-6f0d310b4f4b.jpg" alt="Nav 1" /></div>
                <div> <img src="https://legalkonnect.com/storage/uploads/pages/ff51ee13-f024-45b7-b177-a2d8a1280e1f.jpg" alt="Nav 2" /></div>
                <div>  <img src="https://legalkonnect.com/storage/uploads/pages/28fa1c1d-67c9-4dc1-902c-a93fa0be0b56.jpg" alt="Nav 3" /></div>
                <div> <img src="https://legalkonnect.com/storage/uploads/pages/3f9f881c-763a-4d64-ad8e-6f0d310b4f4b.jpg" alt="Nav 4" /></div>
            </Slider>
        </div>
    );
};

export default SlickSlider;
