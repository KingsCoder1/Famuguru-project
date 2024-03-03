import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fan_A from "../Famuguru Project/B_with_fan.jpg";
import Fan_B from "../Famuguru Project/B_with_fan2.jpg";
import Fan_C from "../Famuguru Project/B_with_fan3.jpg";
import Outfit_1 from "../Famuguru Project/outfit1.jpg";
import Outfit_2 from "../Famuguru Project/outfit2.jpg";
import Outfit_3 from "../Famuguru Project/outfit3.jpg";
import Outfit_4 from "../Famuguru Project/outfit4.jpg";
import Outfit_5 from "../Famuguru Project/outfit5.jpg";
import Outfit_6 from "../Famuguru Project/outfit6.jpg";

const Tailoring = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 9,
    slideToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Fan_A} alt="Slide A" />
      </div>
      <div>
        <img src={Fan_B} alt="Slide B" />
      </div>
      <div>
        <img src={Fan_C} alt="Slide C" />
      </div>
      <div>
        <img src={Outfit_1} alt="Slide D" />
      </div>
      <div>
        <img src={Outfit_2} alt="Slide E" />
      </div>
      <div>
        <img src={Outfit_3} alt="Slide F" />
      </div>
      <div>
        <img src={Outfit_4} alt="Slide G" />
      </div>
      <div>
        <img src={Outfit_5} alt="Slide H" />
      </div>
      <div>
        <img src={Outfit_6} alt="Slide I" />
      </div>
    </Slider>
  );
};

export default Tailoring;
