import React from 'react';
import classes from '../../../Css/popular_brands_content.module.css';
import { brands_list } from './brands_list';
import Brands_blocks from './Brands_blocks/Brands_blocks';

const Popular_brands_content = () => {
  const title = "Popular Car Brands";
  return (
    <div className={classes.main_block}>
        <div className={classes.main_block_inner}>
            <div className={classes.grid}>
              <p className={classes.title}>{title}</p>
              <div className={classes.line}></div>
              <div className={classes.grid_inner}>
                {brands_list.map((brand, index) => {
                  return (
                    <Brands_blocks 
                      key={index}
                      index={index}
                      img={brand.img}
                      title={brand.title}
                    />
                  )
                })}
                <div className={classes.more_block}>
                  <div className={classes.more_block_img}>
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Popular_brands_content