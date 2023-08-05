import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const images = [
  {
    text1: "From farm to fork, pigs with perfection",
    // text1: "From Sow to Swine, Our Piggery Shines!",
    text2: "-where Quality Breeds of Pigs Thrive!",
    link: require("../images/pig.jpg"),
  },
  // {
  //   text1: "From farm to fork, pigs with perfection",
  //   text2: "-where Quality Breeds of Pigs Thrive!",
  //   link: require("../images/bg.jpg"),
  // },
  {
    text1: "Swine Adventures at Our Piggery",
    text2: "-where Quality Breeds of Pigs Thrive!",
    link: require("../images/pigs.jpg"),
  },
];

const HeroSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: false,
  };

  return (
    <Slider {...sliderSettings} className="">
      {images.map((image) => {
        return (
          <>
            <div className="w-full h-[70vh] md:h-[100vh] relative">
              <img
                src={image.link}
                alt={image.text1}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col mt-[100px]">
                <h1 className="mb-8 text-2xl text-primary-200 font-black text-body-md">
                  Welcome to SG AFRIKA FARMS
                  <br />
                </h1>
                <p className="text-2xl lg:text-6xl leading-[30px] mb-4 text-white text-center w-[80%] md:w-[50%]">
                  {image.text1}
                </p>
                <p className="text-[16px] w-[50%] text-center text-white">
                  {image.text2}
                </p>
                <Link to="/about" className="mt-10">
                  <button className="btn btn-sm lg:btn-lg border border-primary-200 rounded-[50px] hover:bg-primary-200 hover:text-black transition-all duration-300 text-white">
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default HeroSlider;
