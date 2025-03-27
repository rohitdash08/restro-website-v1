import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import SplitText from "./SplitText";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxEffect = scrollPosition * 0.5;

      heroRef.current.style.backgroundPositionY = `-${parallaxEffect}px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Set loaded state after a short delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen min-h-[800px] bg-cover bg-center flex items-center justify-center hero-image-animation"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${images.hero})`,
      }}
    >
      <div className="container-custom text-center text-white relative z-10">
        <div
          className={`max-w-3xl mx-auto space-y-8 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="overflow-hidden">
            <SplitText
              text="Authentic Mediterranean Cuisine"
              tag="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight"
              revealed={isLoaded}
            />
          </div>

          <div className="overflow-hidden" style={{ transitionDelay: "0.6s" }}>
            <p
              className={`text-lg md:text-xl font-light max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 ${
                isLoaded ? "opacity-90 translate-y-0" : ""
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              Experience the rich flavors of coastal Mediterranean in the heart
              of San Francisco
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1.2s" }}
          >
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link
              to="/reservations"
              className="border-2 border-white text-white px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-primary inline-block"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent"></div>
    </div>
  );
};

export default Hero;
