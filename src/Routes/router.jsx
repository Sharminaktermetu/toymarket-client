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
import View from '../components/Home/Tabs/View';
import Blog from '../components/Blog/Blog';

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
        loader:({params})=>fetch(`https://tiny-toy-town-server-adsmarketersaif13-gmailcom.vercel.app/toy/${params.id}`)
      },
      {
        path:'/mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://tiny-toy-town-server-adsmarketersaif13-gmailcom.vercel.app/toy/${params.id}`)
      },
      {
        path:'/view/:id',
        element:<PrivateRoute><View></View></PrivateRoute>,
        loader:({params})=> fetch(`https://tiny-toy-town-server.vercel.app/tabs/${params.id}`)

      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    
    ]
    },
  ]);

export default router;