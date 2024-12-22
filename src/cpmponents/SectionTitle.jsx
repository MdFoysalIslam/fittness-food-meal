// @flow strict

import * as React from 'react';

function SectionTitle({subHeading, heading}) {
    return (
        <div className='text-center p-6'>
            <p className='text-green-600'>{subHeading}</p>
            <h3 className='text-4xl text-Green-600 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;