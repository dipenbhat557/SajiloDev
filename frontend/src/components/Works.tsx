import { workItems } from "../constants";
import { styles } from "../styles";

const Works = () => {
  return (
    <div className={` h-auto w-full ${styles.padding} flex flex-col gap-4`}>
      <div className={`${styles.sectionHeadText} flex gap-3 mx-auto my-4`}>
        <p>Our </p>
        <p className="text-[#0766FF]">Works</p>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-4 items-center justify-around">
        {workItems?.map((item, index) => {
          return (
            <div
              className="w-[25%] h-[300px] mt-4 flex flex-col hover:bg-[#1F2123] hover:text-white rounded-t-lg border-b border-[#1877F2]"
              key={index}
            >
              <img
                src={item?.img}
                alt={item?.title}
                className="w-full h-[80%] object-cover rounded-t-lg"
              />
              <div className="w-full h-[20%] font-serif flex items-center justify-center">
                {item?.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Works;
