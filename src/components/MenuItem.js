import React from 'react';

const MenuItem = ({ imageUrl, name, price }) => (
  <div className="menu__item">
    <img className="image" src={imageUrl} alt={name} width={320} height={240} />
    <h2 className="name">{name}</h2>
    <p className="text">Цена : {price} $</p>
  </div>
);
export default MenuItem;
