// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { images } from "../assets/images";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (!isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   };

//   const navLinks = [
//     // { name: "Home", path: "/" },
//     // { name: "About", path: "/about" },
//     // { name: "Menu", path: "/menu" },
//     // { name: "Gallery", path: "/gallery" },
//     // { name: "Contact", path: "/contact" },
//     { name: "Reservations", path: "/reservations", isButton: true },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container-custom flex items-center justify-between">
//         <Link to="/" className="z-50">
//           <img
//             src={images.logo}
//             alt="Olivia Logo"
//             className="h-10 md:h-12 transition-all duration-300"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {navLinks.map((link, index) =>
//             link.isButton ? (
//               <Link key={index} to={link.path} className="btn-primary">
//                 {link.name}
//               </Link>
//             ) : (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className="menu-item text-primary font-medium"
//               >
//                 {link.name}
//               </Link>
//             )
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden z-50 text-primary"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile Navigation */}
//         <div
//           className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } lg:hidden`}
//         >
//           <div className="flex flex-col items-center space-y-6">
//             {navLinks.map((link, index) =>
//               link.isButton ? (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   className="btn-primary"
//                   onClick={toggleMenu}
//                 >
//                   {link.name}
//                 </Link>
//               ) : (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   className="text-primary text-2xl font-medium"
//                   onClick={toggleMenu}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// v2 below code

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { images } from "../assets/images";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
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

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (!isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   };

//   const navLinks = [
//     { name: "Reservations", path: "/reservations", isButton: true },
//   ];

//   // Animation variants
//   const logoVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//         delay: 0.3 + i * 0.1,
//       },
//     }),
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container-custom flex items-center justify-between">
//         <motion.div
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={logoVariants}
//         >
//           <Link to="/" className="z-50">
//             <img
//               src={images.logo || "/placeholder.svg"}
//               alt="Restaurant Logo"
//               className="h-10 md:h-12 transition-all duration-300"
//             />
//           </Link>
//         </motion.div>

//         {/* Restaurant Name */}
//         <motion.div
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={logoVariants}
//           className={`text-2xl font-playfair font-medium ${
//             isScrolled ? "text-primary" : "text-white"
//           }`}
//         >
//           Kokkari
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {navLinks.map((link, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               animate={isLoaded ? "visible" : "hidden"}
//               variants={navItemVariants}
//             >
//               {link.isButton ? (
//                 <Link
//                   to={link.path}
//                   className={`btn-primary ${
//                     !isScrolled
//                       ? "border-2 border-white text-white hover:bg-white hover:text-primary"
//                       : ""
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ) : (
//                 <Link
//                   to={link.path}
//                   className={`menu-item font-medium ${
//                     isScrolled ? "text-primary" : "text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <motion.button
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={logoVariants}
//           className="lg:hidden z-50"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <X
//               size={24}
//               className={isScrolled ? "text-primary" : "text-white"}
//             />
//           ) : (
//             <Menu
//               size={24}
//               className={isScrolled ? "text-primary" : "text-white"}
//             />
//           )}
//         </motion.button>

//         {/* Mobile Navigation */}
//         <div
//           className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } lg:hidden`}
//         >
//           <div className="flex flex-col items-center space-y-6">
//             {navLinks.map((link, index) =>
//               link.isButton ? (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   className="btn-primary"
//                   onClick={toggleMenu}
//                 >
//                   {link.name}
//                 </Link>
//               ) : (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   className="text-primary text-2xl font-medium"
//                   onClick={toggleMenu}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// v-3 final code

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-kokkari-cream hover:text-kokkari-gold transition-colors duration-300"
            >
              Menu
            </Link>
            <Link
              to="/"
              className="text-kokkari-cream hover:text-kokkari-gold transition-colors duration-300"
            >
              Private Dining
            </Link>
          </div> */}

          {/* <div className="flex items-center">
            <Link
              to="/"
              className={`text-kokkari-gold font-serif text-3xl md:text-4xl tracking-wider transition-all duration-500 ${
                scrolled ? "scale-90" : ""
              }`}
            >
              KOKKARI
            </Link>
          </div> */}

          <div className="flex items-center space-x-4">
            {/* <Link
              to="/"
              className="text-kokkari-cream hover:text-kokkari-gold transition-colors duration-300"
            >
              About
            </Link> */}
            {/* <Link
              to="/"
              className="px-4 py-2 border border-kokkari-gold text-kokkari-gold hover:bg-kokkari-gold hover:text-kokkari-dark transition-colors duration-300 button-reservation"
            >
              Reservations
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
