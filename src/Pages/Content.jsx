import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import placeholderimage from '../assets/404.jpg'


const Content = () => {
    const blog=useLoaderData()
    const {cover_image, title, description, published_at,tags, id}=blog

    return (
        <div className=" mx-auto p-2  group border border-gray-200  focus:no-underline dark:bg-gray-50 dark:bg-gray-50">
        <img role="presentation" className="object-cover mb-5 w-full rounded h-44 " src={cover_image || placeholderimage}/>
        {
                        tags.map((tag =>
                            <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                                #{tag}

                            </a>))
                    }
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </div>
    );
};

export default Content;