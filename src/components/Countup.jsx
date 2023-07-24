import CountUp from "react-countup";
import { AiOutlineLike } from "react-icons/ai";
import { GiPig } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";

import { BiCalendarStar } from "react-icons/bi";

const Countup = () => {
  return (
    <section className="bg-blue-100 h-[150vh] lg:h-[50vh] w-full mt-[200px] flex items-center">
      <div className="w-full mx-auto h-full flex justify-center items-center flex-col lg:flex-row gap-[80px] lg:gap-[150px]">
        {/* wrapper */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
            <AiOutlineLike className="text-[50px] text-primary-200" />
          </div>
          <h2 className="text-5xl my-6 font-bold">500+</h2>
          <p className="text-black text-xl">Satisfied Customers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
            <IoMdPeople className="text-[50px] text-primary-200" />
          </div>
          <h2 className="text-5xl my-6 font-bold">80+</h2>
          <p className="text-black text-xl">Expert Staffs</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
            <GiPig className="text-[50px] text-primary-200" />
          </div>
          <h2 className="text-5xl my-6 font-bold">1500+</h2>
          <p className="text-black text-xl">Total Pigs</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
            <BiCalendarStar className="text-[50px] text-primary-200" />
          </div>
          <h2 className="text-5xl my-6 font-bold">5+</h2>
          <p className="text-black text-xl">Years of Operating</p>
        </div>
      </div>
    </section>
  );
};

export default Countup;
