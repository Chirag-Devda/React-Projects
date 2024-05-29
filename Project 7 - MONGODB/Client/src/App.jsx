import Transactions from "./pages/Transaction/Transaction.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Support from "./pages/Support/Support.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Auth/Signup/Signup.jsx";
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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
