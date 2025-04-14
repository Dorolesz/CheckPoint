import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate importálása
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate(); // Navigáció inicializálása

  // Debugging: Ellenőrizd, hogy az `isLoggedIn` állapot változik-e
  useEffect(() => {
    console.log("isLoggedIn állapot változott:", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout(); // Kijelentkezés
    navigate("/login"); // Átirányítás a bejelentkezési oldalra
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <span className="ml-2 text-xl font-heading font-bold text-gray-800">CheckPoint</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Főoldal
            </Link>
            <Link to="/download" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Letöltés
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Rólunk
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Kapcsolat
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Profilom
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Kijelentkezés
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Bejelentkezés</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Regisztráció</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
            Főoldal
          </Link>
          <Link to="/download" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
            Letöltés
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
            Rólunk
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
            Kapcsolat
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Profilom
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Kijelentkezés
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Bejelentkezés</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Regisztráció</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;