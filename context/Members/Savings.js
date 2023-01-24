import { createContext, useState } from "react";

const MembersContext = createContext();

const MembersContextProvider = ({ children }) => {
  const [fixedSavings, setFixedSavings] = useState();

  return <MembersContext.Provider value={{}}></MembersContext.Provider>;
};
