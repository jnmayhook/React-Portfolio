import React from 'react';
import ballpark from '../../assets/img/about_mariners_img1.jpg';
import profilePic from '../../assets/img/about_nathan.jpg';
import yeti from '../../assets/img/about_yeti_img2_lrg.jpg';

function About() {
  return (
    <>
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slide-one-about" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-secondary px-4 py-5">
        <div className="about-text">
          <div className="py-3">
            <h1 className="display-5 fw-bold text-white text-center">About</h1>
          </div>

          <div className="pt-160 pb-130 mb-6">
            <div className="container">
              <div className="row gh-1 gv-1 justify-content-xl-end">
                <div className="col-lg-5 ballpark">
                  <img className="w-100" src={ballpark} alt="Mariners Ballpark" />
                </div>
                <div className="d-none d-lg-block col-1"></div>
                <div className="col-lg-6 col-xl-6 align-self-center order-11 order-lg-2">
                  <p>Velkommen, I'm Nathan, an extension student at the University of Washington for Full Stack (MERN) Web Development.
                    Over the past six months, I've learned a tremendous amount of information from the client side to the server side,
                    building applications using the MERN stack - MongoDB, Express.js, React.js, and Node.js.
                  </p>
                </div>

                <div className="d-none d-lg-block col-lg-2 col-xl-auto order-10 order-lg-4">
                  <img className="mw-100" width="140" src={yeti} alt="Yeti, Dog" />
                </div>
                <div className="d-lg-block col-lg-3 order-9 order-lg-5">
                  <img className="w-100" src={profilePic} alt="Profile pic" />
                </div>
                <div className="d-none d-lg-block col-1 order-lg-6"></div>
                <div className="col-lg-6 col-xl-5 mt-xl-n60 order-12 order-lg-7">
                  <p>I live in Poulsbo, Wa, and when I'm not on my computer (typically 8-10hrs a day), I enjoy hanging with my family, playing legos with my son,
                    gardening, rooting for the Mariners, boating, biking, and kicking it with my dog Yeti.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
