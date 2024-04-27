import { SpotlightPreview } from "./SpotlightPreview";

import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <SpotlightPreview />

      <div>
        <h1 className="text-transparent absolute z-50 top-[40%] left-[10%] bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple via-custom-pink font-bold text-[50px]">
          You Dream It,
          <br /> We Build It
        </h1>
        <button
          className="rounded-md px-6 py-2 absolute z-50 top-[65%] left-[10%] text-white text-[12px] sm:text-[14px] bg-[#0766FF]"
          onClick={() => navigate("/afterservice/1")}
        >
          Get your own site
        </button>
      </div>
    </div>
  );
};
export default Hero;
