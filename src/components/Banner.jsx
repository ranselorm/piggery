import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="h-[100vh] bg-banner bg-cover bg-center bg-no-repeat">
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          {/* text */}
          <div className="text-white flex flex-col items-center justify-center text-center backdrop-brightness-[.20] w-screen h-screen pt-[100px]">
            <h1
              className="h1 text-white mb-8"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              SG AFRIKA FARMS <br />
            </h1>
            <p
              className="text-2xl lg:text-4xl leading-[30px] mb-10"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              From farm to fork, pigs with perfection. <br />
              <span className="text-xl lg:text-2xl hidden justify-center lg:flex mt-2 text-gray-400">
                -where quality pork thrives!
              </span>
            </p>
            {/* <Link href="#">
              <button className="btn btn-sm lg:btn-lg btn-secondary">
                About us
              </button>
            </Link> */}
            <BsArrowDownCircle className="mt-[100px] text-primary-200 animate-bounce lg:text-[40px] text-[50px]" />
          </div>
        </div>
      </div>
      {/* <div className="fixed  bg-banner bg-no-repeat bg-cover brightness-[.20]"></div> */}
    </div>
  );
};

export default Banner;
