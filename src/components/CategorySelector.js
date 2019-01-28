import React from 'react';

const styles = {
  select: {
    fontSize: 20,
  },
};

const CategorySelector = ({ options, value, onChange }) => (
  <select
    style={styles.select}
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    <option value="all">all</option>
    {options.map(item => (
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
);

export default CategorySelector;
