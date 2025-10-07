import React from "react";

const projects = [
  {
    title: "Education Website",
    description:
      "Personal education website built with React & Tailwind CSS for college submission as part of my diploma project.",
    client: "Mohammad Ayan, Pilibhit (U.P.)",
    price: "₹0 (College Project)",
    image: "/edu.jpg",
    link: "https://mohd-shamail.github.io/Xm--courseMail",
  },
  {
    title: "Learnsy Website",
    description:
      "An e-learning platform offering interactive lessons, quizzes, and course materials for students. Built as a freelancing project for Mr. Rajesh Khan from Pilibhit.",
    client: "Rajesh Khan, Pilibhit (U.P.)",
    price: "₹9,500",
    image:
      "https://img.freepik.com/free-vector/online-courses-tutorials_23-2148527610.jpg?w=740&q=80",
    link: "https://learnsy-rose.vercel.app/",
  },
  {
    title: "Solara Beauty Products",
    description:
      "A modern beauty e-commerce website showcasing skincare and cosmetics products with clean UI & smooth UX. Developed for Ms. Priya Singh, Pilibhit.",
    client: "Priya Singh, Pilibhit (U.P.)",
    price: "₹8,000",
    image: "/50.jpg",
    link: "https://solara-indol.vercel.app/",
  },
  {
    title: "Clothing Store",
    description:
      "An e-commerce clothing website with modern design, product catalog & checkout features. Built for Aman Verma from Pilibhit.",
    client: "Aman Verma, Pilibhit (U.P.)",
    price: "₹7,500",
    image: "/cloth.jpg",
    link: "https://clothing-two-sigma.vercel.app/",
  },
  {
    title: "Study Abroad Website",
    description:
      "A website to help students explore overseas study options, courses, and admissions guidance. Created for Ms. Sana Ali, Pilibhit.",
    client: "Sana Ali, Pilibhit (U.P.)",
    price: "₹9,000",
    image: "/stu.jpg",
    link: "https://study-web-ashy.vercel.app/",
  },
  {
    title: "Pizza Website",
    description:
      "A pizza ordering website showcasing menu, deals, and online ordering. Designed for Sameer Qureshi from Pilibhit.",
    client: "Sameer Qureshi, Pilibhit (U.P.)",
    price: "₹6,000",
    image: "/pizza.jpg",
    link: "https://pizza-liart-eight.vercel.app/",
  },
  {
    title: "Traveling Website",
    description:
      "A travel & tourism website showcasing destinations and booking features. Freelance project for Arjun Patel, Pilibhit.",
    client: "Arjun Patel, Pilibhit (U.P.)",
    price: "₹9,800",
    image: "/travel.jpg",
    link: "https://travelling-black.vercel.app/",
  },
  {
    title: "Travel Listings Website",
    description:
      "A full-stack travel platform showing destination listings, built using modern web technologies. Developed for Deepanshu Sharma, Pilibhit.",
    client: "Deepanshu Sharma, Pilibhit (U.P.)",
    price: "₹10,000",
    image: "/tra.jpg",
    link: "https://fullstack-project-6v90.onrender.com/listings",
  },
  {
    title: "CyberSecure Website",
    description:
      "A cyber security website providing services and information on data protection. Built for Adnan Husain, Pilibhit.",
    client: "Adnan Husain, Pilibhit (U.P.)",
    price: "₹8,700",
    image:
      "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?w=740&q=80",
    link: "https://cybersecure-eta.vercel.app/",
  },
  {
    title: "Rooms Booking Website",
    description:
      "A modern room booking website for hotels and accommodations with an intuitive UI. Built for Faizan Ahmed, Pilibhit.",
    client: "Faizan Ahmed, Pilibhit (U.P.)",
    price: "₹7,800",
    image:
      "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://rooms-orpin.vercel.app/",
  },
  {
    title: "Baby Store Website",
    description:
      "An adorable baby products e-commerce website built for Irfan Malik, Pilibhit.",
    client: "Irfan Malik, Pilibhit (U.P.)",
    price: "₹6,500",
    image:
      "https://img.freepik.com/free-vector/online-courses-tutorials_23-2148527610.jpg?w=740&q=80",
    link: "https://baby-lovat.vercel.app/",
  },
  {
    title: "My Web Portfolio",
    description:
      "A personal portfolio website showcasing web development projects and design work.",
    client: "Self / Personal Project, Pilibhit (U.P.)",
    price: "₹0 (Personal Project)",
    image:
      "https://img.freepik.com/free-photo/website-design-desktop_23-2147651235.jpg?w=740&q=80",
    link: "https://my-web-beta-umber.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col flex-grow p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 italic mb-1">
                <strong>Client:</strong> {project.client}
              </p>
              <p className="text-sm text-gray-700 font-semibold mb-4">
                💰 {project.price}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center w-full px-5 py-2 sm:py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
