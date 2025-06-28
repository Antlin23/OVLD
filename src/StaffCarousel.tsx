import React from 'react';
import './css/index.css';
import img1 from './img/skylinesyard.jpg';
import img2 from './img/sandyshoredsairfield.jpg';
import img3 from './img/highrescarsbeh.jpg';
import img4 from './img/skyline.jpg';
import img5 from './img/gangsters.jpg';
import img6 from './img/phonefontain.jpg';

const images = [img1, img2, img3, img4, img5, img6];

function StaffCarousel() {
  // Duplicate images for seamless infinite scroll
  const carouselImages = [...images, ...images];

  return (
    <section className="staff-carousel-section">
      <div className="staff-carousel">
        <div className="staff-carousel-track">
          {carouselImages.map((src, idx) => (
            <div className="staff-carousel-image-wrapper" key={idx}>
              <img src={src} alt="Staff car" className="staff-carousel-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StaffCarousel; 