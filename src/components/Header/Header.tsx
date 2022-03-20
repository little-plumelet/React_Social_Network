import React from 'react';

import logo from '../../logo.svg';

import style from './Header.module.css'

export const Header = () => {
    return <header className={style.header}>
        <object 
          className="App-logo"
          type="image/svg+xml" 
          data={logo}
        >
          logo
        </object>
      </header>
}