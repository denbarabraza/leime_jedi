'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { headerMenu } from '@/constants/header-menu';
import { checkPathActive } from '@/utils/check-path-active';

import styles from '@/components/menu/styles.module.scss';

export const Menu = () => {
  const pathName = usePathname();

  return (
    <div className={styles.navMenu}>
      {headerMenu.map(({ name, path }) => {
        const isActive = checkPathActive(pathName, path);

        return (
          <div className={styles.linkItem} key={name}>
            <Link key={name} href={path} className={isActive ? styles.active : ''}>
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
