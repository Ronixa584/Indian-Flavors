import { createContext, useState, useContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [api, setAPI] = useState(null);

  return (
    <ApiContext.Provider value={{ api, setAPI }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useAPI = () => useContext(ApiContext);
