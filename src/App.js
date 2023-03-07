import { RouterProvider } from "react-router";
import "./App.css";
import Routes from "./configs/routes/routes";

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
