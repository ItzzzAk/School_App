import React from "react";

const Banner = () => {
  const items = [
    {
      title: "Annual Sports Day",
      description: "Celebrating Excellence in Sports.",
      imgSrc:
        "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Science Exhibition",
      description: "Showcasing Student Innovations.",
      imgSrc:
        "https://images.unsplash.com/photo-1493528237448-144452699e16?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cultural Fest",
      description: "Embracing Diversity & Creativity.",
      imgSrc:
        "https://images.unsplash.com/photo-1627896052583-00e12489f600?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="banner cont w-full h-full p-5 flex flex-wrap justify-center gap-10 relative">
        {items.map((item, index) => (
          <div key={index} className="box w-72 bg-zinc-800 rounded-md p-5">
            <div className="imgsec w-full h-[25vh] rounded-md bg-zinc-600 mb-2 overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={item.imgSrc}
                alt={item.title}
              />
            </div>
            <div className="textsec">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <span className="text-sm">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
