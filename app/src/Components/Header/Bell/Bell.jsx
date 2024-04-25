import React from 'react'
import styles from '../../../Scss/bell.module.scss';
import { Check_icon } from '../../../Svg/svg';

const Bell = () => {
    const title = "You are up to date with the latest news!"
    const txt = "Check back later for updates on saved searches and parked cars!";
    return (
        <div className={styles.block}>
            <div className={styles.block_inner}>
                <div className={styles.img_block}>
                    <div className={styles.check_icon}>
                        <Check_icon />
                    </div>
                    <div className={styles.title}>
                        <p>{title}</p>
                    </div>
                </div>
                <div className={styles.txt_block}>
                    <p>{txt}</p>
                </div>
            </div>
        </div>
    )
}

export default Bell