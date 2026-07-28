import { useMemo, useState } from "react";

import { menuItems } from "../data/menu";
import MenuCard from "./MenuCard";
import MenuCategories from "./MenuCategories";

const MenuGrid = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section className="bg-[#FFF8EE] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Search */}

        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search your favorite tiffin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg rounded-full border border-gray-300 px-6 py-4 outline-none focus:border-orange-500"
          />
        </div>

        {/* Categories */}

        <MenuCategories
          selected={category}
          onSelect={setCategory}
        />

        {/* Cards */}

        {filteredItems.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-3xl font-semibold text-gray-700">
              No menu items found.
            </h2>

            <p className="mt-3 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuGrid;