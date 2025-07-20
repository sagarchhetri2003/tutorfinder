// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { AdminSidebar } from "./components/AdminSidebar"
// import { TutorList } from "./TutorList"
// import { UsersList } from "./UsersList"
// import { ReviewList } from "./ReviewList"
// import { getAllTutorsApi, getAllUsersApi, getAllReviewsApi } from "../../apis/api"
// import logo from "../../assets/logo/logo.png"

// // Dashboard Component with Visualizations
// const Dashboard = ({ stats }) => {
//   const chartData = [
//     { name: 'Users', value: stats.totalUsers, color: '#3B82F6' },
//     { name: 'Tutors', value: stats.totalTutors, color: '#8B5CF6' },
//     { name: 'Reviews', value: stats.totalReviews, color: '#F59E0B' },
//     { name: 'Approved Tutors', value: stats.approvedTutors, color: '#10B981' }
//   ]

//   const total = chartData.reduce((sum, item) => sum + item.value, 0)

//   return (
//     <div className="space-y-8">
//       {/* Stats Overview */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//         <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-blue-100 text-sm font-medium">Total Users</p>
//               <p className="text-3xl font-bold transition-all duration-300 group-hover:text-4xl">{stats.totalUsers}</p>
//               <p className="text-blue-100 text-xs mt-1">Registered students</p>
//             </div>
//             <div className="w-12 h-12 bg-blue-400/30 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-3 h-1 bg-blue-400/30 rounded-full overflow-hidden">
//             <div className="h-full bg-white/50 rounded-full animate-pulse" style={{width: '70%'}}></div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-purple-100 text-sm font-medium">Total Tutors</p>
//               <p className="text-3xl font-bold transition-all duration-300 group-hover:text-4xl">{stats.totalTutors}</p>
//               <p className="text-purple-100 text-xs mt-1">All applications</p>
//             </div>
//             <div className="w-12 h-12 bg-purple-400/30 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-3 h-1 bg-purple-400/30 rounded-full overflow-hidden">
//             <div className="h-full bg-white/50 rounded-full animate-pulse" style={{width: '85%'}}></div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-amber-100 text-sm font-medium">Total Reviews</p>
//               <p className="text-3xl font-bold transition-all duration-300 group-hover:text-4xl">{stats.totalReviews}</p>
//               <p className="text-amber-100 text-xs mt-1">Student feedback</p>
//             </div>
//             <div className="w-12 h-12 bg-amber-400/30 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-3 h-1 bg-amber-400/30 rounded-full overflow-hidden">
//             <div className="h-full bg-white/50 rounded-full animate-pulse" style={{width: '60%'}}></div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-emerald-100 text-sm font-medium">Approved Tutors</p>
//               <p className="text-3xl font-bold transition-all duration-300 group-hover:text-4xl">{stats.approvedTutors}</p>
//               <p className="text-emerald-100 text-xs mt-1">Active teachers</p>
//             </div>
//             <div className="w-12 h-12 bg-emerald-400/30 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-3 h-1 bg-emerald-400/30 rounded-full overflow-hidden">
//             <div className="h-full bg-white/50 rounded-full animate-pulse" style={{width: '90%'}}></div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-red-100 text-sm font-medium">Pending Approval</p>
//               <p className="text-3xl font-bold transition-all duration-300 group-hover:text-4xl">{stats.pendingTutors}</p>
//               <p className="text-red-100 text-xs mt-1">Awaiting review</p>
//             </div>
//             <div className="w-12 h-12 bg-red-400/30 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-3 h-1 bg-red-400/30 rounded-full overflow-hidden">
//             <div className="h-full bg-white/50 rounded-full animate-pulse" style={{width: '30%'}}></div>
//           </div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Enhanced Bar Chart */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//             <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//             Platform Statistics
//           </h3>
//           <div className="space-y-4">
//             {chartData.map((item, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div 
//                     className="w-4 h-4 rounded-full" 
//                     style={{ backgroundColor: item.color }}
//                   ></div>
//                   <span className="font-medium text-gray-700">{item.name}</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-32 bg-gray-200 rounded-full h-2">
//                     <div 
//                       className="h-2 rounded-full transition-all duration-300"
//                       style={{ 
//                         backgroundColor: item.color,
//                         width: `${total > 0 ? (item.value / Math.max(...chartData.map(d => d.value))) * 100 : 0}%`
//                       }}
//                     ></div>
//                   </div>
//                   <span className="font-bold text-gray-900 w-8 text-right">{item.value}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Review Analytics */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//             <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.319 4.059a1 1 0 00.95.69h4.267c.969 0 1.371 1.24.588 1.81l-3.449 2.5a1 1 0 00-.363 1.118l1.319 4.059c.3.921-.755 1.688-1.538 1.118l-3.449-2.5a1 1 0 00-1.176 0l-3.449 2.5c-.783.57-1.838-.197-1.538-1.118l1.319-4.059a1 1 0 00-.363-1.118l-3.449-2.5c-.783-.57-.38-1.81.588-1.81h4.267a1 1 0 00.95-.69l1.319-4.059z" />
//             </svg>
//             Review Analytics
//           </h3>
//           <div className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-amber-700">{stats.totalReviews}</div>
//                   <div className="text-sm text-amber-600">Total Reviews</div>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-emerald-700">{stats.recentReviews}</div>
//                   <div className="text-sm text-emerald-600">This Week</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-50 rounded-xl p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-600">Review Activity</span>
//                 <span className="text-xs text-gray-500">Last 7 days</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-300"
//                   style={{ width: `${stats.totalReviews > 0 ? Math.min((stats.recentReviews / stats.totalReviews) * 100, 100) : 0}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("dashboard")
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [logoutDialog, setLogoutDialog] = useState(false)
//   const [showNotifications, setShowNotifications] = useState(false)
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalTutors: 0,
//     totalReviews: 0,
//     approvedTutors: 0,
//     pendingTutors: 0,
//     recentReviews: 0
//   })
//   const [notifications, setNotifications] = useState([])
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetchStats()
//   }, [])

