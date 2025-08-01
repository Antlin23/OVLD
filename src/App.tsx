import React from 'react';
import logo from './logo.svg';
import Showcase from './Showcase';
import ImgAndInfo from "./ImgAndInfo";
import Events from "./Events";
import Staff from "./Staff";
import StaffCarousel from "./StaffCarousel";
import Partners from "./Partners";
import ClosureAnnouncement from "./ClosureAnnouncement";

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
    <ClosureAnnouncement />
    <StaffCarousel />
    <ImgAndInfo />
    <Events />
    <Staff />
    <Partners />

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
            <h3>Contact</h3>
            <a href='https://discord.gg/gSvQH8xdh2' target='_blank' rel='noopener noreferrer'>
              <i className="fa-brands fa-discord"></i> Join our Discord
            </a>
            <a href='https://www.instagram.com/ovldautoclub' target='_blank' rel='noopener noreferrer'>
              <i className="fa-brands fa-instagram"></i> Follow us on Instagram
            </a>
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
