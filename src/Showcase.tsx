import React from 'react';
import jdmcarsgrafoc from './img/jdmcarfocusingray.jpg'
import carsfrombeh from './img/highrescarsbeh.jpg'
import skyline from './img/skyline.jpg'
import openhoods from './img/ovldcarsdailight.jpg'

function Showcase() {
  return (
    <section className="carousel" aria-label="Gallery">
    <ol className="carousel__viewport">

    <li id="carousel__slide1"
        className="carousel__slide">
      <div className="carousel__snapper">
        <a href="#carousel__slide4"
           className="carousel__prev"><i className="fa-solid fa-arrow-left"></i></a>
           
           <div className='showcase'>
            <div className='text'>
            <h1 className='title'>OVERLOAD AUTO CLUB™</h1>
            <div className='slogan'>Made by car enthusiasts, for car enthusiasts</div>
            </div>
            <img src={jdmcarsgrafoc}></img>
          </div>

        <a href="#carousel__slide2"
           className="carousel__next"><i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </li>

    <li id="carousel__slide2"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide1"
           className="carousel__prev"><i className="fa-solid fa-arrow-left"></i></a>

          <div className='showcase'>
            <div className='text bottom-right'>
              <div className='slogan'>Made by car enthusiasts, for car enthusiasts</div>
            </div>
            <img src={carsfrombeh}></img>
          </div>

      <a href="#carousel__slide3"
           className="carousel__next"><i className="fa-solid fa-arrow-right"></i></a>
    </li>

    <li id="carousel__slide3"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide2"
           className="carousel__prev"><i className="fa-solid fa-arrow-left"></i></a>

        <div className='showcase'>
          <div className='text bottom-right'>
          <h1 className='title'>What we do</h1>
          <div className='slogan'>Car meets</div>
          <div className='slogan'>Drift competitions</div>
          <div className='slogan'>Races</div>
          <div className='slogan'>Car showcases</div>
          </div>
          <img src={skyline}></img>
        </div>

      <a href="#carousel__slide4"
           className="carousel__next"><i className="fa-solid fa-arrow-right"></i></a>
    </li>

    <li id="carousel__slide4"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide3"
           className="carousel__prev"><i className="fa-solid fa-arrow-left"></i></a>

        <div className='showcase'>
          <div className='text'>
          <h1 className='title'> Join OVERLOAD AUTO CLUB™ today</h1>
          <a className='' href='https://discord.gg/gSvQH8xdh2'><i className="fa-brands fa-discord"></i></a>
          </div>
          <img src={openhoods}></img>
        </div>

      <a href="#carousel__slide1"
           className="carousel__next"><i className="fa-solid fa-arrow-right"></i></a>
    </li>
  </ol>
</section>
    
  );
}

export default Showcase;
