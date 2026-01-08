import { Link } from "react-router";
import { IoCarSportSharp } from "react-icons/io5";

const NewCarsCard = ({ car }) => {
  
  return (
    <section>
      <div className="border border-gray-400 rounded-2xl overflow-hidden shadow-md bg-base-100 hover:shadow-xl transition duration-300 hover:scale-[1.03] cursor-pointer">

        <div className="h-56 w-full overflow-hidden">
          <img
            src={car.photoURL}
            alt={car.carName}
            className="w-full h-full object-cover hover:scale-110 duration-500" />
        </div>

        <div className="p-5 space-y-1">
          <h2 className="text-xl font-bold text-base-300 flex items-center gap-2">
            <IoCarSportSharp className="text-accent" />
            {car.carName}
          </h2>

          <p className="text-accent">
            <span className="font-semibold">Rent:</span> <span className="text-base-300 font-bold">৳{car.rentPricePerDay}</span> <span className="text-accent">/day</span>
          </p>

          <p className="text-accent ">
            <span className="font-semibold">Car Type:</span> <span className="font-bold text-red-500">{car.carType}</span>
          </p>

          <p className="text-accent">
            <span className="font-semibold">Provider:</span> <span className="text-base-300 font-bold">{car.providerName}</span>
          </p>

          <Link to={`/carDetails/${car._id}`} className="btn btn-sm btn-primary text-white w-full mt-3 rounded-xl hover:bg-secondary">
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewCarsCard;
