import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="home w-full h-screen  relative z-10">
        <Navbar />
        <div className="Hero w-full h-[50vh] flex items-center justify-center relative z-[5] px-4 sm:px-0">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-semibold uppercase mb-3 sm:mb-5">
              Springdale Public School
            </h1>
            <p className="text-sm sm:text-md mb-3 sm:mb-5">
              Welcome to Springdale Public School, where we nurture young minds
              for a brighter future.
            </p>
            <button className="p-2 sm:p-3 bg-blue-600 rounded-md text-sm sm:text-xl text-white">
              View More
            </button>
          </div>
        </div>
        <div className="hbanner w-full h-[40vh] -mt-10 ">
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Home;
