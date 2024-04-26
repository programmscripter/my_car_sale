import React from 'react';
import classes from '../../../Scss/popular_brands_content.module.css';
import brands_list from './brands_list';

const Popular_brands_content = () => {
  const title = "Popular Car Brands";
  return (
    <div className={classes.main_block}>
        <div className={classes.main_block_inner}>
            <div className={classes.grid}>
              <p>{title}</p>
              <div className={classes.grid_inner}>
                {brands_list.map((brand, index) => {
                  return (
                    
                  )
                })}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Popular_brands_content