//   const fetchStats = async () => {
//     try {
//       const [usersRes, tutorsRes, reviewsRes] = await Promise.all([
//         getAllUsersApi(),
//         getAllTutorsApi(),
//         getAllReviewsApi()
//       ])
      
//       const users = usersRes.data.users || []
//       const tutors = tutorsRes.data.tutors || []
//       const reviews = reviewsRes.data.data || reviewsRes.data.reviews || []
      
//       // Calculate recent reviews (last 7 days)
//       const weekAgo = new Date()
//       weekAgo.setDate(weekAgo.getDate() - 7)
//       const recentReviews = reviews.filter(review => 
//         new Date(review.createdAt) > weekAgo
//       ).length

//       setStats({
//         totalUsers: users.length,
//         totalTutors: tutors.length,
//         totalReviews: reviews.length,
//         approvedTutors: tutors.filter(t => t.isApproved).length,
//         pendingTutors: tutors.filter(t => !t.isApproved).length,
//         recentReviews: recentReviews
//       })

//       // Generate notifications
//       const newNotifications = []
      
//       if (tutors.filter(t => !t.isApproved).length > 0) {
//         newNotifications.push({
//           id: 1,
//           type: 'tutor',
//           message: `${tutors.filter(t => !t.isApproved).length} tutor application(s) pending approval`,
//           time: 'Just now',
//           icon: '👨‍🏫'
//         })
//       }
      
//       if (recentReviews > 0) {
//         newNotifications.push({
//           id: 2,
//           type: 'review',
//           message: `${recentReviews} new review(s) received this week`,
//           time: 'This week',
//           icon: '⭐'
//         })
//       }
      
//       if (users.length > 0) {
//         const recentUsers = users.filter(user => {
//           const userDate = new Date(user.createdAt)
//           return userDate > weekAgo
//         }).length
        
//         if (recentUsers > 0) {
//           newNotifications.push({
//             id: 3,
//             type: 'user',
//             message: `${recentUsers} new user(s) registered this week`,
//             time: 'This week',
//             icon: '👤'
//           })
//         }
//       }

//       setNotifications(newNotifications)
//     } catch (error) {
//       console.error("Failed to fetch stats:", error)
//     }
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("token")
//     localStorage.removeItem("user")
//     navigate("/login")
//   }

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return <Dashboard stats={stats} />
//       case "users":
//         return <UsersList />
//       case "tutors":
//         return <TutorList />
//       case "reviews":  
//         return <ReviewList />
//       default:
//         return <Dashboard stats={stats} />
//     }
//   }

//   const getPageTitle = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return "Dashboard Overview"
//       case "users":
//         return "User Management"
//       case "tutors":
//         return "Tutor Management"
//       case "reviews":
//         return "Review Management"
//       default:
//         return "Dashboard"
//     }
//   }

//   const totalNotifications = notifications.length

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <AdminSidebar
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         onLogout={() => setLogoutDialog(true)}
//       />
      
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Enhanced Header */}
//         <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200/50 px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setSidebarOpen(!sidebarOpen)} 
//                 className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
              
//               <div className="flex items-center gap-3">
//                 <img src={logo} alt="TutorFinder" className="h-10 w-auto" />
//                 <div className="hidden md:block">
//                   <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                     {getPageTitle()}
//                   </h1>
//                   <p className="text-sm text-gray-500">Admin Panel</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               {/* Enhanced Notifications with Bell Icon */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors group"
//                 >
//                   <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21H3l6-6h12l6 6z" />
//                   </svg>
//                   {totalNotifications > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">
//                       {totalNotifications}
//                     </span>
//                   )}
//                 </button>

