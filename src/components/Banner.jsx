import { useRef } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="bg-banner bg-no-repeat bg-center mb-[100px]">
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          {/* text */}
          <div className="text-white flex flex-col items-center justify-center text-center backdrop-brightness-[.20] w-screen h-[70vh] lg:h-screen pt-[100px] ">
            <h1
              className="mb-8 text-3xl text-primary-200 font-black"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Welcome to SG AFRIKA FARMS
              <br />
            </h1>
            <p
              className="text-2xl lg:text-6xl leading-[30px] mb-10"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              From farm to fork, pigs
              <br /> with perfection. <br />
              <span className="text-[16px] leading-[10px]">
                Where quality pork thrives!
              </span>
            </p>
            <Link to="/about">
              <button
                className="btn btn-sm lg:btn-lg border border-primary-200 rounded-[50px] hover:bg-primary-200 hover:text-black transition-all duration-300"
                onClick={handleClick}
              >
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
