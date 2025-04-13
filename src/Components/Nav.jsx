import React, { useEffect, useState } from 'react';

const Nav = () => {

    const [theme, setTheme]=useState('light');

    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme=localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    }, [theme] )

    const handleToggle=(e)=>{
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    }

    console.log(theme);
    

    return (

       

        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
            <div className="flex-1">
                <a className="btn btn-ghost gap-0 text-secondary normal-case text-2xl">Byte <span className='text-primary'>Blaze</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><a>Home</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Bookmarks</a></li>


                </ul>
                <label className="toggle text-base-content">
                    <input 
                    onChange={handleToggle}
                    type="checkbox"  className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>
        </div>
    );
};

export default Nav;