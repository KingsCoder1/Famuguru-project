import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shoe_1 from "../Famuguru Project/Heels1.jpg";
import Shoe_2 from "../Famuguru Project/Heels2.jpeg";
import Shoe_3 from "../Famuguru Project/Heels3.jpeg";
import Shoe_4 from "../Famuguru Project/Heels4.jpeg";
import Shoe_5 from "../Famuguru Project/Heels5.jpeg";
import Bag_1 from "../Famuguru Project/Bag1.jpeg";
import Bag_2 from "../Famuguru Project/Bag2.jpeg";
import Bag_3 from "../Famuguru Project/Bag3.jpeg";
import Bag_4 from "../Famuguru Project/Bag4.jpeg";

const Shoes_and_handbags = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 3,
    slideToScroll: 1,
  };

  return (
    <Slider>
      <div>
        <img src={Shoe_1} alt="Slide 1" />
      </div>
      <div>
        <img src={Bag_1} alt="Slide 2" />
      </div>
      <div>
        <img src={Shoe_2} alt="Slide 3" />
      </div>
      <div>
        <img src={Bag_2} alt="Slide 4" />
      </div>
      <div>
        <img src={Shoe_3} alt="Slide 5" />
      </div>
      <div>
        <img src={Bag_3} alt="Slide 6" />
      </div>
      <div>
        <img src={Shoe_4} alt="Slide 7" />
      </div>
      <div>
        <img src={Bag_4} alt="Slide 8" />
      </div>
      <div>
        <img src={Shoe_5} alt="Slide 9" />
      </div>
    </Slider>
  );
};

export default Shoes_and_handbags;
