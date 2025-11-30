import Banner from '../Components/Header/Banner';
import Slides from '../Components/Header/Slides';
import WhyRent from '../Components/homeLayout/WhyRent';
import TopCars from '../Components/homeLayout/TopCars';
import Feedback from '../Components/homeLayout/Feedback';
import { use } from 'react';
import NewCarsCard from '../Components/homeLayout/NewCarsCard';

const newCarsPromise = fetch('http://localhost:3000/newCars')
    .then(res => res.json())
const Home = () => {
    const newCars = use(newCarsPromise)
    return (
        <div>
            <title>Rent Wheels</title>
 
             <Banner></Banner>
            <Slides></Slides>
            <div>
                <div>
                    <h2 className='text-6xl font-bold text-center py-10 pt-20'> <span className='text-primary'>Newest</span> Cars For You</h2>
                    <p className='text-accent font-semibold text-center'>Explore the latest arrivals curated for comfort, style, and performance.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto py-10 px-4">
                    {
                        newCars.map(car => <NewCarsCard key={car._id} car={car}></NewCarsCard>)
                    }
                </div>
            </div>
            <WhyRent></WhyRent>
            <TopCars></TopCars>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;
