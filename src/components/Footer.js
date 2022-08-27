import React from 'react';

function Footer() {
  return (
      <footer className="footer text-center mt-auto">
        <div className="container">
          <ul className="nav-icons">
            <li className="py-1">Hit me up!</li>
            <li><a href="tel:9079525304"><img src="./assets/img/icon_phone.png" alt="Phone Icon" /></a></li>
            <li><a href="mailto:jnmayhook@gmail.com"><img src="./assets/img/icon_email.png" alt="Email Icon" /></a>
            </li>
            <li><a href="https://github.com/jnmayhook"><img src="./assets/img/icon_git_hub.png"
              alt="Github Icon" /></a></li>
          </ul>
        </div>
      </footer>
  );
}

export default Footer;