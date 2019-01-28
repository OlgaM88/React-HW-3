import React from 'react';

const SelectedIngredients = ({ items }) => (
  <ul className="list-ingredients">
    {items.map(item => (
      <li key={items}>
        {item}
        <button type="button">X</button>
      </li>
    ))}
  </ul>
);
export default SelectedIngredients;
