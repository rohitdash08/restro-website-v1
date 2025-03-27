import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { images } from "../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const navLinks = [
    // { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
    // { name: "Menu", path: "/menu" },
    // { name: "Gallery", path: "/gallery" },
    // { name: "Contact", path: "/contact" },
    { name: "Reservations", path: "/reservations", isButton: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="z-50">
          <img
            src={images.logo}
            alt="Olivia Logo"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) =>
            link.isButton ? (
              <Link key={index} to={link.path} className="btn-primary">
                {link.name}
              </Link>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="menu-item text-primary font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) =>
              link.isButton ? (
                <Link
                  key={index}
                  to={link.path}
                  className="btn-primary"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="text-primary text-2xl font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
