import React from "react";
 import { FaCalendarCheck, FaMoneyBillWave, FaShieldAlt, FaHeadset } from "react-icons/fa";

const TopCars = () => {
  return (
    <section className="px-6 pb-20 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-5xl font-extrabold mb-3">
            Top <span className="text-primary">Cars</span> For You
          </h3>
          <p className="text-accent max-w-2xl mx-auto">
            Hand-picked vehicles — reliable, comfortable, and ready to go.
          </p>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3 bg-white">
            <div className="h-44 md:h-48 w-full overflow-hidden">
              <img
                src="https://i.ibb.co.com/sJMjr1FB/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg"
                alt="Toyota Camry"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-4 pt-3 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <FaCalendarCheck />
                <span>Easy Booking</span>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-xl font-semibold mb-2">Toyota Camry</h4>

              <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                <span>5 seats</span>
                <span>• Automatic</span>
                <span>• Petrol</span>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                Well-maintained, comfortable, and perfect for city or highway travel.
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3 bg-white">
            <div className="relative h-44 md:h-48 w-full overflow-hidden">
              <img
                src="https://i.ibb.co.com/DPymPPdk/a-Aur-RPIq-RLda-Bo-A-Nissan-X-Trail2025exteriorfrontthreequarterviewdriving.jpg"
                alt="Nissan X-Trail"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-4 pt-3 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                <FaMoneyBillWave />
                <span>Affordable Rates</span>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-xl font-semibold mb-2">Nissan X-Trail</h4>

              <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                <span>7 seats</span>
                <span>• Automatic</span>
                <span>• Diesel</span>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                Spacious and powerful — ideal for family trips and long adventures.
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3 bg-white">
            <div className="relative h-44 md:h-48 w-full overflow-hidden">
              <img
                src="https://i.ibb.co.com/prjwq1TL/2024-city-1-77eb-wm.png"
                alt="Honda City"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-4 pt-3 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                <FaShieldAlt />
                <span>Trusted Providers</span>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-xl font-semibold mb-2">Honda City</h4>

              <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                <span>5 seats</span>
                <span>• Manual</span>
                <span>• Petrol</span>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                Smooth handling and great mileage — perfect for daily use.
              </p>
             </div>
          </div>

          <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3 bg-white">
            <div className="relative h-44 md:h-48 w-full overflow-hidden">
              <img
                src="https://i.ibb.co.com/xq2rXyvJ/public.jpg "
                alt="Mazda Demio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-4 pt-3 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                <FaHeadset />
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-xl font-semibold mb-2">Mazda Demio</h4>

              <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                <span>4 seats</span>
                <span>• Automatic</span>
                <span>• Petrol</span>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                The Mazda Demio is a compact hatchback known for its fuel efficiency and nimble handling.
              </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCars;
