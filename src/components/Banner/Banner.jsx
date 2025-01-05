import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../../assets/1620px-Sajek_Valley_Rangamati_2.jpg'
import banner2 from '../../assets/1920px-Kuakata_Sea_Beach (1).jpg'
import banner3 from '../../assets/Sundarban_Tiger.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='flex justify-center mt-5'>
            <div className='w-11/12 max-h-[500px] rounded-lg'>
                <Swiper
                    className='h-full object-cover'
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay, Navigation, Pagination]}
                >
                    <SwiperSlide><img className='h-full w-full rounded-lg' src={banner1} alt="Banner 1" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full rounded-lg' src={banner2} alt="Banner 2" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full rounded-lg' src={banner3} alt="Banner 2" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;