import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gown_A from '../Famuguru Project/Wedding_gown.jpg';
import Gown_B from '../Famuguru Project/Wedding_gown2.jpg';
import Gown_C from '../Famuguru Project/Wedding_gown3.jpg';

const Rental = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slideToShow: 3,
        slideToScroll: 1,
        
    }

  return (
    <Slider {...settings}>
        <div>
            <img src={Gown_A} alt="Slide A" />
        </div>
        <div>
            <img src={Gown_B} alt="Slide B" />
        </div>
        <div>
            <img src={Gown_C} alt="Slide C" />
        </div>
    </Slider>
  )
}

export default Rental