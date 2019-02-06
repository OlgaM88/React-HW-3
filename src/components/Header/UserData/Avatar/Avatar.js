import React from 'react';

const Avatar = ({ imageUrl, alt, width = 60, height = 60 }) => (
  <a href="/" className="Avatar">
    <img src={imageUrl} alt={alt} width={width} height={height} />
  </a>
);
export default Avatar;
