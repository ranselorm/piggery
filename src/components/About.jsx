import aboutImg from "../assets/img/about/icons/aboutImg.jpeg";

const About = () => {
  return (
    <section
      className="py-[80px] md:py-[110px] lg:pt-[140] lg:pb-[180px]"
      id="about"
    >
      <div className=" px-[20px] lg:px-[135px]">
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-x-8 mt-[100px]">
          {/* image */}
          <div className="w-[400px] h-[520px] flex-1 mb-10 lg:mb-0">
            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-contain rounded-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            />
          </div>
          {/* text */}
          <div
            className="flex-1 md:text-[16px] mb-6 text-justify"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h2 className="font-bold text-[30px] mb-4">About Us</h2>
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
            We invite you to explore our diverse range of cuts and experience
            the difference that comes from our dedication to excellence. Thank
            you for choosing SG AFRIKA FARMS. We look forward to serving you and
            being a part of your delightful dining experiences.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
