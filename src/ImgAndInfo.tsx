import React from 'react';
import jdmcars from './img/jdmcarsovld.jpg'
import skylines from './img/skylinesnologo.jpg'

function Showcase() {
  return (
    <section className='contents container'>
    <div className='content'>
      <img src={jdmcars}></img>
      <div className='text'>
        <h2>
          Who we are
        </h2>
        <p>Founded in early 2025 by Antlin, with a vision to create a community where car enthusiasts can come together.</p>
        <p>At the moment, we are four enthusiastic individuals working to make the club a welcoming environment for everyone, alongside with all our members.</p>
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
      <img src={skylines}></img>
    </div>
  </section>
    
  );
}

export default Showcase;
