import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  destination: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
    text: "Our trip to Bali was absolutely incredible! Wanderlust took care of every detail, from airport transfers to hotel accommodations. The local guide was knowledgeable and friendly. We'll definitely book with them again for our next adventure!",
    destination: "Bali, Indonesia"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Toronto, Canada",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
    text: "The Swiss Alps tour exceeded all our expectations. The views were breathtaking, and the activities were perfectly balanced. Our tour guide went above and beyond to make our experience special. Highly recommend Wanderlust for any European adventure!",
    destination: "Swiss Alps, Switzerland"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "London, UK",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4,
    text: "Santorini was a dream come true! The accommodations were luxurious with stunning views of the caldera. I appreciated the personalized itinerary that gave us both guided tours and free time to explore. The sunset cruise was magical!",
    destination: "Santorini, Greece"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Authentic reviews from travelers who have experienced our services and destinations.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Image Section - Left Side */}
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                  <div className="text-white font-medium">{testimonials[currentIndex].name}</div>
                  <div className="text-white/80 text-sm">{testimonials[currentIndex].location}</div>
                </div>
              </div>
              
              {/* Content Section - Right Side */}
              <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={`${
                          i < testimonials[currentIndex].rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        } mr-1`} 
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  {/* Destination */}
                  <div className="text-blue-600 text-sm font-medium mb-6">
                    Trip: {testimonials[currentIndex].destination}
                  </div>
                </div>
                
                {/* User Info - Desktop */}
                <div className="flex justify-between items-center">
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;