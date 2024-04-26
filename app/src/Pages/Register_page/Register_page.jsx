import React from 'react';
import classes from '../../Scss/register_page.module.css';
import Register_content from '../../Components/Register_content/Register_content';

const Register_page = () => {
  return (
    <div className={classes.block}>
      <div className={classes.block_inner}>
        <Register_content />
      </div>
    </div>
  )
}

export default Register_page