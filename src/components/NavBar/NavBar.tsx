import React from 'react';

import { CustomerServiceOutlined, FireOutlined, MessageOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons'

import style from './NavBar.module.css';

export const NavBar = () => {
    return (
    <nav className={style.navBar}>
      <a href="#"><SmileOutlined style={{color: '#ff5e3a', fontSize: 24}}/></a>
      <a href="#"><MessageOutlined style={{color: '#ff5e3a', fontSize: 24}}/></a>
      {/*  news */}
      <a href="#"><FireOutlined style={{color: '#ff5e3a', fontSize: 24}}/></a>
      <a href="#"><CustomerServiceOutlined style={{color: '#ff5e3a', fontSize: 24}}/></a>
      <a href="#"><SettingOutlined style={{color: '#ff5e3a', fontSize: 24}}/></a>
    </nav>
    )
}
