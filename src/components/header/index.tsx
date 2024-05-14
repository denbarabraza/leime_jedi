import React from 'react';

import { BurgerMenu } from '@/components/burger-menu';
import { Logo } from '@/components/logo';
import { Menu } from '@/components/menu';
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
