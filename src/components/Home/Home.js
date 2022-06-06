import React from 'react';
import Add from '../Adds/Add';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import CountsCard from '../CountsCard/CountsCard';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cards/>
            <Add/>
            <CountsCard/>
        </div>
    );
};

export default Home;