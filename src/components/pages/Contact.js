import React from 'react';

function Contact() {
  return (
    <>
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slide-one-about" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      <div className="text-secondary px-4 py-5" id="contact">
        <div className="contact-text">
          <div className="py-3">
            <h1 className="display-5 fw-bold text-center">Contact</h1>
          </div>

          <div className="pt-160 pb-130 mb-6">
            <div className="container">
              <div className="row gh-1 gv-1 flex flex-column">
                <div className="col-lg-6 col-xl-6 align-self-center ">
                  <form>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email</label>
                      <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" placeholder="How can I help?"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;