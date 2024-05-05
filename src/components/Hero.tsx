import { useState } from "react";
import { workItems } from "../constants";
import { SpotlightPreview } from "./SpotlightPreview";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../hoc/SectionWrapper";

interface Work {
  img: string;
  title: string;
  link: string;
}

const Hero = () => {
  const navigate = useNavigate();
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative">
      <div className="flex sm:flex-row flex-col">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={`absolute left-[10%] sm:w-[700px] sm:left-[50%] top-[34%] sm:top-[15%] z-20 flex gap-3`}
        >
          <motion.div
            variants={fadeIn("up", "spring", 0.95, 2.75)}
            className="h-[300px] sm:h-[500px] m-auto overflow-hidden relative w-auto"
          >
            <ul className="flex flex-col gap-2 h-[calc(250px*6)] animate-scroll">
              {workItems?.map((work: Work, i: number) => (
                <div
                  key={i}
                  onClick={() =>
                    window.open(work?.link, "_blank", "rel=noopener noreferrer")
                  }
                  className="w-[150px] sm:w-[350px] cursor-pointer rounded-lg h-full"
                >
                  <img
                    className="h-full rounded-lg w-full object-cover"
                    src={work?.img}
                  />
                </div>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={slideIn("right", "spring", 0.1, 1.75)}
            className="h-[300px] sm:h-[500px] rounded-r-full m-auto overflow-hidden relative w-auto"
          >
            <ul className="flex flex-col gap-2 h-[calc(250px*6)] animate-scrolled">
              {workItems?.map((work: Work, i: number) => (
                <div
                  key={i}
                  onClick={() =>
                    window.open(work?.link, "_blank", "rel=noopener noreferrer")
                  }
                  className="w-[150px] sm:w-[350px] cursor-pointer rounded-lg h-full"
                >
                  <img
                    className="h-full rounded-lg w-full object-cover"
                    src={work?.img}
                  />
                </div>
              ))}
            </ul>
          </motion.div>
        </div>
        {hovering && (
          <h1 className="hidden sm:flex text-transparent absolute top-10 z-40 sm:z-none sm:top-[48%] left-[18%] sm:left-[65%] text-white font-semibold sm:font-bold text-[30px] sm:text-[50px]">
            Our Works
          </h1>
        )}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-transparent absolute top-10 z-20 sm:z-none sm:top-[40%] left-[18%] sm:left-[10%] bg-clip-text bg-gradient-to-r from-[#0766FF] to-white font-semibold sm:font-bold text-[30px] sm:text-[50px]"
          >
            {"You Dream It,".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 * index }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}{" "}
                {/* Render non-breaking space for spaces */}
              </motion.span>
            ))}
            <br />
            {"We Build It.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 * index }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}{" "}
                {/* Render non-breaking space for spaces */}
              </motion.span>
            ))}
          </motion.span>

          <motion.button
            variants={fadeIn("right", "spring", 0.5, 1.7)}
            className="rounded-md px-6 py-2 z-20 sm:z-none absolute top-[24%] sm:top-[65%] left-[18%] sm:left-[10%] text-white text-[12px] sm:text-[14px] bg-[#0766FF]"
            onClick={() => navigate("/afterservice/1")}
          >
            Get your own site
          </motion.button>
        </div>
      </div>
      <SpotlightPreview />
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
