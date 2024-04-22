import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GettingSite from "../components/GettingSite";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getStorage, ref } from "firebase/storage";

interface OrderItem {
  details: string;
  email: string;
  location: string;
  meeting: string;
  orderStatus: string;
  orderType: string;
  serviceType: string;
  time: string;
}

const Orders = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersData: OrderItem[] = [];
        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          const orderItem: OrderItem = {
            details: data.details,
            email: data.email,
            location: data.location,
            meeting: data.meeting,
            orderStatus: data.orderStatus,
            orderType: data.orderType,
            serviceType: data.serviceType,
            time: data.time,
          };
          ordersData.push(orderItem);
        }
        setOrderItems(ordersData);
        console.log("order data is ", orderItems);
      } catch (error) {
        console.error("Error fetching work items:", error);
      }
    };

    fetchOrderItems();
  }, []);

  return (
    <>
      <Navbar bgColor="bg-[#1F2123]" textColor="text-white" borderColor="" />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[30px] font-medium">Recent Orders</p>
          <p className="leading-loose text-[14px] font-light text-center">
            We will create our services the best in the town We will
            <br /> create our services the best in the town
          </p>
        </div>
        <div className="h-auto min-h-[150px] w-full -z-20" />

        <div
          className={`${styles.padding} top-[520px] absolute bg-white left-[5%]  w-[90%] mx-auto h-auto rounded-md shadow-slate-400 shadow-sm flex flex-col justify-around items-center`}
        >
          {orderItems?.length < 1 ? (
            <div className="text-[22px] w-full h-full flex items-center justify-center font-bold text-slate-500">
              No orders Yet
            </div>
          ) : (
            <>
              <div className="w-full h-[90%] flex  justify-around">
                <p>Types of Services</p>
                <p>Location</p>
                <p>Order Details</p>
                <p>Order Type</p>
                <p>Meeting</p>
                <p>Order Status</p>
                <p>Time</p>
              </div>

              {orderItems?.map((order, index) => {
                <div
                  className="w-full h-[90%] flex  justify-around"
                  key={index}
                >
                  <p>{order?.serviceType}</p>
                  <p>{order?.location}</p>
                  <p>{order?.details}</p>
                  <p>{order?.orderType}</p>
                  <p>{order?.meeting}</p>
                  <p>{order?.orderStatus}</p>
                  <p>{order?.time}</p>
                </div>;
              })}
            </>
          )}
        </div>

        <GettingSite />
        <Footer />
      </div>
    </>
  );
};
export default Orders;
