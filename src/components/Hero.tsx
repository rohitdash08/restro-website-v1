// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { images } from "../assets/images";
// import SplitText from "./SplitText";

// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!heroRef.current) return;
//       const scrollPosition = window.scrollY;
//       const parallaxEffect = scrollPosition * 0.5;

//       heroRef.current.style.backgroundPositionY = `-${parallaxEffect}px`;
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Set loaded state after a short delay for animations
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className="relative h-screen min-h-[800px] bg-cover bg-center flex items-center justify-center hero-image-animation"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${images.hero})`,
//       }}
//     >
//       <div className="container-custom text-center text-white relative z-10">
//         <div
//           className={`max-w-3xl mx-auto space-y-8 transition-opacity duration-1000 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ transitionDelay: "0.5s" }}
//         >
//           <div className="overflow-hidden">
//             <SplitText
//               text="Authentic Mediterranean Cuisine"
//               tag="h1"
//               className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight"
//               revealed={isLoaded}
//             />
//           </div>

//           <div className="overflow-hidden" style={{ transitionDelay: "0.6s" }}>
//             <p
//               className={`text-lg md:text-xl font-light max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 ${
//                 isLoaded ? "opacity-90 translate-y-0" : ""
//               }`}
//               style={{ transitionDelay: "0.9s" }}
//             >
//               Experience the rich flavors of coastal Mediterranean in the heart
//               of San Francisco
//             </p>
//           </div>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-opacity duration-1000 ${
//               isLoaded ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ transitionDelay: "1.2s" }}
//           >
//             <Link to="/menu" className="btn-primary">
//               View Our Menu
//             </Link>
//             <Link
//               to="/reservations"
//               className="border-2 border-white text-white px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-primary inline-block"
//             >
//               Make a Reservation
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
//       <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent"></div>
//     </div>
//   );
// };

// export default Hero;

// v2

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { images } from "../assets/images";
// import SplitText from "./SplitText";
// import { motion, AnimatePresence } from "framer-motion";

// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!heroRef.current) return;
//       const scrollPosition = window.scrollY;
//       const parallaxEffect = scrollPosition * 0.5;

//       heroRef.current.style.backgroundPositionY = `-${parallaxEffect}px`;
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Set loaded state after a short delay for animations
//     const timer = setTimeout(() => {
//       setIsLoaded(true);

//       // Delay the image animations slightly after the main content appears
//       setTimeout(() => {
//         setImagesLoaded(true);
//       }, 800);
//     }, 300);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(timer);
//     };
//   }, []);

//   // These would be your actual food images
//   const overlayImages = [
//     { src: images.hero, alt: "Food Image 1" }, // Replace with actual images
//     { src: images.hero, alt: "Food Image 2" }, // Replace with actual images
//     { src: images.hero, alt: "Food Image 3" }, // Replace with actual images
//     { src: images.hero, alt: "Food Image 4" }, // Replace with actual images
//   ];

//   // Animation variants for the images coming from different directions
//   const imageVariants = {
//     topHidden: { y: "-100%", opacity: 0 },
//     rightHidden: { x: "100%", opacity: 0 },
//     bottomHidden: { y: "100%", opacity: 0 },
//     leftHidden: { x: "-100%", opacity: 0 },
//     visible: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div
//       ref={heroRef}
//       className="relative h-screen min-h-[800px] bg-cover bg-center flex items-center justify-center hero-image-animation overflow-hidden"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.hero})`,
//       }}
//     >
//       {/* Overlay images coming from 4 directions */}
//       <AnimatePresence>
//         {imagesLoaded && (
//           <>
//             {/* Top image */}
//             <motion.div
//               className="absolute top-[5%] left-[25%] w-[50%] h-[30%] z-10 overflow-hidden"
//               initial="topHidden"
//               animate="visible"
//               exit="exit"
//               variants={imageVariants}
//             >
//               <img
//                 src={overlayImages[0].src || "/placeholder.svg"}
//                 alt={overlayImages[0].alt}
//                 className="w-full h-full object-cover rounded-lg shadow-2xl"
//               />
//             </motion.div>

//             {/* Right image */}
//             <motion.div
//               className="absolute top-[35%] right-[5%] w-[30%] h-[40%] z-10 overflow-hidden"
//               initial="rightHidden"
//               animate="visible"
//               exit="exit"
//               variants={imageVariants}
//             >
//               <img
//                 src={overlayImages[1].src || "/placeholder.svg"}
//                 alt={overlayImages[1].alt}
//                 className="w-full h-full object-cover rounded-lg shadow-2xl"
//               />
//             </motion.div>

