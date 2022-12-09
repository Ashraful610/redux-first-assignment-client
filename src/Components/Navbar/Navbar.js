import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-black h-[70px] w-full px-12 py-5 flex justify-between'>
            <h2 className='text-white text-3xl font-bold uppercase'>
              <span className='bg-white text-black px-5 py-1 mr-2'>Content</span>   
               <span className='border-y-4 border-white'>Management</span> 
            </h2>
            <ul className='flex'>
                <li>
                    <Link to='/' className='text-black hover:text-white text-2xl mx-2 uppercase bg-white hover:bg-black px-5 py-1 font-bold border-2 border-white transition duration-500'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard' className='text-black hover:text-white text-2xl mx-2 uppercase bg-white hover:bg-black px-5 py-1 font-bold border-2 border-white transition duration-500'>
                        DashBoard
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;