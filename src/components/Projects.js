import React from "react";

const projects = [
  {
    title: "Education Website",
    description:
      "Personal education website built with React & Tailwind CSS for college submission. Built for Jamia Millia Islamia project showcase.",
    client: "Jamia Millia Islamia",
    price: "₹0 (College Project)",
    image: "/edu.jpg",
    link: "https://mohd-shamail.github.io/Xm--courseMail",
  },
  {
    title: "Learnsy Website",
    description:
      "An e-learning platform offering interactive lessons, quizzes, and course materials for students. Built as a freelancing project for Mr. Rajesh Mehta from Pune.",
    client: "Rajesh Mehta, Pune",
    price: "₹9,500",
    image:
      "https://img.freepik.com/free-vector/online-courses-tutorials_23-2148527610.jpg?w=740&q=80",
    link: "https://learnsy-rose.vercel.app/",
  },
  {
    title: "Solara Beauty Products",
    description:
      "A modern beauty e-commerce website showcasing skincare and cosmetics products with clean UI & smooth UX. Developed for Ms. Priya Sharma, Delhi as a freelance project.",
    client: "Priya Sharma, Delhi",
    price: "₹8,000",
    image: "/50.jpg",
    link: "https://solara-indol.vercel.app/",
  },
  {
    title: "Clothing Store",
    description:
      "An e-commerce clothing website with modern design, product catalog & checkout features. Built for Aman Verma, Mumbai as a freelancer.",
    client: "Aman Verma, Mumbai",
    price: "₹7,500",
    image: "/cloth.jpg",
    link: "https://clothing-two-sigma.vercel.app/",
  },
  {
    title: "Study Abroad Website",
    description:
      "A website to help students explore overseas study options, courses, and admissions guidance. Created for A2Z Education Consultancy, Hyderabad.",
    client: "A2Z Education Consultancy, Hyderabad",
    price: "₹9,000",
    image: "/stu.jpg",
    link: "https://study-web-ashy.vercel.app/",
  },
  {
    title: "Pizza Website",
    description:
      "A pizza ordering website showcasing menu, deals, and online ordering. Designed for SliceHub Pizzeria, Lucknow.",
    client: "SliceHub Pizzeria, Lucknow",
    price: "₹6,000",
    image: "/pizza.jpg",
    link: "https://pizza-liart-eight.vercel.app/",
  },
  {
    title: "Traveling Website",
    description:
      "A travel & tourism website showcasing destinations and booking features. Freelance project for Mr. Arjun Patel, Ahmedabad.",
    client: "Arjun Patel, Ahmedabad",
    price: "₹9,800",
    image: "/travel.jpg",
    link: "https://travelling-black.vercel.app/",
  },
  {
    title: "Travel Listings Website",
    description:
      "A full-stack travel platform showing destination listings, built using modern web technologies. Developed for TripNest Pvt. Ltd., Bangalore.",
    client: "TripNest Pvt. Ltd., Bangalore",
    price: "₹10,000",
    image: "/tra.jpg",
    link: "https://fullstack-project-6v90.onrender.com/listings",
  },
  {
    title: "CyberSecure Website",
    description:
      "A cyber security website providing services and information on data protection. Built for TechDefend Solutions, Noida.",
    client: "TechDefend Solutions, Noida",
    price: "₹8,700",
    image:
      "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?w=740&q=80",
    link: "https://cybersecure-eta.vercel.app/",
  },
  {
    title: "Rooms Booking Website",
    description:
      "A modern room booking website for hotels and accommodations with an intuitive UI. Built for ComfortStay Hotel Group, Jaipur.",
    client: "ComfortStay Hotel Group, Jaipur",
    price: "₹7,800",
    image:
      "https://img.freepik.com/free-photo/hotel-room-with-bed_23-2150398828.jpg?w=740&q=80",
    link: "https://rooms-orpin.vercel.app/",
  },
  {
    title: "Baby Store Website",
    description:
      "An adorable baby products e-commerce website built for TinySteps Store, Chennai.",
    client: "TinySteps Store, Chennai",
    price: "₹6,500",
    image:
      "https://img.freepik.com/free-photo/baby-products-arrangement-still-life_23-2149655734.jpg?w=740&q=80",
    link: "https://baby-lovat.vercel.app/",
  },
  {
    title: "My Web Portfolio",
    description:
      "A personal portfolio website showcasing web development projects and design work.",
    client: "Self / Portfolio",
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
