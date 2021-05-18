import React from "react";
import { Fade } from "react-slideshow-image";

import "./Carousel.scss";

const slideImages = [
  "https://www.sneakers-actus.fr/wp-content/uploads/2020/03/Nike-Air-Max-1-City-LDN-London-2020-CV1639-001-on-feet.jpg",
  "https://i.pinimg.com/originals/99/69/7e/99697e05c33522dd8f8a2ab382e1b87b.jpg",
  "https://www.sneakers-actus.fr/wp-content/uploads/2018/05/Nike-Air-Max-1-Wolf-Grey-2018-on-feet.jpg",
];

const Carousel = () => {
  return (
    <>
      <div className="slider">
        <Fade easing="ease">
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[0]})` }}
              className="img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[2]})` }}
              className="img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[3]})` }}
              className="img"
            ></div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Carousel;
