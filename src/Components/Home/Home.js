import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../Banner/Banner';

const Home = () => {
    const state = useSelector((state) => state)

    return (
        <div>
           <Banner/>
        </div>
    );
};

export default Home;