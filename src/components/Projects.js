import React from "react";

const projects = [
  {
    title: "Education Website",
    description: "Personal education website built with React & Tailwind CSS.",
    image: "/edu.jpg",
    link: "https://mohd-shamail.github.io/Xm--courseMail",
  },
  {
    title: "Learnsy Website",
    description:
      "An e-learning platform offering interactive lessons, quizzes, and course materials for students.",
    image: "https://img.freepik.com/free-vector/online-courses-tutorials_23-2148527610.jpg?w=740&q=80",
    link: "https://learnsy-rose.vercel.app/",
  },
  {
    title: "Solara Beauty Products",
    description:
      "A modern beauty e-commerce website showcasing skincare and cosmetics products with clean UI & smooth UX.",
    image: "/50.jpg",
    link: "https://solara-indol.vercel.app/",
  },
  {
    title: "Clothing Store",
    description:
      "An e-commerce clothing website with modern design, product catalog & checkout features.",
    image: "/cloth.jpg",
    link: "https://clothing-two-sigma.vercel.app/",
  },
  {
    title: "Study Abroad Website",
    description:
      "A website to help students explore overseas study options, courses, and admissions guidance.",
    image: "/stu.jpg",
    link: "https://study-web-ashy.vercel.app/",
  },
  {
    title: "Pizza Website",
    description:
      "A delicious pizza ordering website showcasing menu, deals, and online ordering features.",
    image: "/pizza.jpg",
    link: "https://pizza-liart-eight.vercel.app/",
  },
  {
    title: "Traveling Website",
    description:
      "A travel & tourism website showcasing destinations, tours, and booking features.",
    image: "/travel.jpg",
    link: "https://travelling-black.vercel.app/",
  },
  {
    title: "Travel Listings Website",
    description:
      "A full-stack travel platform showing destination listings, built using modern web technologies.",
    image: "/tra.jpg",
    link: "https://fullstack-project-6v90.onrender.com/listings",
  },
  {
    title: "CyberSecure Website",
    description:
      "A cyber security website providing services, information, and resources on data protection and online safety.",
    image:
      "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?w=740&q=80",
    link: "https://cybersecure-eta.vercel.app/",
  },
  {
    title: "Rooms Booking Website",
    description:
      "A modern room booking website for hotels and accommodations with an intuitive UI and smooth user experience.",
    image:
      "https://img.freepik.com/free-photo/hotel-room-with-bed_23-2150398828.jpg?w=740&q=80",
    link: "https://rooms-orpin.vercel.app/",
  },
  {
    title: "Baby Store Website",
    description:
      "An adorable baby products e-commerce website with a clean layout and smooth shopping flow.",
    image:
      "https://img.freepik.com/free-photo/baby-products-arrangement-still-life_23-2149655734.jpg?w=740&q=80",
    link: "https://baby-lovat.vercel.app/",
  },
  {
    title: "My Web Portfolio",
    description:
      "A personal portfolio website showcasing web development projects and design work.",
    image:
      "https://img.freepik.com/free-photo/website-design-desktop_23-2147651235.jpg?w=740&q=80",
    link: "https://my-web-beta-umber.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 py-10"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-gray-800">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer border border-gray-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-60 md:h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
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
