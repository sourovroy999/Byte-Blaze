import React, { useEffect, useState } from 'react';
import { deleteBlog, getBlogs } from '../Utils';
import BlogCard from '../Components/BlogCard';
import { HiH1 } from 'react-icons/hi2';
import EmptyState from '../Components/EmptyState';

const Bookmarks = () => {

    const[blogs, setBlogs]=useState([])
    useEffect(()=>{
        const storedBlogs=getBlogs()
        setBlogs(storedBlogs)
    }, [])

    const handleDelete= id =>{
        deleteBlog(id)
        const storedBlogs=getBlogs()
        setBlogs(storedBlogs)
       }

       if(blogs.length<1) return <EmptyState message='No Bookmarks Available' address={'/blogs'} label={'Go To Blogs'}/>

    return (
        <div className="grid px-4 sm:px-8 lg:px-16 py-8  justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                
                {
                    blogs.map(blogSingle=><BlogCard handleDelete={handleDelete} deletable={true} insideBlog={blogSingle} key={blogSingle.id}></BlogCard>)
                }
             
            </div>
    );
};

export default Bookmarks;