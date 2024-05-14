import React from 'react';

import { FeaturesGallery } from '@/components/features-gallery';
import { FeaturesList } from '@/components/features-list';

import styles from './styles.module.scss';

const Features = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.projectsTitleItem}>Our Projects</h3>
      <h4 className={styles.projectsDescriptionItem}>
        Check out other themes based on <b>JEDI</b>
      </h4>
      <FeaturesGallery />
      <FeaturesList />
    </div>
  );
};

export default Features;
