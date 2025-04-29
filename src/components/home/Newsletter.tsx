import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the actual subscription
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -right-40 -top-40 bg-white/20 w-80 h-80 rounded-full"></div>
        <div className="absolute transform -rotate-45 -left-20 -bottom-20 bg-white/20 w-60 h-60 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Inspired For Your Next Trip
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, travel tips, and inspiration for your next adventure straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send size={16} className="ml-2" />
              </button>
            </div>
            
            {isSubmitted && (
              <div className="mt-4 text-white bg-white/20 rounded-lg p-3 animate-fadeIn">
                Thank you for subscribing! Check your email for confirmation.
              </div>
            )}
            
            <p className="text-blue-100 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-10">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Weekly Updates</div>
                <div className="text-blue-100 text-sm">Fresh travel content</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Exclusive Deals</div>
                <div className="text-blue-100 text-sm">Save on your next trip</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Travel Tips</div>
                <div className="text-blue-100 text-sm">Expert advice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;