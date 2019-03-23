import React from 'react';
import AddComment from './MenuList/AddComment';

const SelectedItem = ({
  id,
  name,
  image,
  price,
  description,
  category,
  ingredients,
  addToCart,
  onmessageChange,
  message,
}) => (
  <div>
    <img src={image} alt={name} width={600} height={400} />
    <p>
      <b>Category: {category}</b>
    </p>
    <p>
      <b>Price: {price}</b>
    </p>
    <p>{description}</p>
    <div>
      Ингредиенты:
      <ul>
        {ingredients.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    <button type="button" onClick={() => addToCart(id)}>
      Добавить в корзину
    </button>
    <AddComment onmessageChange={onmessageChange} message={message} />
  </div>
);
export default SelectedItem;
