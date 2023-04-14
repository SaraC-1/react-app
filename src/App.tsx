import "./styles/styles.scss";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./styles/pages/mlinar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
