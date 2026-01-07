import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import scroll from '../../assets/Scroll down.json'
import Lottie from "lottie-react";


const Banner = () => {
    const [showScrollIcon, setShowScrollIcon] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

        useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight * 0.35;
            if (scrollPosition > triggerPoint) {
                setShowScrollIcon(false);
            } else {
                setShowScrollIcon(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section id="banner-section"
            className="relative w-full bg-base-200 border-b border-gray-300 overflow-hidden"
            ref={ref}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co.com/76dJ6zV/photo-1492144534655-ae79c964c9d7.jpg')",
                    opacity: 0.5,
                    zIndex: 0,
                }}
            ></div>

            {/* Content */}

            <div className="relative z-10 py-10 md:py-44 max-w-6xl mx-auto px-5">
                <p className="text-center text-sm md:text-base mb-6">
                    {inView && (
                        <Typewriter
                            words={[
                                "Quick booking, great service, and trusted vehicles.",
                            ]}
                            loop={1}
                            cursor
                            cursorStyle=" "
                            typeSpeed={30}
                        />
                    )}
                </p>

                <h1 className="text-center font-extrabold text-4xl md:text-6xl tracking-tight leading-snug">
                    <span className="text-primary">Rent Wheels</span>
                    {inView && (
                        <Typewriter
                            words={[" - Ride in Comfort & Style"]}
                            loop={1}
                            cursor
                            cursorStyle=" "
                            typeSpeed={60}
                        />
                    )}
                </h1>

                <p className="text-center mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-semibold">
                    {inView && (
                        <Typewriter
                            words={[
                                "From economy to luxury, our curated collection ensures you get the right car for every purpose, backed by reliable support and a seamless rental experience.",
                            ]}
                            loop={1}
                            cursor
                            cursorStyle=" "
                            typeSpeed={7}
                        />
                    )}
                </p>

                <div className="mt-5 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-14 text-center">
                    <div>
                        <h3 className="text-lg font-semibold">Power Elite Author</h3>
                        <p className="text-sm text-gray-200 mt-2">Author since 2011</p>
                    </div>

                    <div className="hidden md:block h-10 border-l border-gray-300"></div>

                    <div className="-mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold">Total rents 27,000+</h3>
                        <div className="flex justify-center items-center gap-2 mt-2">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    {
                        showScrollIcon ? <div className="bottom-0 md:bottom-4 absolute flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 animate-floatSlow">
                            <p className=" text-gray-200">Scroll Down</p>
                            <Lottie
                                animationData={scroll}
                                loop={true}
                                autoplay={true}
                                className="w-13" />
                        </div> : <div className="bottom-0 md:bottom-4 absolute flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 animate-floatSlow">
                            <p className=" text-gray-200">Scroll Up</p>
                            <Lottie
                                animationData={scroll}
                                loop={true}
                                autoplay={true}
                                className="w-13 rotate-180" />
                        </div>
                    }
                </div>


            </div>
        </section>
    );
};

export default Banner;
