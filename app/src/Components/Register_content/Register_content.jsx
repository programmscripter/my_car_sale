import React from 'react';
import styles from '../../Scss/register_content.module.scss';
import Registration from './Registration/Registration';

const Register_content = () => {
  return (
    <div className={styles.block}>
        <div className={styles.block_inner}>
            <Registration />
        </div>
    </div>
  )
}

export default Register_content