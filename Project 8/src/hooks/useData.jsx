import { useContext } from "react";
import { MyContext } from "../context/data/MyContext.jsx";

const useData = () => {
  const { mode, toggleMode } = useContext(MyContext);
  return { mode, toggleMode };
};

export default useData;
