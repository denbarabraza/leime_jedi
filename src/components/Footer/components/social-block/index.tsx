import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ISocialMedia } from '@/components/footer/interface';

import styles from './styles.module.scss';

interface ISocialMediaBlock {
  socialMedia: ISocialMedia[];
}

export const SocialMediaBlock: FC<ISocialMediaBlock> = ({ socialMedia }) => {
  return (
    <div className={styles.socialMediaBlock}>
      {socialMedia.map(({ id, icon, link, alt }) => (
        <Link key={id} href={link}>
          <Image src={icon} alt={alt} />
        </Link>
      ))}
    </div>
  );
};
