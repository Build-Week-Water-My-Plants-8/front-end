import React from 'react';
import { Button } from 'reactstrap';


export default function Header({isLoggedIn}) {

  return(
    <header className='header-container'>
      <div className='watermyplants'>
        <a href='/'>Water My Plants</a>
      </div>
      <div className='nav-links'>
          { !isLoggedIn && <a href='/login'>Sign In</a> }
          
          { !isLoggedIn && <Button id='register-btn' href='/signup'>Register</Button> }
          { isLoggedIn && <Button id='myplants-btn' href='/plants'>My Plants</Button> }
          { isLoggedIn && <Button id='profile-btn' href='/profile'>Account</Button> } 
          { isLoggedIn && <Button id='logout-btn' href='/logout'>Sign Out</Button> }
          { isLoggedIn && <Button id='add-btn' href='/add'>Add Plant</Button>}
      </div>
    </header>
  )
}
