import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/authContext';
import BookCard from './BookCard';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyBooking = () => {
  const { user } = use(AuthContext)
  const [book, setBook] = useState([])
  useEffect(() => {
    fetch(`https://rent-wheels-server-jet.vercel.app/books?email=${user.email}`)
      .then(res => res.json())
      .then(data =>
        setBook(data)
      )
  }, [user?.email])

  const handleCancel = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          // cancel booking car and update the status
          fetch(`https://rent-wheels-server-jet.vercel.app/cars/${_id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Available" })
          })
            .then(res => res.json())
            .then(() => { })

          // delete booking car
          fetch(`https://rent-wheels-server-jet.vercel.app/books/${_id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Canceled!",
                  text: "Your booking car has been cancelled.",
                  icon: "success",
                  confirmButtonColor: "#67AB4F"
                });
                const remainingCars = book.filter(car => car._id !== _id)
                setBook(remainingCars)
              }
            })
        }
      });
  }

  if (book.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:min-h-120">
        <p className="text-center text-accent font-semibold text-2xl">
          You haven't booked any cars yet.
        </p>
        <Link to='/allCars' className='btn btn-primary text-white mt-5 hover:bg-secondary'>
          Browse Car
        </Link>
      </div>
    )
  }


  return (
    <div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:px-20">
      <title>
        My Bookings
      </title>
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
              <tr className="bg-gray-200 text-black md:text-[18px]">
                <th className="md:pl-26">Car Name</th>
                <th className="px-4 text-left">Car Type</th>
                <th className="px-4 text-left">Rent Price</th>
                <th className="pl-4 md:pl-3">Provider name</th>
                <th className="pl-10 md:pl-10">Provider Email</th>
                <th className="pl-10">Location</th>
                <th className="pr-15">Action</th>
              </tr>
            </thead>

            <tbody>
              {book.map((singleList) => (
                <BookCard key={singleList._id} singleList={singleList} handleCancel={handleCancel} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;