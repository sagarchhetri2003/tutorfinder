// import { useState } from "react";
import { Search } from "lucide-react";

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Find<br />
          <span className="text-coral-500">the perfect tutor</span>
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="What would you like to search?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral-500 text-lg shadow-sm"
              aria-label="Search tutors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
              aria-label="Submit search"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
