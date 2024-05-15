// CityContext.js
import React, { createContext, useState, useContext } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [location, setLocation] = useState("Pune");

  return (
    <CityContext.Provider value={{ location, setLocation }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);
