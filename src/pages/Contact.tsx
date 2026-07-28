import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

        <p className="text-lg text-gray-700">
          📍 Visakhapatnam
        </p>

        <p className="text-lg text-gray-700 mt-2">
          📞 +91 XXXXX XXXXX
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Contact;