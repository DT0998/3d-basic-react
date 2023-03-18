import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/404";
import SceneGalaxy from "../../pages/SceneGalaxy";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <SceneGalaxy />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
