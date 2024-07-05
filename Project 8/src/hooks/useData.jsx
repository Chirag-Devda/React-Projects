import { useContext } from "react";
import { MyContext } from "../context/data/MyContext.jsx";

const useData = () => {
  const { mode, toggleMode, open, openDrawer, closeDrawer } =
    useContext(MyContext);
  return { mode, toggleMode, open, openDrawer, closeDrawer };
};

export default useData;
