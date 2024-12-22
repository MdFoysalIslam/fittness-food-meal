// @flow strict

import * as React from 'react';

import Main from '../Main/Main';

import Home from '../cpmponents/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
               path: "/",
               element: <Home/>
            }
        ]
    }
],
{
    future: {
      v7_startTransition: true, // Enable the v7 future flag
    },
  })