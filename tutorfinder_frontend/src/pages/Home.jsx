// import { useState, useRef, useEffect } from "react";
// import { Star, ArrowRight, ArrowLeft, Sparkles, Users, BookOpen, Award, TrendingUp, ChevronRight } from "lucide-react";
// import TutorCard from "../components/TutorCard.jsx";
// import TestimonialCard from "../components/TestimonialCard.jsx";
// import CategorySection from "../components/CategorySection.jsx";
// import Hero from "../components/Hero.jsx";
// import { useAuth } from "../context/AuthContext.jsx";
// import { allTutorsApi, allFavouritesApi, toggleFavouriteApi } from "../apis/api.js";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   // const [activeCategory, setActiveCategory] = useState("All");
//   const scrollRef = useRef(null);
//   const [tutors, setTutors] = useState([]);
//   const [favourites, setFavourites] = useState(new Set());
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user) {
//       window.location.replace("/landing-page");
//     }
//   }, []);

//   // Fetch tutors
//   const getTutors = async () => {
//     try {
//       const response = await allTutorsApi();
//       if (response.data.success) {
//         setTutors(response.data.tutors);
//       } else {
//         console.error("Failed to fetch tutors:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching tutors:", error);
//     }
//   };

//   // Fetch all favourites
//   const getFavourites = async () => {
//     try {
//       const response = await allFavouritesApi();
//       if (response.data.success) {
//         const favIds = new Set(response.data.favourites.map(fav => fav.tutor._id));
//         setFavourites(favIds);
//       }
//     } catch (error) {
//       console.error("Failed to fetch favourites:", error);
//     }
//   };

//   // Toggle favourite handler
//   const handleToggleFavourite = async (tutorId) => {
//     try {
//       const response = await toggleFavouriteApi(tutorId);
//       if (response.data.success) {
//         setFavourites(prev => {
//           const newSet = new Set(prev);
//           if (newSet.has(tutorId)) {
//             newSet.delete(tutorId);
//           } else {
//             newSet.add(tutorId);
//           }
//           return newSet;
//         });
//       }
//     } catch (error) {
//       console.error("Failed to toggle favourite:", error);
//     }
//   };

//   useEffect(() => {
//     getTutors();
//     getFavourites();
//   }, []);


// const [currentPage, setCurrentPage] = useState(0);
// const tutorsPerPage = 9;

// const paginatedTutors = tutors.slice(
//   currentPage * tutorsPerPage,
//   (currentPage + 1) * tutorsPerPage
// );

// const totalPages = Math.ceil(tutors.length / tutorsPerPage);

// const handleNext = () => {
//   if (currentPage < totalPages - 1) {
//     setCurrentPage((prev) => prev + 1);
//   }
// };

// const handlePrev = () => {
//   if (currentPage > 0) {
//     setCurrentPage((prev) => prev - 1);
//   }
// };


//   // const categories = [
//   //   { icon: "📊", label: "Maths" },
//   //   { icon: "🔬", label: "Physics" },
//   //   { icon: "⚗️", label: "Chemistry" },
//   //   { icon: "🎨", label: "Art & Design" },
//   //   { icon: "🏺", label: "History" },
//   //   { icon: "🎭", label: "Language" },
//   //   { icon: "🎵", label: "Music" },
//   //   { icon: "💻", label: "Computer" },
//   //   { icon: "🏃", label: "Sports" },
//   //   { icon: "📚", label: "Literature" },
//   //   { icon: "🌍", label: "Geography" },
//   // ];

//   const testimonials = [
//     {
//       name: "Rachel",
//       role: "Mathematics tutor",
//       content:
//         "Rachel is awesome! She's super patient with me and makes sure I fully understand concepts in detail. She also makes math fun by cracking some jokes!",
//       rating: 5,
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//       backgroundColor: "bg-yellow-200",
//       author: "Christa",
//     },
//     {
//       name: "Austin",
//       role: "Yoga tutor",
//       content:
//         "Austin is an amazing teacher. He is calm and attentive. I highly recommend him to anyone looking for a tutor.",
//       rating: 5,
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//       backgroundColor: "bg-green-100",
//       author: "Mark",
//     },
//     {
//       name: "Léa",
//       role: "English tutor",
//       content:
//         "Léa helped me gain confidence speaking English. Her sessions are dynamic and very encouraging!",
//       rating: 5,
//       avatar: "https://randomuser.me/api/portraits/women/48.jpg",
//       backgroundColor: "bg-purple-100",
//       author: "Sophia",
//     },
//   ];

//   const stats = [
//     { icon: Users, label: "Active Students", value: "50,000+" },
//     { icon: BookOpen, label: "Subjects Available", value: "200+" },
//     { icon: Award, label: "Expert Tutors", value: "5,000+" },
//     { icon: TrendingUp, label: "Success Rate", value: "95%" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//       {/* Stats Section */}
//       <section className="container mx-auto px-4 py-12 -mt-8 relative z-10">
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-4 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300">
//                   <stat.icon className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
//                 <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <CategorySection
//         categories={categories}
//         activeCategory={activeCategory}
//         setActiveCategory={setActiveCategory}
//       /> */}

//       {/* Featured Tutors */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full mb-4">
//             <Sparkles className="w-5 h-5 text-amber-500" />
//             <span className="text-sm font-semibold text-amber-700">Top Rated</span>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Tutors
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
//             Connect with our highest-rated tutors who have helped thousands of students achieve their goals
//           </p>
//           <div className="flex items-center justify-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//             ))}
//             <span className="ml-2 text-sm text-gray-600 font-medium">Based on 10,000+ reviews</span>
//           </div>
//         </div>
// {/* 
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {tutors.map((tutor) => (
//             <div key={tutor._id} className="transform hover:scale-105 transition-all duration-300">
//               <TutorCard
//                 {...tutor}
//                 isLiked={favourites.has(tutor._id)}
//                 onToggle={() => handleToggleFavourite(tutor._id)}
//               />
//             </div>
//           ))}
//         </div> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//   {paginatedTutors.map((tutor) => (
//     <div key={tutor._id} className="transform hover:scale-105 transition-all duration-300">
//       <TutorCard
//         {...tutor}
//         isLiked={favourites.has(tutor._id)}
//         onToggle={() => handleToggleFavourite(tutor._id)}
//       />
//     </div>
//   ))}
// </div>
// {totalPages > 1 && (
//   <div className="flex justify-center items-center gap-4 mt-4">
//     <button
//       onClick={handlePrev}
//       disabled={currentPage === 0}
//       className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
//     >
//       <ArrowLeft className="w-5 h-5" />
//     </button>
//     <span className="text-sm text-gray-600 font-medium">
//       Page {currentPage + 1} of {totalPages}
//     </span>
//     <button
//       onClick={handleNext}
//       disabled={currentPage === totalPages - 1}
//       className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
//     >
//       <ArrowRight className="w-5 h-5" />
//     </button>
//   </div>
// )}


//         {tutors.length > 0 && (
//           <div className="text-center">
//             <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//               View All Tutors
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Testimonials Section */}
//       <section className="w-full overflow-hidden py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
//         <div className="absolute inset-0 opacity-20">
//           <div className="w-full h-full bg-gray-100 bg-opacity-10" style={{
//             backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(148, 163, 184, 0.1) 2px, transparent 2px)',
//             backgroundSize: '60px 60px'
//           }}></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <span className="text-sm font-semibold text-gray-700">Student Success Stories</span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover how our tutors have transformed learning experiences for students worldwide
//             </p>
//           </div>

//           <div
//             className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8"
//             ref={scrollRef}
//           >
//             <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/20 w-[480px] min-w-[480px] snap-start relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
//               <div className="relative z-10">
//                 <div className="flex gap-2 mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <h3 className="text-3xl font-black text-gray-900 mb-6">The Perfect Match</h3>
//                 <p className="text-gray-700 text-lg leading-relaxed mb-8">
//                   More than one million students gave a{" "}
//                   <span className="font-bold text-blue-600">5 star review</span> to their tutor
//                 </p>
//                 <div className="flex justify-center gap-4">
//                   <button
//                     onClick={() =>
//                       scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
//                     }
//                     className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
//                   >
//                     <ArrowLeft className="w-6 h-6 text-gray-700" />
//                   </button>
//                   <button
//                     onClick={() =>
//                       scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
//                     }
//                     className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
//                   >
//                     <ArrowRight className="w-6 h-6 text-gray-700" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="snap-start transition-all duration-500 hover:scale-105 hover:opacity-100 opacity-80"
//               >
//                 <div className="transform hover:rotate-1 transition-transform duration-300">
//                   <TestimonialCard {...testimonial} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Become a Tutor Section */}
//       <section className="w-full px-4 py-24">
//         <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
//           <img
//             src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
//             alt="Become a tutor"
//             className="w-full h-[500px] object-cover"
//           />
//           <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 max-w-md">
//             <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
//               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 rounded-full mb-4">
//                 <Award className="w-5 h-5 text-orange-500" />
//                 <span className="text-sm font-semibold text-orange-700">Join Our Team</span>
//               </div>
//               <h3 className="text-3xl font-black text-gray-900 mb-4">
//                 You can become a great tutor too!
//               </h3>
//               <p className="text-gray-700 text-base mb-6 leading-relaxed">
//                 Share your knowledge, live off your passion and become your own boss. Join thousands of tutors worldwide.
//               </p>
//               <button className="w-full px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-base font-semibold flex items-center justify-center gap-3 hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl">
//                 Find out more 
//                 <Sparkles className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Enhanced Stats Section */}
      <section className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-[1.02] transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl mb-4 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                    <stat.icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</h3>
                <p className="text-sm text-gray-600 font-semibold group-hover:text-gray-800 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Tutors Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-full mb-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300">
            <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
            <span className="text-sm font-bold text-amber-700">Top Rated</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Tutors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with our highest-rated tutors who have helped thousands of students achieve their goals
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
            <span className="ml-3 text-base text-gray-600 font-semibold">Based on 10,000+ reviews</span>
          </div>
        </div>

        {/* Enhanced Tutor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedTutors.map((tutor, index) => (
            <div 
              key={tutor._id} 
              className="transform hover:scale-105 transition-all duration-500 hover:z-10 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <TutorCard
                {...tutor}
                isLiked={favourites.has(tutor._id)}
                onToggle={() => handleToggleFavourite(tutor._id)}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="group p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-lg">
              <span className="text-base text-gray-700 font-bold">
                Page {currentPage + 1} of {totalPages}
              </span>
            </div>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="group p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
          </div>
        )}

        {/* Enhanced View All Button */}
        {tutors.length > 0 && (
          <div className="text-center mt-12">
            <button className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">View All Tutors</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="w-full overflow-hidden py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gray-100 bg-opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(148, 163, 184, 0.2) 3px, transparent 3px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg border border-white/30">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
              <span className="text-sm font-bold text-gray-700">Student Success Stories</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our tutors have transformed learning experiences for students worldwide
            </p>
          </div>

          <div
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8"
            ref={scrollRef}
          >
            {/* Enhanced First Card */}
            <div className="flex-shrink-0 bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30 w-[500px] min-w-[500px] snap-start relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-20 translate-x-20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full translate-y-16 -translate-x-16 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-8 group-hover:text-blue-600 transition-colors duration-300">The Perfect Match</h3>
                <p className="text-gray-700 text-xl leading-relaxed mb-10">
                  More than one million students gave a{" "}
                  <span className="font-black text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">5 star review</span> to their tutor
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() =>
                      scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
                    }
                    className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110"
                  >
                    <ArrowLeft className="w-7 h-7 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </button>
                  <button
                    onClick={() =>
                      scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
                    }
                    className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110"
                  >
                    <ArrowRight className="w-7 h-7 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-start transition-all duration-500 hover:scale-105 hover:opacity-100 opacity-90"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="transform hover:rotate-1 transition-transform duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Become a Tutor Section */}
      <section className="w-full px-4 py-24 relative">
        <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
            alt="Become a tutor"
            className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 max-w-lg">
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/30 group-hover:bg-white transition-all duration-500 hover:scale-105">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-3 rounded-full mb-6 shadow-lg border border-orange-200/50">
                <Award className="w-5 h-5 text-orange-500 animate-pulse" />
                <span className="text-sm font-bold text-orange-700">Join Our Team</span>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                You can become a great tutor too!
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Share your knowledge, live off your passion and become your own boss. Join thousands of tutors worldwide.
              </p>
              <button className="group relative w-full px-8 py-5 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Find out more</span>
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
