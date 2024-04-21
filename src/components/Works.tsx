import { useEffect, useState } from "react";
import { styles } from "../styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Loading from "./Loading";

interface WorkItem {
  img: string;
  title: string;
  link: string;
}

const Works = () => {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);

  useEffect(() => {
    const fetchWorkItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "works"));
        const worksData: WorkItem[] = [];
        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          // Fetch image URL from Firebase Storage
          const storageRef = ref(getStorage(), data.img);
          const url = await getDownloadURL(storageRef);
          const workItem: WorkItem = {
            img: url,
            title: data.title,
            link: data.link,
          };
          worksData.push(workItem);
        }
        setWorkItems(worksData);
      } catch (error) {
        console.error("Error fetching work items:", error);
      }
    };

    fetchWorkItems();
  }, []);

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
                className="w-[25%] cursor-pointer h-[300px] mt-4 flex flex-col hover:bg-[#1F2123] hover:text-white rounded-t-lg border-b border-[#1877F2]"
                key={index}
                onClick={() => (window.location.href = item?.link)}
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
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
export default Works;
