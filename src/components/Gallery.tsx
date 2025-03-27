// import { useState, useEffect, useRef } from "react";
// import AnimatedSection from "./AnimatedSection";
// import { images } from "../assets/images";
// import SplitText from "./SplitText";

// const galleryImages = [
//   {
//     src: images.gallery1,
//     alt: "Elegant restaurant interior",
//   },
//   {
//     src: images.gallery2,
//     alt: "Chef preparing Mediterranean dish",
//   },
//   {
//     src: images.gallery3,
//     alt: "Seafood platter on marble table",
//   },
//   {
//     src: images.interiorDining,
//     alt: "Interior dining space",
//   },
//   {
//     src: images.chef,
//     alt: "Our head chef at work",
//   },
//   {
//     src: images.menu1,
//     alt: "Fresh mediterranean ingredients",
//   },
// ];

// const Gallery = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-24 bg-secondary/30">
//       <div className="container-custom">
//         <div className="text-center max-w-2xl mx-auto mb-16 overflow-hidden">
//           <SplitText
//             text="Gallery"
//             tag="h2"
//             className="text-3xl md:text-4xl font-playfair font-medium mb-4"
//             revealed={isVisible}
//           />
//           <div
//             className={`transition-all duration-1000 transform ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "0.4s" }}
//           >
//             <p className="text-lg">
//               Step inside and experience the warm ambiance, artfully prepared
//               dishes, and the passion behind our Mediterranean cuisine.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.map((image, index) => (
//             <AnimatedSection
//               key={index}
//               className="img-hover-zoom"
//               delay={index * 100}
//               animation="fade-up"
//             >
//               <div className="relative overflow-hidden aspect-[4/3]">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/images";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-kokkari-dark relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOUI4NzIiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMSAxIDAtMTIgNiA2IDAgMCAxIDAgMTJabTI0LTEyYTYgNiAwIDEgMSAwLTEyIDYgNiAwIDAgMSAwIDEyWm0wIDI0YTYgNiAwIDEgMSAwLTEyIDYgNiAwIDAgMSAwIDEyWm0wIDI0YTYgNiAwIDEgMSAwLTEyIDYgNiAwIDAgMSAwIDEyWm0tMjQgMGE2IDYgMCAxIDEgMC0xMiA2IDYgMCAwIDEgMCAxMlptLTI0IDBhNiA2IDAgMSAxIDAtMTIgNiA2IDAgMCAxIDAgMTJabTI0LTI0YTYgNiAwIDEgMSAwLTEyIDYgNiAwIDAgMSAwIDEyWm0tMjQgMGE2IDYgMCAxIDEgMC0xMiA2IDYgMCAwIDEgMCAxMlptMC0yNGE2IDYgMCAxIDEgMC0xMiA2IDYgMCAwIDEgMCAxMloiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with decorative elements */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px w-16 bg-kokkari-gold"></div>
            <span className="text-kokkari-gold font-serif tracking-widest text-sm mx-4">
              OUR MOMENTS
            </span>
            <div className="h-px w-16 bg-kokkari-gold"></div>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-serif text-kokkari-gold mb-6 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Gallery
          </h2>

          <p
            className={`text-kokkari-cream text-lg max-w-2xl mx-auto font-light transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            Step inside and experience the warm ambiance, artfully prepared
            dishes, and the passion behind our Mediterranean cuisine. Each image
            tells a story of our commitment to authentic Greek flavors.
          </p>
        </div>

        {/* Gallery Grid with improved styling */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden aspect-[4/3] border border-kokkari-gold/20 transform transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover brightness-90 contrast-105 transition-all duration-1000 ease-in-out group-hover:brightness-110 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kokkari-dark/80 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-end">
                  <div className="p-6 transform translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-kokkari-gold font-serif text-xl">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered action button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <button className="px-8 py-3 border-2 border-kokkari-gold text-kokkari-gold hover:bg-kokkari-gold hover:text-kokkari-dark transition-colors duration-300 font-sans tracking-wider button-reservation">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
