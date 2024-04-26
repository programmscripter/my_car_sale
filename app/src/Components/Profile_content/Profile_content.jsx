import React from 'react';
import classes from '../../Scss/profile_content.module.css';
import { User_icon } from '../../Svg/svg';
import { profile_list } from './profile_list';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Profile_content = () => {
    const title = "Cars: ";
    const txt = "You don't have any cars listed, sold or bought yet.";
    return (
        <div className={classes.block}>
            <div className={classes.block_inner}>
                <div className={classes.top_block}>
                    <div className={classes.img_block}>
                        <User_icon className={classes.img} />
                    </div>
                    <div className={classes.menu_block}>
                        <p>{title}</p>
                        {profile_list.map((item, index) => {
                            return (
                                <Link key={index} to={index === 0 ? "/" : `/${item}`}>
                                    <Button>{item}</Button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className={classes.center_block}>
                    <p>{txt}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile_content