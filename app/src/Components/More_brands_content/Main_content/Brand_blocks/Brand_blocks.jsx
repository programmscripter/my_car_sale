import React from 'react';
import classes from '../../../../Css/More_brands_page_content_css/brand_blocks.module.css';
import { Link } from 'react-router-dom';

const Brand_blocks = ({ img, title, under_title, index }) => {
  return (
    <Link to={`/brands/${index}`}>
      <div className={classes.block}>
        <div className={classes.img_block}>
          <img src={img} alt="" />
        </div>
        <div className={classes.title_block}>
          <p className={classes.title}>{title}</p>
          <p className={classes.under_title}>{under_title}</p>
        </div>
      </div>
    </Link>
  )
}

export default Brand_blocks