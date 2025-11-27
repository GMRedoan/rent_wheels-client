import React from 'react';
import logo from '/logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <p className='text-6xl font-semibold flex justify-center items-center'>
                Rent<div className='w-35 animate-spin'><img src={logo} alt="" /></div><span className='text-primary'>Wheels</span>
            </p>
         </div>
    );
};

export default Loading;