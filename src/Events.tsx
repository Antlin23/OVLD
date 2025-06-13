import React from 'react';

function Events() {
  return (
    <section id="activities" className="events container">
      <h2>Featured Activities</h2>
      <div className="events--grid">
        <div className="event-card">
          <div className="event--icon">
            <i className="fa-solid fa-car-side"></i>
          </div>
          <h3>Car Meets</h3>
          <p>Join our regular car meets where members showcase their latest builds. Perfect for admiring custom cars, sharing builds, and connecting with fellow enthusiasts.</p>
          <a href="https://discord.gg/gSvQH8xdh2" className="event--join">Join Discord</a>
        </div>

        <div className="event-card">
          <div className="event--icon">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <h3>Drift Sessions</h3>
          <p>Experience the thrill of drifting with our community. Whether you're a beginner or a pro, join our drift sessions to improve your skills and compete with others.</p>
          <a href="https://discord.gg/gSvQH8xdh2" className="event--join">Join Discord</a>
        </div>

        <div className="event-card">
          <div className="event--icon">
            <i className="fa-solid fa-camera"></i>
          </div>
          <h3>Photo Gallery</h3>
          <p>Share your best car photos in our community gallery. Get feedback from other members and participate in our photo contests to showcase your photography skills.</p>
          <a href="https://discord.gg/gSvQH8xdh2" className="event--join">Join Discord</a>
        </div>
      </div>
    </section>
  );
}

export default Events; 