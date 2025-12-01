import { use, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { IoCarSportSharp } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/authContext';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const singleCar = useLoaderData()
    const { user } = use(AuthContext)
    const [car, setCar] = useState(singleCar)
    const handleBook = () => {

        // update status when booked the car
        fetch(`http://localhost:3000/cars/${car._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Unavailable" })
        })
            .then(res => res.json())
            .then(() => {
                setCar(prev => ({ ...prev, status: "Unavailable" }))
            })

        const newBook = {
            email: user.email,
            ...car
        }
        // save the booking data in the database
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)

        })
            .then(res => res.json())
            .then(() => { })
        Swal.fire({
            title: `${car.carName} Booking Successful`,
            icon: "success",
            confirmButtonColor: "#67AB4F"
        });
    }
    return (

        <section>
            <title>{car.carName}</title>
            <div>

                <h2 className='text-3xl md:text-5xl font-bold text-center py-8'> Car Information <span className='text-primary'>&</span> Rental Summary</h2>
                <p className='text-accent font-semibold text-center'>See important details, availability, and provider info to make your booking decision easier.</p>
            </div>

            <div className='px-4 py-10 md:py-18'>
                <div className="max-w-6xl mx-auto border border-accent rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden bg-white flex flex-col md:flex-row">

                    <div className="md:w-1/2 w-full">
                        <img
                            src={car.photoURL}
                            alt={car.carName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 w-full p-6 space-y-6 flex flex-col justify-between">

                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <IoCarSportSharp className='text-accent' /> {car.carName}
                            </h2>

                            <div className="flex justify-between items-center">
                                <span className="badge bg-gray-200 font-bold text-red-500">{car.carType}</span>

                                {/* status */}
                                {
                                    car.status == 'Unavailable' ? <div className='badge badge-warning'>{car.status}</div> : <div className='badge badge-success'>{car.status}</div>
                                }

                            </div>

                            <p className="text-accent">{car.description}</p>

                            <p className="text-lg font-semibold">
                                <span className='text-accent'>Rent Price:</span> <span className='font-bold'>৳{car.rentPricePerDay}</span> <span className='text-accent'>/day</span>
                            </p>

                            <div className="flex items-center gap-2 text-gray-700">
                                <FaMapMarkerAlt /> {car.location}
                            </div>

                            <div className="bg-gray-100 rounded-xl p-3 space-y-1">
                                <p className="flex items-center gap-2 font-medium">
                                    <FaUser /> {car.providerName}
                                </p>
                                <p className="flex items-center gap-2 text-blue-600">
                                    <FaEnvelope /> {car.providerEmail || car.email}
                                </p>
                            </div>
                        </div>

                        {
                            car.status === 'Unavailable' ? <button disabled
                                className='btn bg-gray-500 text-white'>
                                Book Now
                            </button> : <button
                                onClick={handleBook}
                                className='btn btn-primary text-white hover:bg-secondary'>
                                Book Now
                            </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarDetails;

