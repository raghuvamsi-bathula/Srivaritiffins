type FoodCardProps = {
  name: string;
  price: string;
  image: string;
  description: string;
  tag: string;
};

const FoodCard = ({
  name,
  price,
  image,
  description,
  tag,
}: FoodCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
          {tag}
        </span>

      </div>

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <span className="text-lg font-bold text-orange-500">
            {price}
          </span>

        </div>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <button className="mt-6 w-full rounded-full bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600">
          View Details
        </button>

      </div>

    </div>
  );
};

export default FoodCard;