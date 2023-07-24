import { Link } from "react-router-dom";
import { AiOutlineMobile } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

const Contact = () => {
  return (
    <section className="h-screen text-white mt-[60px] mb-[280px] lg:mb-[80px]">
      <div className="bg-chose bg-cover bg-center w-full h-[40vh]">
        <div className="flex flex-col items-center justify-center text-center backdrop-brightness-[.10] w-full h-full">
          <h2 className="text-primary-200 text-4xl mb-4 font-semibold">
            Contact Us
          </h2>
          <p className="text-white">
            Ready to take your piggery to new heights? We're here to help! Get
            in touch with us!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-[150px]">
        <div className="flex items-center flex-col">
          {/* wrapper */}
          <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-x-0 gap-y-10 lg:gap-y-0 grid-rows-3">
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
