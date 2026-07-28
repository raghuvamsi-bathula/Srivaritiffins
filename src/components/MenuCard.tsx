import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaLeaf,
  FaStar,
  FaClock,
} from "react-icons/fa";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
 description: string;
  veg: boolean;
  popular: boolean;
}

interface Props {
  item: MenuItem;
}

const MenuCard = ({ item }: Props) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Popular */}

        {item.popular && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
            🔥 Popular
          </span>
        )}

        {/* Favourite */}

        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
        >
          {favorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      {/* Content */}

      <div className="p-6">

        {/* Veg */}

        <div className="flex items-center gap-2">

          {item.veg && (
            <>
              <FaLeaf className="text-green-600" />

              <span className="text-sm text-green-600 font-medium">
                Pure Veg
              </span>
            </>
          )}

        </div>

        {/* Name */}

        <h3 className="mt-4 text-2xl font-bold">
          {item.name}
        </h3>

        {/* Description */}

        <p className="mt-3 text-gray-600 leading-7">
          {item.description}
        </p>

        {/* Rating */}

        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FaStar className="text-yellow-500" />

            <span className="font-medium">
              4.8
            </span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <FaClock />

            <span>15 min</span>

          </div>

        </div>

        {/* Price */}

        <div className="mt-6 flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h2 className="text-3xl font-bold text-orange-500">
              {item.price}
            </h2>

          </div>

          <button className="rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600">
            Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default MenuCard;