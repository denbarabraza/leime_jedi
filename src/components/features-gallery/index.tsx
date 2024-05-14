'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { categoryOptions, galleryImages } from './constants';
import { IGalleryImage } from './interface';

import styles from './styles.module.scss';

export const FeaturesGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const isCategoryActive = (category: string) => selectedCategory === category;

  const filteredImages: IGalleryImage[] =
    selectedCategory === 'ALL'
      ? galleryImages
      : galleryImages.filter(image => image.categories.includes(selectedCategory));

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.categories}>
        {categoryOptions.map(category => (
          <span
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={isCategoryActive(category) ? styles.active : ''}
          >
            {category}
          </span>
        ))}
      </div>

      <div className={styles.images}>
        {filteredImages.map(({ id, src, alt }) => (
          <Image src={src} key={id} alt={alt} className={styles.image} />
        ))}
      </div>
    </div>
  );
};
