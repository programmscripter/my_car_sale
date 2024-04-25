import React from 'react';
import styles from '../../Scss/animation.module.scss';
import video from '../../Videos/Mercedes_video.mp4';
import ReactPlayer from 'react-player';

const Animation = () => {
  return (
    <div className={styles.main_block}>
      <div className={styles.video_block}>
        <ReactPlayer 
          url={video}
          playing
          loop
          muted
          width="100%"
          height="auto"
        />
      </div>
      <div className={styles.blur}></div>
    </div>
  )
}

export default Animation