import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Parallax from "../components/Parallax";
import PrivateDining from "../components/PrivateDining";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Show page content after a slight delay for initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Initialize scroll-triggered animations
    const handleScroll = () => {
      const revealSections = document.querySelectorAll(".reveal-section");
      revealSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
          section.classList.add("revealed");
        }
      });
    };

    // Initial check on load
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Parallax />
      <PrivateDining />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Index;
