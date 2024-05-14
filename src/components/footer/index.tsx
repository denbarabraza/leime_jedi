import React from 'react';

import { Logo } from '@/components/logo';
import { LogoColor } from '@/enums';

import { AddressBlock } from './components/address-block';
import { BlogBlock } from './components/blog-block';
import { ContactBlock } from './components/contact-block';
import { ContactForm } from './components/contact-form';
import { SocialMediaBlock } from './components/social-block';
import { footerData } from './constants/footer-data';

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
