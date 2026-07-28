import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-food.png"; // Add your hero image here

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#FFF8EE] overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-70"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-100 blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Since 2015
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Authentic
            <br />
            South Indian
            <br />
            <span className="text-orange-500">
              Tiffins
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Freshly prepared every morning using traditional recipes and premium ingredients.
            Experience the taste of homemade Idly, Dosa, Poori, Pongal, Meals, and more.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all">
              Explore Menu
            </button>

            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full transition-all">
              Order Now
            </button>

          </div>

          {/* Statistics */}

          <div className="mt-12 flex gap-10">

            <div>
              <h2 className="text-3xl font-bold text-orange-500">
                30+
              </h2>
              <p className="text-gray-600">
                Tiffin Items
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-500">
                10K+
              </h2>
              <p className="text-gray-600">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-500">
                ★4.9
              </h2>
              <p className="text-gray-600">
                Customer Rating
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 mt-20 lg:mt-0 flex justify-center"
        >
          <div className="relative">

            <img
              src={heroImage}
              alt="South Indian Tiffins"
              className="w-[520px] drop-shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute top-10 -left-12 bg-white rounded-2xl shadow-xl p-5">

              <p className="text-3xl">
                ⭐⭐⭐⭐⭐
              </p>

              <h3 className="font-bold mt-2">
                Best Taste
              </h3>

              <p className="text-gray-500 text-sm">
                Loved by thousands
              </p>

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-12 -right-10 bg-white rounded-2xl shadow-xl p-5">

              <h3 className="font-bold text-orange-500">
                Fresh Daily
              </h3>

              <p className="text-gray-500 text-sm">
                100% Hygienic Kitchen
              </p>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;