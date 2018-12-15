import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none',
  },
};

const Nav = () => (
  <ul>
    <li>
      <NavLink exact to="/" activeStyle={styles.activeLink}>
        Главная
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/menu" activeStyle={styles.activeLink}>
        Меню
      </NavLink>
    </li>
  </ul>
);
export default Nav;
