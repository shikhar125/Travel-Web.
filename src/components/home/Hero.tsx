import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            Discover the World's <span className="text-blue-400">Hidden Gems</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Explore breathtaking destinations, create unforgettable memories, and experience the adventure of a lifetime with our curated travel experiences.
          </p>
          
          {/* Search Box */}
          <div 
            className="bg-white rounded-lg shadow-2xl p-4 md:p-6 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Destination */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
              
              {/* Date */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="When?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
              
              {/* Travelers */}
              <div className="md:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                    <option>More options</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Search Button */}
              <div className="md:pt-6">
                <button
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Search size={18} className="mr-2" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div 
            className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-white animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center">
              <div className="text-3xl font-bold text-blue-400 mr-2">500+</div>
              <div className="text-sm opacity-90">Destinations</div>
            </div>
            
            <div className="flex items-center">
              <div className="text-3xl font-bold text-blue-400 mr-2">10k+</div>
              <div className="text-sm opacity-90">Happy Travelers</div>
            </div>
            
            <div className="flex items-center">
              <div className="text-3xl font-bold text-blue-400 mr-2">98%</div>
              <div className="text-sm opacity-90">Positive Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;