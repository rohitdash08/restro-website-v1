import { useRef, useEffect, useState } from "react";
import { images } from "../assets/images";
import SplitText from "./SplitText";

const Parallax = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !innerRef.current) return;

      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsVisible(true);

        // Calculate parallax effect
        const scrollPosition = window.scrollY;
        const elementTop = parallaxRef.current.offsetTop;
        const elementHeight = parallaxRef.current.offsetHeight;
        const windowMiddle = scrollPosition + windowHeight / 2;
        const elementMiddle = elementTop + elementHeight / 2;
        const difference = windowMiddle - elementMiddle;
        const speed = 0.4;

        const yPos = difference * speed;
        innerRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={parallaxRef} className="py-32 md:py-48 relative overflow-hidden">
      <div
        ref={innerRef}
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images.parallax})`,
          height: "120%",
          top: "-10%",
        }}
      ></div>

      <div className="container-custom text-center text-white relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="overflow-hidden mb-6">
            <SplitText
              text='"An extraordinary culinary journey that transports you to the Mediterranean coast."'
              tag="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium"
              revealed={isVisible}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-xl italic">— San Francisco Chronicle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
