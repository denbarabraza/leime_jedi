import { FC } from 'react';

import styles from './styles.module.scss';

interface IAddressBlock {
  address: string;
}

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
