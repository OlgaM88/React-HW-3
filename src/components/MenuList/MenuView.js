import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MenuItem from '../MenuItem';

const MenuView = ({ products = [], match, location }) => (
  <ul className="list-menu">
    {products.map(product => (
      <li key={product.id} className="menu__list-item">
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
);
export default withRouter(MenuView);
