

// import { ArrowLeft, Heart, MapPin, Clock, DollarSign, BookOpen, User, Star, Edit3, Trash2, Save, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import{toast } from "react-toastify";
// import {
//   addReviewsApi,
//   allFavouritesApi,
//   getReviewsApi,
//   getTutorDetailsApi,
//   toggleFavouriteApi,
//   editReviewApi,
//   deleteReviewApi,
// } from "../apis/api";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import TutorCard from "../components/TutorCard";
// import { useAuth } from "../context/AuthContext";

// const TutorDetail = () => {
//   const { tutorId } = useParams();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [tutor, setTutor] = useState(null);
//   const [otherTutors, setOtherTutors] = useState([]);
//   const [favourites, setFavourites] = useState(new Set());
//   const [review, setReview] = useState("");
//   const [reviews, setReviews] = useState([]);
//   const [updated, setUpdated] = useState(false);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [editReviewText, setEditReviewText] = useState("");

//   useEffect(() => {
//     getTutorDetails();
//     getFavourites();
//     getReview();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [tutorId, updated]);

//   const getTutorDetails = async () => {
//     const response = await getTutorDetailsApi(tutorId);
//     if (response.data.success) {
//       setTutor(response.data.tutor);
//       setOtherTutors(response.data.relatedTutors);
//     }
//   };

//   const getFavourites = async () => {
//     try {
//       const response = await allFavouritesApi();
//       if (response.data.success) {
//         const favIds = new Set(response.data.favourites.map((fav) => fav.tutor._id));
//         setFavourites(favIds);
//       }
//     } catch (error) {
//       console.error("Failed to fetch favourites:", error);
//     }
//   };

//   const getReview = async () => {
//     try {
//       const response = await getReviewsApi(tutorId);
//       if (response.data.success) {
//         setReviews(response.data.reviews);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addReview = async () => {
//     if (review.trim() === "") {
//       toast.error("Please add a review before submitting", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//       return;
//     }
//     try {
//       const response = await addReviewsApi({ tutorId, review });
//       if (response.data.success) {
//         toast.success(response.data.message, {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         setReview(""); // Clear textarea
//         setUpdated((prev) => !prev); // Trigger refresh
//       }
//     } catch (error) {
//       toast.error("Failed to submit review", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleToggleFavourite = async (id) => {
//     try {
//       const response = await toggleFavouriteApi(id);
//       if (response.data.success) {
//         setFavourites((prev) => {
//           const newSet = new Set(prev);
//           newSet.has(id) ? newSet.delete(id) : newSet.add(id);
//           return newSet;
//         });
//       }
//     } catch (error) {
//       console.error("Failed to toggle favourite:", error);
//     }
//   };

//   const handleEditReview = (reviewId, currentText) => {
//     setEditingReviewId(reviewId);
//     setEditReviewText(currentText);
//   };

//   const handleCancelEdit = () => {
//     setEditingReviewId(null);
//     setEditReviewText("");
//   };

//   const handleSaveEdit = async (reviewId) => {
//     if (!editReviewText.trim()) {
//       return toast.error("Review cannot be empty", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//     try {
//       const { data } = await editReviewApi(reviewId, { review: editReviewText });
//       if (data.success) {
//         toast.success(data.message || "Review updated successfully", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         setEditingReviewId(null);
//         setEditReviewText("");
//         setUpdated((prev) => !prev);
//       } else {
//         toast.error(data.message || "Failed to update review", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//       }
//     } catch (error) {
//       toast.error("Failed to update review", 
//         { position: "top-center", autoClose: 2000 }
//       );
//     }
//   };

//   const handleDeleteReview = async (reviewId) => {
//     if (!window.confirm("Are you sure you want to delete this review?")) return;

//     try {
//       const { data } = await deleteReviewApi(reviewId);
//       if (data.success) {
//         toast.success(data.message || "Review deleted successfully", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         setUpdated((prev) => !prev);
//       } else {
//         toast.error(data.message || "Failed to delete review", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//       }
//     } catch (error) {
//       toast.error("Failed to delete review", 
//         { position: "top-center", autoClose: 2000 }
//       );
//     }
//   };

