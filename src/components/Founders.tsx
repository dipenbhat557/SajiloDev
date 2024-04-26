import { facebook, github, linkedin } from "../assets";
import { founders } from "../constants";
import { styles } from "../styles";

const Founders = () => {
  return (
    <div
      className={`${styles.padding} w-full h-[500px] flex flex-col items-center gap-3`}
    >
      <div className="h-[10%] flex items-center gap-2">
        <p className="font-serif text-[22px] italic ">Sajilo</p>
        <div className="font-serif text-[22px] italic bg-[#0766FF] flex items-center justify-center p-2 rounded-[50%] text-white">
          Dev's
        </div>
        <p className="font-serif text-[22px] italic ">Founders</p>
      </div>
      <div className="w-full h-[90%] flex items-center justify-around">
        {founders?.map((founder, index) => (
          <div
            key={index}
            className="w-[30%] h-[90%] shadow-xl rounded-md shadow-slate-300 flex flex-col items-center justify-around"
          >
            <div className="w-[3] h-[25%] overflow-hidden rounded-[50%]">
              <img
                src={founder?.img}
                alt="founder image"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-serif">{founder?.vanai}</p>
            <div className="w-[90%] flex justify-around items-center h-[10%]">
              <img
                src={github}
                alt="github"
                className="w-[20%] h-[90%] cursor-pointer object-contain rounded-full"
              />
              <img
                src={linkedin}
                alt="linkedin"
                className="w-[20%] h-[90%] cursor-pointer object-contain rounded-full"
              />
              <img
                src={facebook}
                alt="facebook"
                className="w-[20%] h-[90%] cursor-pointer object-contain rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
