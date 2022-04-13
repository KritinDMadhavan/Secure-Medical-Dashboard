import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import '../App.css';


const Home = () => {
  return (
    <div>
      <div>
        <div id="like_button_container" />
        {/* Start your project here*/}
        <div className="row">
          <div className="col-3 mt-4" style={{ width: '20%' }}>
            <img src="img/separator - Copy.png" alt="" />
          </div>
          <div className="col-6">

          </div>
          <div className="col-3 mt-4 p-0">
            <img src="img/separator.png" alt="" />
          </div>
        </div>
        <div className="text-center">
          <img src="img/HOWLSAFE.png" style={{ height: '600px' }} className="m-lg-0" lt />
        </div>
        <div className="col-4" />
        <div className="row m-0 p-0">
          <div className="col-3 m-0 p-0" />
          <div className="col-6 m-0 p-0">
            <img src="img/separator.png" style={{ width: '100%' }} alt="" />
          </div>
          <div className="col-3" />
        </div>
        <div className="row">
          <div className="col-4" />
          <div className="col-4 text-center">
            <form action="upload.html">
              <button type="submit" className="btn-lg btn-primary m-2" name="submit">
                ACCESS FILES
              </button>
            </form>
          </div>
          <div className="col-4" />
        </div>
        {/*Card*/}
        <div className="row mt-5 ps-3">
          <div className="col-1" />
          <div className="card-dark col-3 btn-outline-success m-3 pt-3">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="img/decentralized.png" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
              </a>
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title text-center pb-3">DECENTRALIZED</h5>
              <p className="card-text text-center">
                Decentralized architecture with scattered nodes connected to
                blockchain, but control of access and sharing of data lies solely
                with the user
              </p>
            </div>
          </div>
          <div className="card-dark col-3 btn-outline-warning m-3 pt-3">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="img/security.png" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
              </a>
            </div>
            <div className="card-body justify-content-center">
              <h5 className="card-title text-center pb-3">SECURITY</h5>
              <p className="card-text text-center">
                Multiple authentication features and high level accessiblity.
                Protocols on Ethereum secure and screen all data for malicious
                programs
              </p>
            </div>
          </div>
          <div className="card-dark col-3 btn-outline-secondary m-3 pt-3">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="img/scalability.png" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center pb-3">SCALABILITY</h5>
              <p className="card-text text-center">
                Highly scalable as nodes are willing to join instead having to
                depend on local servers. Using crust and polygon, the cost can be
                made negliible
              </p>
            </div>
          </div>
          <div className="col-1" />
        </div>
        <br /><br /><br /><br /><br />
        {/* Footer */}
        <footer className="bg-black text-center text-white">
          <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0, color: 'grey', height: '3px' }} />
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
              {/* Google */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
              {/* Instagram */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
              {/* Linkedin */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
              {/* Github */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
            </section>
            {/* Section: Social media */}
            <br />
            <div className="row">
              <div className="col-1" />
              <div className="col-4"><img className="pt-5" src="img/hacknight.png" alt="" /></div>
              <div className="col-2" />
              <div className="col-4"><img src="img/logo.png" style={{ height: '300px', width: '300px' }} alt="" /></div>
              <div className="col-1" />
            </div>
            {/* Section: Text */}
            <br /><br /><br />
            <section className="mb-4">
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                HOWLSAFE : A mobile digital solution to tedious and insecure applications for sensitive data storage, retrieval, sharing and transactions
              </p>
            </section>
            <br />
            <section className="mb-4">
              <div className="row">
                <div className="col-4"><p>Tarun Gopinath</p></div>
                <div className="col-4"><p>Anirudh C P</p></div>
                <div className="col-4"><p>Kritin D Madhavan</p></div>
              </div>
            </section>
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">Team A*</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  )
}

export default Home