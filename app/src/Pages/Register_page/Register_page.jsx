import React from 'react';
import styles from '../../Scss/register_page.module.scss';
import Register_content from '../../Components/Register_content/Register_content';

const Register_page = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block_inner}>
        <Register_content />
      </div>
    </div>
  )
}

export default Register_page