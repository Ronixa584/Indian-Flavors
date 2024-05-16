import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold">Indian Flavours</h2>
            <p className="mt-2 text-gray-400">
              Delicious Food Delivered to Your Doorstep
            </p>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Menu
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-1">Aniket Subhash Patil</p>
              <p className="mb-1">Kolhapur, India</p>
              <p className="mb-1">
                Email:{" "}
                <a
                  href="mailto:asp15299@gmail.com"
                  className="hover:text-white transition duration-300"
                >
                  asp15299@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Indian Flavours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
