import { faq } from "../data";
import Accordion from "./Accordion";

const Faq = () => {
  const { icon, accordions } = faq;

  return (
    <section className="section py-[50px] mb-[100px] ">
      <div className="max-w-[768px] mx-auto">
        <div className="section-title-group justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0 lg:-mt-[100px] -mt-0">
          <img src={icon} alt="faq" className="lg:hidden" />
          <h2 className="section-title lg:mt-[100px] text-[20px] lg:text-[30px]">
            FAQ
          </h2>
        </div>
        <div className="flex flex-col gap-y-6">
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
