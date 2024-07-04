import { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyStateProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {children}
    </MyContext.Provider>
  );
}
