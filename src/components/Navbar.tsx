import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}

        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-orange-600"
        >
          SRIVARITIFFINS
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="tel:07003334115"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-orange-600"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">

          <div className="flex flex-col py-4">

            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="tel:07003334115"
              className="mx-6 mt-3 bg-orange-500 text-white rounded-full py-3 text-center"
            >
              Call Now
            </a>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;