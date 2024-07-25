import React from "react";
import Navbar from "../components/Navbar";

const admissionsData = [
  {
    title: "Process",
    content: [
      "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
    ],
  },
  {
    title: "Criteria",
    content: [
      "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
    ],
  },
  {
    title: "Important Dates",
    content: [
      "Admission Form Availability: March 1st.",
      "Last Date for Submission: March 31st.",
      "Entrance Test: April 15th.",
      "Announcement of Results: April 30th.",
    ],
    isTextCenter: false,
  },
];

const Admissions = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Navbar />
        <div className="text-center w-full p-10">
          <h1 className="text-4xl sm:text-7xl font-semibold">Admission</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-center md:gap-10 p-5">
          {admissionsData.map((item, index) => (
            <div
              key={index}
              className="splits w-full md:w-72 mb-5 md:mb-0 h-auto bg-zinc-800 rounded-md p-5"
            >
              <div className="w-full text-center mt-2">
                <h1 className="text-2xl uppercase font-bold">{item.title}</h1>
              </div>
              <div
                className={`mt-5 ${
                  item.isTextCenter === false ? "" : "text-center"
                }`}
              >
                {item.content.map((text, idx) => (
                  <p key={idx} className="mb-2">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admissions;
