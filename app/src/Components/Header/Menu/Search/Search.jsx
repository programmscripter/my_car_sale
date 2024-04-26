import React from 'react';
import classes from '../../../../Css/search.module.css';
import { Search_icon } from '../../../../Svg/svg';
import Button from '@mui/material/Button';

const Search = () => {
    const txt = "Search..."
    return (
        <div className={classes.search}>
            <div className={classes.search_inner}>
                <input type="text" placeholder={txt} />
                <Button><Search_icon /></Button>
            </div>
        </div>
    )
}

export default Search