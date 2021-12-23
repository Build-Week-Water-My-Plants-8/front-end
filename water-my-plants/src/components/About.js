import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <div className='about-container'>

      <div className='unit-container'>
        <h2>Unit 4</h2>
        <div className='team-member'>
          <h3>
            Arison Arias
            <a href='https://github.com/Arison13'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/arias.png' alt='Profile pic of Arison Arias' />
          <p>Backend Engineer</p>
        </div>
        <div className='team-member'>
          <h3>
            Jared Hall
            <a href='https://github.com/Jaredhall18'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/jared.png' alt='Profile pic of Jared Hall' />
          <p>Backend Engineer</p>
        </div>
      </div>

      <div className='unit-container'>
        <h2>Unit 3</h2>
        <div className='team-member'>
          <h3>
            Jayson Byrd
            <a href='https://github.com/ByrdJayson'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/jayson.png' alt='Profile pic of Jayson Byrd' />
          <p>Frontend React Engineer</p>
        </div>
        <div className='team-member'>
          <h3>
            Lia Moua
            <a href='https://github.com/moua0061'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/me.png' alt='Profile pic of Lia Moua' />
          <p>Frontend React Engineer</p>
        </div>
        <div className='team-member'>
          <h3>
            Ryan Howard
            <a href='https://github.com/ryansnorek'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/ryan.png' alt='Profile pic of Ryan Howard' />
          <p>Frontend React Engineer</p>
        </div>
      </div>

      <div className='unit-container'>
        <h2>Unit 2</h2>
        <div className='team-member'>
          <h3>
            Kayla Famurewa
            <a href='https://github.com/kfam22'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/kayla.png' alt='Profile pic of Kayla Famurewa' />
          <p>Frontend React Engineer</p>
        </div>
        <div className='team-member'>
          <h3>
            Brandon Booth
            <a href='https://github.com/brandon-bee'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/brandon.png' alt='Profile pic of Brandon Booth' />
          <p>Frontend React Engineer</p>
        </div>
        <div className='team-member'>
          <h3>
            Gage Milligan
            <a href='https://github.com/gagemilligan'><FaGithub /></a>
          </h3>
          <img src='../Assets/team/gage.png' alt='Profile pic of Gage Milligan' />
          <p>Frontend React Engineer</p>
        </div>
      </div>
    </div>
  )
}