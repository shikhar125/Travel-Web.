import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Globe className="text-blue-400 mr-2" size={24} />
              <span className="text-2xl font-bold">Wanderlust</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover the world's most breathtaking destinations with Wanderlust. We help you create unforgettable travel experiences.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Youtube size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/destinations">Destinations</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="#">Travel Guides</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Top Destinations</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Bali, Indonesia</FooterLink>
              <FooterLink href="#">Santorini, Greece</FooterLink>
              <FooterLink href="#">Paris, France</FooterLink>
              <FooterLink href="#">Tokyo, Japan</FooterLink>
              <FooterLink href="#">New York, USA</FooterLink>
              <FooterLink href="#">Cape Town, South Africa</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">1234 Travel Lane, Adventure City, AC 56789</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@wanderlust.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-500 text-sm hover:text-gray-400 transition">Privacy Policy</Link>
              <Link to="#" className="text-gray-500 text-sm hover:text-gray-400 transition">Terms of Service</Link>
              <Link to="#" className="text-gray-500 text-sm hover:text-gray-400 transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      className="bg-gray-800 hover:bg-blue-600 transition-colors w-9 h-9 rounded-full flex items-center justify-center"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link 
        to={href} 
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;