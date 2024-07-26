import { useContext } from "react";
import { MyContext } from "../context/data/MyContext.jsx";

const useData = () => {
  const {
    mode,
    toggleMode,
    open,
    openDrawer,
    closeDrawer,
    loading,
    setLoading,
  } = useContext(MyContext);

  return {
    mode,
    toggleMode,
    open,
    openDrawer,
    closeDrawer,
    loading,
    setLoading,
  };
};

export default useData;
