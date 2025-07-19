

// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { allFavouritesApi, searchTutorsApi, toggleFavouriteApi } from "../apis/api";
// import TutorCard from "../components/TutorCard";
// import { motion } from "framer-motion";
// import { ArrowLeft, Search } from "lucide-react";

// export const SearchPage = () => {
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(search);

//   const initialSubject = queryParams.get("subject") || "";
//   const initialLocation = queryParams.get("location") || "";
//   const initialMode = queryParams.get("mode") || "";

//   const [subject, setSubject] = useState(initialSubject);
//   const [locationValue] = useState(initialLocation);
//   const [teachingMode] = useState(initialMode);

//   const [tutors, setTutors] = useState([]);
//   const [favourites, setFavourites] = useState(new Set());
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchTutors = async (pageNum = 1) => {
//     try {
//       const res = await searchTutorsApi({ subject, location: locationValue, teachingMode, page: pageNum });
//       if (res.data.success) {
//         const newTutors = res.data.tutors;
//         setTutors(prev => (pageNum === 1 ? newTutors : [...prev, ...newTutors]));
//         setHasMore(newTutors.length > 0);
//       } else {
//         if (pageNum === 1) setTutors([]);
//         setHasMore(false);
//       }
//     } catch (err) {
//       console.error("Error fetching tutors:", err);
//       setTutors([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setPage(1);
//     setLoading(true);
//     fetchTutors(1);
//   }, [subject]);

//   useEffect(() => {
//     const getFavourites = async () => {
//       try {
//         const response = await allFavouritesApi();
//         if (response.data.success) {
//           const favIds = new Set(response.data.favourites.map(fav => fav.tutor._id));
//           setFavourites(favIds);
//         }
//       } catch (error) {
//         console.error("Failed to fetch favourites:", error);
//       }
//     };
//     getFavourites();
//   }, []);

//   const handleToggleFavourite = async (tutorId) => {
//     try {
//       const response = await toggleFavouriteApi(tutorId);
//       if (response.data.success) {
//         setFavourites(prev => {
//           const newSet = new Set(prev);
//           newSet.has(tutorId) ? newSet.delete(tutorId) : newSet.add(tutorId);
//           return newSet;
//         });
//       }
//     } catch (error) {
//       console.error("Failed to toggle favourite:", error);
//     }
//   };

//   const loadMoreTutors = () => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//     fetchTutors(nextPage);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 pt-20 pb-8">

//       {/* Back Button + Search */}
//       <div className="flex items-center gap-3 mb-6">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-700 hover:text-black">
//           <ArrowLeft className="w-5 h-5" />
//           <span>Back</span>
//         </button>

//         <div className="relative ml-auto w-full max-w-xs">
//           <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
//           <input
//             type="text"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             placeholder="Search subject..."
//             className="w-full border border-gray-300 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       {/* Filter Tags */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         {subject && <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Subject: {subject}</span>}
//         {locationValue && <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Location: {locationValue}</span>}
//         {teachingMode && <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mode: {teachingMode}</span>}
//       </div>

//       {/* Tutor Cards */}
//       {loading ? (
//         <p className="text-center mt-20 text-lg font-medium animate-pulse">Loading tutors...</p>
//       ) : tutors.length > 0 ? (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {tutors.map((tutor, index) => (
//               <motion.div
//                 key={tutor._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//               >
//                 <TutorCard
//                   {...tutor}
//                   isLiked={favourites.has(tutor._id)}
//                   onToggle={() => handleToggleFavourite(tutor._id)}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {hasMore && (
//             <div className="text-center mt-8">
//               <button
//                 onClick={loadMoreTutors}
//                 className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p className="text-center text-gray-500 text-lg font-medium">No tutors found.</p>
//       )}
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { allFavouritesApi, searchTutorsApi, toggleFavouriteApi } from "../apis/api";
import TutorCard from "../components/TutorCard";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Filter, Users, MapPin, BookOpen, Monitor } from "lucide-react";