//   if (!tutor) return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-t-2 border-white mx-auto mb-4"></div>
//         <p className="text-lg text-gray-600 font-light">Loading tutor details...</p>
//       </div>
//     </div>
//   );

//   const isTutorFavourite = favourites.has(tutor._id);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
//       <LoggedInNavbar />

//       <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//         {/* Floating Back Button */}
//         <div className="mb-6">
//           <button
//             className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-all duration-300 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/90"
//             onClick={() => navigate(-1)}
//           >
//             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
//             <span className="font-medium">Back</span>
//           </button>
//         </div>

//         {/* Main Profile Section - Light & Airy */}
//         <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl mb-8 overflow-hidden">
//           {/* Subtle gradient header */}
//           <div className="h-20 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-indigo-200/40"></div>
          
//           <div className="px-8 pb-8 -mt-10">
//             {/* Profile Content */}
//             <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
//               {/* Profile Image with Heart */}
//               <div className="relative flex-shrink-0">
//                 <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white">
//                   <img
//                     src={`${process.env.REACT_APP_API_URL}/${tutor.image}`}
//                     alt={tutor.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <button
//                   onClick={() => handleToggleFavourite(tutor._id)}
//                   className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
//                 >
//                   <Heart
//                     className={`w-5 h-5 transition-colors duration-200 ${
//                       isTutorFavourite 
//                         ? "fill-red-400 text-red-400" 
//                         : "text-gray-400 hover:text-red-300"
//                     }`}
//                   />
//                 </button>
//               </div>

//               {/* Profile Details */}
//               <div className="flex-1 text-center lg:text-left">
//                 <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2">{tutor.name}</h1>
//                 <p className="text-gray-500 text-lg font-light italic mb-6">{tutor.tagline}</p>

//                 {/* Info Pills */}
//                 <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
//                   <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100/50">
//                     <MapPin className="w-4 h-4 text-blue-400" />
//                     <span className="text-sm text-gray-700 font-medium">{tutor.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-purple-50/80 px-4 py-2 rounded-full border border-purple-100/50">
//                     <BookOpen className="w-4 h-4 text-purple-400" />
//                     <span className="text-sm text-gray-700 font-medium">{tutor.subject}</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-indigo-50/80 px-4 py-2 rounded-full border border-indigo-100/50">
//                     <Clock className="w-4 h-4 text-indigo-400" />
//                     <span className="text-sm text-gray-700 font-medium">{tutor.teachingMode}</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-green-50/80 px-4 py-2 rounded-full border border-green-100/50">
//                     <DollarSign className="w-4 h-4 text-green-400" />
//                     <span className="text-sm text-gray-700 font-bold">Rs. {tutor.price}/hr</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                   <Link to={`/contact/${tutor._id}`}>
//                     <button className="px-8 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-full font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
//                       Contact me
//                     </button>
//                   </Link>
//                   <Link to={`/booking/${tutor._id}`}>
//                     <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
//                       Book me
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="mt-8 pt-6 border-t border-gray-100/50">
//               <div className="flex items-center justify-center lg:justify-start">
//                 <div className="flex items-center gap-3 bg-gray-50/80 px-4 py-3 rounded-full">
//                   <User className="w-4 h-4 text-gray-400" />
//                   <span className="text-sm text-gray-600">Gender: <span className="font-medium text-gray-700">{tutor.gender}</span></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* About Sections - Side by Side Light Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full flex items-center justify-center">
//                 <User className="w-4 h-4 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-medium text-gray-800">About Me</h3>
//             </div>
//             <p className="text-gray-600 leading-relaxed font-light">{tutor.aboutYou}</p>
//           </div>

