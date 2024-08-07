
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
    vertical: true
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
    <div className='slick_pf_slider relative pr-32 '>
      {/* Main Slider */}
      <Slider
        ref={(slider) => setSlider1(slider)}
        {...settingsFor}
        className='max-h-[300px]'
      >
        {data && data.map((image, index) => (
          <div className='max-h-[300px]' key={index}>
            <img className='m-w-[560px] max-h-[290px] object-cover' src={image?.preview} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>

      {/* Navigation Slider */}
      {data && data.length > 1 && (
        <Slider
          ref={(slider) => setSlider2(slider)}
          {...settingsNav}
          className="image-carousel-secondary w-32 important-absolute"
        >
          {data && data.map((image, index) => (
            <div key={index}>
              <img src={image?.preview} alt={`Nav ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Sliders;
