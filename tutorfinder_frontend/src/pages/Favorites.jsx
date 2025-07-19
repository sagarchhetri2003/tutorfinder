// import { useEffect, useState } from "react";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import TutorCard from "../components/TutorCard";
// import { allFavouritesApi, toggleFavouriteApi } from "../apis/api";

// const Favorites = () => {
//   const [favoriteTutors, setFavoriteTutors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const res = await allFavouritesApi();
//         if (res.data.success) {
//           const tutors = res.data.favourites.map(fav => ({
//             ...fav.tutor,
//             isLiked: true,
//           }));
//           setFavoriteTutors(tutors);
//         } else {
//           setFavoriteTutors([]);
//         }
//       } catch (err) {
//         console.error("Failed to fetch favorite tutors:", err);
//         setFavoriteTutors([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFavorites();
//   }, []);

//   const handleToggleFavourite = async (tutorId) => {
//     try {
//       const res = await toggleFavouriteApi(tutorId);
//       if (res.data.success) {
//         setFavoriteTutors(prev => {
//           const isCurrentlyFav = prev.some(tutor => tutor._id === tutorId);
//           if (isCurrentlyFav) {
//             return prev.filter(tutor => tutor._id !== tutorId);
//           } else {
//             return prev;
//           }
//         });
//       }
//     } catch (err) {
//       console.error("Failed to toggle favourite:", err);
//     }
//   };

//   const handleClearFavorites = () => {
//     setFavoriteTutors([]);
//   };

//   if (loading) {
//     return <p className="text-center mt-10">Loading favorite tutors...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <LoggedInNavbar activePage="favorites" />

//       <section className="container mx-auto px-4 pt-32 pb-16">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">My Favorite Tutors</h2>

//           <div className="flex gap-4">
//             {favoriteTutors.length > 0 && (
//               <button
//                 onClick={handleClearFavorites}
//                 className="px-4 py-2 bg-red-100 text-red-500 rounded-full font-medium hover:bg-red-200 transition"
//               >
//                 Remove All Favorites
//               </button>
//             )}
//           </div>
//         </div>

//         {favoriteTutors.length === 0 ? (
//           <p className="text-center text-gray-500">You haven't added any favorite tutors yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {favoriteTutors.map((tutor) => (
//               <TutorCard
//                 key={tutor._id}
//                 {...tutor}
//                 isLiked={true}
//                 onToggle={() => handleToggleFavourite(tutor._id)}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Favorites;


import { useEffect, useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import TutorCard from "../components/TutorCard";
import { allFavouritesApi, toggleFavouriteApi } from "../apis/api";

const Favorites = () => {
  const [favoriteTutors, setFavoriteTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await allFavouritesApi();
        if (res.data.success) {
          const tutors = res.data.favourites.map(fav => ({
            ...fav.tutor,
            isLiked: true,
          }));
          setFavoriteTutors(tutors);
        } else {
          setFavoriteTutors([]);
        }
      } catch (err) {
        console.error("Failed to fetch favorite tutors:", err);
        setFavoriteTutors([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  const handleToggleFavourite = async (tutorId) => {
    try {
      const res = await toggleFavouriteApi(tutorId);
      if (res.data.success) {
        setFavoriteTutors(prev => {
          const isCurrentlyFav = prev.some(tutor => tutor._id === tutorId);
          if (isCurrentlyFav) {
            return prev.filter(tutor => tutor._id !== tutorId);
          } else {
            return prev;
          }
        });
      }
    } catch (err) {
      console.error("Failed to toggle favourite:", err);
    }
  };

  const handleClearFavorites = () => {
    setFavoriteTutors([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <LoggedInNavbar activePage="favorites" />
        <div className="flex items-center justify-center min-h-[60vh] pt-32">
          <div className="text-center space-y-6">
            {/* Enhanced Loading Animation */}
            <div className="relative">
              <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-600 rounded-full animate-pulse mx-auto"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Loading your favorite tutors...</h3>
              <p className="text-gray-500">Please wait while we fetch your saved tutors</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <LoggedInNavbar activePage="favorites" />
        
        <section className="container mx-auto px-4 pt-32 pb-16">
          {/* Enhanced Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-red-100 border border-pink-200/50 rounded-full text-sm font-medium text-pink-800 mb-6 backdrop-blur-sm">
              <span className="text-2xl mr-2">❤️</span>
              Your Learning Journey
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              My Favorite Tutors
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep track of the tutors who inspire you most. Your personalized collection of learning partners.
            </p>
          </div>

          {/* Stats and Actions Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex items-center space-x-6">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-3 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📚</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Favorites</p>
                    <p className="text-2xl font-bold text-gray-800">{favoriteTutors.length}</p>
                  </div>
                </div>
              </div>
              
              {favoriteTutors.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-3 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⭐</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Ready to Learn</p>
                      <p className="text-lg font-semibold text-gray-800">Start Today!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              {favoriteTutors.length > 0 && (
                <button
                  onClick={handleClearFavorites}
                  className="group px-6 py-3 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50 text-red-600 rounded-2xl font-medium hover:from-red-100 hover:to-pink-100 hover:border-red-300/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-sm hover:shadow-md"
                >
                  <span className="group-hover:animate-pulse">🗑️</span>
                  <span>Remove All Favorites</span>
                </button>
              )}
            </div>
          </div>

          {/* Content Section */}
          {favoriteTutors.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                {/* Enhanced Empty State */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <div className="text-6xl animate-bounce">💙</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Favorite Tutors Yet</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Start building your learning network! Browse through our amazing tutors and save the ones that catch your interest.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">💡 Pro Tip</h4>
                    <p className="text-sm text-gray-600">
                      Click the heart icon ❤️ on any tutor's profile to add them to your favorites for quick access later!
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = '/tutors'}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Browse Tutors
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Filter/Sort Bar (Optional Enhancement) */}
              {/* <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-semibold text-gray-800">Your Collection</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>All tutors available</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Quick Actions:</span>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition">
                        📞 Contact All
                      </button>
                      <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition">
                        📊 Compare
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Tutors Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoriteTutors.map((tutor, index) => (
                  <div
                    key={tutor._id}
                    className="transform transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <TutorCard
                      {...tutor}
                      isLiked={true}
                      onToggle={() => handleToggleFavourite(tutor._id)}
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Action Bar */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-6 text-center shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Ready to Start Learning?</h4>
                <p className="text-gray-600 mb-4">
                  You have {favoriteTutors.length} amazing tutor{favoriteTutors.length !== 1 ? 's' : ''} in your favorites. 
                  Why not schedule a session with one of them today?
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    🚀 Book a Session
                  </button>
                  <button 
                    onClick={() => window.location.href = '/tutors'}
                    className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300"
                  >
                    Find More Tutors
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Favorites;