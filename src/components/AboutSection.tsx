import { FaCheckCircle } from "react-icons/fa";

import foodImage from "../assets/images/about-food.jpg";
import restaurantImage from "../assets/images/about-restaurant.jpg";

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Images */}

          <div className="relative">

            <img
              src={foodImage}
              alt="Sri Vari Tiffins"
              className="rounded-[30px] shadow-2xl"
            />

            <img
              src={restaurantImage}
              alt="Restaurant"
              className="absolute -bottom-10 -right-10 w-72 rounded-[24px] border-8 border-white shadow-2xl hidden lg:block"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
              About Us
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
              Bringing the Authentic Taste of
              <span className="text-orange-500"> South India </span>
              to Your Plate
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Sri Vari Tiffins is dedicated to serving freshly prepared
              South Indian breakfast, meals, and snacks using traditional
              recipes and premium ingredients. Every dish is cooked with
              care to provide the comforting taste of home.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <p>Freshly prepared every day with premium ingredients.</p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <p>100% hygienic kitchen and quality assurance.</p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <p>Traditional recipes passed through generations.</p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <p>Loved by thousands of happy customers.</p>
              </div>

            </div>

            <button className="mt-10 rounded-full bg-orange-500 px-8 py-4 text-white hover:bg-orange-600 transition">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;