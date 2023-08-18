import React from "react";
import AboutMain from "../../Images/about-image.png";
export default function About() {
  return (
    <section className="AboutSection ">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mb-4 mb-md-0 d-flex pe-5">
            <div className="heading-container text-start">
              <h6 className="subTitle ">ABOUT RESEARCH</h6>
              <h2 className="Titleheading mb-4">
                Reliable Journal of Medical Health Research.
              </h2>
              <p className="mb-3">
                Excepteur sint occaecat cupidatat non proident sunt culpa qui
                officia deserunt mollit anim id est laborum. sed spiciatis unde
                omnis natus error Inventore.
              </p>
              <p className="mb-3">
                Excepteur sint occaecat cupidatat non proident sunt culpa qui
                officia deserunt mollit anim id est laborum. sed spiciatis unde
                omnis natus error Inventore.
              </p>
              <p className="mb-4">
                Excepteur sint occaecat cupidatat non proident sunt culpa qui
                officia deserunt mollit anim id est laborum. sed spiciatis unde
                omnis natus error Inventore.
              </p>


              <a className="theme-btn-one" href="#">
                Our Services
              </a>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-md-0 ImageDiv">
            <div className="">
            <div className= "shapeBox">
<div className= "shape-1"></div>
<div className= "shape-2"></div>
</div>


              <img src={AboutMain} className="img-fluid" alt="" />
              <div className="FloatText">
                <h2>23+</h2>
                <h5>Years of exps</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
