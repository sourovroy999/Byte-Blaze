import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import MainLayOut from './LayOuts/MainLayOut.jsx'
import Blog from './Pages/Blog.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayOut/>,
    children:[
      {
        // path:'/',
        index:true,
        element:<Home/>
      },  {
        path:'/blogs',
        element:<Blogs/>,
        loader:()=> fetch('https://dev.to/api/articles?per_page=100&top=7')
      },
      {
        path:'./blog/:id',
        element:<Blog/>,
      },
      
      {
        path:'/bookmarks',
        element:<Bookmarks/>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/> 
  </>,
)
