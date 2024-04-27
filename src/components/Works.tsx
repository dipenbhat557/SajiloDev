import { useEffect, useState } from "react";
import { styles } from "../styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Loading from "./Loading";
import { workItems } from "../constants";

interface WorkItem {
  img: string;
  title: string;
  link: string;
}

const Works = () => {
  return (
    <div className={` h-auto w-full ${styles.padding} flex flex-col gap-4`}>
      <div className={`${styles.sectionHeadText} flex gap-3 mx-auto my-4`}>
        <p>Our </p>
        <p className="text-[#0766FF]">Works</p>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-4 items-center justify-around">
        {workItems?.length > 0 ? (
          workItems?.map((item, index) => {
            return (
              <div
                className="w-[45%] sm:w-[25%] cursor-pointer h-[200px] sm:h-[300px] mt-4 flex flex-col hover:bg-[#1F2123] hover:text-white rounded-t-lg border-b border-[#1877F2]"
                key={index}
                onClick={() => (window.location.href = item?.link)}
              >
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-full h-[80%] object-cover rounded-t-lg"
                />
                <div className="w-full text-[13px] sm:text-[16px] h-[20%] font-serif flex items-center justify-center">
                  {item?.title}
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
export default Works;
