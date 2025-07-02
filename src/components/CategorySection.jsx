import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const CategorySection = ({ categories, activeCategory, setActiveCategory }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 pb-10">
      <div className="max-w-5xl mx-auto relative">
        {/* Scroll Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white border shadow rounded-full p-2 z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white border shadow rounded-full p-2 z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Scrollable Box */}
        <div className="overflow-x-auto bg-white border shadow-md rounded-full px-6 py-4 scrollbar-hide">
          <div
            ref={scrollRef}
            className="flex gap-6 whitespace-nowrap scroll-smooth"
          >
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => setActiveCategory(category.label)}
                className={`flex flex-col items-center min-w-[100px] text-sm font-medium transition ${
                  activeCategory === category.label
                    ? "text-coral-500 scale-105"
                    : "text-gray-700"
                }`}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
