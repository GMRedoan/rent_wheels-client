import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section id="contact-section" className="bg-base-200 pt-10 pb-20">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-bold">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p data-aos="zoom-in" className="mt-6 text-accent max-w-3xl mx-auto">
          Have questions or need assistance? Our team is always ready to help you.
        </p>
      </div>

      {/* Content */}
      <div className="mx-4 md:mx-22 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 items-center">
        
        {/* Left Info */}
        <div className="space-y-10">
          <div data-aos="fade-right" className="flex gap-6 items-start">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Call Us</h3>
              <p className="text-accent">+880 17352 532 45</p>
              <p className="text-accent text-sm">Available 24/7</p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-delay="100" className="flex gap-6 items-start">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email Us</h3>
              <p className="text-accent">support@rentwheels.com</p>
              <p className="text-accent text-sm">We reply within 24 hours</p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-delay="200" className="flex gap-6 items-start">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
              <p className="text-accent">Dhaka, Bangladesh</p>
              <p className="text-accent text-sm">Corporate Office</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div data-aos="fade-left" className="card bg-base-100 shadow-xl p-10 rounded-2xl">
          <form className="space-y-6">
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="btn btn-primary w-full text-white">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
