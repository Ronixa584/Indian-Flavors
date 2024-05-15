import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-yellow-400 flex justify-center items-center">
      <div className="container mx-auto p-6">
        <div className="m-2 p-5">
          <h1 className="text-3xl font-bold mb-4 flex justify-center items-center">
            Contact Us
          </h1>

          <address className="mb-4 text-center">
            <p className="mb-1">Aniket Subhash Patil</p>
            <p className="mb-1">Kolhapur, India</p>
            <p className="mb-1">Email: asp15299@gmail.com</p>
          </address>

          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
