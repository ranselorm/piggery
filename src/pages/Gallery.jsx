import { useState } from "react";
import ImageModal from "../components/ImageModal";
import {
  BiSolidChevronLeftSquare,
  BiSolidChevronRightSquare,
} from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const images = [
  {
    text: "hello",
    link: require("../images/p2.jpeg"),
  },

  {
    text: "Description of image is here image2",
    link: require("../images/p3.jpeg"),
  },
  {
    text: "Description of image is here image3",
    link: require("../images/p4.jpeg"),
  },
  {
    text: "Description of image is here image3",
    link: require("../images/p5.jpeg"),
  },
  {
    text: "Description of image is here image3",
    link: require("../images/p6.jpeg"),
  },
  {
    text: "Description of image is here image3",
    link: require("../images/p7.jpeg"),
  },
  {
    text: "Description of image is here image3",
    link: require("../images/p8.jpeg"),
  },
  {
    text: "Description of image is here image3",
    link: require("../images/p9.jpeg"),
  },
];

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal(itemIndex) {
    setSlideNumber(itemIndex);
    setIsOpen(true);
  }

  function prevSlide() {
    if (slideNumber === 0) {
      setSlideNumber(images.length - 1);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  }
  function nextSlide() {
    if (slideNumber + 1 === images.length) {
      setSlideNumber(0);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  }

  const handleClick = (e) => {
    if (e.target.id === "dismiss") {
      setIsOpen(false);
    }
  };

  return (
    <section className="mt-[60px] h-max-content  my-[200px]">
      <article className="bg-pg bg-cover bg-center w-full h-[40vh] mb-[100px]">
        <div className="flex flex-col items-center justify-center text-center backdrop-brightness-[.10] w-full h-full">
          <h2 className="text-primary-200 text-3xl mb-4 font-semibold">
            Gallery
          </h2>
          <p className="text-white">
            We take pride in showcasing the vibrant and thriving world of pig
            farming!
          </p>
        </div>
      </article>
      {isOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/95 flex items-center justify-center w-full h-full"
          id="dismiss"
          onClick={handleClick}
        >
          <div className="w-[1000px] h-[500px] flex items-center justify-center relative transition-all duration-300">
            <img
              src={images[slideNumber].link}
              alt=""
              className="w-full h-full object-contain"
            />
            <AiOutlineCloseCircle
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 text-2xl z-50 cursor-pointer hover:text-gray-600 hidden md:flex  transition-all duration-300 text-white"
            />
            <BiSolidChevronLeftSquare
              onClick={prevSlide}
              className="text-2xl top-2/4 transform -translate-y-2/4 left-0 absolute text-white cursor-pointer hidden md:flex hover:text-gray-600 transition-all duration-300"
            />
            <BiSolidChevronRightSquare
              onClick={nextSlide}
              className="top-2/4 transform -translate-y-2/4 right-10 text-2xl text-white cursor-pointer hidden md:flex hover:text-gray-600 transition-all duration-300"
            />
          </div>
        </div>
      )}
      {/* gallerywrapper */}
      <div className="grid lg:grid-cols-4 gap-6 items-center justify-center container mx-auto">
        {images.map((image, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className="w-[380px] lg:w-[250px] h-[380px] lg:h-[250px] overflow-hidden rounded cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => handleOpenModal(itemIndex)}
            >
              <img
                src={image.link}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
