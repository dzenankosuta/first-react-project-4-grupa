/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [favoriteHotels, setFavoriteHotels] = useState([]);

  const values = {
    favoriteHotels,
    setFavoriteHotels,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
