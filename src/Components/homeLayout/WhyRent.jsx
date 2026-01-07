import { Link } from "react-router";

const WhyRent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12 md:py-24 bg-base-200 mx-4 md:mx-18">
      {/* Text Section */}
      <div data-aos="fade-right" className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Why <span className="text-primary">Rent</span> With Us?
        </h2>

        <ul className="space-y-4">
          <li className="flex items-start md:items-center">
            <span className="text-accent mr-4 font-semibold">01</span>
            <span className="border-b border-gray-300 pb-1 text-lg md:text-xl text-accent">
              Wide Selection of Luxury Cars with comfortable rides
            </span>
          </li>
          <li className="flex items-start md:items-center">
            <span className="text-accent mr-4 font-semibold">02</span>
            <span className="border-b border-gray-300 pb-1 text-lg md:text-xl text-accent">
              Transparent Pricing & very easy booking system
            </span>
          </li>
          <li className="flex items-start md:items-center">
            <span className="text-accent mr-4 font-semibold">03</span>
            <span className="border-b border-gray-300 pb-1 text-lg md:text-xl text-accent">
              24/7 Support given by our special team members
            </span>
          </li>
          <li className="flex items-start md:items-center">
            <span className="text-accent mr-4 font-semibold">04</span>
            <span className="border-b border-gray-300 pb-1 text-lg md:text-xl text-accent">
              Fastest booking and cancellation system
            </span>
          </li>
        </ul>

        <p className="text-accent mt-6 text-base md:text-lg">
          We go beyond just renting cars — we deliver a premium driving experience, built around trust, comfort, and style.
        </p>

        <Link
          to="/aboutUs"
          className="btn btn-primary text-white mt-8 hover:bg-secondary"
        >
          Learn More About Us
        </Link>
      </div>

      {/* Image Section */}
      <div data-aos="fade-left" className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://i.ibb.co.com/npjpyQm/Whats-App-Image-2022-02-10-at-6-34-43-PM.jpg"
          alt="Luxury Car"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default WhyRent;
