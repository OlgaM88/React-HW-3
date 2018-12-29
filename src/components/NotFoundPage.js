import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <h1>
    404 Страница не найдена. Вернуться на <Link to="/">Главную</Link>
  </h1>
);

export default NotFoundPage;
