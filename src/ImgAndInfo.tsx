import React from 'react';
import jdmcars from './img/jdmcarsovld.jpg'
import skylines from './img/sandyshoredsairfield.jpg'

function Showcase() {
  return (
    <section className='contents container'>
      <div id="about" className='content'>
        <div className='content--image'>
          <img src={skylines} alt="OVLD Car Meet" />
          <div className='image--overlay'></div>
        </div>
        <div className='text'>
          <div className='text--content'>
            <h2>Who We Are</h2>
            <div className='text--divider'></div>
            <p>Founded in early 2025 by Anton, with a vision to create a community where car enthusiasts can come together.</p>
            <p>At the moment, we are five enthusiastic individuals working to make the club a welcoming environment for everyone, alongside with all our members.</p>
            <div className='text--stats'>
              <div className='stat'>
                <span className='stat--number'>5</span>
                <span className='stat--label'>Staff Members</span>
              </div>
              <div className='stat'>
                <span className='stat--number'>100+</span>
                <span className='stat--label'>Active Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='content container'>
        <div className='text'>
          <div className='text--content'>
            <h2>What We Do</h2>
            <div className='text--divider'></div>
            <p>Car meets, drift competitions, races, cruises, and photo competitions are some of the car-related events regularly hosted.</p>
            <p>Whether you're a true car enthusiast who can name every JDM car ever built, or you just want to showcase your car at meets, there is a place for you in OVLD.</p>
            <div className='text--features'>
              <div className='feature'>
                <i className="fa-solid fa-car-side"></i>
                <span>Car Meets</span>
              </div>
              <div className='feature'>
                <i className="fa-solid fa-trophy"></i>
                <span>Drift Events</span>
              </div>
              <div className='feature'>
                <i className="fa-solid fa-flag-checkered"></i>
                <span>Racing</span>
              </div>
              <div className='feature'>
                <i className="fa-solid fa-camera"></i>
                <span>Photo Contests</span>
              </div>
            </div>
          </div>
        </div>
        <div className='content--image'>
          <img src={jdmcars} alt="OVLD Skylines" />
          <div className='image--overlay'></div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
