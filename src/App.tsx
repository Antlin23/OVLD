import React from 'react';
import logo from './logo.svg';
import Showcase from './Showcase';
import ImgAndInfo from "./ImgAndInfo";
import Events from "./Events";
import Staff from "./Staff";

function App() {
  return (
    <>
    <header className='header'>
      <div className='header--content'>
        <a className='social-link' href='https://discord.gg/gSvQH8xdh2' title="Join our Discord"><i className="fa-brands fa-discord"></i></a>
        <a className='social-link' href='https://www.instagram.com/ovldautoclub' title="Follow us on Instagram"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </header>

    <Showcase />
    <ImgAndInfo />
    <Events />
    <Staff />

    <footer className='footer'>
      <div className='footer--content container'>
        <div className='footer--sections'>
          <div className='footer--section'>
            <h3>Quick Links</h3>
            <a href='https://discord.gg/gSvQH8xdh2'>Join Discord</a>
            <a href='#activities'>Featured Activities</a>
            <a href='#about'>Who We Are</a>
          </div>
          <div className='footer--section'>
            <h3>Server Features</h3>
            <p>• Weekly Car Meets</p>
            <p>• Drift Competitions</p>
            <p>• Racing Events</p>
            <p>• Photo Contests</p>
          </div>
          <div className='footer--section'>
            <h3>Contact</h3>
            <p>Discord: OVLD Auto Club</p>
            <p>Server Owner: Anton</p>
          </div>
        </div>
        <div className='footer--bottom'>
          <p>OVERLOAD AUTO CLUB™ | Made by Anton | 2025</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
