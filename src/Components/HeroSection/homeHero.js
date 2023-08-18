import React, { useState, useEffect } from "react";
import DocImage from "../../Images/imageDoc.png";
import DocImage2 from "../../Images/doc2.png";

export default function HomeHero() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides = [
    {
      heading: "We'll Ensure You Always Get The Best Results.",
      text: "Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit..",
      url: "/service",
      urlContact: "/contact-us",
      image: DocImage,
    },
    {
      heading: "Reliable & High-Quality Laboratory Service",
      text: "quasi architebeat vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptassit..",
      url: "/service",
      urlContact: "/contact-us",
      image: DocImage2,
    },

  ];

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsAnimating(false);
    }, 500); // Duration of the fade-up animation
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="HomeBanner">
      <div className= {`carousel-container content-box ${isAnimating ? 'animating' : ''}`} >
        <div className="carousel-content text ">
          <h2>{slides[currentSlide].heading}</h2>
          <p className="pb-3">{slides[currentSlide].text}</p>
          <div className="d-flex gap-4">
          <a className="theme-btn-one" href={slides[currentSlide].url}>
            Our Service
          </a>
          <a className="HomeContactBTN" href={slides[currentSlide].urlContact}>
            Contact us
          </a>
          </div>

        </div>
        <div className="carousel-image">
        <div className= "shape rotate-me"></div>
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
          <div className= "shape-2 rotate-me"></div>

        </div>
      </div>
    </section>
  );
}
