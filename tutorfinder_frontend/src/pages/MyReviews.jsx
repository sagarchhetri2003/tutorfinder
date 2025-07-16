// import React, { useEffect, useState } from "react";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { getTutorReviewsApi, deleteReviewApi } from "../apis/api";
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
//         const res = await getTutorReviewsApi();
//         if (res.data.success) {
//           setReviews(res.data.reviews);
//         }
//       } catch (err) {
//         console.error("Error fetching reviews", err);
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
//               toast.error("An error occurred");
//               console.error(error);
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
//                       <span className="font-medium">{item.user?.name}</span>
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
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="bg-white min-h-screen">
      <LoggedInNavbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Reviews</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <img src="/empty-box.png" alt="Empty" className="w-32 mx-auto mb-4" />
            <p>No reviews found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">User</th>
                  <th className="p-3 border">Message</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="p-3 border flex items-center gap-2">
                      <img
                        src={
                          item.user?.image
                            ? `${process.env.REACT_APP_API_URL}/${item.user.image}`
                            : "/default-profile.png"
                        }
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-medium">
                        {item.user?.name || "Anonymous"}
                      </span>
                    </td>
                    <td className="p-3 border" title={item.review}>
                      <div className="truncate max-w-sm">
                        {item.review?.length > 50
                          ? item.review.slice(0, 50) + "..."
                          : item.review}
                      </div>
                    </td>
                    <td className="p-3 border text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3 border">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
