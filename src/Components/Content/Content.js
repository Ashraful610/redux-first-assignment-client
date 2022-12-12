import React from 'react';
import {BsThreeDots} from 'react-icons/bs'

const Content = ({content}) => {
    const {img , details , firstName , lastName} = content
    return (
        <section className='rounded-[12px] border-2 border-slate-300 my-5'>
            {/* ----------- user info ------------ */}
            <div className='flex justify-between items-center bg-slate-200 px-5 py-3 rounded-t-[12px]'>
                <div className='flex items-center space-x-5'>
                  <img src={img} className='w-[40px] h-[40px] rounded-full ring ring-offset-2 ring-black' alt="" />
                  <h2 className='text-lg font-serif font-semibold uppercase'>
                    {firstName +' '+ lastName}
                  </h2>
                </div>
                <BsThreeDots className='text-3xl'/>
            </div>
            {/* ---------- main text --------- */}
            <div className='p-5'>
                <h2 className='text-base font-semibold'>
                    {details.title}
                </h2>
                <p className='text-base'>{details.info}</p>
            </div>
            {/* ------------- main content ----------- */}
            <div className='h-[350px]'>
                <img src={img} className='w-full h-full rounded-b-[12px]' alt="" />
            </div>
        </section>
    );
};

export default Content;