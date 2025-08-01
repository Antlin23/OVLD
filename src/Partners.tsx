import React from 'react';

function Partners() {
  const partners = [
    {
      name: "The DuckClub",
      description: "Car Meet Club"
    },
    {
      name: "DarkInvaderr Gaming",
      description: "Gaming community"
    }
  ];

  return (
    <section id="partners" className="partners container">
      <h2>Our Partners</h2>
      <div className="partners--grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner--icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners; 