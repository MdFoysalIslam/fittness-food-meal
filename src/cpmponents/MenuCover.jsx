// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';


function MenuCover({ img, title }) {


    return (
        <div>
            <div
                className="hero rounded-full h-80"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay  bg-opacity-0"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    
                           
                                <h1 className="mb-5 text-6xl font-bold text-white">{title}</h1>
                        
                      
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MenuCover;