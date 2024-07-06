import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Cart, Dashboard, Home, NoPage, Order } from "./pages";
import Signup from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/*",
      element: <NoPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
