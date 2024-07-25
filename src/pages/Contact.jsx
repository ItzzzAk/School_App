import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Navbar from "../components/Navbar";

const contactDetails = [
  {
    label: "Address",
    value: "Springdale Public School, 123 Main Street, Springfield, USA",
  },
  { label: "Phone", value: "+1 (123) 456-7890" },
  { label: "Email", value: "info@springdale.edu" },
];

const socialIcons = [
  { icon: <FaInstagram className="w-6 h-6" />, bgColor: "bg-blue-500" },
  { icon: <FaFacebook className="w-6 h-6" />, bgColor: "bg-blue-700" },
  { icon: <FaYoutube className="w-6 h-6" />, bgColor: "bg-red-600" },
  { icon: <RiTwitterXFill className="w-6 h-6" />, bgColor: "bg-blue-400" },
];

const Contact = () => (
  <>
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl sm:text-7xl font-semibold">Contact Us</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3767.5722202735287!2d72.9834713!3d19.2138778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b99999132fa7%3A0x3dbfdda8fafb9fcf!2sStone-Su-Man!5e0!3m2!1sen!2snl!4v1721829415440!5m2!1sen!2snl"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 h-auto bg-zinc-600 p-5 flex flex-col justify-between">
          <div className="w-full mb-5">
            <form className="w-full flex flex-col gap-5">
              {["Enter Your Name", "Enter Your Email", "Enter the Message"].map(
                (placeholder, idx) => (
                  <input
                    key={idx}
                    className="inputbar px-4 py-3 rounded-md outline-none bg-zinc-800"
                    type="text"
                    placeholder={placeholder}
                  />
                )
              )}
              <input
                className="buttonbar px-4 py-3 rounded-md bg-blue-600 text-white"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
          <div className="w-full flex flex-col items-center mb-5">
            {contactDetails.map((detail, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col sm:flex-row items-center justify-center text-center mb-4"
              >
                <h1 className="text-lg sm:text-2xl uppercase font-semibold">
                  {detail.label}:
                </h1>
                <h4 className="text-md sm:text-xl font-medium">
                  &nbsp; &nbsp;{detail.value}
                </h4>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center gap-5">
            {socialIcons.map((social, idx) => (
              <div
                key={idx}
                className={`${social.bgColor} text-white rounded-full p-3 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12`}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
