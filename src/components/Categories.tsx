import { categories } from "../data/categories";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Explore Our Menu
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Popular Categories
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From crispy dosas to wholesome meals, discover our wide
            selection of freshly prepared South Indian delicacies.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {categories.map((category) => (

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              key={category.id}
              className="relative overflow-hidden rounded-3xl group shadow-xl"
            >

              <img
                src={category.image}
                alt={category.title}
                className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8">

                <h3 className="text-white text-3xl font-bold">
                  {category.title}
                </h3>

                <p className="text-orange-300 mt-2">
                  {category.items}
                </p>

                <Link
                  to="/menu"
                  className="inline-block mt-6 rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 transition"
                >
                  View Menu →
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;