// @flow strict

import * as React from 'react';
import Baner from './Baner';
import HomeSwiper from './HomeSwiper';
import ManuCard from './ManuCard';
import PopularMenu from './PopularMenu';
import Review from './Review';


function Home() {
    return (
        <div>
       <Baner/>
      <HomeSwiper/>
      <ManuCard/>
      <PopularMenu/>
      <Review/>
        </div>
    );
};

export default Home;