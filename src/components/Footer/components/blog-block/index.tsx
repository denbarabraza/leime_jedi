import { FC } from 'react';
import Image from 'next/image';

import { IBlogBlock } from '@/components/footer/components/blog-block/interface';

import arrow from '../../assets/arrow.png';

import styles from './styles.module.scss';

export const BlogBlock: FC<IBlogBlock> = ({ blogs }) => {
  return (
    <div className={styles.blogContainer}>
      <h5 className={styles.blogBlockTitle}>LATEST FROM THE BLOG</h5>
      <div className={styles.blogList}>
        {blogs.map(({ id, avatar, date, description }) => (
          <div key={id} className={styles.blogItem}>
            <Image src={avatar} alt={description} />
            <div className={styles.blogInfoItem}>
              <div className={styles.blogDateItem}>
                <Image src={arrow} alt={date} />
                <span className={styles.blogDate}>{date}</span>
              </div>
              <div className={styles.blogDescription}>{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
