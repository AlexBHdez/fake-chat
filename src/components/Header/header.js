import React from 'react';

// Styles
import style from './header.module.scss';

const Header = () => (
  <header className={style.header}>
    <a href="/" className={style.header__brand} >fakeChat</a>
    <span className={style.header__copy}>Made with love (and react) by <a href="https://github.com/AlexBHdez/" target="_blank" rel="noopener noreferrer">@AlexBHdez</a></span>
  </header>
);

export default Header;