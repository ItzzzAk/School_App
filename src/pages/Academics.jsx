import React from "react";
import Navbar from "../components/Navbar";

const Academics = () => {
  const curriculumData = [
    {
      title: "Primary (Grades 1-5)",
      subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Art",
        "Physical Education",
      ],
    },
    {
      title: "Secondary (Grades 6-10)",
      subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Art",
        "Physical Education",
      ],
    },
    {
      title: "Senior Secondary (Grades 11-12)",
      subjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Art",
        "Physical Education",
      ],
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen  text-white">
        <Navbar />
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-7xl font-semibold">Academics</h1>
        </div>
        <div className="w-full p-5 md:p-10">
          <div className="w-full text-center mb-10">
            <span className="text-xl md:text-2xl font-medium">Curriculum</span>
          </div>
          <div className="w-full flex flex-wrap gap-5 justify-center">
            {curriculumData.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-72 sm:min-h-72 p-5 sm:p-10 bg-zinc-800 rounded-md flex flex-col items-center"
              >
                <div className="title mb-5 text-center">
                  <span className="text-xl sm:text-3xl">{item.title}</span>
                </div>
                <div className="sub mb-5 text-center">
                  {item.subjects.map((subject, idx) => (
                    <p
                      key={idx}
                      className="text-base sm:text-xl font-light mb-2"
                    >
                      {subject}
                    </p>
                  ))}
                </div>
                <div className="admission">
                  <button className="p-3 sm:p-5 bg-blue-600 rounded-md text-sm sm:text-xl">
                    Get Admission
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Academics;
