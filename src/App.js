import { RouterProvider } from "react-router";
import Routes from "./configs/routes/routes";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
