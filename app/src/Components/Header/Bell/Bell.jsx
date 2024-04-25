import React from 'react'
import classes from '../../../Scss/bell.module.css';
import { Check_icon } from '../../../Svg/svg';

const Bell = () => {
    const title = "You are up to date with the latest news!"
    const txt = "Check back later for updates on saved searches and parked cars!";
    return (
        <div className={classes.block}>
            <div className={classes.block_inner}>
                <div className={classes.img_block}>
                    <div className={classes.check_icon}>
                        <Check_icon />
                    </div>
                    <div className={classes.title}>
                        <p>{title}</p>
                    </div>
                </div>
                <div className={classes.txt_block}>
                    <p>{txt}</p>
                </div>
            </div>
        </div>
    )
}

export default Bell