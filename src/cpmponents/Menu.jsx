// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import MenuCover from './MenuCover';
import menuCover1 from '../assets/menuCover1.jpg'
import menuCover2 from '../assets/menuCover2.jpg'
import menuCover3 from '../assets/menuCover3.jpg'
import menuCover4 from '../assets/menuCover4.jpg'
import menuCover5 from '../assets/menuCover5.jpg'

import useMenu from './Hooks/useMenu';
import MenuCategory from './menuCategory';

function Menu() {
    const [menu, loading] = useMenu()

    const salads = menu.filter(item => item.category === 'salad')
    const popular = menu.filter(item => item.category === 'popular')
    const desserts = menu.filter(item => item.category === 'dessert')
    const mainCourses = menu.filter(item => item.category === 'main course')
    const beverages = menu.filter(item => item.category === 'beverage')

    return (
        <div>
            <Helmet>
                <title>Fitness Food Menu</title>
            </Helmet>
        
          <div className=''>
          <MenuCover img={menuCover1}  title={'Salad'}></MenuCover>
           <MenuCategory items={salads}></MenuCategory>

           <MenuCover img={menuCover2} title={'Desserts'}></MenuCover>
           <MenuCategory items={desserts}></MenuCategory>

           
           <MenuCover img={menuCover3} title={"Main Cours"}></MenuCover>
           <MenuCategory items={mainCourses}></MenuCategory>

           <MenuCover img={menuCover4} title={"Popular"}></MenuCover>
           <MenuCategory items={popular}></MenuCategory>

           <MenuCover img={menuCover5} title={"Beverages"}></MenuCover>
           <MenuCategory items={beverages}></MenuCategory>
          </div>
        </div>
    );
};

export default Menu;