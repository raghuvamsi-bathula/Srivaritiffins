import { Link } from "react-router-dom";

import aboutHero from "../assets/images/about-hero.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="text-center text-white">

          <h1 className="text-5xl md:text-7xl font-bold">
            About Sri Vari Tiffins
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Tradition • Taste • Trust
          </p>

          <div className="mt-8 flex justify-center items-center gap-3 text-orange-300">

            <Link to="/">Home</Link>

            <span>/</span>

            <span className="text-white">
              About
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;