import { BsPersonCheckFill } from "react-icons/bs";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Info = () => {
  return (
    <section className="py-[80px] lg:h-[175vh]">
      <div className="bg-chose bg-cover bg-center w-full h-[40vh]">
        <div className="flex flex-col items-center justify-center text-center backdrop-brightness-[.10] w-full h-full">
          <h2 className="text-primary-200 text-3xl mb-4 font-semibold">
            SG AFRIKA FARMS
          </h2>
          <p className="text-white">
            We take pride in what we do, and our dedication shines through in
            every aspect of our piggery operations.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-0 mt-10">
        <div className="">
          <h2 className="text-[20px] lg:text-[30px]">Why Choose Us</h2>
          <div>
            <p className="my-4 text-black">
              <span className="font-semibold"> SamGyi Afrika Farms</span> is
              committed to providing farmers with genetically superior pigs,
              enabling them to optimize their profits while delivering
              high-quality meat to their esteemed customers. Each farm
              implements its own breeding program, utilizing specific maternal
              and paternal pure or mixed breeds.
            </p>
            <p className="my-4 text-black">
              We strongly advise you to ascertain the nature of your farm's
              breeding program prior to purchasing any of our pigs. In the event
              that you do not have an established program, we are available to
              engage in a discussion and provide appropriate guidance.
            </p>
          </div>
        </div>
        <hr className="my-[50px]" />
        {/* wrapper */}
        <div className="grid lg:grid-cols-2 grid-rows-4 gap-x-6 gap-y-10 ">
          <div
            className="flex items-start justify-center gap-x-4 flex-1"
            id="test"
          >
            <div>
              <BsPersonCheckFill className="text-3xl text-primary-200" />
            </div>
            <div className="flex flex-col items-start justify-start gap-y-4">
              <h2 className="text-black text-[18px] font-semibold">
                Expertise and Experience
              </h2>
              <p className="text-black">
                With years of experience in pig farming, we possess the
                expertise needed to ensure the success of your piggery. Our
                knowledgeable team has honed their skills in all aspects of
                swine management, from breeding to nutrition.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 flex-1 ">
            <div>
              <AiOutlineCheckSquare className="text-3xl text-primary-200" />
            </div>
            <div className="flex flex-col items-start justify-start gap-y-4">
              <h2 className="text-black text-[18px] font-semibold">
                Quality Assurance
              </h2>
              <p className="text-black">
                We prioritize quality in everything we do. From carefully
                selecting superior pig breeds to implementing stringent health
                and hygiene protocols, we maintain the highest standards to
                produce top-quality pork products.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 flex-1 ">
            <div>
              <MdOutlineHealthAndSafety className="text-3xl text-primary-200" />
            </div>
            <div className="flex flex-col items-start justify-start gap-y-4">
              <h2 className="text-black text-[18px] font-semibold">
                Animal Welfare
              </h2>
              <p className="text-black">
                At our piggery, the well-being of our pigs is our top priority.
                We follow ethical practices, providing a safe and comfortable
                environment that meets the physical and emotional needs of the
                animals.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 flex-1 ">
            <div>
              <BsPersonCheckFill className="text-3xl text-primary-200" />
            </div>
            <div className="flex flex-col items-start justify-start gap-y-4">
              <h2 className="text-black text-[18px] font-semibold">
                Expertise and Experience
              </h2>
              <p className="text-black">
                With years of experience in pig farming, we possess the
                expertise needed to ensure the success of your piggery. Our
                knowledgeable team has honed their skills in all aspects of
                swine management, from breeding to nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