//                 {/* Notifications Dropdown */}
//                 {showNotifications && (
//                   <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
//                     <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
//                       <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
//                         🔔 Notifications
//                       </h3>
//                       <p className="text-sm text-gray-500">{totalNotifications} new notifications</p>
//                     </div>
//                     <div className="max-h-96 overflow-y-auto">
//                       {notifications.length > 0 ? (
//                         notifications.map((notification) => (
//                           <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                             <div className="flex items-start gap-3">
//                               <span className="text-2xl">{notification.icon}</span>
//                               <div className="flex-1">
//                                 <p className="text-sm font-medium text-gray-800">{notification.message}</p>
//                                 <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       ) : (
//                         <div className="p-8 text-center">
//                           <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21H3l6-6h12l6 6z" />
//                             </svg>
//                           </div>
//                           <p className="text-gray-500">No new notifications</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={() => setLogoutDialog(true)}
//                 className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                 </svg>
//                 <span className="hidden md:inline">Logout</span>
//               </button>
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-auto p-6">
//           {renderContent()}
//         </main>
//       </div>

//       {/* Click outside to close notifications */}
//       {showNotifications && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => setShowNotifications(false)}
//         ></div>
//       )}

//       {/* Logout Confirmation Dialog */}
//       {logoutDialog && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
//             <div className="p-6">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//                   <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900">Confirm Logout</h3>
//                   <p className="text-sm text-gray-500">Are you sure you want to logout?</p>
//                 </div>
//               </div>
              
//               <p className="text-gray-600 mb-6">
//                 You will be signed out of your admin account and redirected to the login page.
//               </p>
              
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setLogoutDialog(false)}
//                   className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-medium"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AdminSidebar } from "./components/AdminSidebar"
import { TutorList } from "./TutorList"
import { UsersList } from "./UsersList"
import { ReviewList } from "./ReviewList"
import { getAllTutorsApi, getAllUsersApi, getAllReviewsApi } from "../../apis/api"
import logo from "../../assets/logo/logo.png"
import image from "../../assets/icons/image.png"

