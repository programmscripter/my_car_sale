import React from 'react';
import classes from '../../Scss/home.module.css';
import Animation from '../../Components/Animation/Animation';
import Top_content from '../../Components/Home_contents/Top_content/Top_content';
import Popular_brands_content from '../../Components/Home_contents/Popular_brands_content/Popular_brands_content';

const Home = () => {
  return (
    <div className={classes.block}>
      <Animation />
      <div className={classes.block_inner}>
        <div className={classes.top_content}>
          <Top_content />
        </div>
        <div className={classes.brands_content}>
          <Popular_brands_content />
        </div>
      </div>
    </div>
  )
}

export default Home