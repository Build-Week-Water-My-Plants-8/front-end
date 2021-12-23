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
          
          { !token && <Button id='register-btn' href='/signup'>Register</Button> }
          { token && <Button id='myplants-btn' href='/plants'>My Plants</Button> }
          { token && <Button id='profile-btn' href='/profile'>Account</Button> } 
          { token && <Button id='logout-btn' href='/logout'>Sign Out</Button> }
          { token && <Button href='/add'>Add Plant</Button>}


          {/* may change path name for logout & register depends on jayson's preferences on naming -lia */}
      </div>
    </header>
  )
}


// My Plants, Account, and Sign Out  buttons need to be conditionally rendered.  If user is logged Sign In and Register should be replaced with the commented out buttons