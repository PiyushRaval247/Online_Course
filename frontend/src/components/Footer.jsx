import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Logo.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200  py-10 text-sm text-[#4C4C4D]">
      <div className="max-w-[1340px] px-[30px] mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo & Contact */}
        <div className="flex flex-col  md:items-start md:text-start  space-y-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div className="space-y-1">
            <p>📧 hello@skillbridge.com</p>
            <p>📞 +91 91813 23 2309</p>
            <p>📍 Somewhere in the World</p>
          </div>
        </div>

        {/* Right: Footer Columns */}
        <div className="flex flex-wrap justify-start md:justify-end gap-8 md:gap-[60px]">
          {/* Column 1 */}
          <div className="">
            <h3 className="font-semibold text-black mb-3">Home</h3>
            <ul className="space-y-2">
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>Our FAQ</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="">
            <h3 className="font-semibold text-black mb-3">About Us</h3>
            <ul className="space-y-2">
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="">
            <h3 className="font-semibold text-black mb-3">Social Profiles</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-[#F1F1F3] p-2 rounded-md">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="bg-[#F1F1F3] p-2 rounded-md">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="bg-[#F1F1F3] p-2 rounded-md">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-[#F1F1F3] pt-4">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
