 import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import logo from '/logo.png'
 
const Footer = () => {
  return (
    <footer className="bg-[#0f2430] text-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="logo"
              className="w-30 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Rent <span className="text-primary">Wheels</span>
              </h1>
              <p className="text-sm text-gray-300">Drive luxury. Arrive in style.</p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-gray-300">
              We deliver exceptional cars for exceptional journeys.
            </p>
          </div>
        </div>

         <div className="border-t border-gray-700 my-8" />

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
           <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white"><a href="#">Home</a></li>
              <li className="hover:text-white"><a href="#">About</a></li>
              <li className="hover:text-white"><a href="#">Fleet</a></li>
              <li className="hover:text-white"><a href="#">Pricing</a></li>
              <li className="hover:text-white"><a href="#">Contact</a></li>
            </ul>
          </div>

           <div>
            <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white"><a href="#">Booking</a></li>
              <li className="hover:text-white"><a href="#">Testimonials</a></li>
              <li className="hover:text-white"><a href="#">FAQs</a></li>
              <li className="hover:text-white"><a href="#">Journal</a></li>
            </ul>
          </div>

           <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="text-gray-300 space-y-2">
              <p className="text-sm">✉️ contact@rentwheels.com</p>
              <p className="text-sm">📞 +62 812 3456 7890</p>
              <p className="text-sm">📍 Dhaka-1100 Rampura</p>
            </div>
          </div>

           <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex gap-3 items-center">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white/10 transition"
                  aria-label="instagram"
                >
                  <FaInstagram className="text-gray-200" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white/10 transition"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp className="text-gray-200" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white/10 transition"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn className="text-gray-200" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white/10 transition"
                  aria-label="facebook"
                >
                  <FaFacebookF className="text-gray-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

         <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-accent">
          <div>© {new Date().getFullYear()} RentWheels. All Rights Reserved.</div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
