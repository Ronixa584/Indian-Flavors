import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-yellow-400 flex justify-center items-center">
      <div className="container mx-auto p-5">
        <div className="m-2 p-5 text-center">
          <h1 className="text-3xl font-bold mb-8">About Us</h1>

          <p className="mb-4">
            Welcome to Food Kingdom! We are passionate about delivering
            delicious and high-quality food to your doorstep. Our mission is to
            make your dining experience enjoyable, convenient, and memorable.
          </p>

          <p className="mb-4">
            At Food Kingdom, we work with the finest chefs to create a diverse
            menu that caters to different tastes and preferences. Whether you're
            in the mood for savory dishes, sweet treats, or refreshing
            beverages, we have something for everyone.
          </p>

          <p className="mb-4">
            Our commitment to quality extends to every aspect of our service,
            from carefully selecting fresh ingredients to ensuring timely and
            safe deliveries. Your satisfaction is our top priority, and we
            strive to exceed your expectations with every order.
          </p>

          <p className="mb-4">
            Thank you for choosing Food Kingdom. We look forward to serving you
            and making your dining experience exceptional. Feel free to explore
            our menu and discover a world of flavors delivered right to your
            doorstep.
          </p>

          <p>
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
