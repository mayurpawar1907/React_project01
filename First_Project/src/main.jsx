import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Sign_In from './Components/Sign_In.jsx'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'
import Table from './Components/Table.jsx'
import { data } from 'react-router-dom'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Redux/Store.js'
import store from './Redux/Store.js'
import Profile from './Components/Profile.jsx'



const router=createBrowserRouter([

  
  {
    path:"",
    element:<Layout/>,
    children:[
      {
        path:"/dash",
        element:<Table/>

      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/signup",
        element:<Signup />
      },
      
      {
        
        path:"/signin",
        element:<Sign_In/>
      },
      {
        path:"/prop",
        element:<Profile/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
     
  </StrictMode>,
)
