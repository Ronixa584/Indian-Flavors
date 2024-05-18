// import { useState, useEffect } from "react";

// const useRestaurantList = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [allRestaurants, setAllRestaurants] = useState([]);

//   useEffect(() => {
//     //API call
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);

//     setAllRestaurants(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurants(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     // if(allRestaurants.length === 0){
//     //       setAllRestaurants(
//     //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     // );
//     // setFilteredRestaurants(
//     //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     // );
//     // }
//     //Whenever Images not load just change index
//     // data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//     // 2,4
//   }

//   return [
//     searchInput,
//     setSearchInput,
//     filteredRestaurants,
//     setFilteredRestaurants,
//     allRestaurants,
//   ];

// }

// export default useRestaurantList



















// import { useState, useEffect } from "react";

// const useRestaurantList = (selectedCity) => {
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [allRestaurants, setAllRestaurants] = useState([]);

//   useEffect(() => {
//     // API call
//     getRestaurants(selectedCity);
//   }, [selectedCity]);

//   async function getRestaurants(city) {
//     const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${city.latitude}&lng=${city.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

//     try {
//       const data = await fetch(apiUrl);
//       const json = await data.json();
//       console.log(json);

//       setAllRestaurants(
//         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       );
//       setFilteredRestaurants(
//         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       );
//     } catch (error) {
//       console.error("Error fetching restaurant data: ", error);
//     }
//   }

//   return [
//     searchInput,
//     setSearchInput,
//     filteredRestaurants,
//     setFilteredRestaurants,
//     allRestaurants,
//   ];
// };

// export default useRestaurantList;



//New serach as per city

import { useState, useEffect, createContext,useContext } from "react";
// import { cityContext } from "../components/Header";
import { cities } from "../contants";
import { useAPI } from "./apiContext";

  // import {  } from "react";
// import apiContext from "./apiContext";
// export const apiContext = createContext();

const useRestaurantList = ({ selectedCity}) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [jsonData, setJsonData] = useState();

  const { api, setAPI } = useAPI();
  // let city = useContext(cityContext);
 // console.log("Finally at Fetching " + selectedCity);

  // // Helper function to save state to localStorage
  // const saveStateToLocalStorage = (state) => {
  //   localStorage.setItem("Location", state);
  // };


  // // Helper function to load state from localStorage
  // const loadStateFromLocalStorage = () => {
  //   const savedState = localStorage.getItem("Location");
  //   return savedState;
  // };
  // // saveStateToLocalStorage(selectedCity);
  // selectedCity = loadStateFromLocalStorage();
 

  //This will render page if we change the city
  useEffect(() => {
    // Check if selectedCity is defined before making the API call
    if (selectedCity) {
      getRestaurants(selectedCity);
      // console.log(jsonData);
      
    }
  }, [selectedCity]);

  //Two ways to fix
  //1 here write code to get log and lat of city
  //2 in context only store city with its naame and location coordinated

  //1
  function findCoordinates(cityName) {
    const city = cities.find(
      (city) => city.name.toLowerCase() === cityName.toLowerCase()
    );
    if (city) {
      return { latitude: city.latitude, longitude: city.longitude };
    } else {
      return "Coordinates not found";
    }
  }

  const cord = findCoordinates(selectedCity);

  async function getRestaurants(city) {
    if (!city) {
      return; // Return early if city is undefined
    }

   // console.log(cord.latitude);
    const apiUrl = `https://foodfire.onrender.com/api/restaurants?lat=${cord.latitude}&lng=${cord.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    // const apiUrl = `https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`;

    // const port = process.env.PORT || 3000;
    // const apiUrl = `http://localhost:${port}/api/restaurants?lat=${city.latitude}&lng=${city.longitude}`;

    // const apiUrl = `https://fkb-r91krrr1w-ronixa584.vercel.app/api/restaurants?lat=${city.latitude}&lng=${city.longitude}`;

    // const apiUrl = `${process.env.API_URL}/api/restaurants?lat=${city.latitude}&lng=${city.longitude}`;

    // const apiUrl = `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${city.latitude}%26lng%3D${city.longitude}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`;

    //console.log(apiUrl);

    try {
      const data = await fetch(apiUrl);
      // console.log(data);
      const json = await data.json();
      //console.log(json);
      setAPI(json);

      //       // console.log("Resturants List :",json);
            // setJsonData(json);
      // console.log("Im here :" + data);
      //Dynamic Search from API
      let maxRestaurantsCount = 0;
      let maxRestaurantsCardIndex = -1;

      json?.data?.cards.forEach((card, index) => {
        const restaurantsArray =
          card.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const restaurantsCount = restaurantsArray.length;

        if (restaurantsCount > maxRestaurantsCount) {
          maxRestaurantsCount = restaurantsCount;
          maxRestaurantsCardIndex = index;
        }
      });

      //  console.log("Max Restaurants Card Index:", maxRestaurantsCardIndex);

      // Use the card index with the maximum number of restaurants
      const maxRestaurantsArray =
        json?.data?.cards[maxRestaurantsCardIndex]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants || [];

      setAllRestaurants(maxRestaurantsArray);
      setFilteredRestaurants(maxRestaurantsArray);

      // setAllRestaurants(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      // setFilteredRestaurants(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // // Provide the fetched data through the context
  // return (

  // );

  return [
    searchInput,
    setSearchInput,
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants
  ];
};

export default useRestaurantList;
