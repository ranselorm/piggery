import { useState } from "react";
// import { images } from "../images";
import ImageModal from "../components/ImageModal";

export const images = [
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
  const [clickedImg, setClickedImg] = useState(null);
  const [index, setIndex] = useState(0);

  const handleClick = (item, itemIndex) => {
    setIndex(itemIndex);
    setClickedImg(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = images.data.length;
    if (index + 1 >= totalLength) {
      setIndex(0);
      const newUrl = images.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = index + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setIndex(newIndex);
  };

  return (
    <section className="mt-[60px] relative my-[100px]">
      <div className="bg-pg bg-cover bg-center w-full h-[40vh] mb-[50px]">
        <div className="flex flex-col items-center justify-center text-center backdrop-brightness-[.10] w-full h-full">
          <h2 className="text-primary-200 text-3xl mb-4 font-semibold">
            Gallery
          </h2>
          <p className="text-white">
            Welcome to our Piggery Gallery, where you can catch a glimpse of our
            farm life in action.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 items-center justify-center container mx-auto">
        {images.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="w-[380px] lg:w-[250px] h-[500px] lg:h-[300px] overflow-hidden rounded"
          >
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, itemIndex)}
              className="cursor-pointer w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {clickedImg && (
        <ImageModal
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handleRotationRight={handleRotationRight}
        />
      )}
    </section>
  );
};

export default Gallery;
