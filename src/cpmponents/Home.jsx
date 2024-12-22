// @flow strict

import * as React from 'react';
import Baner from './Baner';
import HomeSwiper from './HomeSwiper';
import ManuCard from './ManuCard';
import PopularMenu from './PopularMenu';


function Home() {
    return (
        <div>
       <Baner/>
      <HomeSwiper/>
      <ManuCard/>
      <PopularMenu/>
        </div>
    );
};

export default Home;