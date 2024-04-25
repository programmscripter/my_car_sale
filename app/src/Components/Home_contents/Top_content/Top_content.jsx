import React from 'react';
import Button from '@mui/material/Button';
import styles from '../../../Scss/top_content.module.scss';

const Top_content = () => {
    const txt = "Do you want to continue?";
    const btn_txt = "Get started";
    return (
        <div className={styles.block}>
            <div className={styles.block_inner}>
                <p>{txt}</p>
                <Button>{btn_txt}</Button>
            </div>
        </div>
    )
}

export default Top_content