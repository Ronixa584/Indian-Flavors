import React from "react";
import Form from "./Form"; // Ensure the path to your Form component is correct
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-white-800 to-red-300  bg-opacity-25 flex justify-center items-center">
      <div className="container mx-auto p-6 bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <div className="m-2 p-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
            Contact Us
          </h1>

          <address className="mb-8 text-lg text-gray-700 not-italic">
            <p className="mb-1">Aniket Subhash Patil</p>
            <p className="mb-1">Kolhapur, India</p>
            <p className="mb-1">
              Email:{" "}
              <a
                href="mailto:asp15299@gmail.com"
                className="text-blue-600 underline"
              >
                asp15299@gmail.com
              </a>
            </p>
          </address>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
