import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/Home/Home';
import Error from '../components/ErrorPage/Error';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      },
        {
        path:'/login',
        element:<Login></Login>
      },
        {
        path:'/signup',
        element:<Signup></Signup>
      },
    
    ]
    },
  ]);

export default router;