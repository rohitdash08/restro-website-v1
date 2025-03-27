import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { images } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src={images.logo} alt="Olivia Logo" className="h-12 invert" />
            <p className="text-sm max-w-xs">
              A Mediterranean-inspired fine dining experience that brings the
              warmth and flavors of coastal cuisine to your table.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>123 Market Street</li>
              <li>San Francisco, CA 94105</li>
              <li className="pt-2">Phone: (415) 555-0123</li>
              <li>Email: info@olivia.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Hours</h4>
            <ul className="space-y-2">
              <li>Lunch</li>
              <li>Monday–Friday 11:30am–2:30pm</li>
              <li className="pt-2">Dinner</li>
              <li>Monday–Sunday 5:30pm–10:00pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-accent transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/private-dining"
                  className="hover:text-accent transition-colors"
                >
                  Private Dining
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="hover:text-accent transition-colors"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-white/70">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Olivia Restaurant. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
