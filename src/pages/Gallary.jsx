import React from "react";
import Navbar from "../components/Navbar";

const Gallary = () => {
  const galleryImages = [
    {
      src: "https://i.pinimg.com/736x/4c/5c/eb/4c5cebd91d5ab87d763ea5bd7e77de1f.jpg",
      description: "Students participating in various sports events.",
    },
    {
      src: "https://i.pinimg.com/564x/fa/a4/d3/faa4d34b73f7ac6891798ade4523689e.jpg",
      description: "Students presenting their science projects.",
    },
    {
      src: "https://i.pinimg.com/564x/1a/47/cc/1a47cca9bbe2b09fe4f672c001336a79.jpg",
      description: "Students performing in the cultural fest.",
    },
    {
      src: "https://i.pinimg.com/736x/e6/a1/70/e6a170426b4403d02e39c95e718939b1.jpg",
      description: "A glimpse of our interactive classrooms.",
    },
    {
      src: "https://i.pinimg.com/564x/4a/2d/fe/4a2dfe84daaa860a4d8485797d0add1f.jpg",
      description: "Students reading and studying in the school library.",
    },
  ];

  const videos = [
    {
      src: "https://www.youtube.com/embed/ktlfwnEvJQE",
      description: "Virtual tour of Springdale Public School.",
    },
    {
      src: "https://www.youtube.com/embed/q9mIjUIiLGo",
      description: "Highlights from the Annual Function 2023.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-7xl font-semibold">Gallery</h1>
      </div>

      <div className="w-full flex gap-5 items-center justify-center mb-10 flex-wrap">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-80 h-[50vh] bg-zinc-700 flex flex-col">
            <div className="w-full h-3/4">
              <img
                className="w-full h-full object-cover object-center"
                src={image.src}
                alt=""
              />
            </div>
            <div className="w-full h-1/4 flex items-center justify-center bg-zinc-800 p-2">
              <span className="text-xl font-medium text-white text-center">
                {image.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center gap-5 p-5">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[30%] h-auto flex flex-col items-center"
          >
            <iframe
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover"
              src={video.src}
              title={`YouTube video player ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span className="text-base sm:text-lg md:text-xl font-semibold text-center mt-2">
              {video.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
