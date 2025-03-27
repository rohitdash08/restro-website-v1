import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { images } from "../assets/images";

const menuCategories = [
  {
    title: "Lunch",
    description:
      "A curated selection of Mediterranean-inspired dishes, perfect for a midday escape.",
    image: images.menu1,
    link: "/menu/lunch",
  },
  {
    title: "Dinner",
    description:
      "Experience our full menu with seasonal specialties and chef's signature dishes.",
    image: images.menu2,
    link: "/menu/dinner",
  },
  {
    title: "Wine List",
    description:
      "Explore our extensive collection of wines from Mediterranean regions and beyond.",
    image: images.menu3,
    link: "/menu/wine",
  },
];

const Menu = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">
            Our Menu
          </h2>
          <p className="text-lg">
            Crafted with passion and the finest ingredients, our menu celebrates
            the rich culinary heritage of the Mediterranean.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 200}>
              <div className="overflow-hidden group">
                <div className="hover-zoom">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 border border-t-0 border-border bg-white">
                  <h3 className="text-xl font-playfair font-medium mb-2">
                    {category.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {category.description}
                  </p>
                  <Link
                    to={category.link}
                    className="text-accent font-medium inline-flex items-center group"
                  >
                    <span className="menu-item">View Menu</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
