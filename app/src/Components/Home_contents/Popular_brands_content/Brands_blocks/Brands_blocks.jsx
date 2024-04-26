import React from 'react';
import { Link } from 'react-router-dom';

const Brands_blocks = ({ index, img, title }) => {
    return (
        <Link to={`/brand/${index}`}>
            <div className={classes.block}>
                <div className={classes.img_block}>
                    <img src={img} alt="" />
                </div>
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default Brands_blocks