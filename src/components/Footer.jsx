//Responsive
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">FOOD KINGDOM</h2>
            <p className="mt-2">Delicious Food Delivered to Your Doorstep</p>
          </div>
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-gray-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-gray-500 transition duration-300"
                >
                  Menu
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-gray-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="hover:text-gray-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <address>
              <p className="mb-1">Aniket Subhash Patil</p>
              <p className="mb-1">Kolhapur, India</p>
              <p className="mb-1">Email: asp15299@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2023 Food Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
