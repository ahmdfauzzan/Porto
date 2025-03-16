import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/profile.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 flex justify-center items-center">
        <img className="w-[300px] lg:w-[400px]" src={heroImage} alt="hero" />
      </div>

      <div className="col-span-2 px-5 text-white my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'am a</span> <br />
          <TypeAnimation sequence={["Frontend Dev", 1000, "React Js", 1000]} wrapper="span" speed={50} repeat={Infinity} />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">My name is Ahmad Fauzan and I have 2 year experience in web development</p>

        <div className="my-8">
          <a href="/SamplePDF.pdf" download="SamplePDF.pdf" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
            Download CV
          </a>
          <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
