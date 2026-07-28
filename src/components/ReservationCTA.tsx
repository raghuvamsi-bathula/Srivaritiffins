import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import ctaBg from "../assets/images/cta-bg.jpg";

const ReservationCTA = () => {
  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        <p className="uppercase tracking-[5px] text-orange-400 font-semibold">
          Visit Us Today
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
          Fresh Tiffins
          <br />
          Made Every Morning
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-200 leading-8">
          Enjoy authentic South Indian breakfast, delicious meals,
          fresh filter coffee, and warm hospitality at Sri Vari Tiffins.
        </p>

        {/* Information */}

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6">

            <FaPhoneAlt className="mx-auto text-3xl text-orange-400" />

            <h3 className="mt-4 text-xl font-semibold">
              Call Us
            </h3>

            <p className="mt-2 text-gray-200">
              +91 70033 334115
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6">

            <FaClock className="mx-auto text-3xl text-orange-400" />

            <h3 className="mt-4 text-xl font-semibold">
              Opening Hours
            </h3>

            <p className="mt-2 text-gray-200">
              6:30 AM – 11:30 AM
            </p>

            <p className="text-gray-200">
              5:30 PM – 11:00 PM
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6">

            <FaMapMarkerAlt className="mx-auto text-3xl text-orange-400" />

            <h3 className="mt-4 text-xl font-semibold">
              Location
            </h3>

            <p className="mt-2 text-gray-200">
              Vijayawada, Andhra Pradesh
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <a
            href="tel:+9170033334115"
            className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            📞 Call Now
          </a>

          <Link
            to="/menu"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            View Menu
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ReservationCTA;