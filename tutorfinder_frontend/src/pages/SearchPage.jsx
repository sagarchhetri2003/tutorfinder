

// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { allFavouritesApi, searchTutorsApi, toggleFavouriteApi } from "../apis/api";
// import TutorCard from "../components/TutorCard";
// import { motion } from "framer-motion";


// export const SearchPage = () => {
//   const { search } = useLocation();
//   const queryParams = new URLSearchParams(search);

//   const subject = queryParams.get("subject");
//   const location = queryParams.get("location");
//   const teachingMode = queryParams.get("mode");

//   const [tutors, setTutors] = useState([]);
//   const [favourites, setFavourites] = useState(new Set());
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchTutors = async (pageNum = 1) => {
//     try {
//       const res = await searchTutorsApi({ subject, location, teachingMode, page: pageNum });
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
//     fetchTutors(1);
//   }, [subject, location, teachingMode]);

//   useEffect(() => {
//     const getFavourites = async () => {
//       try {
//         const response = await allFavouritesApi();
//         if (response.data.success) {
//           const favIds = new Set(response.data.favourites.map((fav) => fav.tutor._id));
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
//     <div className="max-w-screen-xl mx-auto px-4 py-8">
//       {/* Filter Tags */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         {subject && <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Subject: {subject}</span>}
//         {location && <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Location: {location}</span>}
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
import { ArrowLeft, Search } from "lucide-react";

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

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20 pb-8">

      {/* Back Button + Search */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-700 hover:text-black">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="relative ml-auto w-full max-w-xs">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Search subject..."
            className="w-full border border-gray-300 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-3 mb-6">
        {subject && <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Subject: {subject}</span>}
        {locationValue && <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Location: {locationValue}</span>}
        {teachingMode && <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mode: {teachingMode}</span>}
      </div>

      {/* Tutor Cards */}
      {loading ? (
        <p className="text-center mt-20 text-lg font-medium animate-pulse">Loading tutors...</p>
      ) : tutors.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor, index) => (
              <motion.div
                key={tutor._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TutorCard
                  {...tutor}
                  isLiked={favourites.has(tutor._id)}
                  onToggle={() => handleToggleFavourite(tutor._id)}
                />
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={loadMoreTutors}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg font-medium">No tutors found.</p>
      )}
    </div>
  );
};
