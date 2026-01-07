import {
  FaClock,
  FaMoneyBillWave,
  FaCarAlt,
  FaUserShield,
} from "react-icons/fa";

const Features = () => {
  return (
    <section id="features-section" className="bg-base-200 pb-20 md:pb-40">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <h2 data-aos="zoom-in" className="text-4xl md:text-6xl font-bold">
          Built for a <span className="text-primary">Better Ride</span>
        </h2>
        <p data-aos="zoom-in" className="mt-6 text-accent max-w-3xl mx-auto">
          Every feature is designed to elevate your journey from start to finish.
        </p>
      </div>

      {/* Content */}
      <div className="mx-4 md:mx-12 grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-center">
        
        {/* Left Features */}
        <div className="space-y-12">
          <div data-aos="fade-right" className="flex gap-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaClock />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
              <p className="text-accent">
                Book your ride instantly with a seamless, hassle-free process.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-delay="100" className="flex gap-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaMoneyBillWave />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-accent">
                Transparent costs with no surprise fees at checkout.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-delay="200" className="flex gap-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaCarAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-accent">
                Drive clean, modern, and professionally maintained cars.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-delay="300" className="flex gap-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaUserShield />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Trusted Safety</h3>
              <p className="text-accent">
                Verified drivers and insured rides for complete peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div data-aos="fade-left" className="relative">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car"
            className="rounded-2xl shadow-2xl"
          />
          <div className="
          absolute -bottom-6 -left-6 bg-primary text-white p-2 md:px-6 md:py-4 rounded-xl shadow-lg">
            <p className="text-md md:text-lg font-semibold">10+ Years Experience</p>
            <p className="text-sm opacity-90">Trusted by thousands</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
