import React from "react";
import about from "../assets/dua jari.jpg";

export const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Hello, I'm Ahmad Fauzan, an Informatics student at Amikom University Yogyakarta with a deep passion for front-end development. My expertise in HTML, CSS, and JavaScript enables me to craft responsive and visually compelling
              website interfaces. I am committed to continually refining my skills with ReactJS to deliver dynamic user experiences.
            </p>
          </div>
        </div>
        <img src={about} width={300} height={300} alt="About Me" className="mx-auto rounded-3-xl py-8 md:py-0" />
      </div>
    </div>
  );
};