export const SearchPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);

  const initialSubject = queryParams.get("subject") || "";
  const initialLocation = queryParams.get("location") || "";
  const initialMode = queryParams.get("mode") || "";

  const [subject, setSubject] = useState(initialSubject);
  const [locationValue] = useState(initialLocation);
  const [teachingMode] = useState(initialMode);

  const [tutors, setTutors] = useState([]);
  const [favourites, setFavourites] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchTutors = async (pageNum = 1) => {
    try {
      const res = await searchTutorsApi({ subject, location: locationValue, teachingMode, page: pageNum });
      if (res.data.success) {
        const newTutors = res.data.tutors;
        setTutors(prev => (pageNum === 1 ? newTutors : [...prev, ...newTutors]));
        setHasMore(newTutors.length > 0);
      } else {
        if (pageNum === 1) setTutors([]);
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching tutors:", err);
      setTutors([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    setLoading(true);
    fetchTutors(1);
  }, [subject]);

  useEffect(() => {
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
    getFavourites();
  }, []);

  const handleToggleFavourite = async (tutorId) => {
    try {
      const response = await toggleFavouriteApi(tutorId);
      if (response.data.success) {
        setFavourites(prev => {
          const newSet = new Set(prev);
          newSet.has(tutorId) ? newSet.delete(tutorId) : newSet.add(tutorId);
          return newSet;
        });
      }
    } catch (error) {
      console.error("Failed to toggle favourite:", error);
    }
  };

  const loadMoreTutors = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchTutors(nextPage);
  };

  const getFilterIcon = (type) => {
    switch (type) {
      case 'subject': return <BookOpen className="w-3.5 h-3.5" />;
      case 'location': return <MapPin className="w-3.5 h-3.5" />;
      case 'mode': return <Monitor className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="pt-24 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            {/* Back Button */}
            <motion.button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform duration-200" />
              <span className="font-medium">Back</span>
            </motion.button>

            {/* Search Bar */}
            <motion.div 
              className="relative w-full sm:w-96"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Search for tutors by subject..."
                className="w-full bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-300 focus:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
              />
            </motion.div>
          </motion.div>

          {/* Active Filters */}
          {(subject || locationValue || teachingMode) && (
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Active filters:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {subject && (
                  <motion.span 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-blue-500/25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {getFilterIcon('subject')}
                    {subject}
                  </motion.span>
                )}
                {locationValue && (
                  <motion.span 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-emerald-500/25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {getFilterIcon('location')}
                    {locationValue}
                  </motion.span>
                )}
                {teachingMode && (
                  <motion.span 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-purple-500/25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {getFilterIcon('mode')}
                    {teachingMode}
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Content Section */}
        <div className="pb-16">
          {loading ? (
            <motion.div 
              className="flex flex-col items-center justify-center py-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin animation-delay-150"></div>
              </div>
              <p className="mt-6 text-slate-600 font-medium">Finding the best tutors for you...</p>
              <p className="mt-2 text-sm text-slate-500">This won't take long</p>
            </motion.div>
          ) : tutors.length > 0 ? (
            <>
              {/* Results Header */}
              <motion.div 
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-slate-600" />
                  <h2 className="text-xl font-semibold text-slate-900">
                    {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} found
                  </h2>
                </div>
              </motion.div>

              {/* Tutor Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutors.map((tutor, index) => (
                  <motion.div
                    key={tutor._id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                  >
                    <TutorCard
                      {...tutor}
                      isLiked={favourites.has(tutor._id)}
                      onToggle={() => handleToggleFavourite(tutor._id)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <motion.button
                    onClick={loadMoreTutors}
                    className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-2xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Load More Tutors</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </motion.button>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div 
              className="flex flex-col items-center justify-center py-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No tutors found</h3>
              <p className="text-slate-600 text-center max-w-md">
                We couldn't find any tutors matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <motion.button
                onClick={() => {
                  setSubject("");
                  setPage(1);
                  setLoading(true);
                  fetchTutors(1);
                }}
                className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Clear Search
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};