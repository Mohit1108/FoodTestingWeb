import React from "react";
import serv1 from "../../../Images/dermatologically-tested.png";
import MainImage from "../../../Images/Img1.png";
export default function StepsTesting() {
  return (
    <>
      <section className="stepstesting">
        <div className="container">
          <div className="heading-container">
            <h6 className="subTitle">SERVING WIDE RANGE OF SERVICES</h6>
            <h2 className="Titleheading mb-3">Immunization tips</h2>
            <p className="DescHeading">
              Aliquam et dolor tincidunt odio consequat posuere et non purus.
              Sed enim lacus, tincidunt pellentesque justo sit amet lorem
            </p>
          </div>
          <div className="Content text-center pt-5">
            <div class="row">
              <div class="col">
                <div className="iconBoxes">
                  <div className="IconBox left">
                    <div className="imageIcon">
                      {" "}
                      <img alt="image" src={serv1}></img>
                    </div>
                    <h3 className="TitleIcon">Safe & Effective</h3>
                    <p className="DescriptionIcon">
                      Maecenas vel nibh aliquet lectus
                    </p>
                  </div>
                  <div className="IconBox right">
                    <div className="imageIcon">
                      {" "}
                      <img alt="image" src={serv1}></img>
                    </div>
                    <h3 className="TitleIcon">Safe & Effective</h3>
                    <p className="DescriptionIcon">
                      Maecenas vel nibh aliquet lectus
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <img className="ImageMain" src={MainImage}></img>
              </div>
              <div class="col">
                <div className="iconBoxes">
                  <div className="IconBox right">
                    <div className="imageIcon">
                      {" "}
                      <img alt="image" src={serv1}></img>
                    </div>
                    <h3 className="TitleIcon">Safe & Effective</h3>
                    <p className="DescriptionIcon">
                      Maecenas vel nibh aliquet lectus
                    </p>
                  </div>
                  <div className="IconBox left">
                    <div className="imageIcon">
                      {" "}
                      <img alt="image" src={serv1}></img>
                    </div>
                    <h3 className="TitleIcon">Safe & Effective</h3>
                    <p className="DescriptionIcon">
                      Maecenas vel nibh aliquet lectus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stepProcess">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="NumberBox">
                <div className="number-Text">
                  <div>
                    <h4> 1 </h4>
                    <div className="TextContainer">
                      <h3>Sign up for free</h3>
                      <p>
                        Nam rhoncus nisl purus, ac lobortisamet dapibus
                        malesuada
                      </p>
                    </div>
                  </div>
                  <a className="theme-btn-one">Know more</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="NumberBox">
                <div className="number-Text">
                <div>
                    <h4> 2 </h4>
                    <div className="TextContainer">
                      <h3>Sign up for free</h3>
                      <p>
                        Nam rhoncus nisl purus, ac lobortisamet dapibus
                        malesuada
                      </p>
                    </div>
                  </div>
                  <a className="theme-btn-one">Know more</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="NumberBox">
                <div className="number-Text">
                <div>
                    <h4> 3 </h4>
                    <div className="TextContainer">
                      <h3>Sign up for free</h3>
                      <p>
                        Nam rhoncus nisl purus, ac lobortisamet dapibus
                        malesuada
                      </p>
                    </div>
                  </div>
                  <a className="theme-btn-one">Know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
