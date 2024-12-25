// @flow strict

import * as React from 'react';
import img1 from '../assets/Home Banner/banner14.jpg'
import img2 from '../assets/Home Banner/banner5.jpg'
import img3 from '../assets/Home Banner/banner6.jpg'
import img4 from '../assets/Home Banner/banner8.jpg'
import img5 from '../assets/Home Banner/banner11.jpg'
import img6 from '../assets/Home Banner/banner12.jpg'
import img7 from '../assets/Home Banner/banner13.jpg'
import { Link } from 'react-router-dom';
import '../../src/App.css';

function Baner() {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${img4})`,
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold dancing-script-bold">The Fitness Meals Resturent</h1>
                        <p className="mb-5 text-3xl oswald-light">

                        "At The Fitness Mels, we believe that plant-based dining is the future.
                        </p>
                       <Link to='/order'><button className="btn btn-outline btn accent">Get Menu Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;