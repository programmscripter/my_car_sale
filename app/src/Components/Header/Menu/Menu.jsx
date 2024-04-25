import React, { useState } from 'react';
import styles from '../../../Scss/menu.module.scss';
import { Bell_icon, Menu_icon, User_icon } from '../../../Svg/svg';
import Button from '@mui/material/Button';
import { menu_list_1, menu_list_2, menu_list_3, menu_list_4, menu_list_5, menu_list_6 } from './menu_list';
import Search from './Search/Search';
import Bell from '../Bell/Bell';
import { Link } from 'react-router-dom';

const Menu = () => {

  const [buttonClick, setButtonClick] = useState(false);

  const handleMenu_btnClick = () => {
    setButtonClick(!buttonClick)
  }

  const _title_1 = "Car search";
  const _title_2 = "Services";
  const _title_3 = "Private and commercial";
  const _title_4 = "Dealer's office";
  const _title_5 = "Know";
  const _title_6 = "Advisor";

  const txt = "Register";

  const [isOpen, setIsOpen] = useState(false);

  const handleBell_btnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.menu}>
      <Button onClick={handleMenu_btnClick} className={styles.menu_btn}>
        <Menu_icon />
      </Button>
      <Button onClick={handleBell_btnClick} className={styles.bell_btn}>
        <Bell_icon />
      </Button>
      <Link to={'register page'}>
        <Button className={styles.user_btn}>
          <User_icon />
        </Button>
      </Link>
      <Link to={'register page'}>
        <Button className={styles.reg_btn}>{txt}</Button>
      </Link>
      {buttonClick && (
        <div className={styles.hover_box}>
          <Search />
          <div className={styles.hover_box_inner}>
            <div className={styles.block}>
              <p>{_title_1}</p>
              {menu_list_1.map((item, index) => {
                return (
                  <Link to={index == -1 ? "/" : `/${item}`} key={index}>
                    <Button>{item}</Button>
                  </Link>
                )
              })}
              <p>{_title_2}</p>
              {menu_list_2.map((item, index) => {
                return (
                  <Link to={index == -1 ? "/" : `/${item}`} key={index}>
                    <Button>{item}</Button>
                  </Link>
                )
              })}
            </div>
            <div className={styles.block}>
              <p>{_title_3}</p>
              {menu_list_3.map((item, index) => {
                return (
                  <Link to={index == -1 ? "/" : `/${item}`} key={index}>
                    <Button>{item}</Button>
                  </Link>
                )
              })}
              <p>{_title_4}</p>
              {menu_list_4.map((item, index) => {
                return (
                  <Link to={index == -1 ? "/" : `/${item}`} key={index}>
                    <Button>{item}</Button>
                  </Link>
                )
              })}
            </div>
            <div className={styles.block}>
              <p>{_title_5}</p>
              {menu_list_5.map((item, index) => {
                return (
                  <Link to={index == -1 ? "/" : `/${item}`} key={index}>
                    <Button>{item}</Button>
                  </Link>
                )
              })}
              <p>{_title_6}</p>
              {menu_list_6.map((item, index) => {
                return (
                  <Link to={index == -1 ? "/" : `/${item}`} key={index}>
                    <Button>{item}</Button>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <>
          <Bell />
        </>
      )}
    </div>
  )
}

export default Menu