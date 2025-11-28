import { Link } from "react-router";
import { IoCarSportSharp } from "react-icons/io5";

const NewCarsCard = ({ car }) => {
  return (
    <div className="border border-gray-400 rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer">
      
       <div className="h-56 w-full overflow-hidden">
        <img
          src={car.photoURL}
          alt={car.carName}
          className="w-full h-full object-cover hover:scale-110 duration-500"/>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-black flex items-center gap-2">
          <IoCarSportSharp className="text-accent" />
          {car.carName}
        </h2>

        <p className="text-accent">
          <span className="font-semibold">Rent:</span> <span className="text-black font-bold">৳{car.rentPricePerDay}</span> <span className="text-accent">/day</span>
        </p>

        <p className="text-accent ">
          <span className="font-semibold">Car Type:</span> {car.carType}
        </p>

        <p className="text-accent">
          <span className="font-semibold">Provider:</span> {car.providerName}
        </p>

        <Link to='/carDetails' className="btn btn-primary text-white w-full mt-3 rounded-xl hover:bg-secondary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default NewCarsCard;
