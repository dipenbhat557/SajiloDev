import { workItems } from "../constants";

interface Works {
  img: string;
  title: string;
  link: string;
}
const ImageSlider = () => {
  return (
    <div className="flex ">
      <div className="w-[60%] absolute left-[10%] ">
        <div className="h-[500px] m-auto overflow-hidden relative w-auto">
          <ul className="flex flex-col h-[calc(250px*6)] animate-scroll">
            {workItems?.map((work: Works, i: number) => (
              <div className="w-[550px] h-full">
                <img
                  className="h-full  w-full object-cover"
                  src={work?.img}
                  key={i}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full absolute left-[60%] ">
        <div className="h-[500px] m-auto overflow-hidden relative w-auto">
          <ul className="flex flex-col h-[calc(250px*6)] animate-scrolled">
            {workItems?.map((work: Works, i: number) => (
              <div className="w-[550px] h-full">
                <img
                  className="h-full  w-full object-cover"
                  src={work?.img}
                  key={i}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
