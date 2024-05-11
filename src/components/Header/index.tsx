import React from 'react';
import Image from 'next/image';

import logo from '@/components/Header/assets/logo.png';
import title from '@/components/Header/assets/title.png';
import { Menu } from '@/components/Menu';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoItem}>
          <Image src={logo} width={72} height={72} alt='logo' />
          <div className={styles.logoTitleItem}>
            <Image src={title} width={72} height={38} alt='title' />
            <div className={styles.logoTitleText}>May the Joomla be with you</div>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
};
