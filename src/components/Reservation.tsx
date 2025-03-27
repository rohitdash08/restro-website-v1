import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Reservation = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
            Make a Reservation
          </h2>
          <p className="text-lg mb-10">
            Join us for an unforgettable dining experience. Reserve your table
            today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 p-8 text-center">
              <h3 className="text-xl font-playfair mb-3">Phone</h3>
              <p className="mb-4">Call us directly to make a reservation</p>
              <a
                href="tel:+14155550123"
                className="text-lg font-medium hover:text-accent transition-colors"
              >
                (415) 555-0123
              </a>
            </div>

            <div className="bg-white/10 p-8 text-center">
              <h3 className="text-xl font-playfair mb-3">Online</h3>
              <p className="mb-4">
                Book your table through our reservation system
              </p>
              <Link
                to="/reservations"
                className="text-accent font-medium hover:underline transition-colors"
              >
                Make a Reservation
              </Link>
            </div>

            <div className="bg-white/10 p-8 text-center">
              <h3 className="text-xl font-playfair mb-3">Large Parties</h3>
              <p className="mb-4">
                For groups of 8 or more, please contact us directly
              </p>
              <a
                href="mailto:events@olivia.com"
                className="text-accent font-medium hover:underline transition-colors"
              >
                events@olivia.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="border-2 border-white px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-primary inline-block"
            >
              Book Now
            </Link>
            <Link
              to="/private-dining"
              className="border-2 border-accent text-accent px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:text-white inline-block"
            >
              Private Dining
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reservation;
