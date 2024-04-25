import React from 'react';
import styles from '../../../Scss/logotype.module.scss';
import headerPicturesFile from '../../../Helpers/Pictures';
import { Link } from 'react-router-dom';

const Logotype = () => {
  const title = "Topçu.Az"
  return (
    <Link to={'/'}>
      <div className={styles.main_block}>
        <div className={styles.logo_box}>
          <img src={headerPicturesFile.Logo} alt="" />
        </div>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default Logotype