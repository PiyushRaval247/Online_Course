import React from "react";
import { useState } from "react";
import logo1 from "../../assets/Logo (2).png";
import logo2 from "../../assets/Logo (3).png";
import logo3 from "../../assets/Logo (4).png";
import logo4 from "../../assets/Logo (5).png";
import logo5 from "../../assets/Logo (6).png";
import logo6 from "../../assets/Logo (7).png";
import logo7 from "../../assets/Logo (8).png";
import myvideo from '../../assets/education.mp4';
import poster from '../../assets/Container.png';
import playicon from '../../assets/Button.png';
import ReactPlayer from "react-player";
import { motion } from "motion/react";
const Companies = () => {  
const [isPlaying, setIsPlaying] = useState(false);
  const CompanyLogoData = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
    { src: logo7, alt: "Logo 7" },
  ];


  return (
    <>
    <div className=" pb-[80px] ">
      <div className="flex relative overflow-hidden bg-white rounded-[8px] p-[24px] border-2 border-[#F1F1F3]">
        <motion.div
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {CompanyLogoData.map(({ src, alt }, index) => (
                <div key={`${alt}-${index}`} className="flex-shrink-0 py-[25px] px-[55px] border-r-2 border-[#F1F1F3]">
                  <img
                    src={src}
                    alt={alt}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
           <div className="relative w-full  mx-auto rounded-xl overflow-hidden" style={{ height: "650px" }}>
      {!isPlaying && (
        <>
          <img
            src={poster} // your poster image
            alt="Video Poster"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
          <img src={playicon }/>
          </div>
        </>
      )}

      {isPlaying && (
        <ReactPlayer
          url={myvideo}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
        />
      )}
    </div>
    </>
  );
};

export default Companies;
