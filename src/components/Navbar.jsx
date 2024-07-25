import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Hatlogo from "../assets/images/education.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { text: "About Us", url: "/about" },
    { text: "Academics", url: "/academics" },
    { text: "Faculty", url: "/faculty" },
    { text: "Gallery", url: "/gallery" },
    { text: "Contact Us", url: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Disable scrolling when menu is open
  };

  return (
    <>
      <div className="w-full px-5 py-5  flex items-center justify-between z-[10000] relative">
        <div className="flex items-center gap-5">
          <img className="w-[6vh]" src={Hatlogo} alt="School Logo" />
          <Link to="/" className="text-md font-semibold">
            Springdale Public School
          </Link>
        </div>
        <div className="hidden md:flex gap-5">
          {links.map((link, index) => (
            <span className="flex items-center gap-2" key={index}>
              <Link to={link.url} className="text-md font-medium">
                {link.text}
              </Link>
              <MdArrowOutward />
            </span>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link to="/admissions" className="text-md font-medium">
            Admissions
          </Link>
          <MdArrowOutward />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-zinc-800 shadow-lg z-[10000] p-5">
          <div className="flex flex-col items-start gap-5">
            {links.map((link, index) => (
              <span className="flex items-center gap-2 text-white" key={index}>
                <Link to={link.url} onClick={toggleMenu}>
                  {link.text}
                </Link>
                <MdArrowOutward />
              </span>
            ))}
            <div className="flex items-center gap-2 text-white">
              <Link to="/admissions" onClick={toggleMenu}>
                Admissions
              </Link>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
