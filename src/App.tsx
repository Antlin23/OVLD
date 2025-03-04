import React from 'react';
import logo from './logo.svg';
import skylines from './img/skylinesovld.png'
import carsfrombeh from './img/highrescarsbeh.png'
import skyline from './img/skyline.png'
import openhoods from './img/openhoodcarsday.png'

function App() {
  return (
    <>
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
            <div className='slogan'>- In speed we trust, in unity we thrive</div>
            </div>
            <img src={carsfrombeh}></img>
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
              <div className='slogan'>Made for car enthusiasts by car enthusiasts</div>
            </div>
            <img src={openhoods}></img>
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
          <div className='text'>
          <h1 className='title'>OVERLOAD AUTO CLUB™</h1>
          <div className='slogan'>- In speed we trust, in unity we thrive</div>
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
          <h1 className='title'>OVERLOAD AUTO CLUB™</h1>
          <div className='slogan'>- In speed we trust, in unity we thrive</div>
          </div>
          <img src={skylines}></img>
        </div>

      <a href="#carousel__slide1"
           className="carousel__next"><i className="fa-solid fa-arrow-right"></i></a>
    </li>
  </ol>
</section>
    </>
  );
}

export default App;
