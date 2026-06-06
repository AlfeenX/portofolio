import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { TfiArrowTopRight } from "react-icons/tfi";

const App = () => {
  return (
    <main className="mx-auto">
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-100">
        <p className="font-geist font-bold text-lg">HELLO!</p>
        <p className="font-geist font-bold text-lg">MENU.</p>
      </nav>

      <section className="relative overflow-hidden h-[95vh] mb-4">
        <div className="absolute inset-0 flex-center">
          <h1 className="font-thunder text-8xl z-30">ALFIN BCHTR</h1>
          <img
            src=""
            alt=""
            className="absolute top-80 right-76 w-45 h-32 bg-amber-50 "
          />
          <img
            src=""
            alt=""
            className="absolute top-40 left-55 w-64 h-32 aspect-auto bg-amber-50 "
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center w-full px-4">
          <p className="font-geist text-sm">//Full Stack Developer</p>
          <p className="font-geist text-sm">//Kediri, Indonesia</p>
        </div>
      </section>

      <section className=" h-screen justify-center items-center flex flex-col overflow-hidden border border-gray-200">
        <p className="font-nohemi text-4xl text-center max-w-7xl p-4">
          A passionate full stack developer with a knack for crafting seamless
          user experiences and robust backend solutions. With a strong
          foundation in both frontend and backend technologies, I thrive on
          creating innovative applications that solve real-world problems. My
          journey in coding has been fueled by curiosity and a relentless drive
          to learn, making me adept at navigating the ever-evolving landscape of
          web development. 
        </p>
      </section>

      <section className="h-screen w-full relative flex justify-center items-center overflow-hidden gap-0 px-4">
        <a href="https://github.com/AlfeenX/Festix" className="absolute w-full inset-0 text-center bg-[url(https://i.pinimg.com/1200x/c4/f8/6a/c4f86a718b4b805ff6e9f029d1feacf8.jpg)] bg-cover bg-center f">
          <div className="absolute inset-0 bg-gray-600 opacity-80 flex-center flex-col">
            <h1 className="text-white text-8xl font-bold font-geist">Festix</h1>
            <p className="text-white text-lg font-light font-geist">Event Management Platform</p>
          </div>
        </a>
      </section>

      <section className="h-screen w-full relative flex justify-center items-center overflow-hidden gap-0 px-4">
        <a href="" className="absolute w-full inset-0 text-center bg-[url(https://i.pinimg.com/1200x/7a/5f/e9/7a5fe966dbd969fbf9a4cf533204ae26.jpg)] bg-cover bg-center f">
          <div className="absolute inset-0 bg-[#cbb77e] opacity-80 flex-center flex-col">
            <h1 className="text-white text-8xl font-bold font-geist">Velora</h1>
            <p className="text-white text-lg font-light font-geist">E-commerce Platform</p>
          </div>
        </a>
      </section>
      <section className="h-screen w-full relative flex justify-center items-center overflow-hidden gap-0 px-4">
        <a href="" className="absolute w-full inset-0 text-center bg-[url(https://i.pinimg.com/1200x/11/bc/ff/11bcffc03d4b419e9e2f551206f2714d.jpg)] bg-cover bg-center opacity-90">
          <div className="absolute inset-0 bg-blue-900 opacity-80 flex-center flex-col">
            <h1 className="text-white text-8xl font-bold font-geist">SMK Cakrawala</h1>
            <p className="text-white text-lg font-light font-geist">Educational Institution</p>
          </div>
        </a>
      </section>

      <section className="h-screen w-full relative overflow-hidden gap-0 px-4 flex-col">
        <p className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-lg font-light tracking-[0.5em] font-geist whitespace-nowrap">
          Get in Touch
        </p>

        <div className="absolute top-1/2 left-[53%] transform -translate-x-1/2 -translate-y-1/2 flex items-center whitespace-nowrap">
          <h1 className="text-[150px] font-thunder leading-none">CONTACT ME</h1>
          <TfiArrowTopRight className=" text-amber-500 shrink-0 m-0" size={150} />
        </div>

        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 flex gap-4 flex-wrap justify-center max-w-3xl">
          <a href="" className="bg-amber-500 text-white px-4 py-2 rounded-md">
            GitHub
          </a>
          <a href="" className="bg-amber-500 text-white px-4 py-2 rounded-md">
            LinkedIn
          </a>
          <a href="" className="bg-amber-500 text-white px-4 py-2 rounded-md">
            Instagram
          </a>
        </div>

        <div className="absolute -right-100 bottom-0 rotate-135 h-max flex items-center gap-4">
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
          <div className="w-32 h-32 bg-gray-600 opacity-30"></div>
        </div>
      </section>
    </main>
  );
};

export default App;
