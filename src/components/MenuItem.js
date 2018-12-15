import React from 'react';

const MenuItem = ({ imageUrl, name, price }) => (
  <div className="menu__item">
    <img className="image" src={imageUrl} alt={name} />
    <h2 className="name">{name}</h2>
    <p className="text">{price}</p>
    <button className="btn" type="button">
      Add to cart
    </button>
  </div>
);
export default MenuItem;
