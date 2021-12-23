import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <div>
      <div className='team'>
        <h1> Meet the Team</h1>
        <p> We are a group of dev students who are passionate about coding and keeping plants alive!</p>
      </div>

      <div className='about-container'>
        <div className='unit-container'>
          {/* <h2>Unit 4</h2> */}

          <div className='team-member'>
            <img src={require('../Assets/team/arias.png')} alt='Profile pic of Arison Arias' />
            <div className='member-title'>
              <h3>Arison Arias <a href='https://github.com/Arison13'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Backend Engineer</h5>
          </div>

          <div className='team-member'>
            <img src={require('../Assets/team/jared.png')} alt='Profile pic of Jared Hall' />
            <div className='member-title'>
              <h3>Jared Hall <a href='https://github.com/Jaredhall18'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Backend Engineer</h5>
          </div>
        </div>

        <div className='unit-container'>
          {/* <h2>Unit 3</h2> */}

          <div className='team-member'>
            <img src={require('../Assets/team/jayson.png')} alt='Profile pic of Jayson Byrd' />
            <div className='member-title'>
              <h3>Jayson Byrd <a href='https://github.com/ByrdJayson'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Frontend React Engineer</h5>
          </div>

          <div className='team-member'>
            <img src={require('../Assets/team/me.png')} alt='Profile pic of Lia Moua' />
            <div className='member-title'>
              <h3>Lia Moua <a href='https://github.com/moua0061'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Frontend React Engineer</h5>
          </div>

          <div className='team-member'>
            <img src={require('../Assets/team/ryan.png')} alt='Profile pic of Ryan Howard' />
            <div className='member-title'>
              <h3>Ryan Howard <a href='https://github.com/ryansnorek'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Frontend React Engineer</h5>
          </div>
        </div>

        <div className='unit-container'>
          {/* <h2>Unit 2</h2> */}

          <div className='team-member'>
            <img src={require('../Assets/team/kayla.png')} alt='Profile pic of Kayla Famurewa' />
            <div className='member-title'>
              <h3>Kayla Famurewa <a href='https://github.com/kfam22'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Frontend React Engineer</h5>
          </div>

          <div className='team-member'>
            <img src={require('../Assets/team/brandon.png')} alt='Profile pic of Brandon Booth' />
            <div className='member-title'>
              <h3>Brandon Booth <a href='https://github.com/brandon-bee'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Frontend React Engineer</h5>
          </div>
          
          <div className='team-member'>
            <img src={require('../Assets/team/gage.png')} alt='Profile pic of Gage Milligan' />
            <div className='member-title'>
              <h3>Gage Milligan <a href='https://github.com/gagemilligan'><FaGithub className='github-icon' /></a></h3>
            </div>
            <h5>Frontend React Engineer</h5>
          </div>
        </div>
      </div>
    </div>
  )
}