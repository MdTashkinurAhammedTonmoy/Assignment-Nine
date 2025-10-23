import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Prodect from "../Pages/Prodect/Prodect";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
            index:true,
            path:"/",
            Component:Home
        },
        {
            path:"/prodect",
            loader:() => fetch('/Product.json'),
            Component:Prodect
        }
    ]
  },

  {
    path:"/auth",
    Component:AuthLayout,
    children:[
      {
        path:"/auth/login",
        Component:Login
      },
      {
        path:"/auth/register",
        Component:Register
      }
    ]
  }
]);


export default router;