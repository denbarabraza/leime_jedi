import React from 'react';
import { SocialMediaBlock } from 'components/footer/components/social-block';
import { Logo } from 'components/logo';

import { AddressBlock } from '@/components/footer/components/address-block';
import { BlogBlock } from '@/components/footer/components/blog-block';
import { ContactBlock } from '@/components/footer/components/contact-block';
import { ContactForm } from '@/components/footer/components/contact-form';
import { footerData } from '@/components/footer/constants/footer-data';
import { LogoColor } from '@/enums';

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
