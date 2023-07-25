import { AiOutlineCloseSquare } from "react-icons/ai";
const ImageModal = ({ clickedImg, setClickedImg, handleRotationRight }) => {
  const handleClick = (e) => {
    if (e.target.id === "dismiss") {
      setClickedImg(null);
    }
  };
  return (
    <>
      {/* overlay && dismiss wrapper */}
      <section
        className="absolute inset-0 hidden items-center justify-center bg-black/90 w-full h-full"
        onClick={handleClick}
        id="dismiss"
      >
        <div className="relative w-[30%] h-[30%] mx-auto">
          <div className="">
            <img
              src={clickedImg}
              alt="bigger picture"
              className="rounded-md w-full h-full object-cover"
            />
            <span
              onClick={handleClick}
              className="absolute text-white text-3xl top-2 right-4 cursor-pointer"
              id="dismiss"
            >
              <AiOutlineCloseSquare />
            </span>
            <div className="absolute" onClick={handleRotationRight}>
              right
            </div>
            <div className="absolute" onClick={handleRotationRight}>
              right
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageModal;
