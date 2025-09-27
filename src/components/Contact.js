import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
        Contact Me
      </h2>

      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 w-full max-w-xl flex flex-col space-y-6">
        {/* Phone */}
        <div className="flex items-center space-x-4">
          <span className="text-blue-600 text-2xl">📞</span>
          <a
            href="tel:9548428362"
            className="text-gray-700 font-medium text-sm sm:text-base hover:text-blue-600 transition"
          >
            +91 9548428362
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <span className="text-blue-600 text-2xl">📧</span>
          <a
            href="mailto:ah5113527@gmail.com"
            className="text-gray-700 font-medium text-sm sm:text-base hover:text-blue-600 transition break-all"
          >
            ah5113527@gmail.com
          </a>
        </div>

        {/* Optional Contact Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium rounded-lg py-3 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
