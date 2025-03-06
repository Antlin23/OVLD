import React from 'react';
import logo from './logo.svg';
import Showcase from './Showcase';
import jdmcars from './img/jdmcarsovld.jpg'
import jdmcarsgray from './img/jdmcarfocusingray.jpg'

function App() {
  return (
    <>
    <header className='header'>
      <a className='' href='https://discord.gg/gSvQH8xdh2'><i className="fa-brands fa-discord"></i></a>
    </header>

    <Showcase />

    <section className='contents container'>
      <div className='content'>
        <img src={jdmcars}></img>
        <div className='text'>
          <h2>
            Who we are
          </h2>
          <p>Founded in early 2025 by Antlin, with a vision to create a community where car enthusiasts can come together.</p>
          <p>At the moment, we are four enthusiastic individuals working to make the club a welcoming environment for everyone.</p>
        </div>
      </div>
      <div className='content container'>
        <div className='text'>
          <h2>
            What we do
          </h2>
          <p>Car meets, drift competitions, races, cruises, and photo competitions are some of the car-related events regularly hosted.</p>
          <p>Whether you're a true car enthusiast who can name every JDM car ever built, or you just want to showcase your car at meets, there is a place for you in OVLD.</p>
        </div>
        <img src={jdmcarsgray}></img>
      </div>
    </section>


    </>
  );
}

export default App;
