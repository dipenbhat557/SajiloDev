import { styles } from "../styles";

import Loading from "./Loading";
import { workItems } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Works = () => {
  return (
    <div className={` h-auto w-full ${styles.padding} flex flex-col gap-4`}>
      <motion.div
        variants={textVariant(0.2)}
        className={`${styles.sectionHeadText} flex gap-3 mx-auto my-4`}
      >
        <p>Our </p>
        <p className="text-[#0766FF]">Works</p>
      </motion.div>
      <div className="h-auto w-full flex flex-wrap gap-4 items-center justify-around">
        {workItems?.length > 0 ? (
          workItems?.map((item, index) => {
            return (
              <motion.div
                variants={
                  index === 1 || index === 4
                    ? fadeIn(index === 1 ? "down" : "up", "spring", 0.5, 1.5)
                    : slideIn(
                        index === 0 || index === 3
                          ? "left"
                          : index === 2 || index === 5
                          ? "right"
                          : "",
                        "spring",
                        0.5,
                        1.5
                      )
                }
                className="w-[45%] sm:w-[25%] cursor-pointer h-[200px] sm:h-[300px] mt-4 flex flex-col hover:bg-[#1F2123] hover:text-white rounded-t-lg border-b border-[#1877F2]"
                key={index}
                onClick={() =>
                  window.open(item?.link, "_blank", "rel=noopener noreferrer")
                }
              >
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-full h-[80%] object-cover rounded-t-lg"
                />
                <div className="w-full text-[13px] sm:text-[16px] h-[20%] font-serif flex items-center justify-center">
                  {item?.title}
                </div>
              </motion.div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
export default SectionWrapper(Works);
