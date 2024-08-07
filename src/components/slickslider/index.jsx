
import React, { useState } from 'react';
import Slider from 'react-slick';

const Sliders = ({data}) => {

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: slider2,
    lazyLoad:true
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slider1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    infinite:false,
    lazyLoad:true,
    vertical:true
  };

  return (
    <div className='slick_pf_slider relative pr-32'>
      {/* Main Slider */}
      <Slider
        ref={(slider) => setSlider1(slider)}
        {...settingsFor}
      >
        {data && data.map((image, index) => (
          <div key={index}>
            <img src={image?.preview} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>

      {/* Navigation Slider */}
      {data && data.length > 1 && (
        <Slider
          ref={(slider) => setSlider2(slider)}
          {...settingsNav}
          className="image-carousel-secondary w-32 absolute"
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
