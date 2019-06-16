import React from 'react';
import './HeroImage.css';

const HeroImage = () => (
  <img className="hero-image" srcSet="/img/box-bottom.png 1x, /img/box-bottom-retina.png 2x" alt="" />
);

export default HeroImage;
