import { heroBg } from "../assets";

const Hero = () => {
  return (
    <div className="w-full relative bg-[#1F2123] h-[550px] flex justify-between">
      <div className="w-[75%] h-full absolute left-0 ">
        <img
          src={heroBg}
          alt="heroBg"
          className="w-full h-full  object-cover"
        />
      </div>
      <div className="w-[33%] absolute right-0 -z-1 h-full flex flex-col items-center justify-center gap-2">
        <p className="font-serif text-white text-[30px]">You Dream It,</p>
        <p className="font-serif text-white text-[30px]">We Build It.</p>
        <button className="bg-[#0766FF] text-[14px] text-white rounded-lg py-2 px-4">
          Get your Own Site
        </button>
      </div>
    </div>
  );
};
export default Hero;
