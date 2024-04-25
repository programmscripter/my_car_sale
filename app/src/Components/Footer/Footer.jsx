import React from 'react';
import styles from '../../Scss/footer.module.scss';

const Footer = () => {
  const title_1 = "Company";
  return (
    <div className={styles.block}>
        <div className={styles.block_inner}>
            <div className={styles.block}>
              <p>{title_1}</p>
              {foo}
            </div>
        </div>
    </div>
  )
}

export default Footer