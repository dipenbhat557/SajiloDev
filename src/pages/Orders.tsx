import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GettingSite from "../components/GettingSite";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { TiTick } from "react-icons/ti";
import { useRecoilValue } from "recoil";
import { currUser } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface OrderItem {
  orderId: String;
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
  const currentUser = useRecoilValue(currUser);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("current user is ", currentUser);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const fetchOrderItems = async () => {
          try {
            const q = query(
              collection(db, "orders"),
              where("email", "==", currentUser?.email)
            );
            const querySnapshot = await getDocs(q);
            const ordersData: OrderItem[] = [];
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              const orderItem: OrderItem = {
                orderId: data.orderId,
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
            });
            setOrderItems(ordersData);
          } catch (error) {
            console.error("Error fetching work items:", error);
          }
        };
        fetchOrderItems();
      } else {
        navigate("/signin");
      }
    });
    return () => unsubscribe();
  }, [currentUser, navigate]);

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
        <div
          className={`h-[${
            orderItems?.length * 100
          }px] min-h-[200px] w-full -z-20`}
        />

        <div
          className={`${styles.padding} top-[520px] absolute bg-white left-[5%]  w-[90%] mx-auto h-auto rounded-md shadow-slate-400 shadow-sm flex flex-col justify-around items-center`}
        >
          {orderItems?.length < 1 ? (
            <div className="text-[22px] w-full h-full flex items-center justify-center font-bold text-slate-500">
              No orders Yet
            </div>
          ) : (
            <>
              <div className="w-full text-[18px] font-medium h-[70px] items-center flex border-b border-slate-100  justify-around">
                <p className="w-[15%] text-center">Types of Services</p>
                <p className="w-[15%] text-center">Location</p>
                <p className="w-[23%] text-center">Order Details</p>
                <p className="w-[12%] text-center">Order Type</p>
                <p className="w-[10%] text-center">Meeting</p>
                <p className="w-[10%] text-center">Order Status</p>
                <p className="w-[15%] text-center">Time</p>
              </div>

              {orderItems?.map((order, index) => (
                <div
                  className="w-full h-auto py-5 border-b border-slate-100 items-center flex  justify-around"
                  key={index}
                >
                  <div className="w-[15%] text-center">
                    {order?.serviceType}
                  </div>
                  <div className="w-[15%] text-center">{order?.location}</div>
                  <div className="w-[20%] flex flex-col">
                    <div className="w-[20%] text-center">{order?.orderId}</div>
                    <div className="line-clamp-1">{order?.details}</div>
                  </div>

                  <div className="w-[15%]  text-center">{order?.orderType}</div>
                  {order?.meeting === "Cancel" ? (
                    <button className="border cursor-pointer border-slate-300 rounded-md py-1 px-3 text-red-500">
                      Cancel
                    </button>
                  ) : order?.meeting === "Join" ? (
                    <div className="border border-slate-300 cursor-pointer rounded-md py-1 px-3 text-blue-600">
                      Join
                    </div>
                  ) : (
                    <div className="flex gap-1 justify-between  p-2 border border-slate-300 rounded-md">
                      <div className="text-[12px] text-slate-300">#orderId</div>
                      <TiTick className="text-xl bg-[#0DA06A] text-white rounded-full" />
                    </div>
                  )}
                  <div className="w-[10%] text-center">
                    {order?.orderStatus === "Confirmed" ? (
                      <button className="rounded-md py-1 px-3 text-[#FB7E15] bg-[#FFF5EB]">
                        Confirmed
                      </button>
                    ) : order?.orderStatus === "Pending" ? (
                      <div className="rounded-md py-1 px-3 text-[#FB7E15] bg-[#FFF5EB]">
                        Pending
                      </div>
                    ) : order?.orderStatus === "Completed" ? (
                      <div className=" rounded-md py-1 px-3 text-[#0DA06A] bg-[#F0FFFA]">
                        Completed
                      </div>
                    ) : (
                      <div className="py-1 px-3 text-[#F34A7C]  bg-[#FFF5F5] rounded-2xl">
                        Cancelled
                      </div>
                    )}
                  </div>
                  <div className="w-[15%] text-center">{order?.time}</div>
                </div>
              ))}
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