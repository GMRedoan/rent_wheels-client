import React from "react";
import { GiLoveMystery } from "react-icons/gi";
import Swal from "sweetalert2";

const TopCars = () => {
    const handleFavorite = () => {
        Swal.fire({
            title: "Successfully Add To Your Favorite 🎊",
            icon: "success",
            confirmButtonColor: "#67AB4F"
        });
    }
    return (
        <section className="px-6 pb-20 bg-base-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-5xl font-extrabold mb-3">Top <span className="text-primary">Cars</span> For You</h3>
                    <p className="text-accent max-w-2xl mx-auto">
                        Hand-picked vehicles — reliable, comfortable, and ready to go.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3">
                        <div className="h-44 md:h-48 w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/sJMjr1FB/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg"
                                alt="Toyota Camry"
                                className="w-full h-full object-cover" />
                        </div>

                        <div className="p-5 bg-white">
                            <h4 className="text-xl font-semibold mb-2">Toyota Camry</h4>

                            <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                                <span>5 seats</span>
                                <span>• Automatic</span>
                                <span>• Petrol</span>
                            </div>

                            <p className="text-gray-500 text-sm mb-5">
                                Well-maintained, comfortable, and perfect for city or highway travel.
                            </p>

                            <button onClick={handleFavorite} className="btn btn-primary text-white w-full hover:bg-secondary">
                                Add to Favorite <GiLoveMystery />
                            </button>
                        </div>
                    </div>

                    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3">
                        <div className="relative h-44 md:h-48 w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/DPymPPdk/a-Aur-RPIq-RLda-Bo-A-Nissan-X-Trail2025exteriorfrontthreequarterviewdriving.jpg"
                                alt="Nissan X-Trail"
                                className="w-full h-full object-cover"/>
                        </div>
                        <div className="p-5 bg-white">
                            <h4 className="text-xl font-semibold mb-2">Nissan X-Trail</h4>

                            <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                                <span>7 seats</span>
                                <span>• Automatic</span>
                                <span>• Diesel</span>
                            </div>

                            <p className="text-gray-500 text-sm mb-5">
                                Spacious and powerful — ideal for family trips and long adventures.
                            </p>

                            <button onClick={handleFavorite} className="btn btn-primary text-white w-full hover:bg-secondary">
                                Add to Favorite <GiLoveMystery />
                            </button>
                        </div>
                    </div>

                    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition transform duration-300 hover:-translate-y-3">
                        <div className="relative h-44 md:h-48 w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/prjwq1TL/2024-city-1-77eb-wm.png"
                                alt="Honda City"
                                className="w-full h-full object-cover"
                            />
                         </div>
                        <div className="p-5 bg-white">
                            <h4 className="text-xl font-semibold mb-2">Honda City</h4>

                            <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                                <span>5 seats</span>
                                <span>• Manual</span>
                                <span>• Petrol</span>
                            </div>

                            <p className="text-gray-500 text-sm mb-5">
                                Smooth handling and great mileage — perfect for daily use.
                            </p>

                            <button onClick={handleFavorite} className="btn btn-primary text-white w-full hover:bg-secondary">
                                Add to Favorite <GiLoveMystery />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCars;