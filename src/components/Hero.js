import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10"
    >
      {/* Left Side (Text Content) */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black leading-snug">
          Hi, I’m <span className="text-blue-600">Asif Hussain</span> 👋
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
          Full-Stack Website & App Developer
        </h2>
        <p className="text-gray-600 max-w-full md:max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
          I specialize in building modern, scalable, and user-friendly websites
          and mobile applications. With expertise in React, Node.js, and
          MongoDB, I create solutions that deliver performance and exceptional
          user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start pt-4">
          <a
            href="/ASIF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-blue-50 transition"
          >
            My Projects
          </a>
        </div>
      </div>

      {/* Right Side (Image / Illustration) */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center">
        <img
          src="/developer_male.jpg"
          alt="Developer Illustration"
          className="w-56 sm:w-72 md:w-[28rem] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
