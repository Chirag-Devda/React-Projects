import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/order",
      element: (
        <ProtectedRoute>
          <Order />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRouteForAdmin>
          <Dashboard />
        </ProtectedRouteForAdmin>
      ),
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
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/addproduct",
      element: (
        <ProtectedRouteForAdmin>
          <AddProduct />
        </ProtectedRouteForAdmin>
      ),
    },
    {
      path: "/updateproduct",
      element: (
        <ProtectedRouteForAdmin>
          <UpdateProduct />
        </ProtectedRouteForAdmin>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "chiragdevda999@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
