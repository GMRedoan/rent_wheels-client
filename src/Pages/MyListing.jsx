import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/authContext';
import ListCard from './ListCard';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import Loading from './Loading';

const MyListing = () => {
  const { user } = use(AuthContext)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch(`https://rent-wheels-server-jet.vercel.app/cars?providerEmail=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setList(data)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email])

  //  delete data from listing
  const handleDelate = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://rent-wheels-server-jet.vercel.app/cars/${_id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Posting car has been deleted.",
                  icon: "success",
                  confirmButtonColor: "#67AB4F"
                });
                const remainingCars = list.filter(car => car._id !== _id)
                setList(remainingCars)
              }
            })
        }
      });
  }

  if (loading) {
    return <Loading></Loading>
  }

  if (list.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:min-h-120">
        <p className="text-center text-accent font-semibold text-2xl">
          You haven't added any cars yet.
        </p>
        <Link to='/addCar' className='btn btn-primary text-white mt-5 hover:bg-secondary'>
          Add Cars
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:px-20">
      <title>
        My Listings
      </title>
      <div className="pb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center pb-5">
          Manage Your <span className="text-primary">Cars</span> Listings
        </h2>
        <p className="text-accent font-semibold text-center max-w-xl mx-auto">
          Easily update your car info, check rental status, and keep your listings up to date.
        </p>
      </div>
      <div className="overflow-x-auto w-full rounded-xl shadow-xl">
        <div className="min-w-[600px] bg-base-200">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-300 text-black md:text-[18px]">
                <th className="md:pl-16">No</th>
                <th>Car Name</th>
                <th className="px-4 text-left">Car Type</th>
                <th className="px-4 text-left">Rent Price</th>
                <th className="pl-8 md:pl-7">Status</th>
                <th className="pl-18 md:pl-18">Actions</th>
              </tr>
            </thead>

            <tbody>
              {list.map((singleList, index) => (
                <ListCard key={singleList._id} index={index} handleDelate={handleDelate} singleList={singleList} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default MyListing;