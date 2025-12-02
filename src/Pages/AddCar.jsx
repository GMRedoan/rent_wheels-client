import { use } from "react";
import { AuthContext } from "../provider/authContext";
import Swal from "sweetalert2";

const AddCar = () => {
    const { user } = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const carName = form.carName.value
        const carType = form.carType.value
        const rentPricePerDay = form.rentPricePerDay.value
        const location = form.location.value
        const photoURL = form.photoURL.value
        const providerName = form.providerName.value
        const providerEmail = form.email.value
        const description = form.description.value

        const newCars = {
            carName, carType, rentPricePerDay, location, photoURL, description, providerName, providerEmail, status: 'Available'
        }

        // save new added car info in the database
        fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCars)
        })
            .then(res => res.json())
            .then(() => { })

        Swal.fire({
            title: "Car Submitted Successfully in Rent Wheels",
            icon: "success",
            confirmButtonColor: "#67AB4F"
        });
        form.reset()
    }
    return (
        <section className="px-6 py-10 bg-base-200">
            <title>Add Your Car</title>

            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Car Name</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                pattern=".*\S.*"
                                required
                                name="carName"
                                placeholder="Enter your car name"
                                className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Category</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <select
                                required
                                name="carType"
                                className="select select-bordered w-full">

                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Hatchback</option>
                                <option>Luxury</option>
                                <option>Electric</option>
                            </select>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Rent Price (per day)</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                pattern=".*\S.*"
                                required
                                name="rentPricePerDay"
                                type="number"
                                placeholder="Per day rent"
                                className="input input-bordered w-full"
                                min="0"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Location</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                pattern=".*\S.*"
                                required
                                name="location"
                                placeholder="Enter your valid location"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                pattern=".*\S.*"
                                required
                                name="photoURL"
                                placeholder="Enter your photo URL"
                                className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Provider Name</span>
                            </label>
                            <input
                                readOnly
                                name="providerName"
                                defaultValue={user.displayName}
                                className="input input-bordered w-full bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Provider Email</span>
                            </label>
                            <input
                                readOnly
                                name="email"
                                defaultValue={user.email}
                                className="input input-bordered w-full bg-gray-50" />
                        </div>

                    </div>

                    <div className="mt-6">
                        <label className="label">
                            <span className="label-text font-medium">Description</span>
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                            pattern=".*\S.*"
                            required
                            minLength={20}
                            name="description"
                            placeholder="Short description about the car, features, fuel type, condition..."
                            className="textarea textarea-bordered w-full min-h-[140px]"
                        />
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button type="submit" className="btn btn-primary hover:bg-secondary text-white px-18">
                            Submit Car
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};


export default AddCar;
