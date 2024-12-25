// @flow strict

import * as React from 'react';
import SectionTitle from './SectionTitle';
import featureImg from '../assets/feature.jpg'
import './Feature.css';

function Feature() {
    return (
        <div className='featured-item'>
            <SectionTitle subHeading='check it out'
                heading='Feature Item'
            >
            </SectionTitle>
            <div className='md: flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={featureImg} alt='' />
                </div>
                <div className='md: ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where Can i get some? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates cum provident dolor iure nostrum suscipit, non accusamus laboriosam ipsum ratione
                        facilis veniam quisquam, itaque reiciendis? Recusandae quam voluptatem quibusdam quod ipsa perferendis
                        voluptate aliquam sequi placeat ipsam nostrum, autem libero accusamus velit itaque dolorem labore maxime,
                        rerum enim quos aliquid.

                    </p>
                    <button className='btn btn-outline'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;