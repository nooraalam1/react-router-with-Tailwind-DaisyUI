import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Stat from './Components/Stat.jsx';
import Jobs from './Components/Jobs.jsx';
import Blog from './Components/Blog.jsx';
import JobDetails from './Components/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/stat',
        element:<Stat></Stat>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>,
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
      {
        path:'/jobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('../public/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
