import { useState } from "react"
import { AdminSidebar } from "./components/AdminSidebar"
import { TutorList } from "./TutorList"
import { UsersList } from "./UsersList"

export const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState("users")
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const renderContent = () => {
        switch (activeTab) {
            case "users":
                return <UsersList />
            case "tutors":
                return <TutorList />
            default:
                return <UsersList />
        }
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <AdminSidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-sm border-b px-6 py-4">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-semibold text-gray-800">
                            {activeTab === "users" ? "User Management" : "Tutor Management"}
                        </h1>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-6">{renderContent()}</main>
            </div>
        </div>
    )
}

