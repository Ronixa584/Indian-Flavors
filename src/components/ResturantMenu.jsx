import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer2 from "./Shimmer2";
import useRestaurantNames from "../utils/useRestaurantNames";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { useCity } from "../utils/cityContext";

const RestaurantMenu = () => {
  const { id_R } = useParams();

  // let selectedCity = cities.find((city1) => city1.name === city.city);
  // console.log("AT Menu :" + city.city);

  const { location } = useCity();
  useEffect(() => {
    console.log("Finally at Menu " + location); // This will log the city whenever it changes
  }, [location]); // Run this effect whenever city changes

  let selectedCity = location;
  const [restaurantNames, restaurantMenuNames] = useRestaurantNames({
    id_R,
    selectedCity,
  });

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurantNames) {
    return <Shimmer2 />;
  }

  return restaurantNames.length === 0 ? (
    <Shimmer2 />
  ) : (
    <div className="bg-white p-4 rounded-lg shadow-lg bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">
      <div className="mb-4 flex justify-center items-center">
        <div className="w-1/2">
          <img
            src={IMG_CDN_URL + restaurantNames.cloudinaryImageId}
            alt={restaurantNames.name}
            className="w-96 h-96 rounded-lg"
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

      <div className="resturantcard-list flex flex-wrap place-content-evenly ">
        <h1 className="text-xl font-bold mb-2 flex justify-center items-center">
          Menu
        </h1>

        <div className="">
          <ul className="resturantcard-list flex flex-wrap place-content-evenly">
            {restaurantMenuNames.map((item) => (
              <li
                key={item?.id}
                className="w-64 p-4 m-4 bg-white rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300"
              >
                <div>
                  <div className="flex justify-evenly">
                    <span className="bg-amber-400 py-1 px-2 rounded-md">
                      <b className="text-white">
                        {item?.ratings.aggregatedRating.rating} stars
                      </b>
                    </span>
                    <span className="text-gray-500">
                      Rs.{(item?.price / 100).toFixed(2)}
                    </span>
                    <button
                      onClick={() => addFoodItem(item)}
                      className="bg-green-500 text-white py-1 px-3 rounded-full ml-2 hover:bg-green-600 transition duration-200"
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2">
                    {/* <div className="text-gray-600">{item?.description}</div> */}
                    <div className="p-4 m-4 rounded-lg shadow-lg">
                      <img
                        src={IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex justify-evenly">
                    <span
                      className={`font-semibold ${
                        item?.itemAttribute.vegClassifier === "VEG"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item?.itemAttribute.vegClassifier === "VEG"
                        ? "VEG"
                        : "Non VEG"}
                    </span>
                    <span className="font-semibold">{item?.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
