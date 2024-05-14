import React, { FC } from 'react';
import Image from 'next/image';

import image from '@/assets/under-construction.jpg';

import { IEmptyPage } from './interface';

import styles from './styles.module.scss';

export const EmptyPage: FC<IEmptyPage> = ({ page }) => {
  return (
    <div className={styles.container}>
      <p className={styles.pageInformationStatus}>{page} is under construction</p>
      <Image src={image} alt={page} width={250} />
    </div>
  );
};
