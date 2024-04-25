import React from 'react';
import styles from '../../Scss/home.module.scss';
import Animation from '../../Components/Animation/Animation';
// import Top_content from '../../Components/Home_contents/Top_content/Top_content';

const Home = () => {
  return (
    <div className={styles.block}>
      <Animation />
      <div className={styles.block_inner}>
        <div className={styles.top_content}>
          {/* <Top_content /> */}
        </div>
      </div>
    </div>
  )
}

export default Home