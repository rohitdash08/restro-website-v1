import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { images } from "../assets/images";

const About = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-medium">
                Welcome to Olivia
              </h2>
              <p className="text-lg">
                Located in the heart of San Francisco, Olivia brings the rich
                traditions and vibrant flavors of Mediterranean cuisine to life.
              </p>
              <p>
                Our restaurant draws inspiration from the sun-drenched coastal
                regions, from Spain to Greece and beyond. We believe in honoring
                centuries-old recipes while infusing contemporary techniques to
                create an unforgettable dining experience.
              </p>
              <p>
                At Olivia, each dish tells a story - of ancient culinary
                traditions, of carefully sourced ingredients, and of our passion
                for exceptional food. Our menu changes seasonally to showcase
                the freshest local and imported ingredients at their peak.
              </p>
              <Link to="/about" className="btn-primary mt-4">
                Our Story
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2 hover-zoom">
            <img
              src={images.about}
              alt="About Olivia Restaurant"
              className="w-full h-[500px] object-cover"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
