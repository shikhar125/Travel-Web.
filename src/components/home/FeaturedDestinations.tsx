import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';

type Destination = {
  id: string;
  title: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  featured?: boolean;
};

const destinations: Destination[] = [
  {
    id: 'bali',
    title: 'Tropical Paradise',
    location: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.8,
    price: 1299,
    featured: true
  },
  {
    id: 'santorini',
    title: 'Aegean Getaway',
    location: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.9,
    price: 1599,
    featured: true
  },
  {
    id: 'kyoto',
    title: 'Ancient Temples Tour',
    location: 'Kyoto, Japan',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.7,
    price: 1899
  },
  {
    id: 'venice',
    title: 'Romantic Canals',
    location: 'Venice, Italy',
    image: 'https://images.pexels.com/photos/1796725/pexels-photo-1796725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.6,
    price: 1399
  },
  {
    id: 'switzerland',
    title: 'Alpine Adventure',
    location: 'Swiss Alps, Switzerland',
    image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.9,
    price: 1799,
    featured: true
  },
  {
    id: 'machu-picchu',
    title: 'Inca Trail Trek',
    location: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.8,
    price: 2199
  }
];

const FeaturedDestinations: React.FC = () => {
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const popularDestinations = destinations.slice(0, 6);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of stunning destinations around the world.
            From tropical beaches to historic cities, we have the perfect getaway for you.
          </p>
        </div>
        
        {/* Featured Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredDestinations.map((destination) => (
            <FeaturedCard key={destination.id} destination={destination} />
          ))}
        </div>
        
        <div className="mb-12 flex justify-between items-end">
          <h3 className="text-2xl font-bold text-gray-900">
            Popular Destinations
          </h3>
          <Link 
            to="/destinations" 
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        {/* Regular Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
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
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2"></div>
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <MapPin size={16} className="mr-1 text-blue-400" />
          <span className="text-sm font-medium">{destination.location}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {destination.title}
          </h3>
          <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
            <Star size={14} className="fill-current text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
        
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

const FeaturedCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link 
      to={`/destinations/${destination.id}`}
      className="group relative rounded-xl overflow-hidden h-96 flex items-end"
    >
      <div className="absolute inset-0">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="relative p-6 w-full">
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-blue-400 mr-1" />
          <span className="text-sm font-medium text-white">{destination.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">
          {destination.title}
        </h3>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-white">${destination.price}</span>
            <span className="text-sm text-white/80 ml-1">per person</span>
          </div>
          
          <div className="flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
            <Star size={14} className="fill-current text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedDestinations;