import React from 'react';

import { BurgerMenu } from '@/components/BurgerMenu';
import { Logo } from '@/components/Logo';
import { Menu } from '@/components/Menu';
import { LogoColor } from '@/enums';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.burgerMenu}>
        <BurgerMenu />
      </div>
      <div className={styles.wrapper}>
        <Logo color={LogoColor.WHITE} />
        <div className={styles.menuSection}>
          <Menu />
        </div>
      </div>
    </header>
  );
};
