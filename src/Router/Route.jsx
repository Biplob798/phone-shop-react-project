import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";

import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/LoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/Phone/Phone";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: ()=> fetch('/phones.json')
      },
    ],
  },
]);

export default myCreatedRoute;
