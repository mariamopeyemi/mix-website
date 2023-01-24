import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import fetchData from "../utils/fetchData";

export const AppContext = createContext({
  activePage: "",
  settings: {},
  setSettings: () => {},
});
const AppContextProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("");
  const [settings, setSettings] = useState({});

  const getSettings = async () => {
    const respData = await fetchData("/settings/all?page=1");
    if (respData?.status) {
      setSettings(respData?.data);
      console.log("settings", respData.data);
    } else {
      // toast.error("problem getting settngs");
    }
  };

  useEffect(() => {
    getSettings();
  }, []);
  return <AppContext.Provider value={{ activePage, setActivePage, settings, setSettings }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
