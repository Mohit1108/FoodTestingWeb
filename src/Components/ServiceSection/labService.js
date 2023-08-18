import React from "react";
import Card from "../Global/card";
import serv1 from "../../Images/flask.png"
import serv2 from "../../Images/flask-2.png"
import serv3 from "../../Images/lab.png"
import serv4 from "../../Images/innovation.png"
const servicesData = [
  {
    id: 1,
    title: "FSSAI APPROVED TESTING LAB",
    description: "We create beautiful and responsive websites.",
    image: serv1,
    link:"#",
  },
  {
    id: 2,
    title: "Calibration & Research Division",
    description: "Our designers craft stunning visuals for your brand.",
    image: serv2,    link:"#",

  },


  {
    id: 3,
    title: "PROFICIENCY TESTING LAB ",
    description: "We create beautiful and responsive websites.",
    image: serv3,    link:"#",

  },

  {
    id: 4,
    title: "Research & Development ",
    description: "We create beautiful and responsive websites.",
    image: serv4,    link:"#",

  },
  // Add more service objects as needed
];

export default function LabService() {
  return (
    <section className="service-section">
      <div className="container">
        <div className="patterns">
          <div className="pattern-1"></div> <div className="pattern-2"></div>
        </div>
        <div className="heading-container">
          <h6 className="subTitle">SERVING WIDE RANGE OF SERVICES</h6>
          <h2 className="Titleheading">
          BEST OF TESTING SERVICES AT FARELABS

          </h2>
        </div>
        <div className="serviceCards mt-5">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
