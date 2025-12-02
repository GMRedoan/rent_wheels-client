import React from "react";
import { FaStar } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <section className="w-full bg-base-200 border-b border-gray-300">
            <div className="max-w-6xl mx-auto px-5 py-15">

                <p className="text-center text-sm md:text-base text-accent mb-6">
                    Quick booking, great service, and trusted vehicles.
                </p>

                <h1 className="text-center font-extrabold text-4xl md:text-6xl tracking-tight leading-snug">
                    <span className="text-primary">Rent Wheels
                    </span>
                    <Typewriter
                        words={[' - Ride in Comfort & Style']}
                        loop={1}
                        cursor
                        cursorStyle=" "
                        typeSpeed={60}
                     />

                </h1>

                <p className="text-center mt-6 text-accent max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                    <Typewriter
                        words={['From economy to luxury, our curated collection ensures you get the right car for every purpose, backed by reliable support and a seamless rental experience.']}
                        loop={1}
                        cursor
                        cursorStyle=" "
                        typeSpeed={10}
                     />
                </p>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-14 text-center">

                    <div>
                        <h3 className="text-lg font-semibold">Power Elite Author</h3>
                        <p className="text-sm text-gray-500 mt-2">Author since 2011</p>
                    </div>

                    <div className="hidden md:block h-10 border-l border-gray-300"></div>

                    <div>
                        <h3 className="text-lg font-semibold">Total rents 27,000+</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
