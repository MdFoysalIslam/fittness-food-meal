// @flow strict

import * as React from 'react';
import ManuCard from './ManuCard';



function HomeCard() {
    const [menu, setMenu] = React.useState([]);

 React.useEffect(()=>{
    fetch('MenuData.json')
    .then(res => res.json())
    .then(data => setMenu(data))

    
 },[])
    return (
       
       <div><h2>
        Home Cart
        </h2></div>
    );
};

export default HomeCard;