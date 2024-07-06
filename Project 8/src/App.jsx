import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Cart,
  Dashboard,
  Home,
  NoPage,
  Order,
  ProductInfo,
  Login,
  SignUp,
} from "./pages";

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
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/productinfo/:id",
      element: <ProductInfo />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
