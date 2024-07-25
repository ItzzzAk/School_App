import React from "react";
import Navbar from "../components/Navbar";

const Faculty = () => {
  const facultyData = [
    {
      name: "John Doe",
      title: "Principal",
      qualification: "M.Ed",
      experience: "20 years of experience in educational administration.",
      imgSrc:
        "https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg",
    },
    {
      name: "Jane Smith",
      title: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years of teaching experience.",
      imgSrc:
        "https://i.pinimg.com/564x/9c/ec/2f/9cec2fb375f896c83ffbac039184e75e.jpg",
    },
    {
      name: "Michael Brown",
      title: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience.",
      imgSrc:
        "https://i.pinimg.com/736x/b3/db/1f/b3db1fd24236bd1a9d920fd78715df4e.jpg",
    },
    {
      name: "Sophia Davis",
      title: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience.",
      imgSrc:
        "https://i.pinimg.com/564x/1c/2c/7a/1c2c7a11f03ad2efc1763868d4673e6f.jpg",
    },
    {
      name: "Emily Johnson",
      title: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years of teaching experience.",
      imgSrc:
        "https://i.pinimg.com/564x/94/12/e2/9412e2fa6877c8d984de828c226e919b.jpg",
    },
    {
      name: "David Wilson",
      title: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years of teaching experience.",
      imgSrc:
        "https://i.pinimg.com/564x/49/d4/f6/49d4f67da12735e992b8a9b17248a3e9.jpg",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen">
        <Navbar />
        <div className="p-20 w-full text-center">
          <h1 className="text-7xl font-semibold">Faculty</h1>
        </div>
        <div className="profdets w-full h-2/4 p-10 flex justify-between gap-5 flex-wrap">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="max-w-80 min-h-[60vh] bg-zinc-800 rounded-md overflow-hidden"
            >
              <div className="w-full h-3/4">
                <img
                  className="w-full h-full object-cover object-center"
                  src={faculty.imgSrc}
                  alt={faculty.name}
                />
              </div>
              <div className="w-full text-center h-1/5 p-4">
                <h5 className="name mb-2 text-2xl font-semibold">
                  {faculty.name}
                </h5>
                <span className="des text-xl">
                  {faculty.title}, {faculty.qualification}, {faculty.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faculty;
