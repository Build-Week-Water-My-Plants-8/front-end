import React from 'react';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';

export default function Header() {
  return(
    <header className='header-container'>
      <Navbar color='light'>
        <NavbarBrand href='/'>Water My Plants</NavbarBrand>
        <NavLink href='/login'>Login</NavLink>
        <NavLink href='/profile'>Profile</NavLink>
      </Navbar>
    </header>
  )
}