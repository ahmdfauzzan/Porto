import React from "react";
import course from "../assets/course.png";
import movie from "../assets/movie.png";
import todo from "../assets/tofo.png";
import rental from "../assets/rental.png";
import kantin from "../assets/kantin.png";
import porto from "../assets/miniporto.png";

export const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="project">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Project</p>
        <p className="text-gray-400">Check out some of my recent project</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Project */}
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={course} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Online Course</span>
            <div className="pt-8 text-center">
              <a target="_blank" rel="noopener noreferrer" href="https://final-projek-binar-kelas-online.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={movie} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Movie List</span>
            <div className="pt-8 text-center">
              <a target="_blank" rel="noopener noreferrer" href="https://movie-tmdb-theta.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={todo} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Todo List</span>
            <div className="pt-8 text-center">
              <a target="_blank" rel="noopener noreferrer" href="https://final-chapter3.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={rental} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Car Rental</span>
            <div className="pt-8 text-center">
              <a target="_blank" rel="noopener noreferrer" href="https://final-chapter1-35nt40rp1-ahmdfauzzan.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={porto} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Mini Portofolio</span>
            <div className="pt-8 text-center">
              <a target="_blank" rel="noopener noreferrer" href="https://portofolio-three-teal.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={kantin} layout="fill" objectFit="cover" alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Canteen Online</span>
            <div className="pt-8 text-center">
              <a target="_blank" rel="noopener noreferrer" href="https://fprpl.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
