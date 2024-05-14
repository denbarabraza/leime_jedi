import React from 'react';
import Image from 'next/image';

import { LogoColor } from '@/enums';

import logoBlack from './assets/logoBlack.png';
import logoWhite from './assets/logoWhite.png';
import titleBlack from './assets/titleBlack.png';
import titleWhite from './assets/titleWhite.png';

import styles from './styles.module.scss';

export const Logo = ({ color }: { color: LogoColor }) => {
  const logoSrc = color === LogoColor.BLACK ? logoBlack : logoWhite;
  const logoTitle = color === LogoColor.BLACK ? titleBlack : titleWhite;
  const logoTitleTextClass =
    color === LogoColor.BLACK
      ? styles.logoTitleTextForBlack
      : styles.logoTitleTextForWhite;

  return (
    <div className={styles.logoItem}>
      <Image src={logoSrc} width={72} height={72} alt='logo' />
      <div className={styles.logoTitleItem}>
        <Image src={logoTitle} width={72} height={38} alt='title' />
        <div className={`${styles.logoTitleText} ${logoTitleTextClass}`}>
          May the Joomla be with you
        </div>
      </div>
    </div>
  );
};
