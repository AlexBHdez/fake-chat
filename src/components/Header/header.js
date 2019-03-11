import React from 'react';

// Styles
import style from './header.module.scss';

const Header = () => (
  <header className={style.header}>
    <a href="/" className={style.header__brand} >fakeChat</a>
    <div className={style.header__copy}>
      <span>Made with love (and react) by </span>
      <a href="https://github.com/AlexBHdez/" target="_blank" rel="noopener noreferrer">@AlexBHdez</a>
    </div>
  </header>
);

export default Header;