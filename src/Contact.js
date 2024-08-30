import React from 'react';

function Contact() {
  return (
    <div style={{backgroundColor:'black', color:'white', paddingTop: '5rem', height:'100%',padding:'5rem',fontSize:'25px'}}>
      <div className="row m-3">
        <div className="col-12 col-md-6 my-3 p-3" style = {{border : '1px solid black', borderRadius : '10px', width : '100%'}}>
          <h2>CONTACT US</h2>
          <p>
            <i className="bi bi-envelope me-2" style={{ fontSize: '1.5rem' }}></i>
            Mail Id: trivendarreddy25@gmail.com
          </p>
          <p>
            <i className="bi bi-telephone me-2" style={{ fontSize: '1.5rem' }}></i>
            Contact No: +91 8309059324
          </p>
          <p>
            <i className="bi bi-whatsapp me-2" style={{ fontSize: '1.5rem' }}></i>
            WhatsApp: +91 8309059324
          </p>
          <div className="socialMedia d-flex mt-3">
            <a href="https://github.com/Trivendar-Reddy-Nukala" className="me-3" style={{ fontSize: '1.5rem' }}>
              <i className="bi bi-github"></i>
            </a>
            <a href="/" className="me-3" style={{ fontSize: '1.5rem' }}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/trivendar_reddy/" className="me-3" style={{ fontSize: '1.5rem' }}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/trivendar-reddy-nukala-0031092a7/" style={{ fontSize: '1.5rem' }}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='col-12 col-6 p-3' style = {{border : '1px solid black', borderRadius : '10px'}}>
          <div className="col">
            <div className="col-auto">
              <label for="inputPassword6" className="col-form-label">First Name</label>
            </div>
            <div className="col-auto">
              <input type="text" id="inputPassword6" className="form-control" />
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Last Name</label>
              </div>
              <div className="col-auto">
                <input type="text" id="inputPassword6" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary mt-3" style = {{borderRadius : '25px'}}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
