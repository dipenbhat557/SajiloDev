import { useNavigate } from "react-router-dom";
import { serviceItems } from "../constants";
import { styles } from "../styles";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={`h-auto w-full ${styles.padding} flex flex-col gap-4`}>
      <div className={`${styles.sectionHeadText} flex gap-3 mx-auto my-4`}>
        <p>Our </p>
        <p className="text-[#0766FF]">Services</p>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-4 items-center justify-around ">
        {serviceItems?.map((item, index) => {
          return (
            <div
              className="w-[45%] sm:w-[25%] cursor-pointer h-auto mt-4 flex flex-col gap-2 "
              key={index}
              onClick={() => navigate(`/afterservice/${index + 1}`)}
            >
              <img
                src={item?.img}
                alt={item?.title}
                className="w-[90%] sm:w-[50%] h-[180px] object-contain  rounded-t-lg"
              />
              <div className="font-semibold  font-serif text-[13px] sm:text-[16px]">
                {item?.title}
              </div>
              <div className="line-clamp-4 text-[11px] sm:text-[13px] sm:line-clamp-none">
                {item?.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
