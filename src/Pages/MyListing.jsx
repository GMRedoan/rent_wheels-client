import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/authContext';
import ListCard from './ListCard';

const MyListing = () => {
    const { user } = use(AuthContext)
    const [list, setList] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/cars?providerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setList(data)
                })
        }
    }, [user?.email])
    return (
<div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:px-20">
  <div className="pb-10">
    <h2 className="text-3xl md:text-5xl font-bold text-center pb-5">
      Manage Your <span className="text-primary">Cars</span> Listings
    </h2>
    <p className="text-accent font-semibold text-center max-w-xl mx-auto">
      Easily update your car info, check rental status, and keep your listings up to date.
    </p>
  </div>

  <div className="overflow-x-auto w-full rounded-xl shadow-xl">
    <div className="min-w-[600px] bg-white">
      <table className="table w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-accent text-[18px]">
            <th className="md:pl-36">Car Name</th>
            <th className="px-4 text-left">Category</th>
            <th className="px-4 text-left">Rent Price</th>
            <th className="pl-8 md:pl-7">Status</th>
            <th className="pl-18 md:pl-18">Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((singleList) => (
            <ListCard key={singleList._id} singleList={singleList} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
};

export default MyListing;