import React from 'react';
import Add from '../Adds/Add';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import CaruselItem from '../CarouselItem/CaruselItem';
import CountsCard from '../CountsCard/CountsCard';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cards/>
            <Add/>
            <CountsCard/>
            <CaruselItem />
         
        </div>
    );
};

export default Home;