import React, { useState, ChangeEvent, FormEvent } from "react";
import Footer from "../components/Footer";
import GettingSite from "../components/GettingSite";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can implement the logic to submit the form data
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Set formSubmitted to true to display a confirmation message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navbar bgColor="bg-[#1F2123]" textColor="text-white" borderColor="" />
      <div className="relative">
        <div className="w-full bg-[#1F2123] h-[550px] text-white relative -z-10 flex flex-col items-center justify-center gap-5">
          <p className="font-serif text-[30px] font-medium">Get in touch</p>
          <p className="leading-loose text-[14px] font-light text-center">
            We will create our services the best in the town We will
            <br /> create our services the best in the town
          </p>
        </div>
        <div className="h-[390px] w-full -z-20" />

        <div
          className={`${styles.padding} top-[520px] absolute bg-white left-[15%]  w-[70%] mx-auto h-[400px] rounded-md shadow-slate-400 shadow-sm flex flex-col justify-around items-center`}
        >
          <div className="w-full h-[90%] flex  justify-around">
            <div className="w-[45%] text-white p-3 px-7 rounded-lg bg-[#1F2123] h-full justify-around flex flex-col gap-2">
              <p className="text-center font-serif text-[18px]">
                Contact information
              </p>
              <p className="text-center  text-[10px] font-light">
                We will create our services the best in the town We will create
                our services the best in the town
              </p>
              <div className="flex gap-3">
                <IoCall className="text-[#0766FF]" />
                <p className="text-[14px] font-light">8545866043</p>
              </div>
              <div className="flex gap-3">
                <IoIosMail className="text-[#0766FF]" />
                <p className="text-[14px] font-light">sajilodev557@gmail.com</p>
              </div>
            </div>
            <div className="w-[45%] h-full flex flex-col gap-9 text-slate-500">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex flex-col gap-9"
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <div className="flex w-[45%] flex-col gap-3">
                    <p className="text-[13px]">Your name</p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-slate-400"
                    />
                  </div>
                  <div className="flex w-[45%] flex-col gap-3">
                    <p className="text-[13px]">Your Email</p>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-slate-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[13px]">Subject</p>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-b border-slate-400"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[13px]">Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    className="w-full p-3 border-b placeholder:text-[10px] border-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#0766FF] text-serif text-white px-4  mx-auto font-serif text-[12px] py-2 rounded-full hover:bg-blue-700"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        {formSubmitted && (
          <div className="absolute top-1/2 left-1/2 bg-white p-4 rounded-md border border-gray-300">
            <p className="text-[#0766FF]">Thank you for contacting us!</p>
          </div>
        )}
        <GettingSite />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
