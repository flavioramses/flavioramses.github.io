import "./App.scss";
import "./MediaQueries.scss";

import Home from "./pages/Home/Home";
import Dowse from "./pages/Projects/Dowse";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*">
      <Route path="*" element={<Home />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
