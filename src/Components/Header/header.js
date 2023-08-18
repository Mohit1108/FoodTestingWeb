import React from "react";
import Logo from "../../Images/LogoFareLabs.png";
import "../../style/Header.css";
export default function Header() {
  return (
    <header>
      <div className="header-top light-bg py-3 px-5">
        <div className="container-fluid px-lg-8">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between">
              <div className="header-icons topbar-link d-flex align-items-center text-black gap-4">
                <div className=" d-flex align-items-center gap-2">
                  <div>
                    <i className="bi bi-telephone"></i>{" "}
                  </div>
                  <div>
                    <a className="text-black" href="tel:+912345678900">
                      +91-234-567-8900
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <i className="bi bi-envelope"></i>{" "}
                  </div>
                  <div>
                    <a className="text-black" href="mailto:contact@testing.com">
                      contact@testing.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <div> Gurugram</div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <i className="bi bi-calendar4-week "></i>
                  </div>
                  <div>
                    <div>Mon-Sat: 9.30am To 7.00pm</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="social-icons">
                  <ul className="list-inline d-flex gap-4 m-0">
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg    px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} className="LogoImage" alt="LogoImage"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>

            </ul>
            <span className="navbar-text">
              <a className="theme-btn-one" href="/"> 
              Schedule a Call
              </a>

              

            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
