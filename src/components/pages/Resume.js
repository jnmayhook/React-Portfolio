import React from 'react';

function Resume() {
  return (
    <>
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slide-one-about" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      <div className="text-secondary px-4 py-5">
        <div className="contact-text">
          <div className="py-3">
            <h1 className="display-5 fw-bold text-center">Skills</h1>
          </div>
          <div className="resume container">
            <hr className="py-3" />
            <div className='row text-center'>
              <div className='col-md-3 col-sm-12 py-3'>
                <h2 className='text-center'>Front-End</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                  <li>Handlebars.js</li>
                  <li>React.js</li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12 py-3'>
                <h2>Back-End</h2>
                <ul>
                  <li>Node.js</li>
                  <li>MySQL</li>
                  <li>RESTful API</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>Apollo Server</li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12 py-3'>
                <h2>Version Control</h2>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12 py-3'>
                <h2>Tools</h2>
                <ul>
                  <li>Visual Studio</li>
                  <li>Insomnia</li>
                  <li>MySQL Workbench</li>
                  <li>MongoDB Compass</li>
                  <li>Apollo Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;