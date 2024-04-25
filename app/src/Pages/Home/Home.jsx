import React from 'react';
import classes from '../../Scss/home.module.css';
import Animation from '../../Components/Animation/Animation';
import Top_content from '../../Components/Home_contents/Top_content/Top_content';

const Home = () => {
  return (
    <div className={classes.block}>
      <Animation />
      <div className={classes.block_inner}>
        <div className={classes.top_content}>
          <Top_content />
        </div>
      </div>
    </div>
  )
}

export default Home