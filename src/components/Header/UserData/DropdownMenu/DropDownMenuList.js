import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none',
  },
};

const DropDownMenuList = ({ items }) => (
  <ul className="dd-menu__list">
    {items.map(({ label, link }) => (
      <li className="dd-menu__list-item" key={label}>
        <NavLink exact to={link} activeStyle={styles.activeLink}>
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);
export default DropDownMenuList;
