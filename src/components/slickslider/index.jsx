
import React, { useState } from 'react';
import Slider from 'react-slick';

const Sliders = ({data}) => {

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: slider2,
    lazyLoad: true,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
          breakpoint: 1024, // Adjust based on your needs
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              vertical: false,
              dots:true
          }
      },
  ]
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slider1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite:false,
    lazyLoad:true,
    vertical:true
  };

  return (
    <div className='slick_pf_slider relative pr-[0px] lg:pr-[136px]'>
      {/* Main Slider */}
      <Slider
        ref={(slider) => setSlider1(slider)}
        {...settingsFor}
        className=' border-0 '
      >
        {data && data.map((image, index) => (
          <div className=' leading-0 relative h-0 pb-[50%]' key={index}>
            <img className='m-w-[560px]  object-cover rounded-[3px] absolute left-0 right-0 bottom-0 top-0 w-full h-full' src={image?.preview} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </Slider>

      {/* Navigation Slider */}
      {data && data.length > 1 && (
        <Slider
          ref={(slider) => setSlider2(slider)}
          {...settingsNav}
          className="image-carousel-secondary w-[124px] important-absolute mt-[7px] !hidden lg:!block"
        >
          {data && data.map((image, index) => (
            <div key={index} className='w-full  h-[69px]'>
              <img src={image?.preview} alt={`Nav ${index + 1}`} style={{ width: '100%', height: '100%'  , borderRadius: '3px' , objectFit: 'cover' }} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Sliders;
