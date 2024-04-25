import React from 'react';
import styles from '../../Scss/footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const title_1 = "Company";
  return (
    <div className={styles.block}>
        <div className={styles.block_inner}>
            <div className={styles.block}>
              <p>{title_1}</p>
              {footer_menu_1.map((item, index) => {
                <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
              })}
            </div>
        </div>
    </div>
  )
}

export default Footer