'use client';

import React, { FC, memo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'components/menu';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { getValidPathName } from '@/utils/get-valid-path-name';

import { IBurgerMenu } from './interface';

import styles from './styles.module.scss';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const node = useRef(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  const handleMenuOpen = () => {
    setOpen(prev => !prev);
  };

  const validPathname = getValidPathName(pathName);

  return (
    <div ref={node} className={styles.wrapper}>
      <div className={`${styles.menuPage} ${open ? styles.open : ''}`}>
        <div onClick={() => close()}>
          <Menu />
        </div>
      </div>
      <BurgerMenuIcon open={open} handleMenuOpen={handleMenuOpen} />
      <div className={styles.burgerMenuTitle}>{validPathname}</div>
    </div>
  );
};

export const BurgerMenuIcon: FC<IBurgerMenu> = memo(({ open, handleMenuOpen }) => {
  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    handleMenuOpen();
  };

  return (
    <div
      className={`${styles.container} ${open ? styles.open : ''}`}
      onClick={handleOpen}
    >
      <div />
      <div />
      <div />
    </div>
  );
});
