import { useState } from 'react';
import { MdBookmarkAdd } from 'react-icons/md';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { saveBlog } from '../Utils';



const Blog = () => {
    const [tabIndex, setTabIndex] = useState(0)

 


    const blog = useLoaderData()

    const { comments_count, title, reading_time_minutes, public_reactions_count, published_at, tags } = blog;

   const handleBookMark= blog =>{
    saveBlog(blog)
   }

    

    return (
        <div className="max-w-3xl py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <p className="text-sm">{reading_time_minutes} min read• {new Date(published_at).toLocaleDateString()}</p>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} Comments • {public_reactions_count} Reactions</p>
                    </div>

                    {/* tabs */}

                    <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                        <Link
                            to=''
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex == 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>


                        <Link
                            to={`author`}
                            onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex == 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
            {/* bookmarks button */}

            <div onClick={()=>handleBookMark(blog)} className='bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden'>

            <MdBookmarkAdd size={20} className='text-secondary' />

            </div>


                    </div>

                    {/* tabs end */}

                </div>


                <Outlet />


            </article>
            <div>

                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                   


                </div>


            </div>
        </div>
    );
};

export default Blog;