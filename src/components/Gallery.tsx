import { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { images } from "../assets/images";
import SplitText from "./SplitText";

const galleryImages = [
  {
    src: images.gallery1,
    alt: "Elegant restaurant interior",
  },
  {
    src: images.gallery2,
    alt: "Chef preparing Mediterranean dish",
  },
  {
    src: images.gallery3,
    alt: "Seafood platter on marble table",
  },
  {
    src: images.interiorDining,
    alt: "Interior dining space",
  },
  {
    src: images.chef,
    alt: "Our head chef at work",
  },
  {
    src: images.menu1,
    alt: "Fresh mediterranean ingredients",
  },
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 overflow-hidden">
          <SplitText
            text="Gallery"
            tag="h2"
            className="text-3xl md:text-4xl font-playfair font-medium mb-4"
            revealed={isVisible}
          />
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <p className="text-lg">
              Step inside and experience the warm ambiance, artfully prepared
              dishes, and the passion behind our Mediterranean cuisine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={index}
              className="img-hover-zoom"
              delay={index * 100}
              animation="fade-up"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
