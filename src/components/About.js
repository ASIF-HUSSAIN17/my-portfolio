import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10"
    >
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
        <img
          src="/Asif.jpeg" // 👈 apni profile image public folder me rakho
          alt="Asif Hussain"
          className="w-48 sm:w-56 md:w-64 rounded-full shadow-lg object-cover border-4 border-blue-600 hover:border-blue-800 transition-all duration-300 transform hover:scale-105"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="flex-1 text-center md:text-left md:pl-10 space-y-4 md:space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          About Me
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Hi! I’m <span className="font-semibold text-blue-600">Asif Hussain</span>, a professional Full-Stack Website & App Developer. 
          I have a passion for building modern, scalable, and user-friendly applications. 
          I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          My expertise includes <span className="font-semibold">React, Node.js, MongoDB</span>, and building responsive web and mobile apps. 
          I love learning new technologies and continuously improving my skills to deliver high-quality projects.
        </p>
        <a
          href="/ASIF.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
