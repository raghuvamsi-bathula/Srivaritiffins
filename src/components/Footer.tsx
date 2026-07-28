import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1E1E1E] text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              Sri Vari Tiffins
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Authentic South Indian breakfast, meals and snacks made fresh
              every day with premium ingredients and traditional recipes.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li><a href="/">Home</a></li>

              <li><a href="/menu">Menu</a></li>

              <li><a href="/about">About</a></li>

              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-orange-500 mt-1" />

                <span className="text-gray-300">
                  +91 70033 334115
                </span>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-orange-500 mt-1" />

                <span className="text-gray-300">
                  Vijayawada, Andhra Pradesh
                </span>

              </div>

            </div>

          </div>

          {/* Opening Hours */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Opening Hours
            </h3>

            <div className="flex gap-4">

              <FaClock className="text-orange-500 mt-1" />

              <div className="text-gray-300">

                <p>Morning</p>

                <p>6:30 AM - 11:30 AM</p>

                <br />

                <p>Evening</p>

                <p>5:30 PM - 11:00 PM</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center space-y-1">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sri Vari Tiffins. All Rights Reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Designed by <span className="font-medium">Raghu Vamsi Bathula</span>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;