import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <div className='about-container'>

      <div className='unit-container'>
        <h2>Unit 4</h2>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Arison Arias</h3>
            <h3>
              <a href='https://github.com/Arison13'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/arias.png' alt='Profile pic of Arison Arias' />
          <h5>Backend Engineer</h5>
        </div>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Jared Hall</h3>
            <h3>
              <a href='https://github.com/Jaredhall18'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/jared.png' alt='Profile pic of Jared Hall' />
          <h5>Backend Engineer</h5>
        </div>
      </div>

      <div className='unit-container'>
        <h2>Unit 3</h2>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Jayson Byrd</h3>
            <h3>
              <a href='https://github.com/ByrdJayson'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/jayson.png' alt='Profile pic of Jayson Byrd' />
          <h5>Frontend React Engineer</h5>
        </div>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Lia Moua</h3>
            <h3>
              <a href='https://github.com/moua0061'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/me.png' alt='Profile pic of Lia Moua' />
          <h5>Frontend React Engineer</h5>
        </div>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Ryan Howard</h3>
            <h3>
              <a href='https://github.com/ryansnorek'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/ryan.png' alt='Profile pic of Ryan Howard' />
          <h5>Frontend React Engineer</h5>
        </div>
      </div>

      <div className='unit-container'>
        <h2>Unit 2</h2>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Kayla Famurewa</h3>
            <h3>
              <a href='https://github.com/kfam22'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/kayla.png' alt='Profile pic of Kayla Famurewa' />
          <h5>Frontend React Engineer</h5>
        </div>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Brandon Booth</h3>
            <h3>
              <a href='https://github.com/brandon-bee'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/brandon.png' alt='Profile pic of Brandon Booth' />
          <h5>Frontend React Engineer</h5>
        </div>
        <div className='team-member'>
          <div className='member-title'>
            <h3>Gage Milligan</h3>
            <h3>
              <a href='https://github.com/gagemilligan'><FaGithub className='github-icon' /></a>
            </h3>
          </div>
          <img src='../Assets/team/gage.png' alt='Profile pic of Gage Milligan' />
          <h5>Frontend React Engineer</h5>
        </div>
      </div>
    </div>
  )
}