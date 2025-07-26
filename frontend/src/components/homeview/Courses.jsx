import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/Image (1).png";
import img3 from "../../assets/Image (2).png";
import img4 from "../../assets/Image (3).png";
import img5 from "../../assets/Image (4).png";
import img6 from "../../assets/Image (5).png";

const Courses = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex justify-between items-center mb-[60px] gap-3 ">
        <div className="max-w-[933px]">
          <h1>Our Courses</h1>
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
        <div className="bg-white p-[15px] sm:p-[24px] md:p-[40px]  rounded-[10px] ">
          <img src={img1} className="w-full" />
          <div className="flex justify-between items-center my-6">
            <div className="flex ">
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3]">4 Weeks</NavLink>
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3] ml-[10px]">4 Weeks</NavLink>
            </div>
            <NavLink className="text-[12px]  md:text-[14px]">By John Smith</NavLink>
          </div>
          <h3 className="mb-[10px]">Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <div>
          <NavLink className="inline-block w-full text-center py-[14px] bg-[#FCFCFD] border-2 border-[#F1F1F3] mt-[24px] rounded-md">
            Get it Now
          </NavLink>
          </div>
        </div>

         <div className="bg-white p-[40px]  rounded-[10px] ">
          <img src={img2} className="w-full"/>
          <div className="flex justify-between items-center my-6">
            <div className="flex ">
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3]">4 Weeks</NavLink>
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3] ml-[10px]">4 Weeks</NavLink>
            </div>
            <NavLink className="text-[12px]  md:text-[14px]" >By John Smith</NavLink>
          </div>
          <h3 className="mb-[10px]">Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <div>
          <NavLink className="inline-block w-full text-center py-[14px] bg-[#FCFCFD] border-2 border-[#F1F1F3] mt-[24px] rounded-md">
            Get it Now
          </NavLink>
          </div>
        </div>

         <div className="bg-white p-[40px]  rounded-[10px] ">
          <img src={img3} className="w-full" />
          <div className="flex justify-between items-center my-6">
            <div className="flex ">
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3]">4 Weeks</NavLink>
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3] ml-[10px]">4 Weeks</NavLink>
            </div>
            <NavLink className="text-[12px]  md:text-[14px]" >By John Smith</NavLink>
          </div>
          <h3 className="mb-[10px]">Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <div>
          <NavLink className="inline-block w-full text-center py-[14px] bg-[#FCFCFD] border-2 border-[#F1F1F3] mt-[24px] rounded-md">
            Get it Now
          </NavLink>
          </div>
        </div>

         <div className="bg-white p-[40px]  rounded-[10px] ">
          <img src={img4} className="w-full" />
          <div className="flex justify-between items-center my-6">
            <div className="flex ">
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3]">4 Weeks</NavLink>
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3] ml-[10px]">4 Weeks</NavLink>
            </div>
            <NavLink className="text-[12px]  md:text-[14px]" >By John Smith</NavLink>
          </div>
          <h3 className="mb-[10px]">Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <div>
          <NavLink className="inline-block w-full text-center py-[14px] bg-[#FCFCFD] border-2 border-[#F1F1F3] mt-[24px] rounded-md">
            Get it Now
          </NavLink>
          </div>
        </div>

         <div className="bg-white p-[40px]  rounded-[10px] ">
          <img src={img5} className="w-full" />
          <div className="flex justify-between items-center my-6">
            <div className="flex ">
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3]">4 Weeks</NavLink>
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3] ml-[10px]">4 Weeks</NavLink>
            </div>
            <NavLink className="text-[12px]  md:text-[14px]" >By John Smith</NavLink>
          </div>
          <h3 className="mb-[10px]">Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <div>
          <NavLink className="inline-block w-full text-center py-[14px] bg-[#FCFCFD] border-2 border-[#F1F1F3] mt-[24px] rounded-md">
            Get it Now
          </NavLink>
          </div>
        </div>

         <div className="bg-white p-[40px]  rounded-[10px] ">
          <img src={img6} className="w-full" />
          <div className="flex justify-between items-center my-6">
            <div className="flex ">
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3]">4 Weeks</NavLink>
              <NavLink className="btn px-[8px] py-[6px] sm:px-[14px] sm:py-[10px] text-[10px] sm:text-[12px] md:text-[14px] bg-white border-2 border-[#F1F1F3] ml-[10px]">4 Weeks</NavLink>
            </div>
            <NavLink className="text-[12px]  md:text-[14px]">By John Smith</NavLink>
          </div>
          <h3 className="mb-[10px]">Web Design Fundamentals</h3>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <div>
          <NavLink className="inline-block w-full text-center py-[14px] bg-[#FCFCFD] border-2 border-[#F1F1F3] mt-[24px] rounded-md">
            Get it Now
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
