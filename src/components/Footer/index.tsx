import React from 'react';

import { Logo } from '@/components/Logo';
import { LogoColor } from '@/enums';

import { AddressBlock } from './components/AddressBlock';
import { BlogBlock } from './components/BlogBlock';
import { ContactBlock } from './components/ContactBlock';
import { ContactForm } from './components/ContactForm';
import { SocialMediaBlock } from './components/SocialMediaBlock';
import { footerData } from './constants/footerData';

import styles from './styles.module.scss';

export const Footer = () => {
  const { email, phone, address, socialMedia, blogs } = footerData;

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.containerBlock}>
          <Logo color={LogoColor.BLACK} />
          <div className={styles.infoBlock}>
            <AddressBlock address={address} />
            <ContactBlock phone={phone} email={email} />
          </div>
          <SocialMediaBlock socialMedia={socialMedia} />
        </div>
        <BlogBlock blogs={blogs} />
        <ContactForm />
      </div>
      <span className={styles.privacyBlock}>
        Jedi © 2017. <span className={styles.underline}>Privacy Policy</span>
      </span>
    </footer>
  );
};
