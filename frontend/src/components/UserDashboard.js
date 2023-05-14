import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import Mycss from "../css/Mycss.css";

const data = [
  {
    image: require("../images/image3.jpeg"),

    caption: "Indian Passport",
  },

  {
    image: require("../images/image3.jpeg"),

    caption: "Indian Passport",
  },

  {
    image: require("../images/image3.jpeg"),

    caption: "Indian Passport",
  },
];

const UserDashboard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="col main  mt-3">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />

              <Carousel.Caption>
                <h3>{slide.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default UserDashboard;
