import { FC } from 'react';

import styles from './styles.module.scss';

interface IContactBlock {
  phone: string;
  email: string;
}

export const ContactBlock: FC<IContactBlock> = ({ phone, email }) => {
  return (
    <div className={styles.contactContainer}>
      <div>
        <span className={styles.titleInfo}>Phone</span>
        <div className={styles.infoItem}>{phone}</div>
      </div>
      <div>
        <span className={styles.titleInfo}>E-Mail:</span>
        <div className={styles.infoItem}>{email}</div>
      </div>
    </div>
  );
};
