import { useEffect, useState } from "react"
import { changeApprovalStatus, deleteUsersApi, getAllTutorsApi } from "../../apis/api"
import { ConfirmDialog } from "../../components/ConfirmDialog"

export const TutorList = () => {
    const [tutors, setTutors] = useState([])
    const [loading, setLoading] = useState(true)
    const [isUpdated, setIsUpdated] = useState(false)
    const [deleteDialog, setDeleteDialog] = useState({ open: false, tutor: null })

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
            await changeApprovalStatus(tutorId)
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

    const getStatusColor = (status) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-800"
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "rejected":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const openDeleteDialog = (tutor) => {
        setDeleteDialog({ open: true, tutor })
    }

    {loading && <div className="text-center py-6 text-gray-500">Loading tutors...</div>}

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
                <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                    </svg>
                    <h2 className="text-xl font-semibold text-gray-800">Tutor Management</h2>
                </div>
                <p className="text-gray-600">Manage tutor applications and approvals</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutor</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Subject
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Location
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tutors.map((tutor) => (
                            <tr key={tutor._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-purple-700">{getInitials(tutor.name)}</span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{tutor.name}</div>
                                            <div className="text-sm text-gray-500">{tutor.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{tutor.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{tutor.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {tutor.status === "approved" ? (
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-gray-900">{tutor.rating}</span>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">N/A</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${tutor.isApproved ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        {tutor.isApproved ? "approved" : "pending"}
                                    </span>

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleApproveRejectTutor(tutor._id)}
                                            className={`inline-flex items-center gap-1 px-3 py-1 ${tutor.isApproved ? "bg-gray-600 hover:bg-gray-700" : "bg-green-600 hover:bg-green-700"
                                                } text-white text-sm font-medium rounded transition-colors`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {tutor.isApproved ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                )}
                                            </svg>
                                            {tutor.isApproved ? "Disapprove" : "Approve"}
                                        </button>

                                        <button
                                            onClick={() => openDeleteDialog(tutor)}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
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

            {tutors.length === 0 && <div className="text-center py-8 text-gray-500">No tutors found</div>}

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
