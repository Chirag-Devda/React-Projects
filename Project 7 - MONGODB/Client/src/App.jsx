import Transactions from "./pages/Transaction/Transaction.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Support from "./pages/Support/Support.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Auth/Signup/Signup.jsx";
import Signin from "./pages/Auth/Signin/Signin.jsx";
import RegisterVerifyEmail from "./pages/Auth/RegisterVerifyEmail/RegisterVerifyEmail.jsx";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword.jsx";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/register-email-verify",
    element: <RegisterVerifyEmail />,
  },
  {
    path: "/register-success",
    element: <RegisterSuccess />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/forgot-success",
    element: <ForgotPasswordSent />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
