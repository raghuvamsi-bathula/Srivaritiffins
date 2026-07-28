import {
  FaLeaf,
  FaUtensils,
  FaClock,
  FaAward,
  FaUsers,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={34} />,
    title: "Fresh Ingredients",
    description:
      "Every dish is prepared using carefully selected fresh vegetables, spices, and premium ingredients.",
  },
  {
    icon: <FaUtensils size={34} />,
    title: "Authentic Taste",
    description:
      "Traditional South Indian recipes passed through generations with rich homemade flavors.",
  },
  {
    icon: <FaClock size={34} />,
    title: "Prepared Fresh Daily",
    description:
      "Breakfast, meals, and snacks are cooked fresh every day to ensure quality and taste.",
  },
  {
    icon: <FaAward size={34} />,
    title: "Premium Quality",
    description:
      "Maintaining high standards of hygiene, consistency, and customer satisfaction.",
  },
  {
    icon: <FaUsers size={34} />,
    title: "Family Friendly",
    description:
      "A comfortable place where families and friends enjoy delicious food together.",
  },
  {
    icon: <FaSmile size={34} />,
    title: "Happy Customers",
    description:
      "Thousands of satisfied customers trust us for authentic South Indian tiffins.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-3 text-gray-800">
            Experience The Difference
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            At Sri Vari Tiffins, every meal is prepared with passion,
            traditional recipes, and a commitment to delivering the finest
            South Indian dining experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center transition group-hover:bg-orange-500 group-hover:text-white">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Statistics */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white">

          <div className="grid gap-10 text-center md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="mt-3">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">30+</h3>
              <p className="mt-3">Delicious Dishes</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">10K+</h3>
              <p className="mt-3">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">4.9★</h3>
              <p className="mt-3">Customer Rating</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;