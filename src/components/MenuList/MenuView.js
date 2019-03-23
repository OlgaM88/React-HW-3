import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import s from './MenuList.module.css';

const MenuView = ({ menu = [], match, location }) => (
  <>
    <ul className={s.menu}>
      {menu.map(product => (
        <li key={product.id} className="s.item">
          <Link
            to={{
              pathname: `${match.url}/${product.id}`,
              state: { from: location },
            }}
          >
            <MenuItem
              imageUrl={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        </li>
      ))}
    </ul>
  </>
);
export default withRouter(MenuView);
