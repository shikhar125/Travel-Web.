import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Filter, Search } from 'lucide-react';

type Destination = {
  id: string;
  title: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  category: string;
  description: string;
};

const destinations: Destination[] = [
  {
    id: 'bali',
    title: 'Tropical Paradise',
    location: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.8,
    price: 1299,
    category: 'beach',
    description: 'Experience the beauty of Bali with stunning beaches, lush rice terraces, and vibrant culture.'
  },
  {
    id: 'santorini',
    title: 'Aegean Getaway',
    location: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.9,
    price: 1599,
    category: 'beach',
    description: 'Discover the iconic white and blue buildings, stunning sunsets, and crystal-clear waters.'
  },
  {
    id: 'kyoto',
    title: 'Ancient Temples Tour',
    location: 'Kyoto, Japan',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.7,
    price: 1899,
    category: 'city',
    description: 'Explore traditional Japanese culture with ancient temples, gardens, and historic sites.'
  },
  {
    id: 'venice',
    title: 'Romantic Canals',
    location: 'Venice, Italy',
    image: 'https://images.pexels.com/photos/1796725/pexels-photo-1796725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.6,
    price: 1399,
    category: 'city',
    description: 'Navigate the romantic canals, discover hidden alleys, and experience Italian charm.'
  },
  {
    id: 'switzerland',
    title: 'Alpine Adventure',
    location: 'Swiss Alps, Switzerland',
    image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.9,
    price: 1799,
    category: 'mountain',
    description: 'Breathtaking mountain vistas, pristine lakes, and charming alpine villages await.'
  },
  {
    id: 'machu-picchu',
    title: 'Inca Trail Trek',
    location: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.8,
    price: 2199,
    category: 'adventure',
    description: 'Trek the famous Inca Trail and discover the ancient wonders of Machu Picchu.'
  },
  {
    id: 'maldives',
    title: 'Overwater Bungalows',
    location: 'Maldives',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.9,
    price: 2499,
    category: 'beach',
    description: 'Luxury overwater bungalows, crystal-clear lagoons, and pristine white sand beaches.'
  },
  {
    id: 'new-york',
    title: 'Big Apple Experience',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.7,
    price: 1899,
    category: 'city',
    description: 'Explore the city that never sleeps with iconic landmarks, shopping, and entertainment.'
  },
  {
    id: 'amazon',
    title: 'Rainforest Expedition',
    location: 'Amazon, Brazil',
    image: 'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.6,
    price: 2299,
    category: 'adventure',
    description: 'Journey into the world\'s largest rainforest and discover incredible biodiversity.'
  }
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'beach', name: 'Beach Getaways' },
  { id: 'mountain', name: 'Mountain Escapes' },
  { id: 'city', name: 'City Breaks' },
  { id: 'adventure', name: 'Adventure Tours' }
];

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  
  const filteredDestinations = destinations.filter((destination) => {
    // Filter by search term
    const matchesSearch = 
      destination.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = 
      selectedCategory === 'all' || destination.category === selectedCategory;
    
    // Filter by price range
    const matchesPrice = 
      destination.price >= priceRange[0] && destination.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover incredible places around the world and start planning your next adventure.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <Filter size={20} className="text-gray-500" />
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={category.id}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor={category.id} className="ml-2 text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">${priceRange[0]}</span>
                    <span className="text-sm text-gray-500">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              {/* Reset Button */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, 3000]);
                }}
                className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Destinations Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                {filteredDestinations.length} destinations found
              </h2>
              <div className="flex items-center">
                <label className="mr-2 text-gray-700">Sort by:</label>
                <select 
                  className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Destinations Found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 3000]);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link 
      to={`/destinations/${destination.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-md">
          <div className="flex items-center">
            <Star size={14} className="fill-current text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1 text-blue-500" />
          <span>{destination.location}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {destination.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">${destination.price}</span>
            <span className="text-sm text-gray-500 ml-1">per person</span>
          </div>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Destinations;