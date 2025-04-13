import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Pages/Content";
import Author from "../Pages/Author";


export const router=createBrowserRouter([
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
          path:'/blog/:id',
          element:<Blog/>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element:<Content/>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author/>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        
        {
          path:'/bookmarks',
          element:<Bookmarks/>
        }
      ]
    },
  
  ])