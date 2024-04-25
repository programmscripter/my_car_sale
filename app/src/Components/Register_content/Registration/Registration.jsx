import React, { useState } from 'react';
import styles from '../../../Scss/registration.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Logination from '../Logination/Logination';
import { Link } from 'react-router-dom';

const Registration = () => {
    const title = "Registration";
    const btn_txt = "Ok";
    const choose_txt = "Gender: ";
    const btn_txt_2 = "log in";
    const txt = "Are you already registered? Then";

    const [isBtn_click, setIsBtn_click] = useState(false);

    const handleBtn_click = () => {
        setIsBtn_click(!isBtn_click);
    }

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gmail, setGmail] = useState('');
    const [repeatGmail, setRepeatGmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);
    const [isGmailEmpty, setIsGmailEmpty] = useState(false);
    const [isRepeatGmailEmpty, setIsRepeatGmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [isRepeatPasswordEmpty, setIsRepeatPasswordEmpty] = useState(false);
    const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
        setIsNameEmpty(false);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
        setIsSurnameEmpty(false);
    };

    const handleGmailChange = (event) => {
        setGmail(event.target.value);
        setIsGmailEmpty(false);
    }

    const handleRepeatGmailChange = (event) => {
        setRepeatGmail(event.target.value);
        setIsRepeatGmailEmpty(false);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsPasswordEmpty(false);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        setIsRepeatPasswordEmpty(false);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        setIsPhoneEmpty(false);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setIsUsernameEmpty(false);
    };

    const handleSubmit = () => {
        if (name.trim() === '') {
            setIsNameEmpty(true);
        }
        if (surname.trim() === '') {
            setIsSurnameEmpty(true);
        }
        if (gmail.trim() === '') {
            setIsGmailEmpty(true);
        }
        if (repeatGmail.trim() === '') {
            setIsRepeatGmailEmpty(true);
        }
        if (password.trim() === '') {
            setIsPasswordEmpty(true);
        }
        if (repeatPassword.trim() === '') {
            setIsRepeatPasswordEmpty(true);
        }
        if (phone.trim() === '') {
            setIsPhoneEmpty(true);
        }
        if (username.trim() === '') {
            setIsUsernameEmpty(true);
        }
    };
    return (
        <>
            <div style={{ display: isBtn_click ? 'none' : 'block', paddingTop: '130px' }}>
                <div className={styles.block_inner}>
                    <div className={styles.top_block}>
                        <p className={styles.title}>{title}</p>
                    </div>
                    <div className={styles.center_block}>
                        <TextField
                            style={{ border: isNameEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='name'
                            value={name}
                            onChange={handleNameChange}
                            name='name'
                            label="Name"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isSurnameEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='surname'
                            value={surname}
                            onChange={handleSurnameChange}
                            name='surname'
                            label="Surname"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isUsernameEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='username'
                            value={username}
                            onChange={handleUsernameChange}
                            name='username'
                            label="Username"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isGmailEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='gmail'
                            value={gmail}
                            onChange={handleGmailChange}
                            name='gmail'
                            label="Gmail"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isRepeatGmailEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='gmail'
                            value={repeatGmail}
                            onChange={handleRepeatGmailChange}
                            name='gmail'
                            label="Repeat gmail"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isPasswordEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                            name='password'
                            label="Password"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isRepeatPasswordEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='password'
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                            name='password'
                            label="Repeat password"
                            variant="filled"
                        />
                        <TextField
                            style={{ border: isPhoneEmpty ? '1px solid red' : '' }}
                            id="filled-basic"
                            type='phone'
                            value={phone}
                            onChange={handlePhoneChange}
                            name='phone'
                            label="Phone"
                            variant="filled"
                        />
                    </div>
                    <div className={styles.choose_block}>
                        <p>{choose_txt}</p>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={styles.bottom_block}>
                        <Link to={'/profile page'}>
                            <Button onClick={handleSubmit} className={styles.reg_btn}>{btn_txt}</Button>
                        </Link>
                        <p>{txt} <button className={styles.log_in_btn} onClick={handleBtn_click}>{btn_txt_2}</button>!</p>
                    </div>
                </div>
            </div>
            <div style={{ display: isBtn_click ? 'block' : 'none' }}>
                <Logination />
            </div>
        </>
    )
}

export default Registration