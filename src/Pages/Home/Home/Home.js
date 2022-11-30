import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};
export default Home;
