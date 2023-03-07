import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/404";
import Home from "../../pages/home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

export default Routes;
