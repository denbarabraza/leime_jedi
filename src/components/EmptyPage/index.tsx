import React, { FC } from 'react';
import Image from 'next/image';

import image from '@/assets/underConstruction.jpg';
import { IEmptyPage } from '@/components/EmptyPage/interface';

import styles from './styles.module.scss';

export const EmptyPage: FC<IEmptyPage> = ({ page }) => {
  return (
    <div className={styles.container}>
      <p className={styles.pageInformationStatus}>{page} is under construction</p>
      <Image src={image} alt={page} width={300} />
    </div>
  );
};
