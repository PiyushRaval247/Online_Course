import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import yes from "../../assets/Icon Container (1).png";
import no from "../../assets/Icon Container (2).png";
const Pricing = () => {
  const [activePlan, setActivePlan] = useState("monthly");

  const pricingData = {
    monthly: [
      {
        id: 1,
        name: "Free Plan",
        price: "$54",
        duration: "/month",
        features: [
          { text: "Access to selected free courses.", included: true },
          { text: "Limited course materials and resources.", included: true },
          { text: "Basic community support.", included: true },
          { text: "No certification upon completion.", included: true },
          { text: "Ad-supported platform.", included: true },
          {
            text: "Access to exclusive Pro Plan community forums.",
            included: false,
          },
          { text: "Early access to new courses and updates.", included: false },
        ],
      },
      {
        id: 2,
        name: "Pro Plan",
        price: "$99",
        duration: "/month",
        features: [
          { text: "Unlimited access to all courses.", included: true },
          { text: "Unlimited course materials and resources.", included: true },
          { text: "Priority support from instructors.", included: true },
          { text: "Course completion certificates.", included: true },
          { text: "Ad-free experience.", included: true },
          {
            text: "Access to exclusive Pro Plan community forums.",
            included: true,
          },
          { text: "Early access to new courses and updates.", included: true },
        ],
      },
    ],
    yearly: [
      {
        id: 1,
        name: "Free Plan",
        price: "$540",
        duration: "/year",
        features: [
          { text: "Access to selected free courses.", included: true },
          { text: "Limited course materials and resources.", included: true },
          { text: "Basic community support.", included: true },
          { text: "No certification upon completion.", included: true },
          { text: "Ad-supported platform.", included: true },
          {
            text: "Access to exclusive Pro Plan community forums.",
            included: false,
          },
          { text: "Early access to new courses and updates.", included: false },
        ],
      },
      {
        id: 2,
        name: "Pro Plan",
        price: "$990",
        duration: "/year",
        features: [
          { text: "Unlimited access to all courses.", included: true },
          { text: "Unlimited course materials and resources.", included: true },
          { text: "Priority support from instructors.", included: true },
          { text: "Course completion certificates.", included: true },
          { text: "Ad-free experience.", included: true },
          {
            text: "Access to exclusive Pro Plan community forums.",
            included: true,
          },
          { text: "Early access to new courses and updates.", included: true },
        ],
      },
    ],
  };

  return (
    <div className="">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-[60px] gap-3 flex-wrap">
        <div className="max-w-[933px]">
          <h1 className="text-3xl font-semibold mb-2">Our Pricing</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-end w-full lg:w-auto p-[12px] bg-white items-center rounded-md">
          <button
            onClick={() => setActivePlan("monthly")}
            className={` px-[24px] py-[12px] ${
              activePlan === "monthly"
                ? "bg-[#FF9500] text-white rounded-md"
                : "bg-white "
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActivePlan("yearly")}
            className={` px-[24px] py-[12px] ${
              activePlan === "yearly"
                ? "bg-[#FF9500] text-white rounded-md"
                : "bg-white "
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-[20px] bg-white p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] rounded-xl">
        {pricingData[activePlan].map((plan, index) => (
          <div
            key={index}
            className="rounded-[10px] shadow hover:shadow-md transition bg-[#FCFCFD]"
          >
            <div className="">
            <h4 className="bg-[#FFF9F0] w-full py-[10px] border-2 rounded-md border-[#FFEACC] text-center">
              {plan.name}
            </h4>

           <div className="p-[20px]">
            <h1 className=" font-medium text-6xl leading-[73%] text-center my-[50px]">
              {plan.price}
              <span className="text-base text-[#4C4C4D] font-medium leading-[73%]">
                {plan.duration}
              </span>
            </h1>
            <div className="bg-white border-2 border-[#F1F1F3] rounded-md">
                <div className=" p-[15px] sm:p-[20px] md:p-[26px] lg:p-[30px] ">
              <h4 className="mb-6 text-center">Available Features</h4>
              <div className="p-[0px] sm:p-[15px] md:p-[26px] lg:p-[30px] grid gap-[20px]">
                
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex  gap-2 border-2 border-[#F1F1F3]  p-3 rounded-md items-center"
                  >
                    <img
                      src={feature.included ? yes : no}
                      alt={feature.included ? "yes" : "no"}
                      className="w-[20px] h-[20px] mt-1"
                    />
                    <p
                      className={`text-sm ${
                        feature.included ? "text-black" : "text-[#8F8F8F]"
                      }`}
                    >
                      {feature.text}
                    </p>
                  </div>
                ))}
                     
              </div>
              </div>
              <NavLink className="w-full  inline-block p-[20.5px] bg-[#FF9500]  rounded-b-md text-center text-white font-semibold leading-[150%] hover:bg-orange-500">
                Get Started
              </NavLink>
              
            </div>
       
              </div>
          </div>




           </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
