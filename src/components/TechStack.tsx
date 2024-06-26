import { useState } from "react";
import { techStack } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1.5 }}
      className={`h-auto w-full ${styles.padding} flex flex-col gap-4`}
    >
      <div className={`${styles.sectionHeadText} flex gap-3 mx-auto `}>
        <p>Our Tech</p>
        <p className="text-[#0766FF]">Stack</p>
      </div>
      <p className="text-center font-serif line-clamp-6 sm:line-clamp-none text-[12px] sm:text-[14px] sm:leading-relaxed px-2">
        At SajiloDev, our tech framework is designed for efficient and scalable
        development. We use a comprehensive stack of cutting-edge tools chosen
        to meet modern software engineering demands. From languages to
        deployment, each component ensures seamless workflows, delivering
        solutions that exceed expectations.
      </p>
      <div className="h-auto w-full flex  gap-4 items-center justify-between">
        <div className="w-[25%] sm:w-[20%] h-auto flex flex-col gap-3">
          {techStack?.map((item, index) => {
            return (
              <p
                key={index}
                className={`text-[14px] sm:text-[18px] cursor-pointer underline ${
                  currentIndex === index ? "text-black" : "text-slate-400"
                }`}
                onMouseOver={() => setCurrentIndex(index)}
              >
                {item?.title}
              </p>
            );
          })}
        </div>
        <div className="w-[70%] sm:w-[50%] h-auto justify-around flex flex-wrap gap-3 p-3 border-2 border-[#0766FF] rounded-md">
          {techStack[currentIndex]?.stack?.map((item, index) => {
            return (
              <div key={index} className="h-[80px] w-[20%]">
                <img
                  src={item}
                  alt="stack"
                  className=" w-full h-full object-contain"
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default SectionWrapper(TechStack);
