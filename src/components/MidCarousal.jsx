import React, { useRef, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Carousal1 } from "./Carousal";
import { cities } from "../contants";
import { apiContext } from "../utils/useRestaurantList";
import Shimmer3 from "./Shimmer3";

const MidCarousal = () => {
  const [carausal1data, setcarausal1data] = useState(null);
  const [midcarousaltitle, setmidcarousaltitle] = useState(null);
const { cityName } = useParams();
  let selectedCity = cities.find((city) => city.name === cityName);

  if (!selectedCity) {
    selectedCity = cities.find((city) => city.name === "Pune");
  }

    let city = selectedCity;


    const data = useContext(apiContext);

    //console.log("Im here :"+data);

  const sliderRef = useRef(null);

  const scrollHandler = (scrollOffset) => {
    const newScrollLeft = sliderRef.current.scrollLeft + scrollOffset;
    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const apiUrl = `https://foodfire.onrender.com/api/restaurants?lat=${city.latitude}&lng=${city.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  const fetchData = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    
    setcarausal1data(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
        json?.data?.cards[1]?.card?.card?.imageGridCards?.info
    );
    setmidcarousaltitle(
      json?.data?.cards[0]?.card?.card?.header?.title ||
        json?.data?.cards[1]?.card?.card?.header?.title
    );
  };

  
  if (carausal1data === null) {
    return <Shimmer3/>;
  }
  if (carausal1data === undefined) {
    return <Shimmer3/>;
  }

  return (
    carausal1data && (
      <div
        className="slider  lg:px-16  md:px-16  w-full pt-3"
        ref={sliderRef}
      >
        <div className="w-full lg:pb-2 md:pb-2 pb-2 pt-2">
          {carausal1data && (
            <span
              className="w-full text-left lg:pb-6  md:pb-6  mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight"
              style={{ wordSpacing: 3 }}
            >
              What's on your mind?
            </span>
          )}
        </div>

        <div className="slider__content md:pt-3  pt-2">
          {carausal1data?.map((rest) => (
            // <Link to={rest?.entityId} key={rest.id}>
            <Carousal1 key={rest?.id} restData={rest} />
            // </Link>
          ))}
        </div>
        <hr></hr>
      </div>
    )
  );
};

export default MidCarousal;


export const TopCarousal = () => {
  const [carausaldata, setcarausaldata] = useState();

  const { cityName } = useParams();
  // setCity(cityName);
  // console.log(city);
  let selectedCity = cities.find((city) => city.name === cityName);

  if (!selectedCity) {
    selectedCity = cities.find((city) => city.name === "Pune");
  }

  let city = selectedCity;

  const sliderRef = useRef(null);

  const scrollHandler = (scrollOffset) => {
    const newScrollLeft = sliderRef.current.scrollLeft + scrollOffset;
    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  const apiUrl = `https://foodfire.onrender.com/api/restaurants?lat=${city.latitude}&lng=${city.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  const fetchData = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();

      setcarausaldata(json?.data?.cards[9]?.card?.card);
     
      // console.log(json);
      // console.log(carausaldata);
  };

  if (carausaldata === null) {
    return "Loading";
  }

  return (
    <div className="slider" ref={sliderRef}>
      <div className="flex justify-between flex-row items-center w-full">
        <h2>Best offers for you</h2>
        <div className="slider__nav">{/* buttons */}</div>
      </div>

      <div className="slider__content">
        {carausaldata?.map((rest) => (
          <Carousal0 key={rest.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};





