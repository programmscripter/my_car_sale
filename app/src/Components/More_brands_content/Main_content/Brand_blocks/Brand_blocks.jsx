import React from 'react';
import classes from '../../../../Css/More_brands_page_content_css/brand_blocks.module.css';

const Brand_blocks = ({ img, title, under_title, index }) => {
  return (
    <div className={classes.block}>
        <div className={classes.img_block}>
            <img src={img} alt="" />
        </div>
        <div className={classes.title_block}>
            <p>{title}</p>
            <p>{under_title}</p>
        </div>
    </div>
  )
}

export default Brand_blocks