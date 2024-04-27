import React from 'react';
import classes from '../../Css/More_brands_page_content_css/more_brands_page.module.css';
import Main_content from '../../Components/More_brands_content/Main_content/Main_content';

const More_brands_page = () => {
  return (
    <div className={classes.main_block}>
      <div className={classes.main_block_inner}>
        <div className={classes.main_content}>
          <Main_content />
        </div>
      </div>
    </div>
  )
}

export default More_brands_page