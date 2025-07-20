// export const AdminSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
//     const menuItems = [
//         {
//             title: "User List",
//             key: "users",
//             icon: (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
//                     />
//                 </svg>
//             ),
//         },
//         {
//             title: "Tutor List",
//             key: "tutors",
//             icon: (
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//                     />
//                 </svg>
//             ),
//         },
//         {
//             title: "Logout",
//             key: "logout",
//             onClick: () => {
//                 localStorage.removeItem("user")
//                 localStorage.removeItem("token")
//                 window.location.replace("/login")
//             },
//             icon: (
//                 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
//                 </svg>

//             ),
//         },
//     ]

//     return (
//         <>
//             {sidebarOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
//             )}

//             <div
//                 className={`
//         fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//       `}
//             >
//                 <div className="flex flex-col h-full">
//                     <div className="p-6 border-b">
//                         <div className="flex items-center gap-3">
//                             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                                     />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h2 className="font-semibold text-gray-800">Tutor Finder</h2>
//                                 <p className="text-sm text-gray-500"></p>
//                             </div>
//                         </div>
//                     </div>

//                     <nav className="flex-1 p-4">
//                         <div className="space-y-2">
//                             {menuItems.map((item) => (
//                                 <button
//                                     key={item.key}
//                                     onClick={() => {
//                                         setActiveTab(item.key)
//                                         setSidebarOpen(false)
//                                         item.onClick && item.onClick()
//                                     }}
//                                     className={`
//                     w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors
//                     ${activeTab === item.key
//                                             ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
//                                             : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                                         }
//                   `}
//                                 >
//                                     {item.icon}
//                                     <span className="font-medium">{item.title}</span>
//                                 </button>
//                             ))}
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </>
//     )
// }
import logo from "../../../assets/logo/logo.png"

export const AdminSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
    const menuItems = [
        {
            title: "Dashboard",
            key: "dashboard",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2zm0 0V9a2 2 0 012-2h6m-2 12V7a2 2 0 012-2h2a2 2 0 012 2v4m-6 8a2 2 0 01-2-2v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2z"
                    />
                </svg>
            ),
        },
        {
            title: "User List",
            key: "users",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                </svg>
            ),
        },
        {
            title: "Tutor List",
            key: "tutors",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                </svg>
            ),
        },
        {
            title: "Review List",
            key: "reviews",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            ),
        },
    ]

    return (
        <>
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            <div
                className={`
        fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
            >
                <div className="flex flex-col h-full">
                    {/* Enhanced Header with Logo */}
                    <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img 
                                    src={logo} 
                                    alt="Tutor Finder" 
                                    className="w-10 h-10 object-contain"
                                />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-800 text-lg">Tutor Finder</h2>
                                <p className="text-sm text-gray-500">Admin Panel</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 p-4">
                        <div className="space-y-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => {
                                        setActiveTab(item.key)
                                        setSidebarOpen(false)
                                    }}
                                    className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group
                    ${activeTab === item.key
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                                            : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-gray-900 hover:shadow-md"
                                        }
                  `}
                                >
                                    <div className={`
                    transition-transform duration-200
                    ${activeTab === item.key ? "scale-110" : "group-hover:scale-110"}
                  `}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.title}</span>
                                    
                                    {/* Active indicator */}
                                    {activeTab === item.key && (
                                        <div className="ml-auto">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t bg-gray-50">
                        <div className="text-center">
                            <p className="text-xs text-gray-500">TutorFinder Dashboard</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}