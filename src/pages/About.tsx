import React from 'react';
import { CheckCircle, Users, Globe, Heart, Award, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" 
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Wanderlust
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We're passionate about creating unforgettable travel experiences 
              and helping people discover the world's most amazing destinations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2015, Wanderlust began with a simple mission: to create authentic travel experiences that connect people with the world's most incredible destinations. What started as a small passion project by a group of avid travelers has grown into a trusted travel company serving thousands of adventurers each year.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our founders, having explored over 100 countries combined, recognized a gap in the travel industry. They saw that most tour companies were offering generic, rushed experiences that barely scratched the surface of a destination's true essence. Wanderlust was born to change that narrative.
              </p>
              <div className="flex space-x-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-500">Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10k+</div>
                  <div className="text-gray-500">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/5842248/pexels-photo-5842248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Wanderlust team" 
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our core values guide everything we do. They shape our approach to 
              creating memorable travel experiences and building relationships with our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Responsible Travel</h3>
              <p className="text-gray-700">
                We're committed to sustainable tourism practices that respect local cultures and environments.
                We work with local partners and communities to ensure our tours have a positive impact.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Experiences</h3>
              <p className="text-gray-700">
                We believe in going beyond the typical tourist attractions to discover the heart and soul of each destination.
                Our tours include genuine cultural exchanges and local experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence in Service</h3>
              <p className="text-gray-700">
                We're dedicated to providing exceptional service at every step of your journey.
                From detailed pre-trip information to responsive support during your travels.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion for Travel</h3>
              <p className="text-gray-700">
                Our team consists of passionate travelers who are eager to share their knowledge and love for exploration.
                We create itineraries we'd want to experience ourselves.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                We personally vet all accommodations, activities, and local guides to ensure they meet our high standards.
                Your comfort and safety are our top priorities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                We constantly seek feedback and make improvements to enhance your travel experience.
                We evolve with the changing world of travel to provide the best service possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our diverse team of travel experts is passionate about creating unforgettable experiences. 
              With extensive knowledge and personal adventures, they're here to make your journey special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Former backpacker who has visited over 60 countries. Passionate about sustainable tourism.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Sophia Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sophia Rodriguez</h3>
                <p className="text-blue-600 mb-3">Head of Experiences</p>
                <p className="text-gray-600 text-sm">
                  Expert in creating authentic cultural experiences with a background in anthropology.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">James Wilson</h3>
                <p className="text-blue-600 mb-3">Adventure Specialist</p>
                <p className="text-gray-600 text-sm">
                  Former mountain guide with expertise in adventure tourism and outdoor activities.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Emily Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emily Johnson</h3>
                <p className="text-blue-600 mb-3">Customer Experience</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to ensuring every traveler has a smooth and memorable journey from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have explored the world with Wanderlust.
            Let us help you create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/destinations" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Browse Destinations
            </a>
            <a href="/contact" className="bg-transparent hover:bg-blue-700 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;