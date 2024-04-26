import React from 'react';
import classes from '../../Css/header.module.css';
import Logotype from './Logotype/Logotype';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <div className={classes.block}>
        <div className={classes.block_inner}>
            <div className={classes.left_box}>
                <Logotype />
            </div>
            <div className={classes.right_box}>
                <Menu />
            </div>
        </div>
    </div>
  )
}

export default Header