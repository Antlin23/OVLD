import React from 'react';

function Staff() {
  const staffMembers = [
    {
      name: "Antlin23",
      role: "Founder & Co-owner",
      icon: "fa-solid fa-crown"
    },
    {
      name: "Rndom",
      role: "Co-owner",
      icon: "fa-solid fa-crown"
    },
    {
      name: "JC_NYY",
      role: "Meet Host",
      icon: "fa-solid fa-car-side"
    },
    {
      name: "nilsolol",
      role: "Meet Host",
      icon: "fa-solid fa-car-side"
    },
    {
      name: "Luc",
      role: "Social Media Manager",
      icon: "fa-solid fa-hashtag"
    }
  ];

  return (
    <section id="staff" className="staff container">
      <h2>Meet Our Team</h2>
      <div className="staff--grid">
        <div className="staff--top-row">
          <div className="staff-card">
            <div className="staff--icon">
              <i className={staffMembers[0].icon}></i>
            </div>
            <h3>{staffMembers[0].name}</h3>
            <div className="staff--role">{staffMembers[0].role}</div>
          </div>
          <div className="staff-card">
            <div className="staff--icon">
              <i className={staffMembers[1].icon}></i>
            </div>
            <h3>{staffMembers[1].name}</h3>
            <div className="staff--role">{staffMembers[1].role}</div>
          </div>
        </div>
        <div className="staff--bottom-row">
          <div className="staff-card">
            <div className="staff--icon">
              <i className={staffMembers[2].icon}></i>
            </div>
            <h3>{staffMembers[2].name}</h3>
            <div className="staff--role">{staffMembers[2].role}</div>
          </div>
          <div className="staff-card">
            <div className="staff--icon">
              <i className={staffMembers[3].icon}></i>
            </div>
            <h3>{staffMembers[3].name}</h3>
            <div className="staff--role">{staffMembers[3].role}</div>
          </div>
          <div className="staff-card">
            <div className="staff--icon">
              <i className={staffMembers[4].icon}></i>
            </div>
            <h3>{staffMembers[4].name}</h3>
            <div className="staff--role">{staffMembers[4].role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staff; 