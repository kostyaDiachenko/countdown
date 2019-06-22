import React from 'react';
import './HeroImage.css';

const HeroImage = () => (
  <img
    className="hero-image"
    srcSet={`${process.env.PUBLIC_URL}/img/box-bottom.png 1x, ${process.env.PUBLIC_URL}/img/box-bottom-retina.png 2x`}
    alt=""
  />
);

export default HeroImage;
