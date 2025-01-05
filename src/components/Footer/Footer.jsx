import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa6';
import footerbg from "../../assets/luca-bravo-ESkw2ayO2As-unsplash (1).jpg";

const Footer = () => {
    return (
        <div className='relative mt-28 min-h-[570px]'>
            <div className='absolute inset-0 -z-10'>
                <img 
                    className='w-full h-full object-cover' 
                    src={footerbg} 
                />
                <div className='absolute inset-0 bg-black bg-opacity-40'></div>
            </div>

            <div className='relative w-full h-full flex pt-[100px] flex-col justify-center items-center'>
                <h1 className='text-4xl text-white text-center px-4'>
                    Uncover unique destinations, tailored just for you
                </h1>
                <p className='text-[#c5c5c5] mt-3 text-center px-4'>
                    At EcoVenture, we create personalized trips to match your passions
                </p>
                <button className='py-2 px-5 bg-white rounded-lg mt-4'>Get Started</button>

                <div className='w-full flex flex-col items-center justify-center mt-10 bg-[#97948c1e] backdrop-blur-sm p-5'>
                    <div className='w-full max-w-6xl flex flex-wrap justify-between items-center gap-8 pb-7 border-b border-[#a5a4a11e]'>

                        <div className='flex flex-col gap-3 w-full sm:w-1/3'>
                            <h2 className='text-3xl text-white'>EcoVenture</h2>
                            <input type="text" className='bg-[#b4b1b14b] text-xl p-2 rounded-lg text-white font-bold' placeholder='Name' 
                            />
                            <input type="email" className='bg-[#b4b1b14b] text-xl p-2 rounded-lg text-white font-bold' placeholder='Email' 
                            />
                            <button className='py-2 px-5 w-fit bg-white rounded-xl mt-2'>Submit</button>
                        </div>

                        <div className='flex flex-col gap-3 w-full sm:w-auto'>
                            <h2 className='text-xl text-white font-bold'>Explore</h2>
                            <ul className='text-white space-y-1'>
                                <li><a className='cursor-pointer'>Destinations</a></li>
                                <li><a className='cursor-pointer'>Adventure Trips</a></li>
                                <li><a className='cursor-pointer'>Cultural Experiences</a></li>
                                <li><a className='cursor-pointer'>Family Getaways</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 w-full sm:w-auto'>
                            <h2 className='text-xl text-white font-bold'>About Us</h2>
                            <ul className='text-white space-y-1'>
                                <li><a className='cursor-pointer'>Our Story</a></li>
                                <li><a className='cursor-pointer'>Why Choose EcoVenture</a></li>
                                <li><a className='cursor-pointer'>Meet the Team</a></li>
                                <li><a className='cursor-pointer'>Testimonials</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 w-full sm:w-auto'>
                            <h2 className='text-xl text-white font-bold'>Customer Support</h2>
                            <ul className='text-white space-y-1'>
                                <li><a className='cursor-pointer'>FAQs</a></li>
                                <li><a className='cursor-pointer'>Contact Us</a></li>
                                <li><a className='cursor-pointer'>Travel Insurance</a></li>
                                <li><a className='cursor-pointer'>Cancellation Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-full max-w-6xl flex flex-wrap justify-between text-white mt-5 gap-3'>
                        <div className='text-xl flex gap-4'>
                            <a href="https://www.facebook.com/chamok.chowdhury.2024"><FaFacebook /></a>
                            <a href="https://x.com/c4chamok?t=nLHXaePA7eV_P35hBzshDg&s=08"><FaTwitter /></a>
                            <a href="https://www.google.com"><FaGoogle /></a>
                            <a href="https://www.instagram.com/c4chamok/"><FaInstagram /></a>
                        </div>
                        <span className='text-xs'>Copyright 2024, All Rights Reserved</span>
                        <a className='text-xs cursor-pointer'>Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
