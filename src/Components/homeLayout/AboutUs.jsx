import { Link } from "react-router";

const AboutUs = () => {
    return (

        <section className="py-6 md:py-16 px-6 bg-base-200">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 justify-center items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-base-300">About <span className="text-primary">Us</span></h2>
                    <p className="mb-4 leading-relaxed text-accent">
                        At <span className="font-semibold">Rent Wheels</span>, we believe that every journey should begin with
                        comfort, trust, and convenience. Our mission is simple — to make
                        premium transportation accessible to everyone.
                    </p>
                    <p className="mb-4 leading-relaxed text-accent">
                        Whether you're planning a weekend getaway, a business trip, or just
                        need a reliable ride for the day, we offer a wide range of
                        well-maintained vehicles tailored to your needs.
                    </p>
                    <p className="mb-4 leading-relaxed text-accent">
                        We started with a vision to transform the car rental experience by
                        offering transparent pricing, top-tier service, and a modern,
                        user‑friendly booking process. Today, we proudly serve thousands of
                        customers who rely on us for safe, stylish, and dependable
                        transportation.
                    </p>
                    <p className="leading-relaxed text-accent">
                        At Rent Wheels, it’s not just about renting cars —
                        <span className="font-semibold"> it’s about creating journeys you’ll remember.</span>
                    </p>
                </div>

                <div>
                    <div className="md:mt-30">
                        <img className="w-full rounded-3xl border border-gray-500 p-2 bg-white shadow-2xl" src="https://i.ibb.co.com/sdmmz6xd/bd.jpg" alt="" />
                    </div>
                </div>
                <Link to='/' className="btn btn-primary text-white hover:bg-secondary">Back to Home</Link>
            </div>
        </section>
    );
};

export default AboutUs;
