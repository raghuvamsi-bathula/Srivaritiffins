import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
            Customer satisfaction is at the heart of everything we do.
            Here's what our guests say about Sri Vari Tiffins.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-[#FFF8EE] p-8 shadow-md hover:shadow-xl transition duration-300"
            >

              <FaQuoteLeft className="text-4xl text-orange-500" />

              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="flex mt-6 gap-1">

                {[...Array(item.rating)].map((_, index) => (

                  <FaStar
                    key={index}
                    className="text-yellow-500"
                  />

                ))}

              </div>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.location}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;