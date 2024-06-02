import { createContext, useState } from "react";

export const Authcontext = createContext();

export default function AuthProivder({ children }) {
  const [user, setuser] = useState(null);
  const [token, settoken] = useState(null);
  return (
    <Authcontext.Provider value={{ name: "chirag" }}>
      {children}
    </Authcontext.Provider>
  );
}
