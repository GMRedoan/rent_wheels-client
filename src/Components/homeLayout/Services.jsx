import { FaCarSide, FaHeadset, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services-section" className="bg-base-200 pb-30">
      {/* Heading */}
      <div className="text-center pb-16 px-4">
        <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-bold">
          Our <span className="text-primary">Services</span>
        </h2>
        <p data-aos="zoom-in" className="mt-6 text-accent max-w-3xl mx-auto">
          Premium car rental services designed for comfort, safety, and convenience.
        </p>
      </div>

      {/* Services Grid */}
      <div data-aos="fade-up" className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        
        <div className="card bg-base-100 shadow-xl p-8 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
          <FaCarSide className="text-5xl mx-auto text-primary mb-6" />
          <h3 className="text-xl font-semibold mb-3">Wide Car Selection</h3>
          <p className="text-accent">
            Choose from economy to luxury vehicles, all well-maintained and ready to drive.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-8 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
          <FaMapMarkedAlt className="text-5xl mx-auto text-primary mb-6" />
          <h3 className="text-xl font-semibold mb-3">Anywhere Pickup</h3>
          <p className="text-accent">
            Convenient pickup and drop-off services across major cities in Bangladesh.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-8 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
          <FaShieldAlt className="text-5xl mx-auto text-primary mb-6" />
          <h3 className="text-xl font-semibold mb-3">Safe & Insured</h3>
          <p className="text-accent">
            Every ride is fully insured and inspected to ensure maximum safety.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-8 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
          <FaHeadset className="text-5xl mx-auto text-primary mb-6" />
          <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
          <p className="text-accent">
            Our dedicated support team is always available to assist you anytime.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
