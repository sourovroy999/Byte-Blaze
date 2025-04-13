import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <div>
            <div className="h-16">
                <Nav/>
            </div>  

            {/* packet */}
           <div className='min-h-[calc(100vh-116px)]'>
           <Outlet/>
           </div>

            <Footer/>
            
        </div>
    );
};

export default MainLayOut;