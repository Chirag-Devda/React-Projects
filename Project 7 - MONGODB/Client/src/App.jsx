import Transactions from "./pages/Transaction/Transaction.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Support from "./pages/Support/Support.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
