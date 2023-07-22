import { Link } from "react-router-dom";
import { AiOutlineMobile } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

const Contact = () => {
  return (
    <section className="h-screen text-white flex items-center justify-center mb-[80px] lg:mb-0">
      <div className="w-[80%] flex justify-center items-center lg:pt-[400px] pt-[250px]">
        <div className="flex items-center flex-col">
          <h2 className="h2 font-bold">Contact Us</h2>
          {/* wrapper */}
          <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-x-0 gap-y-10 lg:gap-y-0 grid-rows-3 lg:mt-[80px] mt-[50px]">
            {/* content wrapper */}
            <div className="flex flex-col justify-center items-center gap-y-4 w-[300px]">
              <AiOutlineMobile className="text-primary-200 font-bold text-4xl" />
              <h4 className="font-bold text-2xl">Phone</h4>
              <span className="text-black">020 246 9191</span>
              <span className="text-black">055 252 5442</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4 w-[300px]">
              <CiLocationOn className="text-primary-200 font-bold text-4xl" />
              <h4 className="font-bold text-2xl">Location</h4>
              <span className="text-black">Pokrom</span>
              <span className="text-black">Eastern Region</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4 w-[300px]">
              <SlSocialInstagram className="text-primary-200 font-bold text-4xl" />
              <h4 className="font-bold text-2xl">Social Media</h4>
              <Link to="#">
                <span className="text-black">Instagram</span>
              </Link>
              <Link to="#">
                <span className="text-black">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
