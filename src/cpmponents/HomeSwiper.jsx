// @flow strict

import * as React from 'react';
import img0 from '../assets/swp-0.jpg'
import img1 from '../assets/swp-1.jpg'
import img2 from '../assets/swp-2.jpg'
import img3 from '../assets/swp-3.jpg'
import img4 from '../assets/swp-4.jpg'
import img5 from '../assets/swp-5.jpg'
import img6 from '../assets/swp-6.jpg'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from './SectionTitle';


function HomeSwiper() {
  return (
    <>
    <SectionTitle subHeading={'from 11.00am to 10.00pm'}
    heading={'Online order abailable'}>
    </SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide><img className='h-96' src={img0} alt=''></img></SwiperSlide>
        <SwiperSlide><img className='h-96' src={img1} alt=''></img></SwiperSlide>
        <SwiperSlide><img className='h-96' src={img2} alt=''></img></SwiperSlide>
        <SwiperSlide><img className='h-96' src={img3} alt=''></img></SwiperSlide>
        <SwiperSlide><img className='h-96' src={img4} alt=''></img></SwiperSlide>
        <SwiperSlide><img className='h-96' src={img5} alt=''></img></SwiperSlide>
        <SwiperSlide><img className='h-96' src={img6} alt=''></img></SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSwiper;