import React from 'react';
import image1 from '../assets/images/download1.png';
import image2 from '../assets/images/download2.png';
import image3 from '../assets/images/download3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/ImageSlider.css'; // Create this file for custom styles

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
