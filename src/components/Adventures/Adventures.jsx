import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdventureCard from './AdventureCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Adventures = () => {
    const data = useLoaderData()
    return (
        <div className='flex flex-col items-center mt-24' data-aos="fade-up" data-aos-duration="1000" >
            <div className='w-11/12 '>
                <h2 className='font-bold text-3xl'>
                 Create Unforgettable Travel Discoveries
                </h2>
                <p className='text-[#5f5e5e] w-8/12'>Whether you're seeking thrilling adventures, serene escapes, or cultural immersions, our curated itineraries provide an unforgettable blend of exploration and relaxation.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-2 w-11/12'>
                {
                    data.map(place => <AdventureCard place={place}></AdventureCard>)
                }
            </div>
        </div>
    );
};

export default Adventures;