// Dashboard Component with Visualizations
const Dashboard = ({ stats }) => {
  const chartData = [
    { name: 'Users', value: stats.totalUsers, color: '#3B82F6' },
    { name: 'Tutors', value: stats.totalTutors, color: '#8B5CF6' },
    { name: 'Reviews', value: stats.totalReviews, color: '#F59E0B' },
    { name: 'Approved Tutors', value: stats.approvedTutors, color: '#10B981' }
  ]

  const total = chartData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
              <p className="text-blue-100 text-xs mt-1">Registered students</p>
            </div>
            <div className="w-12 h-12 bg-blue-400/30 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Tutors</p>
              <p className="text-3xl font-bold">{stats.totalTutors}</p>
              <p className="text-purple-100 text-xs mt-1">All applications</p>
            </div>
            <div className="w-12 h-12 bg-purple-400/30 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm font-medium">Total Reviews</p>
              <p className="text-3xl font-bold">{stats.totalReviews}</p>
              <p className="text-amber-100 text-xs mt-1">Student feedback</p>
            </div>
            <div className="w-12 h-12 bg-amber-400/30 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.319 4.059a1 1 0 00.95.69h4.267c.969 0 1.371 1.24.588 1.81l-3.449 2.5a1 1 0 00-.363 1.118l1.319 4.059c.3.921-.755 1.688-1.538 1.118l-3.449-2.5a1 1 0 00-1.176 0l-3.449 2.5c-.783.57-1.838-.197-1.538-1.118l1.319-4.059a1 1 0 00-.363-1.118l-3.449-2.5c-.783-.57-.38-1.81.588-1.81h4.267a1 1 0 00.95-.69l1.319-4.059z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Approved Tutors</p>
              <p className="text-3xl font-bold">{stats.approvedTutors}</p>
              <p className="text-emerald-100 text-xs mt-1">Active teachers</p>
            </div>
            <div className="w-12 h-12 bg-emerald-400/30 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm font-medium">Pending Approval</p>
              <p className="text-3xl font-bold">{stats.pendingTutors}</p>
              <p className="text-red-100 text-xs mt-1">Awaiting review</p>
            </div>
            <div className="w-12 h-12 bg-red-400/30 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Bar Chart */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Platform Statistics
          </h3>
          <div className="space-y-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: item.color,
                        width: `${total > 0 ? (item.value / Math.max(...chartData.map(d => d.value))) * 100 : 0}%`
                      }}
                    ></div>
                  </div>
                  <span className="font-bold text-gray-900 w-8 text-right">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Analytics */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.319 4.059a1 1 0 00.95.69h4.267c.969 0 1.371 1.24.588 1.81l-3.449 2.5a1 1 0 00-.363 1.118l1.319 4.059c.3.921-.755 1.688-1.538 1.118l-3.449-2.5a1 1 0 00-1.176 0l-3.449 2.5c-.783.57-1.838-.197-1.538-1.118l1.319-4.059a1 1 0 00-.363-1.118l-3.449-2.5c-.783-.57-.38-1.81.588-1.81h4.267a1 1 0 00.95-.69l1.319-4.059z" />
            </svg>
            Review Analytics
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">{stats.totalReviews}</div>
                  <div className="text-sm text-amber-600">Total Reviews</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700">{stats.recentReviews}</div>
                  <div className="text-sm text-emerald-600">This Week</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Review Activity</span>
                <span className="text-xs text-gray-500">Last 7 days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${stats.totalReviews > 0 ? Math.min((stats.recentReviews / stats.totalReviews) * 100, 100) : 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [logoutDialog, setLogoutDialog] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTutors: 0,
    totalReviews: 0,
    approvedTutors: 0,
    pendingTutors: 0,
    recentReviews: 0
  })
  const [notifications, setNotifications] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [usersRes, tutorsRes, reviewsRes] = await Promise.all([
        getAllUsersApi(),
        getAllTutorsApi(),
        getAllReviewsApi()
      ])
      
      const users = usersRes.data.users || []
      const tutors = tutorsRes.data.tutors || []
      const reviews = reviewsRes.data.data || reviewsRes.data.reviews || []
      
      // Calculate recent reviews (last 7 days)
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      const recentReviews = reviews.filter(review => 
        new Date(review.createdAt) > weekAgo
      ).length

      setStats({
        totalUsers: users.length,
        totalTutors: tutors.length,
        totalReviews: reviews.length,
        approvedTutors: tutors.filter(t => t.isApproved).length,
        pendingTutors: tutors.filter(t => !t.isApproved).length,
        recentReviews: recentReviews
      })

      // Generate notifications
      const newNotifications = []
      
      if (tutors.filter(t => !t.isApproved).length > 0) {
        newNotifications.push({
          id: 1,
          type: 'tutor',
          message: `${tutors.filter(t => !t.isApproved).length} tutor application(s) pending approval`,
          time: 'Just now',
          icon: '👨‍🏫'
        })
      }
      
      if (recentReviews > 0) {
        newNotifications.push({
          id: 2,
          type: 'review',
          message: `${recentReviews} new review(s) received this week`,
          time: 'This week',
          icon: '⭐'
        })
      }
      
      if (users.length > 0) {
        const recentUsers = users.filter(user => {
          const userDate = new Date(user.createdAt)
          return userDate > weekAgo
        }).length
        
        if (recentUsers > 0) {
          newNotifications.push({
            id: 3,
            type: 'user',
            message: `${recentUsers} new user(s) registered this week`,
            time: 'This week',
            icon: '👤'
          })
        }
      }

      setNotifications(newNotifications)
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard stats={stats} />
      case "users":
        return <UsersList />
      case "tutors":
        return <TutorList />
      case "reviews":  
        return <ReviewList />
      default:
        return <Dashboard stats={stats} />
    }
  }

  const getPageTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard Overview"
      case "users":
        return "User Management"
      case "tutors":
        return "Tutor Management"
      case "reviews":
        return "Review Management"
      default:
        return "Dashboard"
    }
  }

  const totalNotifications = notifications.length

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={() => setLogoutDialog(true)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Enhanced Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)} 
                className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3">
                <img src={logo} alt="TutorFinder" className="h-10 w-auto" />
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {getPageTitle()}
                  </h1>
                  <p className="text-sm text-gray-500">Admin Panel</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Enhanced Notifications with Bell Icon */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                      {/* Custom Image Icon */}
                      <img
          src={image}
          alt="Notification Bell"
          className="w-6 h-6 object-contain"
        />

                  {totalNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {totalNotifications}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999]">
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        🔔 Notifications
                      </h3>
                      <p className="text-sm text-gray-500">{totalNotifications} new notifications</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{notification.icon}</span>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5a2 2 0 114 0c0 1.098-.5 6-2 7h-4c-1.5-1-2-5.902-2-7z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v1a3 3 0 006 0v-1M15 17H9" />
                            </svg>
                          </div>
                          <p className="text-gray-500">No new notifications</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Logout Button */}
              <button
                onClick={() => setLogoutDialog(true)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Click outside to close notifications */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-[9998]" 
          onClick={() => setShowNotifications(false)}
        ></div>
      )}

      {/* Logout Confirmation Dialog */}
      {logoutDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Confirm Logout</h3>
                  <p className="text-sm text-gray-500">Are you sure you want to logout?</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                You will be signed out of your admin account and redirected to the login page.
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setLogoutDialog(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}