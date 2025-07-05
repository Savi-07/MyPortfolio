import React from 'react';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img5.jpg';
import img3 from '../assets/img3.jpg';

import img5 from '../assets/img4.jpeg';
import img6 from '../assets/img2.jpg';
import img7 from '../assets/img6.jpg';
// import img8 from '';


type ImageStackProps = {
  side: 'left' | 'right';
};

const localImages = [img1, img2, img3];
const placeholderImages = [
  img5,
  img6,
  img7  
  // img8
];

const ImageStack: React.FC<ImageStackProps> = ({ side }) => {
  const images = side === 'left' ? localImages : placeholderImages;
  return (
    <div className={`image-stack image-stack-${side}`}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`stacked ${side} ${idx}`} className="stacked-image" />
      ))}
    </div>
  );
};

export default ImageStack; 