import { founders } from "../constants";
import { styles } from "../styles";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Founders = () => {
  return (
    <div
      className={`${styles.padding} w-full h-[380px] sm:h-[500px] flex flex-col items-center gap-3`}
    >
      <div className="h-[10%] flex items-center gap-2">
        <p className="font-serif text-[18px] sm:text-[22px] italic ">Sajilo</p>
        <div className="font-serif  text-[18px] sm:text-[22px] italic bg-[#0766FF] flex items-center justify-center p-1 sm:p-2 rounded-[50%] text-white">
          Dev's
        </div>
        <p className="font-serif  text-[18px] sm:text-[22px] italic ">
          Founders
        </p>
      </div>
      <div className="w-full h-[90%] flex items-center justify-around">
        {founders?.map((founder, index) => (
          <div
            key={index}
            className="w-[45%] sm:w-[30%] h-[90%] shadow-xl rounded-md shadow-slate-300 flex flex-col items-center justify-around"
          >
            <div className="w-[30%] h-[25%] sm:h-[35%] overflow-hidden rounded-[50%]">
              <img
                src={founder?.img}
                alt="founder image"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-[13px] sm:text-[16px] px-3 text-center">
              {founder?.vanai}
            </p>
            <div className="w-[90%] flex justify-around items-center h-[10%]">
              <FaGithub
                onClick={() =>
                  window.open(
                    founder?.github,
                    "_blank",
                    "rel=noopener noreferrer"
                  )
                }
                className="text-3xl cursor-pointer "
              />

              <FaLinkedin
                onClick={() =>
                  window.open(
                    founder?.linkedin,
                    "_blank",
                    "rel=noopener noreferrer"
                  )
                }
                className="text-3xl cursor-pointer text-blue-800"
              />

              <FaInstagram
                onClick={() =>
                  window.open(
                    founder?.instagram,
                    "_blank",
                    "rel=noopener noreferrer"
                  )
                }
                className="text-3xl cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
