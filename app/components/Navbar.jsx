import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <a>
          <Image src={assets.logo} alt="Portfolio Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li href="#about">
            <a>About me</a>
          </li>
          <li href="#services">
            <a>Services</a>
          </li>
          <li href="#work">
            <a>My Work</a>
          </li>
          <li href="#contact">
            <a>Contact me</a>
          </li>
        </ul>

        <div>
          <a href="#contact">
            Contact <Image src={assets.arrow_icon} alt="Contact arrow icon" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
