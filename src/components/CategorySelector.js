import React from 'react';

const styles = {
  select: {
    fontSize: 20,
  },
};

const CategorySelector = ({ options, value, onChange }) => (
  <div>
    <h4>Выбрать категорию блюда:</h4>
    <select
      style={styles.select}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(item => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
);

export default CategorySelector;
