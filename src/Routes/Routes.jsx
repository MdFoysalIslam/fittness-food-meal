// @flow strict

import * as React from 'react';

import Main from '../Main/Main';

import Home from '../cpmponents/Home';
import { createBrowserRouter } from 'react-router-dom';
import Menu from '../cpmponents/Menu';
import Order from '../cpmponents/Order';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
               path: "/",
               element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/order',
                element: <Order/>
            },
            {
                path: '/order',
                element: <Order/>
            },
            
        ]
    }
],
{
    future: {
      v7_startTransition: true, // Enable the v7 future flag
    },
  })