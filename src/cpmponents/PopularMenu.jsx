// @flow strict

import * as React from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';

function PopularMenu() {
    const [menu, setMenu] = React.useState([])

    React.useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)
        })
    }, [])
    return (
        <div>
            <SectionTitle
                heading="From our Menu"
                subHeading='Popular Items'
            ></SectionTitle>
           {
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
           }
        </div>
    );
};

export default PopularMenu;