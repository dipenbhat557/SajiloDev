import { useState } from "react";
import { styles } from "../styles";
import { faqBg, faqLight } from "../assets";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { faqs } from "../constants";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className={`${styles.padding} w-full bg-[#1F2123] `}>
      {/* <div className="flex justify-center"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-white ">
        <motion.div
          variants={slideIn("left", "spring", 0.6, 1.4)}
          className="w-[95%] pl-8 px-6 h-auto"
        >
          <div
            className={`${styles.sectionHeadText} tracking-wider font-medium flex flex-wrap pb-7`}
          >
            <p className="w-full">FREQUENTLY </p>
            <p>ASKED</p>&nbsp;&nbsp;
            <p className="text-[#03dffc]">QUESTIONS</p>
          </div>
          <div
            style={{ backgroundImage: `url(${faqLight})` }}
            className=" sm:max-w-4xl w-auto sm:mx-4 "
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4  border-opacity-10 border-2 w-full rounded border-slate-200 p-3  "
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="sm:text-lg font-serif font-semibold text-white">
                    {faq.question}
                  </h3>
                  <button
                    className="text-blue-500 focus:outline-none "
                    aria-expanded={expandedIndex === index ? "true" : "false"}
                  >
                    {expandedIndex === index ? "-" : "+"}
                  </button>
                </div>
                {expandedIndex === index && (
                  <p className="text-[12px]  font-serif sm:text-[14px] mt-2 text-white">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* second col */}

        <motion.div
          variants={slideIn("right", "spring", 0.6, 1.4)}
          className="w-[95%] h-[500px] hidden sm:flex my-auto"
        >
          <img
            src={faqBg}
            alt="FAQ BG"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(FAQs);
