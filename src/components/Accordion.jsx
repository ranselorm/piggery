import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer } = accordion;
  return (
    <div className="cursor-pointer">
      <div className="border bg-white rounded-sm">
        <div
          className="min-h-[45px] flex items-center justify-between px-[15px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h6 className="text-[16px] font-semibold">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-neutral-500 text-[20px]" />
            ) : (
              <FaChevronCircleDown className="text-neutral-500 text-[20px]" />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <h6 className="mt-4">{answer}</h6>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
