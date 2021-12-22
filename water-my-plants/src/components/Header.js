import React from 'react';
import { Button } from 'reactstrap';

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
    </header>
  )
}