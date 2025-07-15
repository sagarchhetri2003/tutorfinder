import { useEffect, useState } from "react"
import { deleteUsersApi, getAllUsersApi } from "../../apis/api"
import { ConfirmDialog } from "../../components/ConfirmDialog"

const initialUsers = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        joinDate: "2024-01-15",
        status: "active",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        joinDate: "2024-02-20",
        status: "active",
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        joinDate: "2024-03-10",
        status: "inactive",
    },
    {
        id: 4,
        name: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        joinDate: "2024-01-05",
        status: "active",
    },
    {
        id: 5,
        name: "David Brown",
        email: "david.brown@example.com",
        joinDate: "2024-02-28",
        status: "active",
    },
]

export const UsersList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [isUpdated, setIsUpdated] = useState(false)
    const [deleteDialog, setDeleteDialog] = useState({ open: false, user: null })

    useEffect(() => {
        fetchUsers()
    }, [isUpdated])

    const fetchUsers = async () => {
        try {
            const res = await getAllUsersApi()
            setUsers(res.data.users)
        } catch (err) {
            console.error("Failed to load users", err)
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUsersApi(userId)
            setIsUpdated((prev) => !prev)
        } catch (err) {
            console.error("Failed to delete user", err)
        } finally {
            setDeleteDialog({ open: false, user: null })
        }
    }


    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }

    const openDeleteDialog = (user) => {
        setDeleteDialog({ open: true, user })
    }

    { loading && <div className="text-center py-8 text-gray-500">Loading users...</div> }

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
                <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                    <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
                </div>
                <p className="text-gray-600">Manage all registered users in the system</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Join Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-blue-700">{getInitials(user.name)}</span>
                                        </div>
                                        <span className="font-medium text-gray-900">{user.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`
                    inline-flex px-2 py-1 text-xs font-semibold rounded-full
                    ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                  `}
                                    >
                                        {user.isApproved ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button
                                        onClick={() => openDeleteDialog(user)}
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {users.length === 0 && <div className="text-center py-8 text-gray-500">No users found</div>}

            <ConfirmDialog
                open={deleteDialog.open}
                onClose={() => setDeleteDialog({ open: false, user: null })}
                onConfirm={() => handleDeleteUser(deleteDialog.user?._id)}
                title="Delete User"
                message={`Are you sure you want to delete ${deleteDialog.user?.name}? This action cannot be undone.`}
                confirmText="Delete User"
                confirmButtonClass="bg-red-600 hover:bg-red-700 text-white"
            />
        </div>
    )
}
