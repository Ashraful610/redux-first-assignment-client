import React from 'react';
import {BsThreeDots} from 'react-icons/bs'

const Content = () => {
    return (
        <section className='rounded border-2 border-slate-300 my-5'>
            {/* ----------- user info ------------ */}
            <div className='flex justify-between items-center bg-slate-200 p-5'>
                <div className='flex items-center space-x-5'>
                  <img src="https://i.ibb.co/bNcXPp5/wallpaper-6.jpg" className='w-[50px] h-[50px] rounded-full ring ring-offset-2 ring-teal-500' alt="" />
                  <h2 className='text-2xl font-serif'>Ashraful Alam</h2>
                </div>
                <BsThreeDots className='text-3xl'/>
            </div>
            {/* ---------- main text --------- */}
            <div className='p-2'>
                <h2 className='text-xl'>Lorem ipsum dolor sit amet.</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, recusandae?</p>
            </div>
            {/* ------------- main content ----------- */}
            <div className='h-[400px] '>
                <img src="https://i.ibb.co/S70t1x4/background-img-2.jpg" className='w-full h-full' alt="" />
            </div>
        </section>
    );
};

export default Content;