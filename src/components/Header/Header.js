import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import UserMenu from './UserData/UserMenu/UserMenu';

/* import Authentication from './Authentication/Authentication'; */

const Header = ({ children }) => (
  <header className="Header">
    <Logo />
    <Nav />
    <UserMenu />
  </header>
);
export default Header;
