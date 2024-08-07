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
    products,
    setProducts,
    addProduct,
    product,
    edithandle,
    updateProduct,
    deleteProduct,
  } = useContext(MyContext);

  return {
    mode,
    toggleMode,
    open,
    openDrawer,
    closeDrawer,
    loading,
    setLoading,
    products,
    setProducts,
    addProduct,
    product,
    edithandle,
    updateProduct,
    deleteProduct,
  };
};

export default useData;
