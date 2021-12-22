import React from 'react';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='about-container'>
        <h1>Plants need love too.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum dui faucibus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Id nibh tortor id aliquet.
        </p>
      </div>
      <div className='features-container'>
        <Button>Register Now</Button>
      </div>
    </div>
  )
}