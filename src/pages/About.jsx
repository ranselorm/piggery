import aboutImg from "../assets/img/about/icons/aboutImg.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140] lg:pb-[180px] text-black">
      <div className="px-[20px] lg:px-[135px]">
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-x-8 mt-[100px]">
          {/* image */}
          <div className="w-[400px] h-[520px] flex-1 mb-10 lg:mb-0">
            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          {/* text */}
          <div className="flex-1 md:text-[16px] mb-6 text-justify">
            <h2 className="font-bold text-[30px]">About Us</h2>
            <div className="bg-primary-200 h-[5px] w-[100px] mb-4"></div>
            Welcome to <strong>SG AFRIKA FARMS</strong>, your go-to destination
            for premium pork products! At SG AFRIKA FARMS, we take immense pride
            in raising healthy and happy pigs in a sustainable and ethical
            environment. <br />
            <br /> From piglets to market-ready hogs, we meticulously oversee
            every aspect of their growth and nutrition, guaranteeing the finest
            quality meat for our valued customers. <br />
            <br /> Whether you're a passionate food enthusiast or a culinary
            professional seeking the best ingredients, SG AFRIKA FARMS is your
            trusted source for superior pork products. <br />
            <br />
            Thank you for choosing SG AFRIKA FARMS. We look forward to serving
            you and being a part of your delightful dining experiences.
            <Link to="/contact">
              <button className="btn btn-sm lg:btn-lg btn-secondary rounded-[50px] hover:bg-neutral-500 hover:text-white transition-all duration-300 mt-10 hidden lg:flex">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
