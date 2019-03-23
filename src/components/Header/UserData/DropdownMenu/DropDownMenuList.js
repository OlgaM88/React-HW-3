import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DropDownMenu.module.css';

const styles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none',
  },
};

const DropDownMenuList = ({ items }) => (
  <ul className={style.menuList}>
    {items.map(({ label, link }) => (
      <li className="dd-menu__list-item" key={label}>
        <NavLink exact to="/account" activeStyle={styles.activeLink}>
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);
export default DropDownMenuList;
