import React from "react";

const About = () => {
  return (
    // bg-gradient-to-r from-green-400 via-yellow-400 to-red-400
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-white-800 to-red-300 flex justify-center items-center">
      <div className="container mx-auto px-5 py-10">
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-800">
            About Us
          </h1>

          <p className="mb-6 text-lg md:text-xl text-gray-700">
            Welcome to{" "}
            <span className="font-semibold text-red-800">Indian Flavours</span>!
            We are passionate about delivering delicious and high-quality Indian
            cuisine to your doorstep. Our mission is to make your dining
            experience enjoyable, convenient, and memorable.
          </p>

          <p className="mb-6 text-lg md:text-xl text-gray-700">
            At{" "}
            <span className="font-semibold text-red-800">Indian Flavours</span>,
            we work with the finest chefs to create a diverse menu that caters
            to different tastes and preferences. Whether you're in the mood for
            savory dishes, sweet treats, or refreshing beverages, we have
            something for everyone.
          </p>

          <p className="mb-6 text-lg md:text-xl text-gray-700">
            Our commitment to quality extends to every aspect of our service,
            from carefully selecting fresh ingredients to ensuring timely and
            safe deliveries. Your satisfaction is our top priority, and we
            strive to exceed your expectations with every order.
          </p>

          <p className="mb-6 text-lg md:text-xl text-gray-700">
            Thank you for choosing{" "}
            <span className="font-semibold text-red-800">Indian Flavours</span>.
            We look forward to serving you and making your dining experience
            exceptional. Feel free to explore our menu and discover a world of
            flavors delivered right to your doorstep.
          </p>

          <p className="text-lg md:text-xl text-gray-700">
            If you have any questions or feedback, please don't hesitate to
            contact us. We value your input and are always here to enhance your
            dining experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
