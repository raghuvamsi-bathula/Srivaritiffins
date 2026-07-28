import FoodCard from "./FoodCard";
import { specials } from "../data/specials";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const Specials = () => {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Our Signature Dishes"
            title="Today's Specials"
            description="Prepared fresh every day using authentic South Indian recipes, premium ingredients, and traditional cooking techniques."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {specials.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Specials;