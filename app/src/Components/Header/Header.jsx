import React from 'react';
import styles from '../../Scss/header.module.scss';
import Logotype from './Logotype/Logotype';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <div className={styles.block}>
        <div className={styles.block_inner}>
            <div className={styles.left_box}>
                <Logotype />
            </div>
            <div className={styles.right_box}>
                <Menu />
            </div>
        </div>
    </div>
  )
}

export default Header