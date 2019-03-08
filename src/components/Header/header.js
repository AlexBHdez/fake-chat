import React from 'react';

import style from './header.module.scss';

const Header = () => (
  <header className={style.header}>
    <a href="/" className={style.brand} >fakeChat</a>
  </header>
);

export default Header;