import React from 'react';
import styles from '../../Scss/footer.module.scss';
import { Link } from 'react-router-dom';
import { footer_menu_1, footer_menu_2, footer_menu_3, footer_menu_4 } from './footer_list';

const Footer = () => {
  const title_1 = "Company";
  const title_2 = "Legal";
  const title_3 = "Dealer";
  const title_4 = "Popular";
  return (
    <div className={styles.block}>
      <div className={styles.block_inner}>
        <div className={styles.block}>
          <p>{title_1}</p>
          {footer_menu_1.map((item, index) => {
            <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
          })}
        </div>
        <div className={styles.block}>
          <p>{title_2}</p>
          {footer_menu_2.map((item, index) => {
            <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
          })}
        </div>
        <div className={styles.block}>
          <p>{title_3}</p>
          {footer_menu_3.map((item, index) => {
            <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
          })}
        </div>
        <div className={styles.block}>
          <p>{title_4}</p>
          {footer_menu_4.map((item, index) => {
            <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer