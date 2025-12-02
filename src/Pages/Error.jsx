import React from 'react';
import { Link } from 'react-router';
import errorLottie from '../assets/404 website error animation.json'
import Lottie from 'lottie-react';

const Error = () => {

    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0 flex justify-center">
                <div>
                    <Lottie
                        animationData={errorLottie}
                        loop={true}
                        autoplay={true}
                        className="md:w-full" />
                </div>
            </div>

            <div className='relative z-10 flex flex-col justify-center items-center min-h-screen md:mt-30'>
                <h3 className='text-5xl text-gray-500'>Page Not Found</h3>
                <Link to='/' className='btn btn-primary text-white mt-10 hover:bg-secondary'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;
