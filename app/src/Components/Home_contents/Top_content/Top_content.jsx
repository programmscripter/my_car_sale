import React from 'react';
import Button from '@mui/material/Button';
import classes from '../../../Scss/top_content.module.css';

const Top_content = () => {
    const txt = "Welcome to our site! Want to start working?";
    const btn_txt = "Get started";
    return (
        <div className={styles.main_block}>
            <div className={styles.block}>
                <div className={styles.block_inner}>
                    <p>{txt}</p>
                    <Button>{btn_txt}</Button>
                </div>
            </div>
        </div>
    )
}

export default Top_content