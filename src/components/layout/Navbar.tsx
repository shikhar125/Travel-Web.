import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold flex items-center"
          >
            <Globe className={`mr-2 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Wanderlust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
              <NavLink to="/destinations" isScrolled={isScrolled}>Destinations</NavLink>
              <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
              <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
                }`}
              >
                <Search className={isScrolled ? 'text-gray-600' : 'text-white'} size={20} />
              </button>
              <button 
                className={`flex items-center space-x-1 py-2 px-4 rounded-full transition-all ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <User size={18} />
                <span className="font-medium">Sign In</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden"
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg p-4 animate-fadeDown">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/destinations">Destinations</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <div className="pt-4 mt-2 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors ${
        isScrolled
          ? isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600' 
          : isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`py-2 px-3 rounded-md font-medium ${
        isActive 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-800 hover:bg-gray-50 transition-colors'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;