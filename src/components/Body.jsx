import React, {useEffect } from "react";
import { Link} from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import NA from "./NA";
import MidCarousal from "./MidCarousal";
import { useCity } from "../utils/cityContext";
import banner1 from "../../public/banner1.jpg";

const Body = () => {
  const isOnline = useOnline();
  const { location } = useCity();

  //New one to get city name using context
  useEffect(() => {
    //console.log("Finally " + location); // This will log the city whenever it changes
  }, [location]); // Run this effect whenever city changes

  let selectedCity = location;
  
  const [
    searchInput,
    setSearchInput,
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants,
  ] = useRestaurantList({ selectedCity });
  
  console.log(allRestaurants);

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

      const handleFastDelivery = () => {
        const fastDeliveryOutput = allRestaurants.filter(
          (res) => res.info?.sla?.deliveryTime < 40
        );
        setFilteredRestaurants(fastDeliveryOutput);
      };

      // const handleVeg = () => {
      //   const vegOutput = allRestaurants.filter((res) => res.veg === true);
      //   setFilteredRestaurants(vegOutput);
      // };

      const handleRating = () => {
        const ratingOutput = allRestaurants.filter(
          (res) => Number(res.info?.avgRatingString) > 4.2
        );
        setFilteredRestaurants(ratingOutput);
      };

      const handleRange = (rangeKey) => {
        const rangeOutput = allRestaurants.filter((res) => {
          const cost = res.info.costForTwo.match(/\d+/g).map(Number)[0];
          if (rangeKey === 1) return cost >= 300 && cost <= 600;
          else if (rangeKey === 2) return cost < 300;
        });
        setFilteredRestaurants(rangeOutput);
      };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body min-h-screen ">
      <MidCarousal />

      <div
        className="Bannerh-80"
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 350,
        }}
      >
        <div className="search-container p-5 flex flex-col md,sm:flex-row space-y-4 md,sm:space-y-0 md,sm:space-x-4 items-center">
          <div className="">
            <input
              type="text"
              className="search-btn p-2 m-2 text-black rounded-md shadow-xl transition w-full backdrop-blur-md"
              placeholder="Search Food Item ..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="flex items-center backdrop-blur-md">
            <button
              className="search-btn p-2 m-2 text-white rounded-md shadow-xl"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {/* <div className="flex items-center">
          <SearchableDropdown
            options={cities.map((city) => city.name)}
            value={cityName}
            onChange={(e) => navigate(`/city/${e.target.value}`)}
            onEnter={(searchTerm) => {
              navigate(`/city/${searchTerm}`);
            }}
          />
        </div> */}
        </div>
      </div>

      <div className="filters-items flex flex-wrap gap-4 justify-center my-4 px-4">
        <button
          className="filter-btn p-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition duration-200"
          onClick={handleSearch}
        >
          Reset
        </button>
        <button
          className="filter-btn p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-200"
          onClick={handleFastDelivery}
        >
          Fast Delivery
        </button>
        <button
          className="filter-btn p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          onClick={handleRating}
        >
          Ratings 4.2+
        </button>
        <button
          className="filter-btn p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition duration-200"
          onClick={() => handleRange(1)}
        >
          Rs. 300-Rs. 600
        </button>
        <button
          className="filter-btn p-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200"
          onClick={() => handleRange(2)}
        >
          Less than Rs. 300
        </button>
      </div>

      {/* Resturants loading */}
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
