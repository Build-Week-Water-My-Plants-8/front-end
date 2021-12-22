import React from 'react';
import { Button } from 'reactstrap';
// import { Navbar, NavbarBrand, NavLink } from 'reactstrap';

export default function Header() {
  return(
    <header className='header-container'>
      <div className='watermyplants'>
        <a href='#'>Water My Plants</a>
      </div>
      <div className='nav-links'>
          <a href='#'>Sign In</a>
          <Button>Register</Button>
      </div>
      {/* <Navbar color='light'>
        <NavbarBrand href='/'>Water My Plants</NavbarBrand>
        <NavLink href='/login'>Login</NavLink>
        <NavLink href='/profile'>Profile</NavLink>
      </Navbar> */}
    </header>
  )
}