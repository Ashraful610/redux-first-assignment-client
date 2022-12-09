import React from 'react';
import './Banner.css'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Banner = () => {
    return (
        <div className='banner w-full lg:h-[600px] h-[380px] flex items-center justify-center '>
            <ImQuotesLeft className='text-white text-4xl mr-4 mb-6'/> 
            <h2 className='text-white text-5xl font-semibold font-serif'>There is nothing impossible to they who will try</h2>
            <ImQuotesRight className='text-white text-4xl ml-4 mb-6'/>
        </div>
    );
};

export default Banner;