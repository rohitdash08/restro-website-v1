import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplitText from "../components/SplitText";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24 bg-secondary/30">
        <div className="container-custom text-center">
          <div className="overflow-hidden mb-6">
            <SplitText
              text="404"
              tag="h1"
              className="text-6xl md:text-7xl font-playfair font-medium"
              revealed={isLoaded}
            />
          </div>

          <div className="overflow-hidden mb-8">
            <SplitText
              text="Page Not Found"
              tag="h2"
              className="text-2xl md:text-3xl"
              revealed={isLoaded}
              delay={200}
            />
          </div>

          <div
            className={`transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-lg mb-10 max-w-xl mx-auto">
              We're sorry, the page you're looking for cannot be found. Please
              check the URL or navigate back to our homepage.
            </p>

            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
