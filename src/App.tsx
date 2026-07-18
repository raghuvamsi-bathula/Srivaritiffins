const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-orange-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold">Sri Vari Tiffins</h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li className="cursor-pointer hover:text-yellow-300">Home</li>
            <li className="cursor-pointer hover:text-yellow-300">Menu</li>
            <li className="cursor-pointer hover:text-yellow-300">About</li>
            <li className="cursor-pointer hover:text-yellow-300">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Welcome to Sri Vari Tiffins
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience authentic South Indian breakfast prepared with fresh
            ingredients, traditional recipes, and homemade flavors.
          </p>

          <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Explore Menu
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-14">
            Why Choose Us?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🍛</div>
              <h4 className="text-2xl font-semibold mb-3">
                Authentic Taste
              </h4>
              <p className="text-gray-600">
                Traditional South Indian recipes served fresh every day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-2xl font-semibold mb-3">
                Fresh Ingredients
              </h4>
              <p className="text-gray-600">
                We use high-quality ingredients for delicious and healthy food.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-2xl font-semibold mb-3">
                Made with Love
              </h4>
              <p className="text-gray-600">
                Every dish is prepared with care to give you a homely experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-14">
            Our Popular Tiffins
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Idli",
              "Dosa",
              "Poori",
              "Vada",
              "Upma",
              "Pongal",
              "Uttapam",
              "Pesarattu",
            ].map((item) => (
              <div
                key={item}
                className="bg-orange-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">🍽️</div>

                <h4 className="text-xl font-semibold">{item}</h4>

                <p className="text-gray-600 mt-2">
                  Freshly prepared every morning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-orange-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-6">Visit Sri Vari Tiffins</h3>

          <p className="text-lg mb-3">
            📍 Fresh South Indian Breakfast & Snacks
          </p>

          <p className="text-lg mb-3">📞 +91 XXXXX XXXXX</p>

          <p className="text-lg">
            ⏰ Open Daily • 6:00 AM – 11:00 PM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © {new Date().getFullYear()} Sri Vari Tiffins. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;