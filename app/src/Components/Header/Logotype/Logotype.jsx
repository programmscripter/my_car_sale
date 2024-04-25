import React from 'react';
import classes from '../../../Scss/logotype.module.css';
import headerPicturesFile from '../../../Helpers/Pictures';
import { Link } from 'react-router-dom';

const Logotype = () => {
  const title = "Topçu.Az"
  return (
    <Link to={'/'}>
      <div className={classes.main_block}>
        <div className={classes.logo_box}>
          <img src={headerPicturesFile.Logo} alt="" />
        </div>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default Logotype