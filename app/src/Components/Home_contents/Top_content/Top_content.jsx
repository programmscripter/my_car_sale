import React from 'react';
import Button from '@mui/material/Button';
import classes from '../../../Css/Home_page_content_css/top_content.module.css';
import { Link } from 'react-router-dom';

const Top_content = () => {
    const txt = "Welcome to our site! Want to start working?";
    const btn_txt = "Get started";
    return (
        <div className={classes.main_block}>
            <div className={classes.block}>
                <div className={classes.block_inner}>
                    <p>{txt}</p>
                    <Link to={'/register page'}>
                        <Button>{btn_txt}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Top_content