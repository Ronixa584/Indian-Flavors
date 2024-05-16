import React, { useState, useContext, Children, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import { cities } from "../contants";
import SearchableDropdown from "./SearchableDropdown";
import NA from "./NA";
import MidCarousal from "./MidCarousal";
import { useCity } from "../utils/cityContext";

const Body = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();
  const { cityName } = useParams();
  const { location } = useCity();

  //New one to get city name using context
  useEffect(() => {
    //console.log("Finally " + location); // This will log the city whenever it changes
  }, [location]); // Run this effect whenever city changes

  //Old one to get city name from URL
  // let selectedCity = cities.find((city) => city.name === cityName);

  // if (!selectedCity) {
  //   selectedCity = cities.find((city) => city.name === "Pune");
  // }

  let selectedCity = location;
 // console.log("Selected City is " + selectedCity);
  
  const [
    searchInput,
    setSearchInput,
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants,
    ApiContextProvider,
  ] = useRestaurantList({ selectedCity, Children });

  if (!isOnline) {
    return <h1>Offline, Please check your internet connection</h1>;
  }

  if (!allRestaurants) {
    return <NA />;
  }

  const handleSearch = () => {
    const data = filterData(searchInput, allRestaurants);
    setFilteredRestaurants(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body min-h-screen bg-gradient-to-r from-green-300 via-white-800 to-red-300">
      <MidCarousal />

      <div className="search-container p-5 flex flex-col md,sm:flex-row space-y-4 md,sm:space-y-0 md,sm:space-x-4 items-center">
        <div className="">
          <input
            type="text"
            className="search-btn p-2 m-2  bg-yellow-200 text-black rounded-md shadow-xl hover:bg-emerald-400 transition w-full"
            placeholder="Search Food Item ..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex items-center">
          <button
            className="search-btn p-2 m-2 bg-indigo-600 text-white rounded-md shadow-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <SearchableDropdown
            options={cities.map((city) => city.name)}
            value={cityName}
            onChange={(e) => navigate(`/city/${e.target.value}`)}
            onEnter={(searchTerm) => {
              navigate(`/city/${searchTerm}`);
            }}
          />
        </div>
      </div>

      <div className="resturantcard-list flex flex-wrap place-content-evenly">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <ResturantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
