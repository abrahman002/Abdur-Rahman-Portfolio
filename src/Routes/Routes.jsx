import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     
      children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/about',
        element:<About></About>
       },
       {
        path:'/contact',
        element:<Contact></Contact>
       }

      ]
    },
  ]);

export default router;