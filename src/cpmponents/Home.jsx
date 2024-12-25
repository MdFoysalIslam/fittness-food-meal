// @flow strict

import * as React from 'react';
import Baner from './Baner';
import HomeSwiper from './HomeSwiper';
import ManuCard from './ManuCard';
import PopularMenu from './PopularMenu';
import Review from './Review';
import ChefRecommends from './ChefRecommends';
import Feature from './Feature';
import { Helmet } from 'react-helmet-async';


function Home() {
    return (
        <div>
            <Helmet>
                <title>Fitness Food Home</title>
            </Helmet>
            <Baner />
            <HomeSwiper />
            <PopularMenu />
            <ChefRecommends />
        </div>
    );
};

export default Home;