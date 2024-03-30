import { getSite1, getSite2 } from "../assets";
import { styles } from "../styles";

const GettingSite = () => {
  return (
    <div
      className={`${styles.padding}  bg-[#EFEAE1] w-full h-[400px] flex items-center justify-between`}
    >
      <div className="w-[45%] h-[80%] flex flex-col items-center justify-center gap-4">
        <p className="text-[22px] font-semibold font-serif leading-loose">
          "From your imagination to reality, let's craft our digital domain."
        </p>
        <button className="rounded-md px-6 py-2 text-white text-[12px] sm:text-[14px] bg-[#0766FF]">
          Get your own site
        </button>
      </div>
      <div className="w-[50%] h-[90%] relative">
        <div className="w-[90%] h-[80%] -z-1">
          <img
            src={getSite1}
            alt="get site 1"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-[50%] h-[40%] z-50 bottom-0 right-0 rounded-lg absolute">
          <img
            src={getSite2}
            alt="get site 2"
            className="w-full h-[90%] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default GettingSite;
