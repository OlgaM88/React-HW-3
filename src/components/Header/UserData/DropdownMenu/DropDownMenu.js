import React from 'react';
import DropDownMenuList from './DropDownMenuList';
import styles from './DropDownMenu.module.css';

const items = [
  { label: 'Account', link: '/account' },
  { label: 'Order History', link: '/order' },
  { label: 'Meal Planer', link: '/meal' },
];
const DropDownMenu = () => (
  <div className={styles.menu}>
    <DropDownMenuList items={items} />
    <button type="button">Log out</button>
  </div>
);

export default DropDownMenu;
