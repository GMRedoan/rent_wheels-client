import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            <title>Error</title>
            <h2 className='text-7xl text-red-500'>404 Error !</h2>
            <h3 className='text-5xl text-gray-500'>Page Not Found</h3>
            <Link to='/' className='btn btn-primary text-white mt-10 hover:bg-secondary'>Bact to Home</Link>
        </div>
    );
};

export default Error;
