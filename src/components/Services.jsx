import { about } from "../data";
import { MdMiscellaneousServices, MdOutlineSell } from "react-icons/md";
import { LuPiggyBank } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";

const Services = () => {
  const { title, icon } = about;
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140] lg:pb-[180px]">
      <div className=" px-[20px] lg:px-[135px]">
        <div
          className="section-title-group justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <MdMiscellaneousServices className="text-[100px] opacity-25" />
          <h2 className="h2 section-title">
            Services <span className="text-[#87CEEB]">.</span>
          </h2>
        </div>

        {/* wrapper */}
        <div className="grid grid-rows-3 lg:grid-cols-3 gap-6 justify-center items-center lg:px-[70px] px-0">
          <div className="w-[370px] lg:w-[300px] h-[330px] rounded-lg px-[30px] flex flex-col justify-center items-start gap-y-4 lg:shadow-xl shadow-lg">
            <MdOutlineSell className="text-[40px] text-[#87CEEB] font-bold" />
            <h5 className="font-bold text-[20px]"> Piglet Sales</h5>
            <p>
              We sell piglets to farmers who are looking to raise them for meat
              production or to individuals interested in raising pigs as pets.
            </p>
          </div>
          <div className="w-[370px] lg:w-[300px] h-[330px] rounded-lg px-[30px] flex flex-col justify-center items-start gap-y-4 lg:shadow-xl shadow-lg">
            <LuPiggyBank className="text-[40px] text-[#87CEEB]  font-bold" />
            <h5 className="font-bold text-[20px]">Breeding</h5>
            <p>
              We offer high-quality breeding stock to people who wish to improve
              the genetics and productivity of their herds.
            </p>
          </div>
          <div className="w-[370px] lg:w-[300px] h-[330px] rounded-lg px-[30px] flex flex-col justify-center items-start gap-y-4 lg:shadow-xl shadow-lg">
            <BsPeopleFill className="text-[40px] text-[#87CEEB]  font-bold" />
            <h5 className="font-bold text-[20px]">Consultation & Training</h5>
            <p>
              We offer consulting services and training to new or aspiring pig
              farmers, providing guidance on best practices, management, and
              problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
