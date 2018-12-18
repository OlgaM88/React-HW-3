import React from 'react';

const SelectedItem = ({
  name,
  image,
  price,
  description,
  category,
  ingredients,
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
  </div>
);
export default SelectedItem;
