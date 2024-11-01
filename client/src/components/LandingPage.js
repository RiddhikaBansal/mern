import React from 'react';
import './LandingPage.css';
import GuitarImage from '../assets/guitar.png';
import SongsImage from '../assets/songs.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Hello and Welcome!</h1>
      <p>
        I am currently studying at J K Lakshmipat University. I’m in my 5th semester of engineering. 
        Explore my work and feel free to reach out!
      </p>

      <h3 className="skills">Skills</h3>
      <p>Programming Languages: Python, C, C++</p>
      <p>Web Technologies: React, Node.js, HTML, CSS</p>
      <p>IoT Tools: Arduino, ESP8266, Blynk</p>
      <p>Networking: Cisco configuration, DHCP server setup</p>

      <section className="hobbies-section">
        <h2>My Hobbies</h2>
        <div className="hobbies-container">
          <div className="hobby">
            <img src={GuitarImage} alt="Guitar" />
            <p>Guitar</p>
          </div>
          <div className="hobby">
            <img src={SongsImage} alt="Songs" />
            <p>Singing</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
