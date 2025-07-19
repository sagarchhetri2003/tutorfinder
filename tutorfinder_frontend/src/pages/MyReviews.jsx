


// import React, { useEffect, useState } from "react";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { getMyReviewsApi, deleteReviewApi } from "../apis/api";
// import { toast, ToastContainer } from "react-toastify";
// import { confirmAlert } from "react-confirm-alert";
// import "react-toastify/dist/ReactToastify.css";
// import "react-confirm-alert/src/react-confirm-alert.css";

// const MyReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const res = await getMyReviewsApi();
//         if (res.data.success) {
//           setReviews(res.data.reviews);
//         } else {
//           toast.error("Failed to fetch reviews");
//         }
//       } catch (err) {
//         console.error("Error fetching reviews", err);
//         toast.error("Error fetching reviews");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const handleDelete = (id) => {
//     confirmAlert({
//       title: "Delete Review",
//       message: "Are you sure you want to delete this review?",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: async () => {
//             try {
//               const res = await deleteReviewApi(id);
//               if (res.data.success) {
//                 toast.success("Review deleted successfully");
//                 setReviews((prev) => prev.filter((r) => r._id !== id));
//               } else {
//                 toast.error("Failed to delete review");
//               }
//             } catch (error) {
//               console.error(error);
//               toast.error("An error occurred");
//             }
//           },
//         },
//         {
//           label: "No",
//         },
//       ],
//     });
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       <LoggedInNavbar />
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="pt-24 px-4 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">My Reviews</h2>

//         {loading ? (
//           <p className="text-center text-gray-600">Loading reviews...</p>
//         ) : reviews.length === 0 ? (
//           <div className="text-center py-10 text-gray-500">
//             <img src="/empty-box.png" alt="Empty" className="w-32 mx-auto mb-4" />
//             <p>No reviews found.</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 shadow-md">
//               <thead>
//                 <tr className="bg-gray-100 text-left">
//                   <th className="p-3 border">User</th>
//                   <th className="p-3 border">Message</th>
//                   <th className="p-3 border">Date</th>
//                   <th className="p-3 border">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reviews.map((item) => (
//                   <tr key={item._id} className="hover:bg-gray-50">
//                     <td className="p-3 border flex items-center gap-2">
//                       <img
//                         src={
//                           item.user?.image
//                             ? `${process.env.REACT_APP_API_URL}/${item.user.image}`
//                             : "/default-profile.png"
//                         }
//                         alt="User"
//                         className="w-10 h-10 rounded-full object-cover"
//                       />
//                       <span className="font-medium">
//                         {item.user?.name || "Anonymous"}
//                       </span>
//                     </td>
//                     <td className="p-3 border" title={item.review}>
//                       <div className="truncate max-w-sm">
//                         {item.review?.length > 50
//                           ? item.review.slice(0, 50) + "..."
//                           : item.review}
//                       </div>
//                     </td>
//                     <td className="p-3 border text-sm text-gray-500">
//                       {new Date(item.createdAt).toLocaleDateString()}
//                     </td>
//                     <td className="p-3 border">
//                       <button
//                         onClick={() => handleDelete(item._id)}
//                         className="text-red-600 hover:underline"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyReviews;


import React, { useEffect, useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { getMyReviewsApi, deleteReviewApi } from "../apis/api";
import { toast, ToastContainer } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Trash2, Calendar, User, MessageSquare, Search, Filter, SortDesc, Star, Clock, Eye } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getMyReviewsApi();
        if (res.data.success) {
          setReviews(res.data.reviews);
        } else {
          toast.error("Failed to fetch reviews");
        }
      } catch (err) {
        console.error("Error fetching reviews", err);
        toast.error("Error fetching reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Delete Review",
      message: "Are you sure you want to delete this review?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const res = await deleteReviewApi(id);
              if (res.data.success) {
                toast.success("Review deleted successfully");
                setReviews((prev) => prev.filter((r) => r._id !== id));
              } else {
                toast.error("Failed to delete review");
              }
            } catch (error) {
              console.error(error);
              toast.error("An error occurred");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const filteredAndSortedReviews = reviews
    .filter(review => 
      (review.review?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
      (review.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
    )
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <LoggedInNavbar />
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="mt-16"
      />

      {/* Header Section */}
      <div className="bg-white/70 backdrop-blur-lg border-b border-white/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                My Reviews
              </h1>
              <p className="text-slate-600 mt-2">Manage and view all your received reviews</p>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 w-full sm:w-64"
                />
              </div>
              
              <div className="relative">
                <SortDesc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
              <div className="w-16 h-16 border-4 border-blue-600 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
            </div>
            <p className="text-slate-600 mt-6 text-lg">Loading your reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No Reviews Yet</h3>
            <p className="text-slate-600">You haven't received any reviews yet. Keep up the great work!</p>
          </div>
        ) : (
          <>
            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{reviews.length}</p>
                    <p className="text-slate-600">Total Reviews</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Filter className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{filteredAndSortedReviews.length}</p>
                    <p className="text-slate-600">Filtered Results</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">
                      {reviews.length > 0 ? Math.round(reviews.reduce((acc, r) => acc + (r.review?.length || 0), 0) / reviews.length) : 0}
                    </p>
                    <p className="text-slate-600">Avg Characters</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Grid/List */}
            <div className="space-y-6">
              {filteredAndSortedReviews.map((item) => (
                <div 
                  key={item._id} 
                  className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* User Info */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="relative">
                        {item.user?.image ? (
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${item.user.image}`}
                            alt="User"
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg">
                            {item.user?.name?.charAt(0) || "A"}
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 text-lg">
                          {item.user?.name || "Anonymous"}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1">
                      <div className="mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500 flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            Review Message
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.review?.length || 0} characters
                          </span>
                        </div>
                      </div>
                      <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                        <p className="text-slate-700 leading-relaxed">
                          {item.review || "No review message provided"}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="group/btn flex items-center gap-2 px-4 py-2 text-red-600 hover:text-white hover:bg-red-500 rounded-xl border border-red-200 hover:border-red-500 transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4 group-hover/btn:animate-pulse" />
                        <span className="font-medium">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;