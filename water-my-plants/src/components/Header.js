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
          {/* <Button>My Plants</Button>
          <Button>Account</Button>
          <Button>Sign Out</Button> */}
      </div>
      {/* <Navbar color='light'>
        <NavbarBrand href='/'>Water My Plants</NavbarBrand>
        <NavLink href='/login'>Login</NavLink>
        <NavLink href='/profile'>Profile</NavLink>
      </Navbar> */}
    </header>
  )
}


// My Plants, Account, and Sign Out  buttons need to be conditionally rendered.  If user is logged Sign In and Register should be replaced with the commented out buttons