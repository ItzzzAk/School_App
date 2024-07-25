import React from "react";
import Navbar from "../components/Navbar";

const timelineData = [
  {
    title: "History",
    description:
      "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
    imageUrl:
      "https://i.pinimg.com/564x/f0/1e/4a/f01e4a4629d82ce76007d757a9ae474d.jpg",
  },
  {
    title: "Vision",
    description:
      "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
    imageUrl:
      "https://i.pinimg.com/564x/f0/1e/4a/f01e4a4629d82ce76007d757a9ae474d.jpg",
  },
  {
    title: "Mission",
    description:
      "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
    imageUrl:
      "https://i.pinimg.com/564x/f0/1e/4a/f01e4a4629d82ce76007d757a9ae474d.jpg",
  },
  {
    title: "Principal's Message",
    description:
      "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
    imageUrl:
      "https://i.pinimg.com/564x/f0/1e/4a/f01e4a4629d82ce76007d757a9ae474d.jpg",
  },
  {
    title: "Infrastructure and Facilities",
    description: (
      <>
        <p>State-of-the-art science and computer labs.</p>
        <p>Spacious and well-equipped classrooms.</p>
        <p>Library with a vast collection of books and digital resources.</p>
        <p>
          Sports facilities including a playground, gymnasium, and swimming
          pool.
        </p>
      </>
    ),
    imageUrl:
      "https://i.pinimg.com/564x/f0/1e/4a/f01e4a4629d82ce76007d757a9ae474d.jpg",
  },
];

const Aboutus = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
        <Navbar />
        <div className="p-5 md:p-10">
          <h1 className="text-4xl md:text-7xl font-semibold text-center">
            About Us
          </h1>
        </div>
        <div className="relative max-w-full md:max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-zinc-100 h-full hidden md:block"></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="timeline-item flex flex-col items-center md:flex-row mb-8 relative"
              >
                <div className="relative mb-4 mx-5 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-24 h-24">
                  <img
                    src={item.imageUrl}
                    alt={`Event ${index + 1}`}
                    className="w-2/3 h-2/3 rounded-full border-2 border-zinc-900"
                  />
                </div>
                <div
                  className={`timeline-content bg-zinc-800 rounded-lg shadow-md w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  } p-5 md:p-10`}
                >
                  <h2 className="text-lg md:text-xl font-semibold mb-2">
                    {item.title}
                  </h2>
                  <div className="text-sm md:text-base">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
