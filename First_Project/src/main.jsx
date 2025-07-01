import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import Sign_In from './Components/Sign_In.jsx';
import Signup from './Components/Signup.jsx';
import Home from './Components/Home.jsx';
import Table from './Components/Table.jsx';
import Profile from './Components/Profile.jsx';

import { Provider } from 'react-redux';
import store from './Redux/Store.js';

// ✅ Set the basename to match your GitHub repo
const router = createBrowserRouter(
  [
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '/dash',
          element: <Table />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/signin',
          element: <Sign_In />,
        },
        {
          path: '/prop',
          element: <Profile />,
        },
      ],
    },
  ],
  {
   basename: '/' // ✅ This is required for GitHub Pages to work
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
