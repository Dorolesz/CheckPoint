import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <span className="ml-2 text-xl font-heading font-bold text-white">CheckPoint</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professzionális beléptető rendszerek és hozzáférés-kezelési megoldások minden méretű vállalkozás számára.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Főoldal</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">Rólunk</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Kapcsolat</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-white transition">Letöltés</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">info@redible.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+36 1 123 4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">1052 Budapest, Beléptető utca 42.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Redible Inc. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;