//           <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full flex items-center justify-center">
//                 <BookOpen className="w-4 h-4 text-green-600" />
//               </div>
//               <h3 className="text-lg font-medium text-gray-800">About the Lesson</h3>
//             </div>
//             <p className="text-gray-600 leading-relaxed font-light">{tutor.aboutLesson}</p>
//           </div>
//         </div>

//         {/* Reviews Section - Light & Clean */}
//         <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-8 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-8 h-8 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full flex items-center justify-center">
//               <Star className="w-4 h-4 text-yellow-600" />
//             </div>
//             <h3 className="text-xl font-medium text-gray-800">Reviews</h3>
//             <span className="bg-gray-100/80 text-gray-600 px-3 py-1 rounded-full text-sm">
//               {reviews.length}
//             </span>
//           </div>
          
//           {reviews.length === 0 ? (
//             <div className="text-center py-12">
//               <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Star className="w-6 h-6 text-gray-400" />
//               </div>
//               <p className="text-gray-500 font-light">No reviews yet</p>
//               <p className="text-gray-400 text-sm mt-1 font-light">Be the first to share your experience</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {reviews.map((r, index) => (
//                 <div key={index} className="bg-gradient-to-r from-gray-50/60 to-blue-50/60 backdrop-blur-sm p-5 rounded-xl border border-white/30 hover:shadow-md transition-all duration-200">
//                   {editingReviewId === r._id ? (
//                     <div className="space-y-3">
//                       <textarea
//                         className="w-full h-24 p-3 bg-white/80 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-purple-300 focus:border-transparent font-light"
//                         value={editReviewText}
//                         onChange={(e) => setEditReviewText(e.target.value)}
//                       />
//                       <div className="flex items-center justify-end gap-2">
//                         <button
//                           onClick={handleCancelEdit}
//                           className="flex items-center gap-1 px-3 py-1.5 text-gray-500 hover:text-gray-700 transition-colors"
//                         >
//                           <X className="w-4 h-4" />
//                           <span className="text-sm">Cancel</span>
//                         </button>
//                         <button
//                           onClick={() => handleSaveEdit(r._id)}
//                           className="flex items-center gap-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1.5 rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all"
//                         >
//                           <Save className="w-4 h-4" />
//                           <span className="text-sm">Save</span>
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                       <p className="text-gray-700 mb-3 leading-relaxed font-light">{r.review}</p>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="w-6 h-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
//                             <User className="w-3 h-3 text-blue-600" />
//                           </div>
//                           <p className="text-sm text-gray-600 font-medium">
//                             {r.user?.name || "Anonymous"}
//                           </p>
//                         </div>
                        
//                         {/* Edit/Delete buttons for user's own reviews */}
//                         {user && r.user?._id === user._id && (
//                           <div className="flex items-center gap-2">
//                             <button
//                               onClick={() => handleEditReview(r._id, r.review)}
//                               className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
//                               title="Edit review"
//                             >
//                               <Edit3 className="w-4 h-4" />
//                             </button>
//                             <button
//                               onClick={() => handleDeleteReview(r._id)}
//                               className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
//                               title="Delete review"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Add Review Form */}
//           {user && (
//             <div className="mt-8 pt-6 border-t border-gray-100/50">
//               <h4 className="text-lg font-medium mb-4 text-gray-800">Share your experience</h4>
//               <div className="space-y-4">
//                 <textarea
//                   className="w-full h-28 p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl resize-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200 font-light"
//                   placeholder="Write your review here..."
//                   value={review}
//                   onChange={(e) => setReview(e.target.value)}
//                 />
//                 <button
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                   onClick={addReview}
//                 >
//                   Submit Review
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Related Tutors */}
//         {otherTutors.length > 0 && (
//           <div className="mb-16">
//             <div className="mb-8 text-center">
//               <h3 className="text-2xl font-light text-gray-800 mb-2">
//                 More tutors in {tutor.subject}
//               </h3>
//               <p className="text-gray-500 font-light">Discover other amazing tutors</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {otherTutors.map((relatedTutor) => (
//                 <div key={relatedTutor._id} className="transform hover:-translate-y-2 transition-all duration-300">
//                   <TutorCard
//                     {...relatedTutor}
//                     isLiked={favourites.has(relatedTutor._id)}
//                     onToggle={() => handleToggleFavourite(relatedTutor._id)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

     
//     </div>
//   );
// };

