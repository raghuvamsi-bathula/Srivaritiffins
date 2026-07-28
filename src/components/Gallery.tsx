import { motion } from "framer-motion";
import { galleryImages } from "../data/gallery";

const Gallery = () => {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Food Gallery
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            A Feast for Your Eyes
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-8">
            Every dish is freshly prepared with authentic South Indian flavors,
            premium ingredients, and served with love.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {galleryImages.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100"></div>

              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 transition duration-500 group-hover:translate-y-0">

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;