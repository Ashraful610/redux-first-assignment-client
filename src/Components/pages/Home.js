import React from 'react';
import { useSelector } from 'react-redux';
import Banner from './Banner';
import Contents from './Contents';

const Home = () => {
    const state = useSelector((state) => state)

    return (
        <div>
           <Banner/>
           <Contents/>
        </div>
    );
};

export default Home;