import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/authContext';
import BookCard from './BookCard';

const MyBooking = () => {
    const {user} = use(AuthContext)
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/books?email=${user.email}`)
        .then(res => res.json())
        .then(data => 
            setBook(data)
        )
    },[user?.email])
    return (
<div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:px-20">
  <div className="pb-10">
    <h2 className="text-3xl md:text-5xl font-bold text-center pb-5">Your <span className='text-primary'>Bookings</span> Overview</h2>
    <p className="text-accent font-semibold text-center max-w-xl mx-auto">
      Easily manage and track all your current bookings.
    </p>
  </div>

  <div className="overflow-x-auto w-full rounded-xl shadow-xl">
    <div className="min-w-[600px] bg-white">
      <table className="table w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-accent text-[18px]">
            <th className="md:pl-26">Car Name</th>
            <th className="px-4 text-left">Car Type</th>
            <th className="px-4 text-left">Rent Price</th>
            <th className="pl-4 md:pl-3">Provider name</th>
            <th className="pl-10 md:pl-10">Provider Email</th>
            <th className="pl-10">Location</th>
          </tr>
        </thead>

        <tbody>
          {book.map((singleList) => (
            <BookCard key={singleList._id} singleList={singleList} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
    );
};

export default MyBooking;