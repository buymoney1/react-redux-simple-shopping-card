import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b className='logoTitle'>سارف</b>
      </span>
    </div>
    <p>
      <p className='logoDesc'> آنلاین  فوری</p>
    </p>
  </div>
);

export default Logo;
