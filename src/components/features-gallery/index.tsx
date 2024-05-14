'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { categoryOptions, galleryImages } from './constants';
import { IGalleryImage } from './interface';

import styles from './styles.module.scss';

/**
 * The FeaturesGallery component displays an image gallery with the ability to filter images by category.
 * In the absence of specific requirements and slight difficulty understanding the design, the component is implemented according to my own interpretation.
 * Key comments in the code for better understanding:
   -handleCategoryClick handles the click on a category and updates the selected category.
   -isCategoryActive checks if a category is active.
   -filteredImages filters the images based on the selected category.
 */

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
