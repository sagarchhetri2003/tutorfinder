// import React, { useState } from "react";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { Search } from "lucide-react";

// const Help = () => {
//   const [activeTab, setActiveTab] = useState("student");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [expandedTopic, setExpandedTopic] = useState(null); // Track which topic is expanded

//   const helpTopics = {
//     student: [
//       {
//         title: "How to find a tutor?",
//         description: "Use the subject and location filters on the homepage to find tutors that match your academic needs."
//       },
//       {
//         title: "How to contact a tutor?",
//         description: "Visit the tutor’s profile and click on the 'Contact Me' button to send them a message."
//       },
//       {
//         title: "How to book a lesson?",
//         description: "Click 'Book Me' on a tutor’s profile, choose your preferred date/time and confirm the booking."
//       },
//       {
//         title: "How to leave a review?",
//         description: "After completing a session, go to the tutor’s profile and click 'Leave a Review' to share your feedback."
//       },
//       {
//         title: "How to cancel a session?",
//         description: "You can cancel your session from your dashboard. Ensure it’s at least 24 hours in advance."
//       },
//       {
//         title: "How to change my subject preference?",
//         description: "Go to your profile settings and update your preferred subjects for more accurate tutor matches."
//       }
//     ],
//     tutor: [
//       {
//         title: "How to add a course?",
//         description: "Navigate to your tutor dashboard and click 'Add Course' to list your subject and lesson details."
//       },
//       {
//         title: "How to manage student requests?",
//         description: "All student inquiries appear in your dashboard. Accept or reject them based on your availability."
//       },
//       {
//         title: "How to receive payments?",
//         description: "Once a session is completed, payments are processed to your linked wallet or bank account."
//       },
//       {
//         title: "How to respond to reviews?",
//         description: "You can reply to any student review publicly from the Reviews tab on your profile."
//       },
//       {
//         title: "How to delete my account?",
//         description: "Head to settings and scroll to 'Delete Account'. You’ll be asked to confirm before removal."
//       },
//       {
//         title: "How to update availability?",
//         description: "In your tutor dashboard, go to 'Availability' and set the days and times you're available to teach."
//       }
//     ]
//   };

//   const filteredTopics = helpTopics[activeTab].filter((topic) =>
//     topic.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleToggle = (title) => {
//     setExpandedTopic(prev => (prev === title ? null : title));
//   };

//   return (
//     <div
//       className={`min-h-screen w-full transition-all duration-500 ${
//         activeTab === "student"
//           ? "bg-gradient-to-b from-[#FFE6E6] to-white"
//           : "bg-gradient-to-b from-blue-100 to-white"
//       }`}
//     >
//       <LoggedInNavbar activePage="help" />

//       <div className="max-w-5xl mx-auto px-4 pt-24 pb-20">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           How can we help you?
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Search common questions, instructions, or tips for using the platform.
//         </p>

//         {/* Search */}
//         <div className="relative max-w-xl mx-auto mb-6">
//           <Search className="absolute left-4 top-3.5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search help articles..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-coral-400 transition"
//           />
//         </div>

//         {/* Toggle Buttons */}
//         <div className="flex justify-center gap-4 mb-10">
//           <button
//             className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm ${
//               activeTab === "student"
//                 ? "bg-coral-100 text-black"
//                 : "bg-white text-gray-600 border"
//             }`}
//             onClick={() => {
//               setActiveTab("student");
//               setExpandedTopic(null);
//             }}
//           >
//             Students
//           </button>
//           <button
//             className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm ${
//               activeTab === "tutor"
//                 ? "bg-blue-500 text-white"
//                 : "bg-white text-gray-600 border"
//             }`}
//             onClick={() => {
//               setActiveTab("tutor");
//               setExpandedTopic(null);
//             }}
//           >
//             Tutors
//           </button>
//         </div>

//         {/* Help Topics */}
//         <div className="max-w-2xl mx-auto space-y-4">
//           {filteredTopics.length > 0 ? (
//             filteredTopics.map((topic, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleToggle(topic.title)}
//                 className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg border border-gray-100 transition space-y-1 cursor-pointer"
//               >
//                <h4 className="text-gray-800 font-semibold flex items-center gap-2">
//   <Search className="w-4 h-4 text-coral-500" />
//   {topic.title}
// </h4>

//                 {expandedTopic === topic.title && (
//                   <p className="text-gray-700 text-sm">{topic.description}</p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">
//               No help topics found for "{searchQuery}"
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Help;


import React, { useState } from "react";
import { Search, ChevronDown, ChevronRight, BookOpen, Users, HelpCircle, MessageCircle, Star, Settings, Calendar, CreditCard, Trash2, Clock } from "lucide-react";

