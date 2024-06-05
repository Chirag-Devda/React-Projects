import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const { token, user, login, logout, Email, UpdateEmail } =
    useContext(AuthContext);

  return {
    token,
    user,
    login,
    logout,
    Email,
    UpdateEmail,
  };
};

export default useAuth;
