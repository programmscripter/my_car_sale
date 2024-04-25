import React from 'react';
import styles from '../../Scss/profile_page.module.scss';
import Profile_content from '../../Components/Profile_content/Profile_content';

const Profile_page = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block_inner}>
        <Profile_content />
      </div>
    </div>
  )
}

export default Profile_page