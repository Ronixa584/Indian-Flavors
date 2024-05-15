import React, { createContext, useContext, useState } from "react";

const CityContext = createContext({
  city: "Pune",
  setCity: () => {},
});


export const CityProvider = ({ children }) => {
  const [city, setCity] = useState({
    city: "Pune",
    setCity: () => {
      
    },
  });

  return (
    <CityContext.Provider value={{ city: city, setCity: setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};

export default CityContext;
