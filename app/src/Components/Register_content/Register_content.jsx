import React from 'react';
import classes from '../../Css/register_content.module.css';
import Registration from './Registration/Registration';

const Register_content = () => {
  return (
    <div className={classes.block}>
        <div className={classes.block_inner}>
            <Registration />
        </div>
    </div>
  )
}

export default Register_content