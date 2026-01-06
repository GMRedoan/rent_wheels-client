import { FaCar, FaComments, FaFlag, FaHeart } from "react-icons/fa";

const Feedback = () => {
  return (
<div className="pt-5 pb-15 bg-base-200">
      <section className="rounded-xl py-10 mx-4 md:mx-0 md:py-20 mb-20 bg-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center px-6">
          <div className="group transition duration-300 cursor-pointer">
          <FaHeart className="text-6xl mx-auto text-accent group-hover:text-primary transition duration-300" />
          <h3 className="text-3xl font-semibold text-gray-700 group-hover:text-primary transition duration-300 mt-4">
            5567
          </h3>
          <p className="text-gray-500 text-sm tracking-widest mt-1 group-hover:text-primary  transition duration-300">
            HAPPY CUSTOMERS
          </p>
        </div>

        <div className="group transition duration-300 cursor-pointer">
          <FaCar className="text-6xl mx-auto text-gray-500 group-hover:text-primary  transition duration-300" />
          <h3 className="text-3xl font-semibold text-gray-700 group-hover:text-primary  transition duration-300 mt-4">
            657
          </h3>
          <p className="text-gray-500 text-sm tracking-widest mt-1 group-hover:text-primary  transition duration-300">
            TOTAL CAR COUNT
          </p>
        </div>

        <div className="group transition duration-300 cursor-pointer">
          <FaFlag className="text-6xl mx-auto text-gray-500 group-hover:text-primary  transition duration-300" />
          <h3 className="text-3xl font-semibold text-gray-700 group-hover:text-primary  transition duration-300 mt-4">
            1,255,657
          </h3>
          <p className="text-gray-500 text-sm tracking-widest mt-1 group-hover:text-primary  transition duration-300">
            TOTAL KM/MIL
          </p>
        </div>

        <div className="group transition duration-300 cursor-pointer">
          <FaComments className="text-6xl mx-auto text-gray-500 group-hover:text-primary  transition duration-300" />
          <h3 className="text-3xl font-semibold text-gray-700 group-hover:text-primary  transition duration-300 mt-4">
            1255
          </h3>
          <p className="text-gray-500 text-sm tracking-widest mt-1 group-hover:text-primary  transition duration-300">
            CALL CENTER SOLUTIONS
          </p>
        </div>
      </div>
    </section>



      <section>
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Loved by Hundreds of <span className="text-primary">Happy Clients</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="card bg-white shadow-xl border border-base-200 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral mb-4">
            Professionalism that matches the highest executive standards.
          </h3>

          <p className="text-base text-neutral/70">
            As someone who deals with high-level clients daily, I recognize
            quality immediately. The team behind Rent Wheel delivers not just
            comfort, but confidence.
          </p>

          <div className="border-t border-base-200 my-6"></div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://i.ibb.co.com/7JpJp0H3/premium-photo-1689530775582-83b8abdb5020.jpg" alt="Client" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral">MD Rubel</p>
              <p className="text-neutral/60 text-sm">Dhaka</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-xl border border-base-200 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral mb-4">
            It felt less like renting, more like being chauffeured by my own staff.
          </h3>

          <p className="text-base text-neutral/70">
            There’s a distinct difference between premium and personal, and this
            service blends both. The attention to my preferences was impressive.
          </p>

          <div className="border-t border-base-200 my-6"></div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://i.ibb.co.com/pBSDqf6n/istockphoto-2172873491-612x612.jpg" alt="Client" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral">Nadim Khan</p>
              <p className="text-neutral/60 text-sm">Barishal</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-xl border border-base-200 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral mb-4">
            A service that truly respects my time.
          </h3>

          <p className="text-base text-neutral/70">
            Every minute matters in my schedule — and Rent Wheel understood that.
            The car arrived early, the driver was attentive, and the
            ride felt like my own moving sanctuary.
          </p>

          <div className="border-t border-base-200 my-6"></div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://i.ibb.co.com/yny4Jhw1/istockphoto-2063799507-612x612.jpg" alt="Client" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral">Dr. Enan</p>
              <p className="text-neutral/60 text-sm">Rajshahi</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-16">
        Real stories from satisfied travelers and VIP clients.
      </p>
    </section>

</div> 
 );
};

export default Feedback;
