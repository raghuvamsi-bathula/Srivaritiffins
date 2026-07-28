import { FaFire, FaLeaf, FaStar } from "react-icons/fa";
import specialDish from "../assets/images/chef-special.png";

const ChefsSpecial = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-orange-600 font-semibold">

              <FaFire />

              Chef's Recommendation

            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight">

              Signature

              <span className="text-orange-500">

                Ghee Karam Dosa

              </span>

            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">

              Our most loved dosa prepared with fresh homemade batter,
              pure ghee, authentic karam podi and served with coconut
              chutney, peanut chutney and hot sambar.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="flex items-center gap-3">

                <FaLeaf className="text-green-600" />

                <span>100% Pure Veg</span>

              </div>

              <div className="flex items-center gap-3">

                <FaStar className="text-yellow-500" />

                <span>4.9 Rating</span>

              </div>

            </div>

            <div className="mt-12 flex items-center gap-8">

              <div>

                <p className="text-gray-500">
                  Starting From
                </p>

                <h3 className="text-5xl font-bold text-orange-500">
                  ₹180
                </h3>

              </div>

              <button className="rounded-full bg-orange-500 px-8 py-4 text-white hover:bg-orange-600 transition">

                Order Now

              </button>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="absolute h-[450px] w-[450px] rounded-full bg-orange-200 blur-3xl opacity-40"></div>

            <img
              src={specialDish}
              alt="Chef Special"
              className="relative z-10 w-[520px] drop-shadow-2xl hover:scale-105 transition duration-500"
            />

            <div className="absolute top-12 left-0 rounded-3xl bg-white p-5 shadow-xl">

              <p className="text-sm text-gray-500">

                Today's Special

              </p>

              <h4 className="mt-2 font-bold">

                Ghee Karam Dosa

              </h4>

            </div>

            <div className="absolute bottom-10 right-0 rounded-3xl bg-white p-5 shadow-xl">

              <h4 className="text-3xl font-bold text-orange-500">

                4.9★

              </h4>

              <p className="text-gray-500">

                Customer Rating

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ChefsSpecial;