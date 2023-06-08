import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/Home/Home';
import Error from '../components/ErrorPage/Error';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Alltoys from '../components/Alltoys/Alltoys';
import Addatoy from '../components/AddaToy/Addatoy';
import ToyDetails from '../components/Alltoys/ToyDetails';
import PrivateRoute from './PrivateRoute';
import MyToys from '../components/MyToys/MyToys';
import Update from '../components/Update/Update';

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
        {
        path:'/alltoys',
        element:<Alltoys></Alltoys>
      },
        {
        path:'/addatoy',
        element:<PrivateRoute><Addatoy></Addatoy></PrivateRoute>
      },
        {
        path:'/details/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path:'/mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      }
    
    ]
    },
  ]);

export default router;