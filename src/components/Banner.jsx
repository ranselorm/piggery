import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="h-[70vh] lg:h-[100vh] bg-banner bg-cover bg-center bg-no-repeat">
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          {/* text */}
          <div className="text-white flex flex-col items-center justify-center text-center backdrop-brightness-[.10] w-screen h-full">
            <h1
              className="h1 text-white mb-8"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              SG AFRIKA FARMS <br />
            </h1>
            <p
              className="text-2xl lg:text-4xl leading-[30px] mb-10"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              From farm to fork, pigs with perfection. <br />
              <span className="text-xl lg:text-2xl hidden justify-center lg:flex mt-2 text-gray-400">
                -where quality pork thrives!
              </span>
            </p>
            <Link to={`/about`}>
              <button
                className="btn btn-sm lg:btn-lg btn-secondary"
                data-aos="fade-down"
                data-aos-delay="700"
              >
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="fixed  bg-banner bg-no-repeat bg-cover brightness-[.20]"></div> */}
    </div>
  );
};

export default Banner;
