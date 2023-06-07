import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/Home/Home';
import Error from '../components/ErrorPage/Error';

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
    
    ]
    },
  ]);

export default router;