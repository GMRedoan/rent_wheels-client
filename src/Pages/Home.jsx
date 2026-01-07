import Banner from '../Components/Header/Banner';
import Slides from '../Components/Header/Slides';
import WhyRent from '../Components/homeLayout/WhyRent';
import TopCars from '../Components/homeLayout/TopCars';
import Feedback from '../Components/homeLayout/Feedback';
import { use } from 'react';
import NewCarsCard from '../Components/homeLayout/NewCarsCard';
import Services from '../Components/homeLayout/Services';
import Features from '../Components/homeLayout/Features';
import GetInTouch from '../Components/homeLayout/GetInTouch';
import Statistics from '../Components/homeLayout/Statistics';

const newCarsPromise = fetch('https://rent-wheels-server-jet.vercel.app/newCars')
    .then(res => res.json())
const Home = () => {
    const newCars = use(newCarsPromise)
    return (
        <div className=''>
            <title>Rent Wheels</title>
 
             <Banner></Banner>
            <Slides></Slides>

            <div>
                <div>
                    <h2 data-aos="zoom-in" className='text-4xl md:text-6xl font-bold text-center py-10 pt-20'> <span className='text-primary'>Newest</span> Cars For You</h2>
                    <p data-aos="zoom-in" className='px-4 text-accent font-semibold text-center'>Explore the latest arrivals curated for comfort, style, and performance.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto py-10 px-4 md:px-18">
                    {
                        newCars.map(car => <NewCarsCard key={car._id} car={car}></NewCarsCard>)
                    }
                </div>
            </div>
            <WhyRent></WhyRent>
            <Services></Services>
            <Features></Features>
            <TopCars></TopCars>
            <Statistics></Statistics>
            <Feedback></Feedback>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;
