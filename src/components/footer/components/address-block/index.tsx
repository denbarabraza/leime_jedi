import { FC } from 'react';

import { IAddressBlock } from './interface';

import styles from './styles.module.scss';

export const AddressBlock: FC<IAddressBlock> = ({ address }) => {
  return (
    <div className={styles.addressItem}>
      <span className={styles.titleInfo}>Address</span>
      {address.split('\n').map((line, index) => (
        <div key={index} className={styles.infoItem}>
          {line}
        </div>
      ))}
    </div>
  );
};
