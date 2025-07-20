import { useEffect, useState } from "react"
import { changeApprovalStatusApi, deleteUsersApi, getAllTutorsApi } from "../../apis/api"
import { ConfirmDialog } from "../../components/ConfirmDialog"

export const TutorList = () => {
    const [tutors, setTutors] = useState([])
    const [loading, setLoading] = useState(true)
    const [isUpdated, setIsUpdated] = useState(false)
    const [deleteDialog, setDeleteDialog] = useState({ open: false, tutor: null })
    const [searchTerm, setSearchTerm] = useState("")
    const [filterStatus, setFilterStatus] = useState("all")

    useEffect(() => {
        fetchTutors()
    }, [isUpdated])

    const fetchTutors = async () => {
        try {
            const res = await getAllTutorsApi()
            setTutors(res.data.tutors)
        } catch (err) {
            console.error("Failed to load tutors", err)
        } finally {
            setLoading(false)
        }
    }

    const handleApproveRejectTutor = async (tutorId) => {
        try {
            await changeApprovalStatusApi(tutorId)
            setIsUpdated((prev) => !prev)
        } catch (err) {
            console.error("Failed to update approval status", err)
        }
    }

    const handleDeleteTutor = async (tutorId) => {
        try {
            await deleteUsersApi(tutorId)
            setIsUpdated((prev) => !prev)
        } catch (err) {
            console.error("Failed to delete tutor", err)
        } finally {
            setDeleteDialog({ open: false, tutor: null })
        }
    }

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }

    const getStatusColor = (isApproved) => {
        return isApproved 
            ? "bg-emerald-100 text-emerald-800 border-emerald-200" 
            : "bg-amber-100 text-amber-800 border-amber-200"
    }

    const openDeleteDialog = (tutor) => {
        setDeleteDialog({ open: true, tutor })
    }

    const filteredTutors = tutors.filter(tutor => {
        const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tutor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesFilter = filterStatus === "all" || 
                            (filterStatus === "approved" && tutor.isApproved) ||
                            (filterStatus === "pending" && !tutor.isApproved)
        
        return matchesSearch && matchesFilter
    })

    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="p-8">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <span className="text-gray-600 font-medium">Loading tutors...</span>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Tutor Management</h2>
                        <p className="text-blue-100">Manage tutor applications and approvals</p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">Total Tutors</p>
                                <p className="text-2xl font-bold text-white">{tutors.length}</p>
                            </div>
                            <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">Approved</p>
                                <p className="text-2xl font-bold text-white">{tutors.filter(t => t.isApproved).length}</p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">Pending</p>
                                <p className="text-2xl font-bold text-white">{tutors.filter(t => !t.isApproved).length}</p>
                            </div>
                            <div className="w-10 h-10 bg-amber-500/30 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter Section */}
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
                            placeholder="Search tutors by name, email, or subject..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                    
                    <div className="relative">
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                            <option value="all">All Status</option>
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Tutor Information
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Subject & Location
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredTutors.map((tutor, index) => (
                            <tr key={tutor._id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-sm font-bold text-white">{getInitials(tutor.name)}</span>
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 text-base">{tutor.name}</div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                                {tutor.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="px-6 py-5">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
                                                {tutor.subject}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {tutor.location}
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="px-6 py-5">
                                    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(tutor.isApproved)}`}>
                                        <div className={`w-2 h-2 rounded-full mr-2 ${tutor.isApproved ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                                        {tutor.isApproved ? "Approved" : "Pending Review"}
                                    </span>
                                </td>
                                
                                <td className="px-6 py-5">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleApproveRejectTutor(tutor._id)}
                                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
                                                tutor.isApproved 
                                                    ? "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300" 
                                                    : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/25"
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {tutor.isApproved ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                )}
                                            </svg>
                                            {tutor.isApproved ? "Revoke" : "Approve"}
                                        </button>

                                        <button
                                            onClick={() => openDeleteDialog(tutor)}
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
            {filteredTutors.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {searchTerm || filterStatus !== "all" ? "No tutors match your criteria" : "No tutors found"}
                    </h3>
                    <p className="text-gray-500 mb-6">
                        {searchTerm || filterStatus !== "all" 
                            ? "Try adjusting your search or filter criteria"
                            : "Tutors will appear here once they register"
                        }
                    </p>
                    {(searchTerm || filterStatus !== "all") && (
                        <button
                            onClick={() => {
                                setSearchTerm("")
                                setFilterStatus("all")
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Clear Filters
                        </button>
                    )}
                </div>
            )}

            <ConfirmDialog
                open={deleteDialog.open}
                onClose={() => setDeleteDialog({ open: false, tutor: null })}
                onConfirm={() => handleDeleteTutor(deleteDialog.tutor?._id)}
                title="Delete Tutor"
                message={`Are you sure you want to delete ${deleteDialog.tutor?.name}? This action cannot be undone.`}
                confirmText="Delete Tutor"
                confirmButtonClass="bg-red-600 hover:bg-red-700 text-white"
            />
        </div>
    )
}