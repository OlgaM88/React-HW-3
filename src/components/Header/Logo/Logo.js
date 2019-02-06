import React from 'react';
import logo from '../../../burger.svg';
import s from './logo.module.css';

const Logo = () => (
  <a href="/" className={s.Logo}>
    <img src={logo} className={s.logoImg} alt="Burger Food" />
    <h1>Burger Food</h1>
  </a>
);
export default Logo;
