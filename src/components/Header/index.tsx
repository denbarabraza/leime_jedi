import React from 'react';

import { Logo } from '@/components/Logo';
import { Menu } from '@/components/Menu';
import { LogoColor } from '@/enums';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo color={LogoColor.WHITE} />
        <Menu />
      </div>
    </header>
  );
};
