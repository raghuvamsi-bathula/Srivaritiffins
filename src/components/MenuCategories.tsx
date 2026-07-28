interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  "All",
  "Breakfast",
  "Meals",
  "Beverages",
];

const MenuCategories = ({
  selected,
  onSelect,
}: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-6 py-3 transition ${
            selected === category
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-orange-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;