import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentLanguage?: "en" | "ar";
  onLanguageChange?: (language: "en" | "ar") => void;
}

const Header = ({
  currentLanguage = "en",
  onLanguageChange = () => {},
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    onLanguageChange(currentLanguage === "en" ? "ar" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-yellow-500">Ruyaa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link to="/learn" className="hover:text-yellow-500 transition-colors">
            Learn
          </Link>
          <Link
            to="/signup"
            className="hover:text-yellow-500 transition-colors"
          >
            Signup
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-yellow-500 transition-colors"
          >
            Dashboard
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-white hover:text-yellow-500"
          >
            <Globe size={16} />
            {currentLanguage === "en" ? "عربي" : "English"}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className="hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/signup"
              className="hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-1 justify-start text-white hover:text-yellow-500 py-2"
            >
              <Globe size={16} />
              {currentLanguage === "en" ? "عربي" : "English"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
