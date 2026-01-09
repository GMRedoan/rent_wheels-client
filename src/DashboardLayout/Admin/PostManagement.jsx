import { useState } from 'react';
import ListCard from '../../Pages/ListCard';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router';

const PostManagement = () => {
    const loadedCars = useLoaderData();  
    const [list, setList] = useState(loadedCars);  

 
    // delete data from listing
    const handleDelate = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
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

                            const remainingCars = list.filter(car => car._id !== _id);
                            setList(remainingCars);  
                        }
                    });
            }
        });
    };

    return (
        <div className="flex flex-col justify-center items-center py-10 pb-20 px-4 md:px-20">
            <title>My Listings</title>

            <div className="pb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center pb-5"> All Posting <span className='text-primary'>Car</span> Management
                </h2>
                <p className="text-accent font-semibold text-center max-w-xl mx-auto">
                    Easily update your car info, check rental status, and keep your listings up to date.
                </p>
            </div>

            {list.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl font-semibold text-accent">
                        No cars available.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto w-full rounded-xl shadow-xl">
                    <div className="min-w-[600px] bg-base-100">
                        <table className="table w-full">
                            <thead>
                                <tr className="bg-gray-300 text-black md:text-[18px]">
                                    <th className='pl-6 md:pl-15'>No</th>
                                    <th>Car Name</th>
                                    <th>Car Type</th>
                                    <th>Rent Price</th>
                                    <th>Status</th>
                                    <th className='pl-20'>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {list.map((singleList, index) => (
                                    <ListCard
                                     index={index}
                                        key={singleList._id}
                                        singleList={singleList}
                                        handleDelate={handleDelate}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostManagement;
