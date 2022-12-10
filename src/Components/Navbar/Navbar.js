import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-black h-[80px] w-full px-12 py-5 flex justify-between border-b-2 border-white'>
            <h2 className='text-white text-2xl font-bold uppercase'>
              <span className='bg-white text-black px-5 py-1 mr-2'>Content</span>   
               <span className='border-y-4 border-white'>Management</span> 
            </h2>
            <ul className='flex space-x-5'>
                <li className=''>
                    <Link to='/' className='text-black hover:text-white bg-white hover:bg-black border-2 border-white w-[200px] inline-block text-center  transition duration-500 text-xl font-bold uppercase'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard' className='text-black hover:text-white text-xl mx-2  bg-white hover:bg-black w-[200px] inline-block text-center  font-bold border-2 border-white transition duration-500 uppercase'>
                        DashBoard
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;