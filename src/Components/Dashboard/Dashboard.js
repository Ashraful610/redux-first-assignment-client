import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile flex">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
             <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
             <aside className='w-[250px] min-h-[500px] bg-black p-5 flex flex-col items-center space-y-5'>
               <Link to='/dashboard' className='text-black hover:text-white bg-white hover:bg-black border-2 border-white w-[200px] text-center py-1 transition duration-500 text-xl uppercase font-bold '>
                   All Content
                 </Link>
                <Link to='/dashboard/addContent' className='text-black hover:text-white bg-white hover:bg-black border-2 border-white w-[200px] text-center py-1 transition duration-500 text-xl uppercase font-bold'>
                   Add Content
               </Link>
            </aside> 
         </div>
           <Outlet/>
      </div>


    );
};

export default Dashboard;