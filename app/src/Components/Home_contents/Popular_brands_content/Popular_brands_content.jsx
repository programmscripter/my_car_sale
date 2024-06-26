import React from 'react';
import classes from '../../../Css/Home_page_content_css/popular_brands_content.module.css';
import { brands_list } from './brands_list';
import Brands_blocks from './Brands_blocks/Brands_blocks';
import { Plus_icon } from '../../../Svg/svg';
import { Link } from 'react-router-dom';

const Popular_brands_content = () => {
  const title = "Popular Car Brands";
  const title_2 = "More Brands"
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
            <Link to={'/more brands'}>
              <div className={classes.more_block}>
                <div className={classes.more_block_img}>
                  <Plus_icon className={classes.img} />
                </div>
                <div className={classes.more_block_txt}>
                  <p>{title_2}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular_brands_content