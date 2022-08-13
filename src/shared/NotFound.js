import React from 'react';
import notFound from '../assets/images/notFound.png'

const NotFound = () => {
    return (
        <div className='mx-auto flex justify-center'>
            <img  src={notFound} />
        </div>
    );
};

export default NotFound;