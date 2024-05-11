import React from 'react';
import Image from 'next/image';

import { listItems } from '@/components/FeaturesList/constants';

import styles from './styles.module.scss';

export const FeaturesList = () => {
  return (
    <>
      <h3 className={styles.featuresListTitle}>More and More Features</h3>
      <div className={styles.featuresList}>
        {listItems.map(({ id, description, title, image }) => (
          <div className={styles.featureItem} key={id}>
            <Image src={image} alt={title} />
            <h4 className={styles.featureTitleItem}>{title}</h4>
            <p className={styles.featureDescriptionItem}>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