// export default TutorDetail;

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  BookOpen,
  User,
  Star,
  Edit2,
  Trash2,
  Save,
  X,
  AlertTriangle,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addReviewsApi,
  allFavouritesApi,
  getReviewsApi,
  getTutorDetailsApi,
  toggleFavouriteApi,
  editReviewApi,
  deleteReviewApi,
} from "../apis/api";
import LoggedInNavbar from "../components/LoggedInNavbar";
import TutorCard from "../components/TutorCard";
import { useAuth } from "../context/AuthContext";

// Modern Confirmation Modal Component
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TutorDetail = () => {
  const { tutorId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [tutor, setTutor] = useState(null);
  const [otherTutors, setOtherTutors] = useState([]);
  const [favourites, setFavourites] = useState(new Set());
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editReviewText, setEditReviewText] = useState("");
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, reviewId: null });

  useEffect(() => {
    getTutorDetails();
    getFavourites();
    getReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tutorId, updated]);

  const getTutorDetails = async () => {
    const response = await getTutorDetailsApi(tutorId);
    if (response.data.success) {
      setTutor(response.data.tutor);
      setOtherTutors(response.data.relatedTutors);
    }
  };

  const getFavourites = async () => {
    try {
      const response = await allFavouritesApi();
      if (response.data.success) {
        setFavourites(
          new Set(response.data.favourites.map((fav) => fav.tutor._id))
        );
      }
    } catch {
      console.error("Failed to fetch favourites");
    }
  };

  const getReview = async () => {
    try {
      const response = await getReviewsApi(tutorId);
      if (response.data.success) {
        setReviews(response.data.reviews);
      }
    } catch {
      console.error("Failed to fetch reviews");
    }
  };

  const addReview = async () => {
    if (!review.trim()) {
      toast.error("Please add a review before submitting");
      return;
    }
    try {
      const { data } = await addReviewsApi({ tutorId, review });
      if (data.success) {
        toast.success(data.message || "Review added successfully");
        setReview("");
        setUpdated((p) => !p);
      }
    } catch {
      toast.error("Failed to submit review");
    }
  };

  const handleToggleFavourite = async (id) => {
    try {
      const { data } = await toggleFavouriteApi(id);
      if (data.success) {
        setFavourites((prev) => {
          const next = new Set(prev);
          next.has(id) ? next.delete(id) : next.add(id);
          return next;
        });
      }
    } catch {
      console.error("Failed to toggle favourite");
    }
  };

  const handleEditReview = (id, text) => {
    setEditingReviewId(id);
    setEditReviewText(text);
  };

  const handleCancelEdit = () => {
    setEditingReviewId(null);
    setEditReviewText("");
  };

  const handleSaveEdit = async (id) => {
    if (!editReviewText.trim()) {
      toast.error("Review cannot be empty");
      return;
    }
    try {
      const { data } = await editReviewApi(id, { review: editReviewText });
      if (data.success) {
        toast.success(data.message || "Review updated successfully");
        setEditingReviewId(null);
        setEditReviewText("");
        setUpdated((p) => !p);
      } else {
        toast.error(data.message || "Failed to update review");
      }
    } catch {
      toast.error("Failed to update review");
    }
  };

  const handleDeleteReview = async (id) => {
    setConfirmModal({ isOpen: true, reviewId: id });
  };

  const confirmDeleteReview = async () => {
    const { reviewId } = confirmModal;
    try {
      const { data } = await deleteReviewApi(reviewId);
      if (data.success) {
        toast.success(data.message || "Review deleted successfully");
        setUpdated((p) => !p);
      } else {
        toast.error(data.message || "Failed to delete review");
      }
    } catch {
      toast.error("Failed to delete review");
    }
    setConfirmModal({ isOpen: false, reviewId: null });
  };

  if (!tutor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-t-2 border-white border-b-2 border-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600 font-light">Loading tutor details...</p>
        </div>
      </div>
    );
  }

  const isFav = favourites.has(tutor._id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <LoggedInNavbar />

      <div className="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full shadow-sm hover:shadow-md transition"
        >
          <ArrowLeft className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">Back</span>
        </button>

        {/* Profile Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative">
              <img
                src={`${process.env.REACT_APP_API_URL}/${tutor.image}`}
                alt={tutor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
              />
              <button
                onClick={() => handleToggleFavourite(tutor._id)}
                className="absolute top-0 right-0 bg-white rounded-full p-1 shadow"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFav ? "text-red-500 fill-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-light">{tutor.name}</h1>
              <p className="italic text-gray-500 mb-4">{tutor.tagline}</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-700">{tutor.location}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-purple-50 rounded-full">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-700">{tutor.subject}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-indigo-50 rounded-full">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-gray-700">{tutor.teachingMode}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-green-50 rounded-full">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-700 font-semibold">
                    Rs. {tutor.price}/hr
                  </span>
                </div>
              </div>
              <div className="mt-6 flex gap-4 justify-center lg:justify-start">
                <Link to={`/contact/${tutor._id}`}>
                  <button className="px-6 py-2 bg-white border border-blue-200 text-blue-600 rounded-full shadow-sm hover:shadow-md transition">
                    Contact me
                  </button>
                </Link>
                <Link to={`/booking/${tutor._id}`}>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition">
                    Book me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced About Sections */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl transform transition-transform group-hover:scale-105"></div>
            <div className="relative p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed pl-6">{tutor.aboutYou}</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl transform transition-transform group-hover:scale-105"></div>
            <div className="relative p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">About the Lesson</h3>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed pl-6">{tutor.aboutLesson}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="p-8 bg-white/60 backdrop-blur-xl rounded-2xl shadow mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold">Reviews</h3>
            <span className="bg-gray-100 px-2.5 py-1 rounded-full text-sm font-medium text-gray-600">
              {reviews.length}
            </span>
          </div>

          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-light">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((r) => (
                <div
                  key={r._id}
                  className="group p-5 bg-white/80 rounded-xl shadow-sm border border-white/40 hover:shadow-md transition-all"
                >
                  {editingReviewId === r._id ? (
                    <>
                      <textarea
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows="3"
                        value={editReviewText}
                        onChange={(e) => setEditReviewText(e.target.value)}
                      />
                      <div className="mt-3 flex gap-2 justify-end">
                        <button 
                          onClick={handleCancelEdit}
                          className="flex items-center gap-1 px-3 py-1.5 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          <span className="text-sm">Cancel</span>
                        </button>
                        <button
                          onClick={() => handleSaveEdit(r._id)}
                          className="flex items-center gap-1 px-4 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <Save className="w-4 h-4" />
                          <span className="text-sm">Save</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-3 leading-relaxed">{r.review}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">
                          {r.user?.name || "Anonymous"}
                        </span>
                        {user?._id === r.user?._id && (
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleEditReview(r._id, r.review)}
                              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                              title="Edit review"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteReview(r._id)}
                              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                              title="Delete review"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {user && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <textarea
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Share your experience with this tutor..."
                rows="3"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <button
                onClick={addReview}
                className="mt-3 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Submit Review
              </button>
            </div>
          )}
        </div>

        {/* Related Tutors */}
        {otherTutors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-light mb-6">
              More tutors in {tutor.subject}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTutors.map((t) => (
                <TutorCard
                  key={t._id}
                  {...t}
                  isLiked={favourites.has(t._id)}
                  onToggle={() => handleToggleFavourite(t._id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, reviewId: null })}
        onConfirm={confirmDeleteReview}
        title="Delete Review"
        message="Are you sure you want to delete this review? This action cannot be undone."
      />

      {/* Toast container for all toasts on this page */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default TutorDetail;