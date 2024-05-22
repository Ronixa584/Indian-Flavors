import { useState, useEffect } from "react";
import { cities } from "../contants";

const useRestaurantNames = ({ id_R, selectedCity }) => {
  const [restaurantNames, setRestaurantNames] = useState(null);
  const [restaurantMenuNames, setRestaurantMenuNames] = useState([]);
  //IMPORTANT
  // const [restaurantNames, setRestaurantNames] = useState(null);
  // const [restaurantMenuNames, setRestaurantMenuNames] = useState([]);
  //We used two hooks
  //one for updating restaurant id, image, name, city,rating,etc
  //second one for udpdating menulist as per restaurant
  // console.log("AT MenuHOOK :" + selectedCity.name + " " + id_R);

  useEffect(() => {
    if (selectedCity) {
      getRestaurantInfo(id_R, selectedCity);
    }
  }, [id_R]);

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

  async function getRestaurantInfo(id_R, city) {
    //API for fetching restaurant menu
    // const apiUrl = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${city.latitude}&lng=${city.longitude}&restaurantId=${id_R}&catalog_qa=undefined&submitAction=ENTER`;

    const apiUrl = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${cord.latitude}&lng=${cord.longitude}&&submitAction=ENTER&restaurantId=${id_R}`;
    // menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=
    // const port = process.env.PORT || 3000;
    // const apiUrl = `http://localhost:${port}/api/menu?lat=${city.latitude}&lng=${city.longitude}&restaurantId=${id_R}`;

    // const apiUrl = `https://fkb-gxbroufm3-ronixa584.vercel.app/api/menu?lat=${city.latitude}&lng=${city.longitude}&restaurantId=${id_R}`;

    // const apiUrl = `${process.env.API_URL}/api/menu?lat=${city.latitude}&lng=${city.longitude}&restaurantId=${id_R}`;

    // const apiUrl = `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.5204%26lng%3D73.8567%26restaurantId%3D${id_R}%26catalog_qa%3Dundefined%26submitAction%3DENTER`;

   // console.log(apiUrl);
    const data = await fetch(apiUrl);
    const json = await data.json();
    console.log("Resturants Menu List :", json);
    // setRestaurantNames(json?.data?.cards[3]?.card?.card?.info);

    // const menuItemsData =
    //   json?.data?.cards
    //     ?.find((x) => x.groupedCard)
    //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
    //     ?.filter(
    //       (x) =>
    //         x["@type"] ==
    //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     )
    //     ?.map((x) => x.itemCards)
    //     .flat()
    //     .map((x) => x.card?.info) || [];

    // const uniqueMenuItems = [];
    // menuItemsData.forEach((item) => {
    //   if (!uniqueMenuItems.find((x) => x.id === item.id)) {
    //     uniqueMenuItems.push(item);
    //   }
    // });

    // setRestaurantMenuNames(uniqueMenuItems);

    // Set restaurant data
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find(
          (x) =>
            x &&
            x.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )?.card?.info || null;
    setRestaurantNames(restaurantData);

    // Set menu item data
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    // setMenuItems(uniqueMenuItems);
    setRestaurantMenuNames(uniqueMenuItems);
  }
  return [restaurantNames, restaurantMenuNames];
};

export default useRestaurantNames;