import { useNavigate } from "react-router-dom";
import { getSite1, getSite2 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const GettingSite = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.padding}  bg-[#EFEAE1] w-full h-[400px] flex flex-col sm:flex-row items-center justify-between`}
    >
      <div className="w-[80%] text-center sm:w-[45%] h-[40%] sm:h-[80%] flex flex-col items-center justify-center gap-4">
        <p className="text-[14px] sm:text-[22px] font-semibold font-serif leading-loose">
          "From your imagination to reality, let's craft our digital domain."
        </p>
        <button
          className="rounded-md px-6 py-2 text-white text-[12px] sm:text-[14px] bg-[#0766FF]"
          onClick={() => navigate("/afterservice/1")}
        >
          Get your own site
        </button>
      </div>
      <div className="w-[90%] sm:w-[50%] h-[60%] sm:h-[90%] relative">
        <motion.div
          variants={slideIn("right", "spring", 0.5, 1)}
          className="w-[90%] h-[80%] -z-1"
        >
          <img
            src={getSite1}
            alt="get site 1"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "spring", 1, 1)}
          className="w-[50%] h-[40%] z-50 bottom-0 right-0 rounded-lg absolute"
        >
          <img
            src={getSite2}
            alt="get site 2"
            className="w-full h-[90%] object-contain rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default SectionWrapper(GettingSite);
