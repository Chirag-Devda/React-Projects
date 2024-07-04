import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Cart, Dashboard, Home, NoPage, Order } from "./pages";
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
