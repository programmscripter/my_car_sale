import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../../../Css/Home_page_content_css/brands_blocks.module.css';

const Brands_blocks = ({ index, img, title }) => {
    return (
        <Link to={`/brand/${index}`}>
            <div className={classes.block}>
                <div className={classes.img_block}>
                    <img src={img} alt="" />
                </div>
                <div className={classes.txt_block}>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Brands_blocks