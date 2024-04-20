import { useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative bg-[#1F2123] h-[650px] flex justify-between">
      <div className="w-[75%] h-full absolute left-3 top-10 ">
        <ImageSlider />
      </div>
      <div className="w-[33%] absolute right-0 -z-1 h-full flex flex-col items-center justify-center gap-2">
        <p className="font-serif text-white text-[30px]">You Dream It,</p>
        <p className="font-serif text-white text-[30px]">We Build It.</p>
        <button
          onClick={() => navigate("/afterservice/1")}
          className="bg-[#0766FF] text-[14px] text-white rounded-lg py-2 px-4"
        >
          Get your Own Site
        </button>
      </div>
    </div>
  );
};
export default Hero;
