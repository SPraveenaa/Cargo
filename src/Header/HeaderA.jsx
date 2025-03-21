import React from 'react';
import { Carousel } from 'antd';
import './HeaderA.css';

const HeaderA = () => {
  return (
    <div className="header-container">
      {/* Left Section */}
      <div className="header-text">
        <h3>LOGISTIC</h3>
        <h1>Best Shipping</h1>
        <h1>Partner</h1>
        <p>
          At Cargo Solutions, we provide reliable and efficient shipping services that ensure your goods arrive on time.
          Our team is dedicated to delivering tailored logistics solutions to meet your unique needs. With a global reach
          and a commitment to excellence, we help businesses thrive in today’s fast-paced world.
        </p>
        <button className="header-button">Learn More</button>
      </div>

      {/* Right Section - Image Slider */}
      <div className="header-slider">
        <Carousel autoplay autoplaySpeed={2000}>
          <div>
            <img
              src="/img01.jpg"
              alt="Slide 1"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="/img02.jpg"
              alt="Slide 2"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="/img03.jpg"
              alt="Slide 3"
              className="slider-image"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeaderA;