//             {/* Bottom image */}
//             <motion.div
//               className="absolute bottom-[5%] left-[25%] w-[50%] h-[30%] z-10 overflow-hidden"
//               initial="bottomHidden"
//               animate="visible"
//               exit="exit"
//               variants={imageVariants}
//             >
//               <img
//                 src={overlayImages[2].src || "/placeholder.svg"}
//                 alt={overlayImages[2].alt}
//                 className="w-full h-full object-cover rounded-lg shadow-2xl"
//               />
//             </motion.div>

//             {/* Left image */}
//             <motion.div
//               className="absolute top-[35%] left-[5%] w-[30%] h-[40%] z-10 overflow-hidden"
//               initial="leftHidden"
//               animate="visible"
//               exit="exit"
//               variants={imageVariants}
//             >
//               <img
//                 src={overlayImages[3].src || "/placeholder.svg"}
//                 alt={overlayImages[3].alt}
//                 className="w-full h-full object-cover rounded-lg shadow-2xl"
//               />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <div className="container-custom text-center text-white relative z-20">
//         <div
//           className={`max-w-3xl mx-auto space-y-8 transition-opacity duration-1000 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ transitionDelay: "0.5s" }}
//         >
//           <div className="overflow-hidden">
//             <SplitText
//               text="Authentic Mediterranean Cuisine"
//               tag="h1"
//               className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight"
//               revealed={isLoaded}
//             />
//           </div>

//           <div className="overflow-hidden" style={{ transitionDelay: "0.6s" }}>
//             <p
//               className={`text-lg md:text-xl font-light max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 ${
//                 isLoaded ? "opacity-90 translate-y-0" : ""
//               }`}
//               style={{ transitionDelay: "0.9s" }}
//             >
//               Experience the rich flavors of coastal Mediterranean in the heart
//               of San Francisco
//             </p>
//           </div>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-opacity duration-1000 ${
//               isLoaded ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ transitionDelay: "1.2s" }}
//           >
//             <Link to="/menu" className="btn-primary">
//               View Our Menu
//             </Link>
//             <Link
//               to="/reservations"
//               className="border-2 border-white text-white px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-primary inline-block"
//             >
//               Make a Reservation
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
//       <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent"></div>
//     </div>
//   );
// };

// export default Hero;

// v3- final code

import { useEffect, useState } from "react";
import ImageReveal from "./ImageReveal";
import { images } from "../assets/images";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-kokkari-dark">
        <img
          src={images.backgroundimage}
          alt="Restaurant background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Grid of 4 images */}
      <div className="hero-grid">
        <ImageReveal
          src={images.privateRoom}
          alt="Kokkari dish"
          direction="top"
          delay={300}
        />
        <ImageReveal
          src={images.photo1}
          alt="Mediterranean cuisine"
          direction="right"
          delay={600}
        />
        <ImageReveal
          src={images.photo2}
          alt="Greek dining"
          direction="left"
          delay={900}
        />
        <ImageReveal
          src={images.photo3}
          alt="Restaurant ambiance"
          direction="bottom"
          delay={1200}
        />
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Centered content */}
      <div className="center-content">
        {/* <div
          className={`transform transition-all duration-1000 ${
            loaded ? "animate-logo-reveal" : "opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <h1 className="text-7xl md:text-8xl text-kokkari-gold font-serif mb-4">
            KOKKARI
          </h1>
          <p className="text-kokkari-cream text-xl md:text-2xl mb-8 font-light tracking-wide">
            ESTIATORIO
          </p> */}
        <div
          className={`transform transition-all duration-1000 ${
            loaded ? "animate-logo-reveal" : "opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <h1 className="text-7xl md:text-8xl text-kokkari-gold font-serif mb-4">
            KOKKARI
          </h1>
          <p className="text-kokkari-cream text-xl md:text-2xl mb-8 font-light tracking-wide">
            ESTIATORIO
          </p>
          <p className="text-kokkari-cream font-sans text-lg mb-10 max-w-md mx-auto">
            Experience the flavors and aromas of Greece at San Francisco's
            premier Mediterranean restaurant
          </p>
          <button className="px-6 py-3 border-2 border-kokkari-gold text-kokkari-gold hover:bg-kokkari-gold hover:text-kokkari-dark transition-colors duration-300 font-sans tracking-wider button-reservation">
            MAKE A RESERVATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
