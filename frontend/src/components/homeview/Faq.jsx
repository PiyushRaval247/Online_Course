import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import arrowicon from "../../assets/Vector.png";
import { NavLink } from "react-router-dom";

const faqs = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    buttonText: "Enrollment Process for Different Courses",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "You can expect direct support from instructors via Q&A forums, live sessions, and email.",
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most courses are self-paced, allowing you to learn at your own convenience.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 xl:20 my-[26px] sm:my-[30px] md:my-[60px] lg:my-[100px] gap-20">
      <div>
        <h1 className="leading-[120%] mb-2">Frequently Asked Questions</h1>
        <p className="mb-10">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <NavLink className="btn btn-ternary">See All FAQ’s</NavLink>
      </div>
      <div className="mb-[-30px] ">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            expanded={expanded === index}
            onChange={() => handleToggle(index)}
            elevation={0}
            className="border border-[#F1F1F3] rounded-xl mb-[30px]"
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            {/* ✅ AccordionSummary (same visual layout) */}
            <AccordionSummary
              sx={{
                padding: 0,
                "& .MuiAccordionSummary-content": {
                  padding: {
                    xs: "16px 12px", // 👈 default for small devices
                    sm:"18px 18px",
                    md: "24px 40px", // 👈 override for medium and up
                  },
                },
                "&:before": {
                  display: "none",
                },
              }}
              className="px-6 pt-5 pb-4"
            >
              <div
                className={`flex justify-between items-start w-full gap-10 ${
                  expanded === index ? "border-b border-[#F1F1F3] pb-5" : ""
                }`}
              >
                <p className="font-medium text-[#262626] max-w-[467px] text-[18px]">
                  {faq.question}
                </p>
                <div className="bg-[#FFF4E5] w-8 h-8 flex items-center justify-center rounded-md">
                  {expanded === index ? (
                    <CloseIcon fontSize="small" />
                  ) : (
                    <AddIcon fontSize="small" />
                  )}
                </div>
              </div>
            </AccordionSummary>

            {/* ✅ Expandable content */}
            <AccordionDetails className="px-6 pb-6 pt-4 transition-all duration-300 ease-in-out">
              <p className="text-gray-600 mb-4">{faq.answer}</p>

              {faq.buttonText && (
                <button className="flex items-center justify-between bg-[#F7F7F8]  rounded-md w-full text-sm font-medium py-4 px-6">
                  {faq.buttonText}
                  <div className="bg-white  rounded-full  p-[18px] inline-block h-12 w-12 shrink-0 ">
                    <img src={arrowicon} className="w-full h-full" />
                  </div>
                </button>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
