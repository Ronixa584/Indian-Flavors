import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useCity } from "../utils/cityContext";
import useRestaurantNames from "../utils/useRestaurantNames";
import Shimmer2 from "./Shimmer2";
import { IMG_CDN_URL, OFFER_LOGO_URL } from "../contants";

const RestaurantMenu = () => {
  const { id_R } = useParams();
  const { location } = useCity();
  const [restaurantNames, restaurantMenuNames, restaurantOffers] =
    useRestaurantNames({ id_R, selectedCity: location });

  useEffect(() => {
    console.log("Finally at Menu " + location);
  }, [location]);

  if (!restaurantNames) {
    return <Shimmer2 />;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="mb-4 flex justify-center items-center">
        <div className="w-1/2">
          <img
            src={IMG_CDN_URL + restaurantNames.cloudinaryImageId}
            alt={restaurantNames.name}
            className="w-[600px] h-[500px] rounded-lg"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold mb-2">{restaurantNames.name}</h1>
          <div className="text-gray-500">
            {restaurantNames.areaName}, {restaurantNames.city}
          </div>
          <div className="mt-2">
            <span className="bg-yellow-400 py-1 px-2 rounded-md text-white">
              {restaurantNames.avgRating} stars
            </span>
          </div>
          <div className="mt-2 text-gray-700">
            {restaurantNames.costForTwoMessage}
          </div>
        </div>
      </div>

      <div className="Offers p-4">
        <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {restaurantOffers.map((item, index) => (
            <div
              key={index}
              className="flex-none w-50 m-3 bg-white p-4 shadow-lg rounded-lg transform transition-transform duration-300"
            >
              <div className="flex items-center m-4">
                <img
                  src={OFFER_LOGO_URL + item?.info.offerLogo}
                  alt={item?.info.header}
                  className="object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item?.info.header}</h3>
                  <span className="text-sm text-gray-500">
                    {item?.info.offerTag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl font-bold mb-4 mt-4">
          Restaurant Menu
        </h1>
        <GroupedMenu menuItems={restaurantMenuNames} />
      </div>
    </div>
  );
};

const GroupedMenu = ({ menuItems }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getItemQuantity = (id) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const groupByCategory = (items) => {
    return items.reduce((groups, item) => {
      const category = item.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {});
  };

  const groupedItems = groupByCategory(menuItems);

  return (
    <div className="flex flex-col justify-center items-center">
      {Object.keys(groupedItems).map((category) => (
        <Accordion key={category} title={category}>
          <ul className="space-y-4">
            {groupedItems[category].map((item) => {
              const quantity = getItemQuantity(item.id);
              return (
                <li
                  key={item?.id}
                  className="flex flex-col md:flex-row items-center md:justify-between bg-white p-4 rounded-lg transform transition-transform duration-300 shadow-[inset_0px_0px_68px_0px_#fbd38d]"
                >
                  <div className="md:flex-1 md:pr-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-2xl">{item?.name}</span>
                    </div>
                    <div className="flex gap-2 items-center mb-2">
                      <span
                        className={`font-semibold ${
                          item?.itemAttribute.vegClassifier === "VEG"
                            ? "text-white bg-green-500 py-1 px-2 rounded-md"
                            : "text-white bg-red-500 py-1 px-2 rounded-md"
                        }`}
                      >
                        {item?.itemAttribute.vegClassifier === "VEG"
                          ? "VEG"
                          : "Non VEG"}
                      </span>
                      <span className="font-semibold">|</span>
                      <span className="bg-amber-400 py-1 px-2 rounded-md">
                        <b className="text-white">
                          {item?.ratings.aggregatedRating.rating} stars
                        </b>
                      </span>
                      <span className="font-semibold">|</span>
                      <span className="text-white bg-red-500 py-1 px-2 rounded-md">
                        Rs.{" "}
                        {isNaN(item?.price)
                          ? (39900 / 100).toFixed(2)
                          : (item?.price / 100).toFixed(2)}
                      </span>
                    </div>
                    <div className="text-gray-600">{item?.description}</div>
                  </div>

                  <div className="relative mt-4">
                    <img
                      src={IMG_CDN_URL + item?.imageId}
                      className="w-full md:w-48 h-48 object-cover rounded-lg"
                    />
                    {quantity > 0 ? (
                      <div className="absolute bottom-1 right-1/4 flex space-x-2">
                        <div className="rounded-full flex justify-center items-center">
                          <button
                            onClick={() => handleRemoveItem(item)}
                            className="bg-red-500 text-white py-1 px-3 hover:bg-red-600 transition duration-200 flex justify-center items-center"
                          >
                            -
                          </button>
                          <span className="bg-white text-black py-1 px-3 flex justify-center items-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => handleAddItem(item)}
                            className="bg-green-500 text-white py-1 px-3 hover:bg-green-600 transition duration-200 flex justify-center items-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute bottom-1 right-1/3 flex space-x-2">
                        <button
                          onClick={() => handleAddItem(item)}
                          className="bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-600 transition duration-200"
                        >
                          Add
                        </button>
                      </div>
                    )}
                  </div>
                  {/* </div> */}
                </li>
              );
            })}
          </ul>
        </Accordion>
      ))}
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4 w-[1000px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 transition duration-200 focus:outline-none"
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div className={`${isOpen ? "block" : "hidden"} p-4`}>{children}</div>
    </div>
  );
};

export default RestaurantMenu;
