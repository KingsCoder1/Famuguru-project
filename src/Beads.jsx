import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bead_1 from "../Famuguru Project/Bead1.jpg";
import Bead_2 from "../Famuguru Project/Bead2.jpg";
import Bead_3 from "../Famuguru Project/Bead3.jpg";
import Bead_4 from "../Famuguru Project/Bead4.jpg";
import Bead_5 from "../Famuguru Project/Bead5.jpg";
import Bead_6 from "../Famuguru Project/Bead6.jpg";
import Bead_7 from "../Famuguru Project/Bead7.jpg";
import Bead_8 from "../Famuguru Project/Bead8.jpg";
import Bead_9 from "../Famuguru Project/Bead9.jpg";

const Beads = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 3,
    slideToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Bead_1} alt="Slide 1" />
      </div>
      <div>
        <img src={Bead_2} alt="Slide 2" />
      </div>
      <div>
        <img src={Bead_3} alt="Slide 3" />
      </div>
      <div>
        <img src={Bead_4} alt="Slide 4" />
      </div>
      <div>
        <img src={Bead_5} alt="Slide 5" />
      </div>
      <div>
        <img src={Bead_6} alt="Slide 6" />
      </div>
      <div>
        <img src={Bead_7} alt="Slide 7" />
      </div>
      <div>
        <img src={Bead_8} alt="Slide 8" />
      </div>
      <div>
        <img src={Bead_9} alt="Slide 9" />
      </div>
    </Slider>
  );
};

export default Beads;
