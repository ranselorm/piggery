import aboutImg from "../assets/img/about/icons/aboutImg.jpeg";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140] lg:pb-[180px]">
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
    </section>
  );
};

export default Info;
