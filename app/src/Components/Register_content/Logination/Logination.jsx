import React, { useState } from 'react';
import styles from '../../../Scss/logination.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Logination = () => {
  const title = "Log In";
  const btn_txt = "Ok";

  const [isButtonClick, setIsButtonClick] = useState(false);

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordEmpty(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setIsUsernameEmpty(false);
  };

  const handleSubmit = () => {
    if (password.trim() === '') {
      setIsPasswordEmpty(true);
    }
    if (username.trim() === '') {
      setIsUsernameEmpty(true);
    }
  };
  return (
    <>
      <div style={{ display: isButtonClick ? 'none' : 'block', paddingTop: '220px' }}>
        <div className={styles.block_inner}>
          <div className={styles.top_block}>
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.center_block}>
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
              style={{ border: isPasswordEmpty ? '1px solid red' : '' }}
              id="filled-basic"
              type='password'
              value={password}
              onChange={handlePasswordChange}
              name='password'
              label="Password"
              variant="filled"
            />
          </div>
          <div className={styles.bottom_block}>
            <Link to={'/profile page'}>
              <Button className={styles.log_in_btn} onClick={handleSubmit}>{btn_txt}</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logination