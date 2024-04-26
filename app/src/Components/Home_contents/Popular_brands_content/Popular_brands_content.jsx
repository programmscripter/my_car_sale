import React from 'react';
import classes from '../../../Scss/popular_brands_content.module.css';

const Popular_brands_content = () => {
  const title = "Popular Car Brands";
  return (
    <div className={classes.main_block}>
        <div className={classes.main_block_inner}>
            <div className={classes.grid}>
              <p>{title}</p>
              <div className={classes.grid_inner}>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Popular_brands_content