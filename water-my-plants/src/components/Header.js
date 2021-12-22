import React from 'react';
import { Button } from 'reactstrap';


export default function Header() {

  const token = localStorage.getItem('token');

  return(
    <header className='header-container'>
      <div className='watermyplants'>
        <a href='/'>Water My Plants</a>
      </div>
      <div className='nav-links'>
          { !token && <a href='/login'>Sign In</a> }
          
          { !token && <Button href='/signup'>Register</Button> }
          { token && <Button href='/plants'>My Plants</Button> }
          { token && <Button href='/profile'>Account</Button> } 
          { token && <Button href='/logout'>Sign Out</Button> }

          {/* may change path name for logout & register depends on jayson's preferences on naming -lia */}
      </div>
    </header>
  )
}


// My Plants, Account, and Sign Out  buttons need to be conditionally rendered.  If user is logged Sign In and Register should be replaced with the commented out buttons