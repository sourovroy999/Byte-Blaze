import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import placeholderimage from '../assets/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const Content = () => {
    const blog=useLoaderData()
    const {cover_image, title, description, published_at,tags,body_html,url, id}=blog

    return (
        <div className=" mx-auto p-4  group border border-gray-200  focus:no-underline dark:bg-gray-50 dark:bg-gray-50">
        <img role="presentation" className="object-cover mb-5 w-full rounded h-44 " src={cover_image || placeholderimage}/>
        {
                        tags.map((tag =>
                            <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                                #{tag}

                            </a>))
                    }
        <div className="mt-4 space-y-2">
            <a href={url} target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>

          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
           
        </div>
    </div>
    );
};

export default Content;