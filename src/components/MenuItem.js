import React from 'react';

const MenuItem = ({ imageUrl, name, price, id, addToCart }) => (
  <div className="menu__item">
    <img className="image" src={imageUrl} alt={name} width={320} height={240} />
    <h2 className="name">{name}</h2>
    <p className="text">Цена : {price} $</p>
    <button type="button" onClick={() => addToCart(id)}>
      Добавить в корзину
    </button>
  </div>
);
export default MenuItem;
