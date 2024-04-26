import React from 'react';
import classes from '../../Css/animation.module.css';
import video from '../../Videos/Mercedes_video.mp4';
import ReactPlayer from 'react-player';

const Animation = () => {
  return (
    <div className={classes.main_block}>
      <div className={classes.video_block}>
        <ReactPlayer 
          url={video}
          playing
          loop
          muted
          width="100%"
          height="auto"
        />
      </div>
      <div className={classes.blur}></div>
    </div>
  )
}

export default Animation