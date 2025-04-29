import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Calendar, Users, Clock, ThumbsUp, BadgeCheck, Heart } from 'lucide-react';

type Destination = {
  id: string;
  title: string;
  location: string;
  image: string;
  gallery: string[];
  rating: number;
  price: number;
  category: string;
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  duration: string;
  groupSize: string;
};

// Mock data for a single destination
const destinationData: Destination = {
  id: 'bali',
  title: 'Tropical Paradise',
  location: 'Bali, Indonesia',
  image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  gallery: [
    'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5069740/pexels-photo-5069740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  ],
  rating: 4.8,
  price: 1299,
  category: 'beach',
  description: 'Experience the beauty of Bali with stunning beaches, lush rice terraces, and vibrant culture. This 7-day tropical adventure includes guided tours to sacred temples, hidden waterfalls, and traditional villages. You\'ll enjoy luxury accommodations, authentic cuisine, and plenty of time to relax on Bali\'s pristine beaches.',
  highlights: [
    'Visit the sacred Uluwatu Temple perched on a cliff',
    'Explore the lush Tegallalang Rice Terraces',
    'Snorkel in crystal clear waters at Nusa Penida',
    'Experience traditional Balinese dance performances',
    'Visit the sacred monkey forest sanctuary',
    'Relax on the pristine beaches of Kuta and Seminyak'
  ],
  included: [
    'Accommodation in 4-star hotels',
    'Daily breakfast and selected meals',
    'Airport transfers',
    'English-speaking guide',
    'Transportation in air-conditioned vehicle',
    'Entrance fees to attractions'
  ],
  excluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses',
    'Additional meals not specified',
    'Optional activities'
  ],
  duration: '7 days / 6 nights',
  groupSize: 'Max 12 people'
};

const DestinationDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);
  
  // In a real app, you would fetch the data based on the ID
  const destination = destinationData;
  
  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Destination not found</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative h-96 md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${destination.gallery[activeImage]})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative h-full flex items-end pb-12 z-10">
          <div className="max-w-3xl">
            <div className="flex items-center text-white mb-2">
              <MapPin size={16} className="text-blue-400 mr-1" />
              <span>{destination.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {destination.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                <Star size={16} className="fill-current text-yellow-400 mr-1" />
                <span>{destination.rating} (127 reviews)</span>
              </div>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full transition-colors ${
                  isWishlisted ? 'text-red-500' : 'text-white'
                }`}
              >
                <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
                <span className="ml-1">Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thumbnail gallery */}
      <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
        <div className="flex space-x-2 overflow-x-auto pb-2 max-w-3xl">
          {destination.gallery.map((image, index) => (
            <button 
              key={index} 
              onClick={() => setActiveImage(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                activeImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img 
                src={image} 
                alt={`${destination.title} gallery ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'itinerary'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>
            
            {/* Tab content */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Duration</h3>
                      <p className="text-gray-600">{destination.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Group Size</h3>
                      <p className="text-gray-600">{destination.groupSize}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <ul className="space-y-3">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <ThumbsUp size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {destination.included.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <BadgeCheck size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Not Included</h3>
                    <ul className="space-y-3">
                      {destination.excluded.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7-Day Itinerary</h2>
                
                <div className="space-y-8">
                  {/* Day 1 */}
                  <div className="relative pl-8 pb-8 border-l border-gray-200">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Bali</h3>
                      <p className="text-gray-700 mb-4">
                        Welcome to Bali! Upon arrival at Ngurah Rai International Airport, you'll be greeted by your guide and transferred to your hotel in Seminyak. Enjoy the rest of the day at leisure to recover from your flight and perhaps explore the nearby area or beach.
                      </p>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Accommodation:</span> Seminyak Beach Resort
                      </div>
                    </div>
                  </div>
                  
                  {/* Day 2 */}
                  <div className="relative pl-8 pb-8 border-l border-gray-200">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Uluwatu Temple & Kecak Dance</h3>
                      <p className="text-gray-700 mb-4">
                        After breakfast, spend the morning at leisure. In the afternoon, visit the magnificent Uluwatu Temple perched on a cliff 70 meters above the Indian Ocean. As the sun sets, enjoy a mesmerizing Kecak Dance performance. End the day with a seafood dinner at Jimbaran Bay.
                      </p>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Meals:</span> Breakfast, Dinner
                      </div>
                    </div>
                  </div>
                  
                  {/* Day 3 */}
                  <div className="relative pl-8 pb-8 border-l border-gray-200">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Ubud Cultural Tour</h3>
                      <p className="text-gray-700 mb-4">
                        Today we'll explore Ubud, the cultural heart of Bali. Visit the Sacred Monkey Forest Sanctuary, Ubud Palace, and the local art market. After lunch, explore the beautiful Tegallalang Rice Terraces and enjoy a traditional Balinese coffee tasting experience.
                      </p>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Meals:</span> Breakfast, Lunch
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Show full itinerary (7 days)
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                  <div className="flex items-center bg-blue-50 px-3 py-1 rounded-md">
                    <Star size={18} className="fill-current text-yellow-500 mr-1" />
                    <span className="text-lg font-bold text-gray-900">{destination.rating}</span>
                    <span className="text-gray-600 ml-1">(127 reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  {/* Review 1 */}
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt="Sarah Johnson" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                          <div className="text-sm text-gray-500">Travelled in June 2023</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className="fill-current text-yellow-500" 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Our trip to Bali was absolutely incredible! Wanderlust took care of every detail, from airport transfers to hotel accommodations. The local guide was knowledgeable and friendly. We'll definitely book with them again for our next adventure!
                    </p>
                  </div>
                  
                  {/* Review 2 */}
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt="David Chen" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">David Chen</h4>
                          <div className="text-sm text-gray-500">Travelled in May 2023</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`fill-current ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      The tour was excellent overall. The accommodations were comfortable and the guide was very informative. The only downside was that the tour felt a bit rushed at times. I would have preferred more free time to explore on my own. Still, I would recommend this tour to others.
                    </p>
                  </div>
                  
                  <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors">
                    Load more reviews
                  </button>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Write a Review</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rating
                    </label>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <button key={i} className="mr-1">
                          <Star size={24} className="text-gray-300 hover:text-yellow-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Share your experience with this tour..."
                    ></textarea>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Submit Review
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Booking widget */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-gray-900">${destination.price}</div>
                  <div className="text-gray-500">per person</div>
                </div>
                
                <div className="space-y-4">
                  {/* Date picker */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  
                  {/* Travelers */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Travelers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <select
                        value={travelers}
                        onChange={(e) => setTravelers(parseInt(e.target.value))}
                        className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      >
                        <option value={1}>1 Adult</option>
                        <option value={2}>2 Adults</option>
                        <option value={3}>3 Adults</option>
                        <option value={4}>4 Adults</option>
                        <option value={5}>5 Adults</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">${destination.price} x {travelers} travelers</span>
                    <span className="text-gray-900">${destination.price * travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Service fee</span>
                    <span className="text-gray-900">$99</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${destination.price * travelers + 99}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-4">
                  Book Now
                </button>
                
                <div className="flex justify-center text-gray-500 text-sm">
                  <span>No payment required to reserve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;