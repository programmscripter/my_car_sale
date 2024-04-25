import React from 'react';
import Button from '@mui/material/Button';
import classes from '../../../Scss/top_content.module.css';

const Top_content = () => {
    const txt = "Welcome to our site! Want to start working?";
    const btn_txt = "Get started";
    return (
        <div className={classes.main_block}>
            <div className={classes.block}>
                <div className={classes.block_inner}>
                    <p>{txt}</p>
                    <Button>{btn_txt}</Button>
                </div>
            </div>
        </div>
    )
}

export default Top_content