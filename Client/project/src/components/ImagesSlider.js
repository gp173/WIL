import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ImageSlider.css";

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...sliderSettings} className="home-hero-carousel">
      <div className="hero-banner hero-banner-709107 slick-slide image-pos">
        <img src="https://www.waikato.ac.nz/__data/assets/image/0005/975767/QS-Ranking-Desktop-Banner.jpg" alt="" />
      </div>
      <div className="hero-banner hero-banner-616419 slick-slide image-pos">
        <img src="	https://www.waikato.ac.nz/__data/assets/image/0011/869933/Management-Desktop-Banner.jpg" alt="" />
      </div>
      {/* Add more slides as needed */}
      
      <div className="hero-banner hero-banner-616419 slick-slide image-pos">
        <img src="https://www.waikato.ac.nz/__data/assets/image/0011/869915/Comp-Sci-New-Banner.jpg" alt="" />
      </div>

    </Slider>
  );
};

export default ImageSlider;
