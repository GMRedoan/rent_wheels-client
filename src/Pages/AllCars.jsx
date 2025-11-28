import React, { use } from 'react';
import NewCarsCard from '../Components/homeLayout/NewCarsCard';
import Feedback from '../Components/homeLayout/Feedback';

const allCarsPromise = fetch('http://localhost:3000/cars')
    .then(res => res.json())
const AllCars = () => {
    const allCars = use(allCarsPromise)
    return (
        <div>
            <div>
                <h2 className='text-6xl font-bold text-center py-10 pt-20'>Browse Our <span className='text-primary'>Premium</span> Car Collection</h2>
                <p className='text-accent font-semibold text-center'>Find the perfect ride for any trip with our full range of reliable, well-maintained vehicles.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto py-10 px-4">
                {
                    allCars.map(car => <NewCarsCard key={car._id} car={car}></NewCarsCard>)
                }
            </div>
<Feedback></Feedback>
        </div>
    );
};

export default AllCars;