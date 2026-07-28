import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  const phoneNumber = "917003334115"; // Replace with your number

  const message =
    "Hello! I would like to know more about Sri Vari Tiffins.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      h-16
      w-16
      rounded-full
      bg-[#25D366]
      shadow-2xl
      flex
      items-center
      justify-center
      text-white
      text-4xl
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-green-400/40
      animate-bounce
      "
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsapp;