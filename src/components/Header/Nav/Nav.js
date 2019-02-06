import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const styles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none',
  },
};

const Nav = () => (
  <ul className={style.navMenu}>
    <li>
      <NavLink exact to="/" activeStyle={styles.activeLink}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/menu" activeStyle={styles.activeLink}>
        Menu
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/about" activeStyle={styles.activeLink}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/delivery" activeStyle={styles.activeLink}>
        Delivery
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/contact" activeStyle={styles.activeLink}>
        Contact
      </NavLink>
    </li>
  </ul>
);
export default Nav;
