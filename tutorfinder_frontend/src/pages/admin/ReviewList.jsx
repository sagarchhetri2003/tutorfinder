import { useEffect, useState } from "react"
import { deleteReviewApi, getAllReviewsApi } from "../../apis/api"  // Changed from getAllReviewsApi
import { ConfirmDialog } from "../../components/ConfirmDialog"

export const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [isUpdated, setIsUpdated] = useState(false)
    const [deleteDialog, setDeleteDialog] = useState({ open: false, review: null })
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetchReviews()
    }, [isUpdated])

    const fetchReviews = async () => {
        try {
            const res = await getAllReviewsApi()  // No tutorId parameter - fetches ALL reviews
            
            // Add debugging logs
            console.log("API Response:", res.data);
            console.log("Full response object:", res);
            
            // Handle both possible response formats
            const reviewsData = res.data.data || res.data.reviews || [];
            console.log("Reviews data:", reviewsData);
            console.log("Number of reviews:", reviewsData.length);
            console.log("First review (if exists):", reviewsData[0]);
            
            setReviews(reviewsData)
        } catch (err) {
            console.error("Failed to load reviews", err)
            console.error("Error details:", err.response?.data || err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteReview = async (reviewId) => {
        try {
            await deleteReviewApi(reviewId)
            setIsUpdated((prev) => !prev)
        } catch (err) {
            console.error("Failed to delete review", err)
        } finally {
            setDeleteDialog({ open: false, review: null })
        }
    }

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }

    const openDeleteDialog = (review) => {
        setDeleteDialog({ open: true, review })
    }

    const filteredReviews = reviews.filter(review => {
        const tutorName = review.tutor?.name || review.tutor?.firstName + " " + review.tutor?.lastName || ""
        const studentName = review.user?.name || review.user?.firstName + " " + review.user?.lastName || ""
        const reviewText = review.review || ""
        
        const matchesSearch = tutorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            reviewText.toLowerCase().includes(searchTerm.toLowerCase())
        
        return matchesSearch
    })

    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="p-8">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <span className="text-gray-600 font-medium">Loading reviews...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Review Management</h2>
                        <p className="text-blue-100">Monitor and manage tutor reviews and feedback</p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">Total Reviews</p>
                                <p className="text-2xl font-bold text-white">{reviews.length}</p>
                            </div>
                            <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v8a2 2 0 002 2h8a2 2 0 002-2V8m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">This Month</p>
                                <p className="text-2xl font-bold text-white">
                                    {reviews.filter(r => {
                                        const reviewDate = new Date(r.createdAt)
                                        const currentDate = new Date()
                                        return reviewDate.getMonth() === currentDate.getMonth() && 
                                               reviewDate.getFullYear() === currentDate.getFullYear()
                                    }).length}
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">Recent Activity</p>
                                <p className="text-2xl font-bold text-white">
                                    {reviews.filter(r => {
                                        const reviewDate = new Date(r.createdAt)
                                        const weekAgo = new Date()
                                        weekAgo.setDate(weekAgo.getDate() - 7)
                                        return reviewDate > weekAgo
                                    }).length}
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="p-6 bg-gray-50 border-b border-gray-200">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search reviews by tutor, student, or comment..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>
            </div>

            {/* Enhanced Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Review Details
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredReviews.map((review) => (
                            <tr key={review._id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                                <span className="text-xs font-bold text-white">
                                                    {getInitials(review.tutor?.name || review.tutor?.firstName + " " + review.tutor?.lastName || "T")}
                                                </span>
                                            </div>
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                                <span className="text-xs font-bold text-white">
                                                    {getInitials(review.user?.name || review.user?.firstName + " " + review.user?.lastName || "S")}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-gray-900 text-sm">
                                                <span className="text-blue-600">
                                                    {review.tutor?.name || review.tutor?.firstName + " " + review.tutor?.lastName || "Unknown Tutor"}
                                                </span> reviewed by <span className="text-emerald-600">
                                                    {review.user?.name || review.user?.firstName + " " + review.user?.lastName || "Unknown Student"}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-1 max-w-md">
                                                "{review.review || "No comment provided"}"
                                            </div>
                                            {review.rating && (
                                                <div className="flex items-center mt-2">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="px-6 py-5">
                                    <div className="text-sm text-gray-600">
                                        {review.createdAt ? new Date(review.createdAt).toLocaleDateString('en-US', { 
                                            year: 'numeric', 
                                            month: 'short', 
                                            day: 'numeric' 
                                        }) : "Unknown Date"}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {review.createdAt ? new Date(review.createdAt).toLocaleDateString('en-US', { weekday: 'long' }) : ""}
                                    </div>
                                </td>

                                <td className="px-6 py-5">
                                    <div className="flex items-center justify-end">
                                        <button
                                            onClick={() => openDeleteDialog(review)}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Empty State */}
            {filteredReviews.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {searchTerm ? "No reviews match your search" : "No reviews found"}
                    </h3>
                    <p className="text-gray-500 mb-6">
                        {searchTerm 
                            ? "Try adjusting your search criteria"
                            : "Reviews will appear here once students provide feedback"
                        }
                    </p>
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Clear Search
                        </button>
                    )}
                </div>
            )}

            <ConfirmDialog
                open={deleteDialog.open}
                onClose={() => setDeleteDialog({ open: false, review: null })}
                onConfirm={() => handleDeleteReview(deleteDialog.review?._id)}
                title="Delete Review"
                message={`Are you sure you want to delete this review? This action cannot be undone.`}
                confirmText="Delete Review"
                confirmButtonClass="bg-red-600 hover:bg-red-700 text-white"
            />
        </div>
    )
}