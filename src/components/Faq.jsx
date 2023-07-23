import { faq } from "../data";
import Accordion from "./Accordion";

const Faq = () => {
  const { icon, title, accordions } = faq;

  return (
    <section className="section mt-[5px] lg:-mt-[120px] bg-slate-100 py-[50px] mb-[100px] ">
      <div className="max-w-[768px] mx-auto">
        <div className="section-title-group justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0 lg:-mt-[100px] -mt-0">
          <img src={icon} alt="faq" className="lg:hidden" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div
          className="flex flex-col gap-y-6"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
