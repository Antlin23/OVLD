import React from 'react';
import logo from './logo.svg';
import Showcase from './Showcase';
import ImgAndInfo from "./ImgAndInfo";

function App() {
  return (
    <>
    <header className='header'>
      <a className='' href='https://discord.gg/gSvQH8xdh2'><i className="fa-brands fa-discord"></i></a>
    </header>

    <Showcase />

    <ImgAndInfo />

    <footer className='footer'>
      <div className='footer--content container'>
      Made by Anton | 2025
      </div>
    </footer>

    </>
  );
}

export default App;
