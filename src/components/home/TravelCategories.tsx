import React from 'react';
import { Compass, Umbrella as UmbrellaBeach, Mountain as Mountains, Building2, Palmtree, Tent } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const categories: Category[] = [
  {
    id: 'beach',
    title: 'Beach Getaways',
    description: 'Relax on pristine beaches with crystal clear waters.',
    icon: <UmbrellaBeach size={30} />,
    color: 'bg-blue-500'
  },
  {
    id: 'mountain',
    title: 'Mountain Escapes',
    description: 'Explore majestic peaks and breathtaking hiking trails.',
    icon: <Mountains size={30} />,
    color: 'bg-emerald-500'
  },
  {
    id: 'city',
    title: 'City Breaks',
    description: 'Experience vibrant cultures in the world\'s top cities.',
    icon: <Building2 size={30} />,
    color: 'bg-purple-500'
  },
  {
    id: 'tropical',
    title: 'Tropical Paradise',
    description: 'Discover exotic islands and lush tropical landscapes.',
    icon: <Palmtree size={30} />,
    color: 'bg-orange-500'
  },
  {
    id: 'adventure',
    title: 'Adventure Tours',
    description: 'Get your adrenaline pumping with exciting activities.',
    icon: <Compass size={30} />,
    color: 'bg-red-500'
  },
  {
    id: 'camping',
    title: 'Camping & Outdoors',
    description: 'Connect with nature in stunning wilderness locations.',
    icon: <Tent size={30} />,
    color: 'bg-teal-500'
  }
];

const TravelCategories: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the perfect travel experience tailored to your interests and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/destinations?category=${category.id}`}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="p-6 sm:p-8">
        <div className={`${category.color} text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {category.icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {category.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {category.description}
        </p>
        
        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
          <span>Explore destinations</span>
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default TravelCategories;