import React from 'react'

export default function Card({ image, title, description, link })  {
  return (
    <div className="myCard">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description pb-4">{description}</p>
      <a className="theme-btn-two" href={link} >Read More</a>
    </div>
  )
}
