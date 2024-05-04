import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Works from "../components/Works";
import { afterClickItems } from "../constants";
import { styles } from "../styles";
import { useRecoilValue } from "recoil";
import { currUser, isLoggedIn } from "../store";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { logo } from "../assets";

interface User {
  email: string | null;
  name: string | null;
}

const AfterService = ({
  currentServiceIncoming,
}: {
  currentServiceIncoming: number;
}) => {
  const [currentService, setCurrentService] = useState(currentServiceIncoming);
  const [currentOrder, setCurrentOrder] = useState(0);
  const collectionRef = collection(db, "orders");
  const currentUser: User = useRecoilValue(currUser);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    contact: "",
    additionalInfo: "",
    location: "",
    orderType: "",
    selectedService: 0,
  });
  const isLogIn = useRecoilValue<boolean>(isLoggedIn);
  const navigate = useNavigate();

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentService(parseInt(event.target.value, 10));
    setFormData((prevData) => ({
      ...prevData,
      selectedService: parseInt(event.target.value, 10),
    }));
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentOrder(parseInt(event.target.value, 10));
    setFormData((prevData) => ({
      ...prevData,
      orderType: event.target.value,
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProceed = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLogIn) {
      navigate("/signin");
    } else {
      try {
        const docRef = await addDoc(collectionRef, {
          orderId: "",
          details: formData.additionalInfo,
          email: currentUser?.email,
          location: formData.location,
          meeting: "Cancel",
          meetingLink: "",
          orderStatus: "Pending",
          orderType: formData.orderType,
          serviceType: afterClickItems[currentService]?.title,
          orderTime: new Date().toLocaleString(),
          meetingTime: "",
        });

        await updateDoc(doc(collectionRef, docRef.id), {
          orderId: `#${docRef.id} `,
        });

        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);

        setFormData({
          contact: "",
          additionalInfo: "",
          location: "",
          orderType: "",
          selectedService: 0,
        });
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to add data. Please try again.");
      }
    }
  };

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
          <p className="font-serif text-[30px] sm:text-[44px] font-medium">
            {afterClickItems[currentService]?.title}
          </p>
          <p className="leading-relaxed font-serif text-[18px] sm:text-[19px] w-[80%] sm:w-[50%] font-light text-center">
            {afterClickItems[currentService]?.desc}
          </p>
        </div>
        <div className="h-[850px] sm:h-[370px] w-full -z-20 flex justify-center items-center">
          {formSubmitted && (
            <div className=" text-green-500 p-2 rounded-md border border-gray-300">
              <p className="text-[#0766FF]">Thank you for choosing us!</p>
            </div>
          )}{" "}
        </div>

        {!formSubmitted && (
          <div
            className={`${styles.padding} top-[370px] sm:top-[520px] absolute bg-white left-[5%]  w-[90%] h-[870px] sm:h-[400px] rounded-md shadow-slate-400 shadow-sm `}
          >
            <form
              onSubmit={handleProceed}
              className="w-full h-full flex flex-col justify-around items-center"
            >
              <div className="w-full h-full sm:h-[90%] flex flex-col sm:flex-row  justify-around items-center">
                <div className="w-[80%] sm:w-[35%] h-[40%] sm:h-full justify-around flex flex-col gap-1 sm:gap-3">
                  <p className="font-serif ">Services</p>
                  <select
                    className="p-2 border border-slate-200 cursor-pointer rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[10px] sm:placeholder:text-[12px]"
                    onChange={handleServiceChange}
                    value={currentService}
                  >
                    <option value={0}>Select service</option>
                    <option value={1}>Static Website</option>
                    <option value={2}>Dynamic Website</option>
                    <option value={3}>UI/UX</option>
                    <option value={4}>Hosting</option>
                    <option value={5}>Domain Registration</option>
                    <option value={6}>Upgrade Your Website</option>
                  </select>

                  <p className="font-serif">Contact *</p>
                  <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                    placeholder="Write your contact number"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="font-serif">Location *</p>
                  <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                    placeholder="Write your Location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-[80%] sm:w-[35%] h-[60%] sm:h-full flex flex-col gap-3 justify-end">
                  <p className="font-serif">Order Type *</p>
                  <select
                    className="p-2 border border-slate-200 cursor-pointer rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[10px] sm:placeholder:text-[12px]"
                    onChange={handleOrderChange}
                    value={currentOrder}
                  >
                    <option value="">Select order type</option>
                    <option value="Personal">Personal</option>
                    <option value="Organization">Organization</option>
                    <option value="Government">Government</option>
                    <option value="Others">Others</option>
                  </select>
                  <p className="font-serif">Additional Information</p>
                  <textarea
                    rows={10}
                    className="p-2 placeholder:p-4 border border-slate-200 rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[12px]"
                    placeholder="Please tell something about the product you desire"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />
                  <p className="font-serif">* Mandatory fields</p>
                  <button
                    type="submit"
                    className="h-[8%] sm:h-[15%] w-[70%] mx-auto  text-white text-[18px] bg-[#0766FF] rounded-full  font-serif"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        <Services />
        <Works />
        <Footer />
      </div>
    </>
  );
};

export default AfterService;
