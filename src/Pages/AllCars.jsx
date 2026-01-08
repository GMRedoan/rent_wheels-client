import React, { use, useState } from "react";
import NewCarsCard from "../Components/homeLayout/NewCarsCard";
import Feedback from "../Components/homeLayout/Feedback";
import Loading from "./Loading";
import { IoSearchOutline } from "react-icons/io5";

const allCarsPromise = fetch(
  "https://rent-wheels-server-jet.vercel.app/cars"
).then((res) => res.json());

const AllCars = () => {
  const allCars = use(allCarsPromise);

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const triggerLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };

  let filteredCars = allCars.filter((car) =>
    car.carName.toLowerCase().includes(search.toLowerCase())
  );
console.log(filteredCars);

  if (filter !== "all") {
    filteredCars = filteredCars.filter((car) => {

      if (filter === "SUV") return car.category === "SUV";
      if (filter === "Sedan") return car.category === "Sedan";
      if (filter === "Luxury") return car.category === "Luxury";
      if (filter === "Van") return car.category === "Van";

      if (filter === "LOW")
        return car.rentPricePerDay <= 5000;

      if (filter === "MID")
        return car.rentPricePerDay > 5000 && car.rentPricePerDay <= 10000;

      if (filter === "HIGH")
        return car.rentPricePerDay > 10000;

      return true;
    });
  }

  if (sortBy === "priceLow") {
    filteredCars.sort(
      (a, b) => a.rentPricePerDay - b.rentPricePerDay
    );
  }

  if (sortBy === "priceHigh") {
    filteredCars.sort(
      (a, b) => b.rentPricePerDay - a.rentPricePerDay
    );
  }

  if (sortBy === "name") {
    filteredCars.sort((a, b) =>
      a.carName.localeCompare(b.carName)
    );
  }

 
  return (
    <div className="overflow-x-hidden">
      <title>Browse Cars</title>

      <div className="px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold py-10 md:pt-20">
          Browse Our <span className="text-primary">Premium</span> Cars
        </h2>
        <p className="text-accent font-semibold">
          Find the perfect ride for your journey.
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}
        <label className="input input-bordered flex items-center gap-2">
          <IoSearchOutline />
          <input
            type="search"
            placeholder="Search car..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              triggerLoading();
            }}
          />
        </label>

        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            triggerLoading();
          }}
        >
          <option value="all">All Cars</option>

          <optgroup label="Category">
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Luxury">Luxury</option>
            <option value="Van">Van</option>
          </optgroup>

          <optgroup label="Price Range">
            <option value="LOW">Below 5,000</option>
            <option value="MID">5,000 to 10,000</option>
            <option value="HIGH">Above 10,000</option>
          </optgroup>
        </select>

        {/* Sort */}
        <select
          className="select select-bordered"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            triggerLoading();
          }}
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="name">Name: A–Z</option>
        </select>
      </div>

      {/* Cars */}
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-10 px-4">
          {filteredCars.map((car) => (
            <NewCarsCard key={car._id} car={car} />
          ))}
        </div>
      )}
      <Feedback />
    </div>
  );
};

export default AllCars;
