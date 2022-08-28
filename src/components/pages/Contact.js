import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_r931xsg',
      'template_p13j6oj',
      toSend,
      'duy6lha1Stay-iTCd'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
            <h1 className="display-5 fw-bold text-center">Let's Talk</h1>
          </div>

          <div className="pt-160 pb-130 mb-6">
            <div className="container">
              <div className="row gh-1 gv-1 flex flex-column">
                <div className="col-lg-6 col-xl-6 align-self-center ">
                  <p>Please leave a message and I'll get in touch with you shortly.</p>
                  <form onSubmit={onSubmit} className="needs-validation" novalidate>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Name</label>
                      <input
                        type='text'
                        name='from_name'
                        class='form-control form-control-lg'
                        placeholder='Name'
                        value={toSend.from_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email</label>
                      <input
                        type='text'
                        name='from_email'
                        class='form-control form-control-lg'
                        placeholder='email@example.com'
                        value={toSend.from_email}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea
                        type='text'
                        name='message'
                        class='form-control form-control-lg'
                        rows='3'
                        placeholder='How can I help?'
                        value={toSend.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                    <p></p>
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