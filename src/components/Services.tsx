import { useNavigate } from "react-router-dom";
import { serviceItems } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={`h-auto w-full ${styles.padding} flex flex-col gap-4`}>
      <motion.div
        variants={textVariant(0.2)}
        className={`${styles.sectionHeadText} flex gap-3 mx-auto my-4`}
      >
        <p>Our </p>
        <p className="text-[#0766FF]">Services</p>
      </motion.div>
      <div className="h-auto w-full flex flex-wrap gap-4 items-center justify-around ">
        {serviceItems?.map((item, index) => {
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
              className="w-[45%] sm:w-[25%] cursor-pointer h-auto mt-4 flex flex-col gap-2 "
              key={index}
              onClick={() => navigate(`/afterservice/${index + 1}`)}
            >
              <img
                src={item?.img}
                alt={item?.title}
                className="w-[90%] sm:w-[50%] h-[180px] object-contain  rounded-t-lg"
              />
              <div className="font-semibold  font-serif text-[13px] sm:text-[16px]">
                {item?.title}
              </div>
              <div className="line-clamp-4 text-[11px] sm:text-[13px] sm:line-clamp-none">
                {item?.desc}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionWrapper(Services);
