import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Prodect from "../Pages/Prodect/Prodect";

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
]);


export default router;