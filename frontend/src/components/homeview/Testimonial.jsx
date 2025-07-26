import React from "react";
import { NavLink } from "react-router-dom";
import profile1 from "../../assets/Image (6).png"
const Testimonial = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex justify-between items-center mb-[60px] gap-3">
        <div className="max-w-[933px]">
          <h1>Our Testimonial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <NavLink className="btn btn-ternary shrink-0 bg-white">view all</NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {/* card */}
        <div className="rounded-[10px] bg-white border-2 border-[#F1F1F3 overflow-hidden">
        <div className=" p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px]  bg-white border-b-2 border-[#F1F1F3] ">
          <p>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          </div>
          <div className="flex justify-between items-center bg-[#FCFCFD]  px-[15px] sm:px-[18px] md:px-[30px] lg:px-[40px] py-6">
            <div className="flex items-center"> 
                <img src={profile1} />
                 <p className="ml-[10px]">Sarah L</p>
            </div>
            
            <NavLink className="btn btn-ternary px-[16px] bg-[#F7F7F8] text-[12px]  md:text-[14px]">
              Read Full Story
            </NavLink>
          </div>
        </div>

         {/* card */}
        <div className="rounded-[10px] bg-white border-2 border-[#F1F1F3 overflow-hidden">
        <div className="p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px]  bg-white border-b-2 border-[#F1F1F3] ">
          <p>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          </div>
          <div className="flex justify-between items-center bg-[#FCFCFD] p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px] py-6">
            <div className="flex items-center"> 
                <img src={profile1} />
                 <p className="ml-[10px]">Sarah L</p>
            </div>
            
            <NavLink className="btn btn-ternary px-[16px] bg-[#F7F7F8] text-[12px]  md:text-[14px]">
              Read Full Story
            </NavLink>
          </div>
        </div>
         {/* card */}
        <div className="rounded-[10px] bg-white border-2 border-[#F1F1F3 overflow-hidden">
        <div className="  p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px]  bg-white border-b-2 border-[#F1F1F3] ">
          <p>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          </div>
          <div className="flex justify-between items-center bg-[#FCFCFD]  p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px] py-6">
            <div className="flex items-center"> 
                <img src={profile1} />
                 <p className="ml-[10px]">Sarah L</p>
            </div>
            
            <NavLink className="btn btn-ternary px-[16px] bg-[#F7F7F8] text-[12px]  md:text-[14px]">
              Read Full Story
            </NavLink>
          </div>
        </div>
         {/* card */}
        <div className="rounded-[10px] bg-white border-2 border-[#F1F1F3 overflow-hidden">
        <div className=" p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px]   bg-white border-b-2 border-[#F1F1F3] ">
          <p>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          </div>
          <div className="flex justify-between items-center bg-[#FCFCFD]  p-[15px] sm:p-[18px] md:p-[30px] lg:p-[40px] py-6">
            <div className="flex items-center"> 
                <img src={profile1} />
                 <p className="ml-[10px]">Sarah L</p>
            </div>
            
            <NavLink className="btn btn-ternary px-[16px] bg-[#F7F7F8] text-[12px]  md:text-[14px]">
              Read Full Story
            </NavLink>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Testimonial;
