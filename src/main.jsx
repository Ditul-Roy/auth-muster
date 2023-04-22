import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import AuthProvider from './assets/Provider/AuthProvider';
import Order from './components/Order';
import PrivateRoute from './Private/PrivateRoute';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "order",
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
