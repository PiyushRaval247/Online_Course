import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.png";

const Benefits = () => {
  return (
    <div className="py-[100px]">
      <div className="flex justify-between items-center mb-[60px] gap-3">
        <div className="max-w-[933px]">
          <h1>Benefits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <NavLink className="btn btn-ternary shrink-0 bg-white">view all</NavLink>
      </div>
      {/* card wrapper container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {/* card */}
        <div className="bg-white p-[40px]  rounded-[10px] ">
          <h1 className="text-end text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-6 mb-[40px]">01</h1>
          <h3 className="mb-[10px]">Flexible Learning Schedule</h3>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <NavLink className="float-end p-[20.5px] bg-[#FCFCFD] border-2 border-[#F1F1F3 mt-[40px] rounded-md">
            <img src={arrow} />
          </NavLink>
        </div>
        {/* card */}
        <div className="bg-white p-[40px]  rounded-[10px]">
          <h1 className="text-end text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-6 mb-[40px]">01</h1>
          <h3 className="mb-[10px]">Flexible Learning Schedule</h3>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <NavLink className="float-end p-[20.5px] bg-[#FCFCFD] border-2 border-[#F1F1F3 mt-[40px] rounded-md">
            <img src={arrow} />
          </NavLink>
        </div>
        {/* card */}
        <div className="bg-white p-[40px]  rounded-[10px]">
          <h1 className="text-end text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-6 mb-[40px]">01</h1>
          <h3 className="mb-[10px]">Flexible Learning Schedule</h3>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <NavLink className="float-end p-[20.5px] bg-[#FCFCFD] border-2 border-[#F1F1F3 mt-[40px] rounded-md">
            <img src={arrow} />
          </NavLink>
        </div>
        {/* card */}
        <div className="bg-white p-[40px]  rounded-[10px]">
          <h1 className="text-end text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px]leading-6 mb-[40px]">01</h1>
          <h3 className="mb-[10px]">Flexible Learning Schedule</h3>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <NavLink className="float-end p-[20.5px] bg-[#FCFCFD] border-2 border-[#F1F1F3 mt-[40px] rounded-md">
            <img src={arrow} />
          </NavLink>
        </div>
           {/* card */}
        <div className="bg-white p-[40px]  rounded-[10px]">
          <h1 className="text-end text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-6 mb-[40px]">01</h1>
          <h3 className="mb-[10px]">Flexible Learning Schedule</h3>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <NavLink className="float-end p-[20.5px] bg-[#FCFCFD] border-2 border-[#F1F1F3 mt-[40px] rounded-md">
            <img src={arrow} />
          </NavLink>
        </div>
           {/* card */}
        <div className="bg-white p-[40px]  rounded-[10px]">
          <h1 className="text-end text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-6 mb-[40px]">01</h1>
          <h3 className="mb-[10px]">Flexible Learning Schedule</h3>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <NavLink className="float-end p-[20.5px] bg-[#FCFCFD] border-2 border-[#F1F1F3 mt-[40px] rounded-md">
            <img src={arrow} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
