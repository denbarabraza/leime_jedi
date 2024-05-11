'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import leftArrow from './assets/leftArrow.png';
import mainImage1 from './assets/mainImage1.png';
import mainImage2 from './assets/mainImage2.png';
import mainImage3 from './assets/mainImage3.png';
import rightArrow from './assets/rightArrow.png';

import styles from './styles.module.scss';

const images = [
  { id: 1, src: mainImage1, alt: 'main image 1' },
  { id: 2, src: mainImage2, alt: 'main image 2' },
  { id: 3, src: mainImage3, alt: 'main image 3' },
];

export const MainImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.mainImageContainer}>
      <Image src={currentImage.src} alt={currentImage.alt} className={styles.mainImage} />
      <div className={styles.overlay} />
      <Image
        src={leftArrow}
        alt='prev image'
        className={styles.prevText}
        onClick={handlePrevImage}
      />
      <Image
        src={rightArrow}
        alt='next image'
        className={styles.nextText}
        onClick={handleNextImage}
      />
    </div>
  );
};
