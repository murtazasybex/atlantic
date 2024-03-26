import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partnerLogos } from "../../constants";

const Client = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <section className="bg-[#212529] relative">
        <div className="container mx-auto md:px-10 px-8 py-14">
          <Slider ref={sliderRef} {...settings}>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="mx-2">
                <img
                  src={logo}
                  className="img-invert hover-transition"
                  alt={`Partner Logo ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Client;
