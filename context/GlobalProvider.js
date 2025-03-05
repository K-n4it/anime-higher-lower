import { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const GlobalProvider = ({ children }) => {

  const [ score, setScore ] = useState(0);

  let time = 5000;
  let type = "";
  let guess = "";

  const settingsInfo = {
    time, 
    type, 
    guess, 
    score, 
    setScore
  };

  return (
    <globalContext.Provider value={settingsInfo}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalProvider;
