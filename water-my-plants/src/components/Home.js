import React from 'react';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>Plants need love too.</h1>
      </div>

      <div className='home-details'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum dui faucibus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.
        </p>
      </div>

      <div className='home-button'>
        <Button>Register Now</Button>
      </div>
    </div>
  )
}