import { useState, useRef, useEffect } from "react";
import { Star, ArrowRight, ArrowLeft, Sparkles, Users, BookOpen, Award, TrendingUp, ChevronRight } from "lucide-react";
import TutorCard from "../components/TutorCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CategorySection from "../components/CategorySection.jsx";
import Hero from "../components/Hero.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { allTutorsApi, allFavouritesApi, toggleFavouriteApi } from "../apis/api.js";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef(null);
  const [tutors, setTutors] = useState([]);
  const [favourites, setFavourites] = useState(new Set());
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      window.location.replace("/landing-page");
    }
  }, []);

  // Fetch tutors
  const getTutors = async () => {
    try {
      const response = await allTutorsApi();
      if (response.data.success) {
        setTutors(response.data.tutors);
      } else {
        console.error("Failed to fetch tutors:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  // Fetch all favourites
  const getFavourites = async () => {
    try {
      const response = await allFavouritesApi();
      if (response.data.success) {
        const favIds = new Set(response.data.favourites.map(fav => fav.tutor._id));
        setFavourites(favIds);
      }
    } catch (error) {
      console.error("Failed to fetch favourites:", error);
    }
  };

  // Toggle favourite handler
  const handleToggleFavourite = async (tutorId) => {
    try {
      const response = await toggleFavouriteApi(tutorId);
      if (response.data.success) {
        setFavourites(prev => {
          const newSet = new Set(prev);
          if (newSet.has(tutorId)) {
            newSet.delete(tutorId);
          } else {
            newSet.add(tutorId);
          }
          return newSet;
        });
      }
    } catch (error) {
      console.error("Failed to toggle favourite:", error);
    }
  };

  useEffect(() => {
    getTutors();
    getFavourites();
  }, []);


const [currentPage, setCurrentPage] = useState(0);
const tutorsPerPage = 9;

const paginatedTutors = tutors.slice(
  currentPage * tutorsPerPage,
  (currentPage + 1) * tutorsPerPage
);

const totalPages = Math.ceil(tutors.length / tutorsPerPage);

const handleNext = () => {
  if (currentPage < totalPages - 1) {
    setCurrentPage((prev) => prev + 1);
  }
};

const handlePrev = () => {
  if (currentPage > 0) {
    setCurrentPage((prev) => prev - 1);
  }
};


  // const categories = [
  //   { icon: "📊", label: "Maths" },
  //   { icon: "🔬", label: "Physics" },
  //   { icon: "⚗️", label: "Chemistry" },
  //   { icon: "🎨", label: "Art & Design" },
  //   { icon: "🏺", label: "History" },
  //   { icon: "🎭", label: "Language" },
  //   { icon: "🎵", label: "Music" },
  //   { icon: "💻", label: "Computer" },
  //   { icon: "🏃", label: "Sports" },
  //   { icon: "📚", label: "Literature" },
  //   { icon: "🌍", label: "Geography" },
  // ];

  const testimonials = [
    {
      name: "Rachel",
      role: "Mathematics tutor",
      content:
        "Rachel is awesome! She's super patient with me and makes sure I fully understand concepts in detail. She also makes math fun by cracking some jokes!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      backgroundColor: "bg-yellow-200",
      author: "Christa",
    },
    {
      name: "Austin",
      role: "Yoga tutor",
      content:
        "Austin is an amazing teacher. He is calm and attentive. I highly recommend him to anyone looking for a tutor.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      backgroundColor: "bg-green-100",
      author: "Mark",
    },
    {
      name: "Léa",
      role: "English tutor",
      content:
        "Léa helped me gain confidence speaking English. Her sessions are dynamic and very encouraging!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      backgroundColor: "bg-purple-100",
      author: "Sophia",
    },
  ];

  const stats = [
    { icon: Users, label: "Active Students", value: "50,000+" },
    { icon: BookOpen, label: "Subjects Available", value: "200+" },
    { icon: Award, label: "Expert Tutors", value: "5,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-4 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <CategorySection
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      /> */}

      {/* Featured Tutors */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-amber-700">Top Rated</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tutors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Connect with our highest-rated tutors who have helped thousands of students achieve their goals
          </p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-gray-600 font-medium">Based on 10,000+ reviews</span>
          </div>
        </div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="transform hover:scale-105 transition-all duration-300">
              <TutorCard
                {...tutor}
                isLiked={favourites.has(tutor._id)}
                onToggle={() => handleToggleFavourite(tutor._id)}
              />
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {paginatedTutors.map((tutor) => (
    <div key={tutor._id} className="transform hover:scale-105 transition-all duration-300">
      <TutorCard
        {...tutor}
        isLiked={favourites.has(tutor._id)}
        onToggle={() => handleToggleFavourite(tutor._id)}
      />
    </div>
  ))}
</div>
{totalPages > 1 && (
  <div className="flex justify-center items-center gap-4 mt-4">
    <button
      onClick={handlePrev}
      disabled={currentPage === 0}
      className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
    <span className="text-sm text-gray-600 font-medium">
      Page {currentPage + 1} of {totalPages}
    </span>
    <button
      onClick={handleNext}
      disabled={currentPage === totalPages - 1}
      className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
)}


        {tutors.length > 0 && (
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Tutors
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="w-full overflow-hidden py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gray-100 bg-opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(148, 163, 184, 0.1) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-700">Student Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our tutors have transformed learning experiences for students worldwide
            </p>
          </div>

          <div
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8"
            ref={scrollRef}
          >
            <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/20 w-[480px] min-w-[480px] snap-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">The Perfect Match</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  More than one million students gave a{" "}
                  <span className="font-bold text-blue-600">5 star review</span> to their tutor
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() =>
                      scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
                    }
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
                  >
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  <button
                    onClick={() =>
                      scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
                    }
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-start transition-all duration-500 hover:scale-105 hover:opacity-100 opacity-80"
              >
                <div className="transform hover:rotate-1 transition-transform duration-300">
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Tutor Section */}
      <section className="w-full px-4 py-24">
        <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
            alt="Become a tutor"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 max-w-md">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 rounded-full mb-4">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-orange-700">Join Our Team</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                You can become a great tutor too!
              </h3>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                Share your knowledge, live off your passion and become your own boss. Join thousands of tutors worldwide.
              </p>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-base font-semibold flex items-center justify-center gap-3 hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl">
                Find out more 
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;