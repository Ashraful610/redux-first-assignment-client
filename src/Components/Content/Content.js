import React from 'react';
import {BsThreeDots} from 'react-icons/bs'

const Content = ({content}) => {
    const {img , details , name} = content
    return (
        <section className='rounded-[12px] border-2 border-slate-300 my-5'>
            {/* ----------- user info ------------ */}
            <div className='flex justify-between items-center bg-slate-200 px-5 py-3 rounded-t-[12px]'>
                <div className='flex items-center space-x-5'>
                  <img src={img} className='w-[50px] h-[50px] rounded-full ring ring-offset-2 ring-black' alt="" />
                  <h2 className='text-xl font-serif font-semibold uppercase'>{name}</h2>
                </div>
                <BsThreeDots className='text-3xl'/>
            </div>
            {/* ---------- main text --------- */}
            <div className='p-5'>
                <h2 className='text-lg font-semibold'>
                    {details.title}
                </h2>
                <p className='text-lg'>{details.info}</p>
            </div>
            {/* ------------- main content ----------- */}
            <div className='h-[400px]'>
                <img src={img} className='w-full h-full rounded-b-[12px]' alt="" />
            </div>
        </section>
    );
};

export default Content;