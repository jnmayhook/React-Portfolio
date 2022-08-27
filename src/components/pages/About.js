import React from 'react';

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
              <div className="col-lg-5">
                <img className="w-100" src="./assets/img/about_mariners_img1.jpg" alt="Mariners Ballpark" />
              </div>
              <div className="d-none d-lg-block col-1"></div>
              <div className="col-lg-6 col-xl-6 align-self-center order-11 order-lg-2">
                <p>Consequat orci eu purus volutpat hendrerit eget quis quam. Maecenas fringilla erat
                  sapien, interdum laoreet diam malesuada vel. Fusce bibendum volutpat leo, sed dapibus
                  odio elementum a. Maecenas
                  pretium euismod ipsum vel imperdiet. Sed et enim a odio facilisis commodo..
                  Consequat orci eu purus volutpat hendrerit eget quis quam. Maecenas fringilla erat
                  sapien, interdum laoreet diam malesuada vel. </p>
              </div>

              <div className="d-none d-lg-block col-lg-2 col-xl-auto order-10 order-lg-4">
                <img className="mw-100" width="140" src="./assets/img/about_yeti_img2_lrg.jpg" alt="Yeti, Dog" />
              </div>
              <div className="d-none d-lg-block col-lg-3 order-9 order-lg-5">
                <img className="w-100" src="./assets/img/about_nathan.jpg" alt="Profile pic" />
              </div>
              <div className="d-none d-lg-block col-1 order-lg-6"></div>
              <div className="col-lg-6 col-xl-5 mt-xl-n60 order-12 order-lg-7">
                <p>Consequat orci eu purus volutpat hendrerit eget quis quam. Maecenas fringilla erat
                  sapien, interdum laoreet diam malesuada vel. Fusce bibendum volutpat leo, sed dapibus
                  odio elementum a. Maecenas
                  pretium euismod ipsum vel imperdiet. Sed et enim a odio facilisis commodo..
                  Consequat orci eu purus volutpat hendrerit eget quis quam. Maecenas fringilla erat
                  sapien, interdum laoreet diam malesuada vel. Fusce bibendum volutpat leo, sed dapibus
                  odio elementum a. Maecenas
                  pretium euismod ipsum vel imperdiet. Sed et enim a odio facilisis commodo..</p>
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
