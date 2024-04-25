import React from 'react';
import styles from '../../../../Scss/search.module.scss';
import { Search_icon } from '../../../../Svg/svg';
import Button from '@mui/material/Button';

const Search = () => {
    const txt = "Search..."
    return (
        <div className={styles.search}>
            <div className={styles.search_inner}>
                <input type="text" placeholder={txt} />
                <Button><Search_icon /></Button>
            </div>
        </div>
    )
}

export default Search