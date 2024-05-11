import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/Header';
import { MainImage } from '@/components/MainImage';

import './globals.scss';
import styles from '@/app/page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leime Jedi',
  description: 'Leime Jedi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            <MainImage />
            {children}
          </main>
          <footer>footer</footer>
        </div>
      </body>
    </html>
  );
}
