import React from 'react';
import styles from '../../Scss/footer.module.scss';
import { Link } from 'react-router-dom';
import { footer_menu_1, footer_menu_2, footer_menu_3, footer_menu_4 } from './footer_list';
import { Icons } from './footer_icons_list';

const Footer = () => {
  const title_1 = "Social network";
  const title_2 = "Company";
  const title_3 = "Legal";
  const title_4 = "Dealer";
  const title_5 = "Popular";
  return (
    <div className={styles.main_block}>
      <div className={styles.main_block_inner}>
        <div className={styles.block}>
          <p className={styles.title}>{title_1}</p>
          {Icons.map((item, index) => {
            return (
              <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
            )
          })}
        </div>
        <div className={styles.block}>
          <p className={styles.title}>{title_2}</p>
          {footer_menu_1.map((item, index) => {
            return (
              <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
            )
          })}
        </div>
        <div className={styles.block}>
          <p className={styles.title}>{title_3}</p>
          {footer_menu_2.map((item, index) => {
            return (
              <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
            )
          })}
        </div>
        <div className={styles.block}>
          <p className={styles.title}>{title_4}</p>
          {footer_menu_3.map((item, index) => {
            return (
              <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
            )
          })}
        </div>
        <div className={styles.block}>
          <p className={styles.title}>{title_5}</p>
          {footer_menu_4.map((item, index) => {
            return (
              <Link key={index} to={index == -1 ? "/" : `/${item}`}>{item}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer