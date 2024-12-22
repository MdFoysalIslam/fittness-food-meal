// @flow strict

import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../cpmponents/footer';
import NavBar from '../cpmponents/NavBar';

function Main() {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;