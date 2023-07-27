import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Feed from "../images/feed.jpeg";
import Breed from "../images/breed.jpg";
import Infac from "../images/infac.jpg";
import Acad from "../images/acad.jpg";

const Consultation = () => {
  return (
    <main className="py-[80px] h-max-content ">
      <div className="mb-[100px]">
        <section className="bg-consult bg-cover bg-center w-full h-[40vh]">
          <div className="flex flex-col items-center justify-center text-center backdrop-brightness-[.10] w-full h-full">
            <h2 className="text-primary-200 text-3xl mb-4 font-semibold">
              Consultation & Training
            </h2>
            <p className="text-white">
              We offer expert guidance, support and training for optimal pig
              farming practices.
            </p>
          </div>
        </section>
        <article className="container mx-auto px-4 lg:px-0 mt-10">
          <h2 className="text-[20px] lg:text-[30px]">
            We consult and we train
          </h2>

          <div>
            <p className="my-4 text-black">
              Welcome to our piggery consultation services! Our team of
              experienced experts is dedicated to providing tailored guidance
              and solutions for your pig farming needs.
            </p>
            <p className="my-4 text-black">
              Whether you're starting a new piggery or looking to improve
              existing operations, we offer valuable insights on farm setup,
              nutrition, health management, and market strategies. Let us
              partner with you to maximize productivity and ensure the success
              of your piggery. Together, we'll achieve excellence in pig farming
              and drive your business forward.
            </p>
          </div>
          <hr className="my-[50px]" />
        </article>
        <div className="container mx-auto px-2 lg:px-0 grid lg:grid-cols-2  grid-rows-2 items-start gap-x-10 gap-y-10">
          <section className="mt-10 rounded-lg" id="section1 overflow-hidden">
            <div className="w-full h-full rounded-lg">
              <img src={Feed} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-black text-[18px] my-5 font-black uppercase">
              Consult on feed formation
            </h2>
            <p className="text-black">
              Our feed formulation consultation for piggery aims to optimize the
              nutrition and growth of your pigs, leading to healthier and more
              productive herds. Our experienced consultants will work closely
              with you to develop customized feed formulations tailored to the
              specific needs and goals of your piggery operation.
            </p>
          </section>
          <section className="mt-10 rounded-lg" id="section1 overflow-hidden">
            <div className="w-full h-full rounded-lg">
              <img src={Breed} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-black text-[18px] my-5 font-black uppercase">
              Consult on breeding program
            </h2>
            <p className="text-black">
              Our breeding program consultation for your piggery aims to
              optimize the genetic potential of your herd and improve overall
              productivity and performance. Our experienced consultants will
              work closely with you to develop a tailored breeding strategy
              based on your specific goals and objectives.
            </p>
          </section>
          <section className="mt-10 rounded-lg" id="section1 overflow-hidden">
            <div className="w-full h-full rounded-lg">
              <img src={Infac} alt="" className="w-full h-full" />
            </div>
            <h2 className="text-black text-[18px] my-5 font-black uppercase">
              Consult on Infacstructure building
            </h2>
            <p className="text-black">
              Our infrastructure building consultation for your piggery focuses
              on creating a well-designed and efficient farm layout to support
              the growth and success of your pig farming operation. Our
              experienced consultants will work closely with you to develop a
              comprehensive infrastructure plan that meets your specific needs
              and objectives.
            </p>
          </section>
          <section className="mt-10 rounded-lg" id="section1 overflow-hidden">
            <div className="w-full h-[350px] rounded-lg">
              <img src={Acad} alt="" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-black text-[18px] my-5 font-black uppercase">
              Pigs Academy
            </h2>
            <p className="text-black">
              Welcome to the Pigs Academy of our piggery! At Pigs Academy, we
              are committed to providing comprehensive training and education
              for pig farmers and enthusiasts. Our academy is dedicated to
              equipping you with the knowledge and skills needed to excel in pig
              farming and ensure the well-being of your pigs.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Consultation;
