import { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyStateProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        open,
        openDrawer,
        closeDrawer,
        loading,
        setLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
