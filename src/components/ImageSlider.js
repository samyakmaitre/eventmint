import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/images/download1.png';
import image2 from '../assets/images/download2.png';
import image3 from '../assets/images/download3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/ImageSlider.css'; // Create this file for custom styles

const ImageWithCursorEffect = ({ imageSrc, altText }) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5 range
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    setTransform({
      rotateX: yPos * 15, // Tilt on the Y axis
      rotateY: -xPos * 15, // Tilt on the X axis (negate to match cursor movement)
    });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 }); // Reset the tilt when cursor leaves
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        perspective: '1000px', // Perspective gives the 3D effect
      }}
    >
      <motion.img
        src={imageSrc}
        alt={altText}
        style={{
          maxWidth: '100%', // Adjust this value for image size
          height: 'auto', // Maintain aspect ratio
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Added shadow for depth
          borderRadius: '15px', // Rounded corners for a smoother look
          transition: 'transform 0.3s ease', // Smooth transition for scaling
        }}
        initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }} // Slightly scale up on hover
      />
    </motion.div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Add navigation arrows
  };

  return (
    <div className="slider-container" style={{ width: '90%', margin: '0 auto', padding: '40px 0' }}>
      <Slider {...settings}>
        <div>
          <ImageWithCursorEffect imageSrc={image1} altText="Image 1" />
        </div>
        <div>
          <ImageWithCursorEffect imageSrc={image2} altText="Image 2" />
        </div>
        <div>
          <ImageWithCursorEffect imageSrc={image3} altText="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
