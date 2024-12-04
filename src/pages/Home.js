import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section className="home">
      <div>
        <h1>Soy Steve Silva</h1>
        <p>Soy un <strong>estudiante de la ESIT</strong> aprendiendo desarrollo web</p>
        <div className="social-links">
          <a href="https://x.com/steve_silva99?s=09" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" alt="Facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
