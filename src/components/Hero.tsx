import { useState } from "react";
import { workItems } from "../constants";
import { SpotlightPreview } from "./SpotlightPreview";

import { useNavigate } from "react-router-dom";

interface Works {
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
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
          className={` absolute left-[10%] sm:w-[700px] rounded-full sm:left-[50%] top-[34%] sm:top-[15%] z-20 flex gap-3`}
        >
          <div className="h-[300px] sm:h-[500px] rounded-l-full m-auto overflow-hidden relative w-auto">
            <ul className="flex flex-col gap-2 h-[calc(250px*6)] animate-scroll">
              {workItems?.map((work: Works, i: number) => (
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
                    key={i}
                  />
                </div>
              ))}
            </ul>
          </div>
          <div className="h-[300px] sm:h-[500px] rounded-r-full m-auto overflow-hidden relative w-auto">
            <ul className="flex flex-col gap-2 h-[calc(250px*6)] animate-scrolled">
              {workItems?.map((work: Works, i: number) => (
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
                    key={i}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
        {hovering && (
          <h1 className=" hidden sm:flex text-transparent absolute top-10 z-40 sm:z-none sm:top-[48%] left-[18%] sm:left-[65%] text-white font-semibold sm:font-bold text-[30px] sm:text-[50px]">
            Our Works
          </h1>
        )}

        <div>
          <h1 className="text-transparent absolute top-10 z-30 sm:z-none sm:top-[40%] left-[18%] sm:left-[10%] bg-clip-text bg-gradient-to-r from-[#0766FF] to-white  font-semibold sm:font-bold text-[30px] sm:text-[50px]">
            You Dream It,
            <br /> We Build It
          </h1>
          <button
            className="rounded-md px-6 py-2 z-30 sm:z-none absolute top-[24%] sm:top-[65%] left-[18%] sm:left-[10%] text-white text-[12px] sm:text-[14px] bg-[#0766FF]"
            onClick={() => navigate("/afterservice/1")}
          >
            Get your own site
          </button>
        </div>
      </div>
      <SpotlightPreview />
    </div>
  );
};
export default Hero;
