import React from 'react';
import classes from '../../Css/Profile_page_content_css/profile_page.module.css';
import Profile_content from '../../Components/Profile_content/Profile_content';

const Profile_page = () => {
  return (
    <div className={classes.block}>
      <div className={classes.block_inner}>
        <Profile_content />
      </div>
    </div>
  )
}

export default Profile_page