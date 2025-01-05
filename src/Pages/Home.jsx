import React from 'react';
import Banner from '../components/Banner/Banner';
import Adventures from '../components/Adventures/Adventures';
import Reviews from '../components/Reviews/Reviews';
import Faq from '../components/FAQ/Faq';


const Home = () => {
    document.title = "Ecoventure | Home"
    return (
        <div className=''>
            <Banner></Banner>
            <Adventures></Adventures>
            <Faq></Faq>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;