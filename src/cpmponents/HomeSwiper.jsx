// @flow strict

import * as React from 'react';

import img1 from '../assets/Home Banner/banner8.jpg'
import img2 from '../assets/Home Banner/banner9.jpg'
import img3 from '../assets/Home Banner/banner10.jpg'
import img4 from '../assets/Home Banner/banner11.jpg'
import img5 from '../assets/Home Banner/banner12.jpg'
import img6 from '../assets/Home Banner/banner13.jpg'
import img7 from '../assets/Home Banner/banner14.jpg'



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';


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
        <SwiperSlide className="flex justify-center items-center">
          <div className="hero bg-green-100 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img7}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold">Wellcome To Fittness meals</h1>
                <p className="py-6 text-2xl dancing-script-bold">
                "where we elevate dining to an art form. Nestled in the heart of the city, our elegant and sophisticated ambiance is matched only by our world-class cuisine. Our culinary team, led by award-winning chefs, 
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
        <div className="hero bg-gray-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img1}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold">we believe that great food is about more than just a meal</h1>
                <p className="py-6 dancing-script-bold">
                "At The Fetness , we believe that great food is about more than just a meal — it's about bringing people together. Our casual and cozy atmosphere is perfect for a night out with friends or a family gathering. From juicy burgers to fresh salads, every dish is crafted with love and made with fresh, local ingredients. Come as you are, enjoy great food, and create lasting memories with those you care about. We can't wait to serve you!"
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
        <div className="hero bg-orange-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img2}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold"> welcoming atmosphere where both kids and adults can enjoy hearty,</h1>
                <p className="py-6 dancing-script-bold">
                "Welcome to The Fitness Meals, the perfect spot for a fun family outing. We offer a warm, welcoming atmosphere where both kids and adults can enjoy hearty, delicious meals. Our menu features something for everyone, from tasty pizza and pasta to delicious desserts. With our friendly staff and a play area for the little ones, we aim to make dining out with the whole family easy and enjoyable. Come visit us for a meal that's as fun as it is delicious!"
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
        <div className="hero bg-blue-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img3}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold"> We serve freshly brewed coffee, expertly crafted lattes,</h1>
                <p className="py-6 dancing-script-bold">
                "Welcome to Fitness Meals, your go-to place for great coffee, delicious pastries, and a cozy atmosphere. Whether you're stopping by for your morning coffee, grabbing a quick lunch, or relaxing with friends, our café is the perfect spot to unwind. We serve freshly brewed coffee, expertly crafted lattes, and homemade pastries, all made with care and the finest ingredients. Come in, take a seat, and enjoy the warm vibe of our space."
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
        <div className="hero bg-pink-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img4}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold">We offer a wide variety of customizable dishes made with fresh ingredients,</h1>
                <p className="py-6 dancing-script-bold">
                "Welcome to The Fitness Mels, where convenience meets quality. Our fast-casual dining experience is designed for those who love great food but don’t have the time to wait. We offer a wide variety of customizable dishes made with fresh ingredients, perfect for a quick bite or a casual meal with friends. Whether you're grabbing lunch on the go or sitting down for a relaxed dinner, we promise a fast, fresh, and delicious experience every time."
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
        <div className="hero bg-yellow-100 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img5}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold">Join us for a meal that is kind to the planet and kind to your body.</h1>
                <p className="py-6 dancing-script-bold">
                "At The Fitness Mels, we believe that plant-based dining is the future. Our menu is inspired by the best seasonal ingredients, and every dish is carefully crafted to bring out the natural flavors of fresh fruits, vegetables, grains, and legumes. Whether you're a long-time vegetarian, vegan, or simply looking to enjoy a healthier meal, we welcome you to indulge in creative and wholesome dishes that are as satisfying as they are nourishing. Join us for a meal that is kind to the planet and kind to your body."
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
        <div className="hero bg-gray-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img6}
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold dancing-script-bold">Our chefs use traditional recipes and fresh,</h1>
                <p className="py-6 dancing-script-bold">
                "Welcome to The Fitness Meals, where we bring the authentic flavors of [Cuisine Type] to your table. From the rich spices of [Country] to the unique cooking techniques passed down through generations, every dish tells a story. Our chefs use traditional recipes and fresh, local ingredients to create an unforgettable dining experience. Whether you're a fan of bold flavors or trying something new, our menu offers something for everyone. Join us and take a journey through the vibrant and delicious world of [Cuisine Type]."
                </p>
                <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default HomeSwiper;