const Help = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopic, setExpandedTopic] = useState(null);

  const helpTopics = {
    student: [
      {
        title: "How to find a tutor?",
        description: "Use the subject and location filters on the homepage to find tutors that match your academic needs.",
        icon: Search,
        category: "Getting Started"
      },
      {
        title: "How to contact a tutor?",
        description: "Visit the tutor's profile and click on the 'Contact Me' button to send them a message.",
        icon: MessageCircle,
        category: "Communication"
      },
      {
        title: "How to book a lesson?",
        description: "Click 'Book Me' on a tutor's profile, choose your preferred date/time and confirm the booking.",
        icon: Calendar,
        category: "Booking"
      },
      {
        title: "How to leave a review?",
        description: "After completing a session, go to the tutor's profile and click 'Leave a Review' to share your feedback.",
        icon: Star,
        category: "Reviews"
      },
      {
        title: "How to cancel a session?",
        description: "You can cancel your session from your dashboard. Ensure it's at least 24 hours in advance.",
        icon: Clock,
        category: "Booking"
      },
      {
        title: "How to change my subject preference?",
        description: "Go to your profile settings and update your preferred subjects for more accurate tutor matches.",
        icon: Settings,
        category: "Account"
      }
    ],
    tutor: [
      {
        title: "How to add a course?",
        description: "Navigate to your tutor dashboard and click 'Add Course' to list your subject and lesson details.",
        icon: BookOpen,
        category: "Course Management"
      },
      {
        title: "How to manage student requests?",
        description: "All student inquiries appear in your dashboard. Accept or reject them based on your availability.",
        icon: Users,
        category: "Student Management"
      },
      {
        title: "How to receive payments?",
        description: "Once a session is completed, payments are processed to your linked wallet or bank account.",
        icon: CreditCard,
        category: "Payments"
      },
      {
        title: "How to respond to reviews?",
        description: "You can reply to any student review publicly from the Reviews tab on your profile.",
        icon: MessageCircle,
        category: "Reviews"
      },
      {
        title: "How to delete my account?",
        description: "Head to settings and scroll to 'Delete Account'. You'll be asked to confirm before removal.",
        icon: Trash2,
        category: "Account"
      },
      {
        title: "How to update availability?",
        description: "In your tutor dashboard, go to 'Availability' and set the days and times you're available to teach.",
        icon: Calendar,
        category: "Scheduling"
      }
    ]
  };

  const filteredTopics = helpTopics[activeTab].filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (title) => {
    setExpandedTopic(prev => (prev === title ? null : title));
  };

  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = [];
    }
    acc[topic.category].push(topic);
    return acc;
  }, {});

  const getTabGradient = () => {
    return activeTab === "student" 
      ? "from-slate-50 via-blue-50 to-indigo-50" 
      : "from-blue-50 via-indigo-50 to-purple-50";
  };

  const getTabColor = () => {
    return activeTab === "student" 
      ? "from-blue-500 to-indigo-500" 
      : "from-indigo-500 to-purple-500";
  };

  const getAccentColor = () => {
    return activeTab === "student" 
      ? "from-blue-400 to-indigo-400" 
      : "from-indigo-400 to-purple-400";
  };

  return (
    <div className={`min-h-screen w-full transition-all duration-700 bg-gradient-to-br ${getTabGradient()}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className={`bg-gradient-to-r ${getTabColor()} p-4 rounded-full shadow-lg`}>
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${getTabColor()} bg-clip-text text-transparent`}>
              How can we help you?
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Search common questions, instructions, or tips for using the platform
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className={`absolute inset-0 bg-gradient-to-r ${getTabColor()} rounded-2xl blur opacity-15`}></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl border border-white/50 shadow-xl">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-transparent focus:outline-none text-lg placeholder-slate-400"
                />
              </div>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-2 p-2 bg-white/70 backdrop-blur-lg rounded-2xl max-w-md mx-auto border border-white/50">
              <button
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-500 ${
                  activeTab === "student"
                    ? `bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105`
                    : "text-slate-600 hover:bg-white/50"
                }`}
                onClick={() => {
                  setActiveTab("student");
                  setExpandedTopic(null);
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Students
                </div>
              </button>
              <button
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-500 ${
                  activeTab === "tutor"
                    ? `bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg transform scale-105`
                    : "text-slate-600 hover:bg-white/50"
                }`}
                onClick={() => {
                  setActiveTab("tutor");
                  setExpandedTopic(null);
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Tutors
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Content */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex items-center gap-4">
              <div className={`bg-gradient-to-r ${getTabColor()} p-3 rounded-xl`}>
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{helpTopics[activeTab].length}</p>
                <p className="text-slate-600">Help Articles</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-xl">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{filteredTopics.length}</p>
                <p className="text-slate-600">Search Results</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex items-center gap-4">
              <div className={`bg-gradient-to-r ${getAccentColor()} p-3 rounded-xl`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{Object.keys(groupedTopics).length}</p>
                <p className="text-slate-600">Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Help Topics */}
        {Object.keys(groupedTopics).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedTopics).map(([category, topics]) => (
              <div key={category} className="space-y-4">
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${getTabColor()} bg-clip-text text-transparent flex items-center gap-3`}>
                  <div className={`w-2 h-8 bg-gradient-to-b ${getTabColor()} rounded-full`}></div>
                  {category}
                </h2>
                
                <div className="grid gap-4">
                  {topics.map((topic, index) => {
                    const IconComponent = topic.icon;
                    const isExpanded = expandedTopic === topic.title;
                    
                    return (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-lg rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                      >
                        <div
                          onClick={() => handleToggle(topic.title)}
                          className="p-6 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`bg-gradient-to-r ${getTabColor()} p-3 rounded-xl group-hover:shadow-md transition-shadow duration-300`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className={`text-xl font-semibold text-slate-800 group-hover:bg-gradient-to-r group-hover:${getTabColor()} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                                  {topic.title}
                                </h3>
                                <span className="text-sm text-slate-500">{topic.category}</span>
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronDown className="w-6 h-6 text-slate-400 transition-transform duration-300" />
                              ) : (
                                <ChevronRight className="w-6 h-6 text-slate-400 transition-transform duration-300 group-hover:text-slate-600" />
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {isExpanded && (
                          <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                            <div className={`bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-5 border-l-4 ${activeTab === "student" ? "border-blue-400" : "border-indigo-400"}`}>
                              <p className="text-slate-700 leading-relaxed text-[15px]">
                                {topic.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No Results Found</h3>
            <p className="text-slate-600">
              No help topics found for "<span className="font-medium">{searchQuery}</span>"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className={`mt-4 px-6 py-2 bg-gradient-to-r ${getTabColor()} text-white rounded-xl hover:shadow-lg transition-all duration-300`}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;