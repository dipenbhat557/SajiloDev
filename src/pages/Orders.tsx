import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GettingSite from "../components/GettingSite";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { TiTick } from "react-icons/ti";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currUser, loginErr } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";

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
  const setLoginError = useSetRecoilState(loginErr);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
        setLoginError(true);
      }
    });
    return () => unsubscribe();
  }, [currentUser, navigate]);

  return (
    <>
      <Navbar
        logo={logo}
        bgColor="bg-black"
        textColor="text-white"
        borderColor=""
      />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[400px] sm:h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[30px] font-medium">Recent Orders</p>
          <p className="leading-loose text-[14px] font-light text-center w-[80%]">
            We will create our services the best in the town We will create our
            services the best in the town
          </p>
        </div>
        <div
          className={`h-[${
            orderItems?.length * 100
          }px] min-h-[200px] w-full -z-20`}
        />

        <div
          className={`${styles.padding} overflow-x-scroll top-[360px] sm:top-[520px] absolute bg-white left-[5%]  w-[90%] mx-auto h-auto rounded-md shadow-slate-400 shadow-sm`}
        >
          {orderItems?.length < 1 ? (
            <div className="text-[22px] w-full h-full flex items-center justify-center font-bold text-slate-500">
              No orders Yet
            </div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Types of Services
                  </th>
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Location
                  </th>
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Order Details
                  </th>
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Order Type
                  </th>
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Meeting
                  </th>
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Order Status
                  </th>
                  <th className="text-[12px] sm:text-[16px] text-left p-2">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderItems?.map((order, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="text-[12px] sm:text-[16px] p-2">
                      {order?.serviceType}
                    </td>
                    <td className="text-[12px] sm:text-[16px] p-2">
                      {order?.location}
                    </td>
                    <td className="text-[12px] sm:text-[16px] p-2">
                      {order?.orderId}
                      <br />
                      {order?.details}
                    </td>
                    <td className="text-[12px] sm:text-[16px] p-2">
                      {order?.orderType}
                    </td>
                    <td className="text-[12px] sm:text-[16px] p-2">
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
                          <div className="text-[12px] text-slate-300">
                            #orderId
                          </div>
                          <TiTick className="text-xl bg-[#0DA06A] text-white rounded-full" />
                        </div>
                      )}
                    </td>
                    <td className="text-[12px] sm:text-[16px] p-2">
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
                    </td>
                    <td className="text-[12px] sm:text-[16px] p-2">
                      {order?.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <GettingSite />
        <Footer />
      </div>
    </>
  );
};

export default Orders;
