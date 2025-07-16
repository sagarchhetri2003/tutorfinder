


// import { User, Heart, HelpCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import React, { useState } from "react";



// const LoggedInNavbar = ({ activePage }) => {
//   const navigate = useNavigate();

//   const iconClasses = (page) =>
//     `w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110 ${
//       activePage === page ? "text-coral-500" : "text-gray-700 hover:text-coral-500"
//     }`;

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Left: Logo + Search */}
//         <div className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="TutorFinder Logo"
//             className="h-10 cursor-pointer"
//             onClick={() => navigate("/")}
//           />

//           <div className="hidden md:flex">
//             <div className="bg-gray-50 px-4 py-2 rounded-full shadow-sm flex items-center w-96">
//               <input
//                 type="text"
//                 placeholder="What would you like to learn?"
//                 className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
//               />
//               <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full text-white ml-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111.414-1.414l4.35 4.35z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right: Become a Tutor, Icons */}
//         <div className="flex items-center space-x-6">
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition"
//             onClick={() => navigate("/become-a-tutor")}
//           >
//             Become a Tutor
//           </button>

//           <Heart
//             className={iconClasses("favorites")}
//             onClick={() => navigate("/favorites")}
//           />
//           <HelpCircle
//             className={iconClasses("help")}
//             onClick={() => navigate("/help")}
//           />
//           <User
//             className={iconClasses("profile")}
//             onClick={() => navigate("/profile")}
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default LoggedInNavbar;




// import { User, Heart, HelpCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import React, { useState } from "react";

// const LoggedInNavbar = ({ activePage }) => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const iconClasses = (page) =>
//     `w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110 ${
//       activePage === page ? "text-coral-500" : "text-gray-700 hover:text-coral-500"
//     }`;

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
//       setSearchTerm(""); // clear input after search
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Left: Logo + Search */}
//         <div className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="TutorFinder Logo"
//             className="h-10 cursor-pointer"
//             onClick={() => navigate("/")}
//           />

//           <div className="hidden md:flex">
//             <div className="bg-gray-50 px-4 py-2 rounded-full shadow-sm flex items-center w-96">
//               <input
//                 type="text"
//                 placeholder="What would you like to learn?"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
//               />
//               <button
//                 onClick={handleSearch}
//                 className="bg-red-400 hover:bg-red-500 p-2 rounded-full text-white ml-2"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111.414-1.414l4.35 4.35z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right: Become a Tutor, Icons */}
//         <div className="flex items-center space-x-6">
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition"
//             onClick={() => navigate("/become-a-tutor")}
//           >
//             Become a Tutor
//           </button>

//           <Heart
//             className={iconClasses("favorites")}
//             onClick={() => navigate("/favorites")}
//           />
//           <HelpCircle
//             className={iconClasses("help")}
//             onClick={() => navigate("/help")}
//           />
//           <User
//             className={iconClasses("profile")}
//             onClick={() => navigate("/profile")}
//           />
//         </div>
//       </div>
//     </header>
//   );
// };


// export default LoggedInNavbar;



// import { Heart, HelpCircle, User, BookOpen, LogOut, UserCircle, List, Calendar, ChevronDown } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import { useAuth } from "../context/AuthContext";

// const LoggedInNavbar = ({ activePage, hideTutorButton }) => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("user");
//       navigate("/");
//     }
//   };

//   const handleLogoClick = () => {
//     console.log("Logo clicked");
//     if (user?.role === "tutor" && !user?.isApproved) {
//       navigate("/landing-page");
//     } else if (user?.role === "tutor" && user?.isApproved) {
//       navigate("/tutorlogin");
//     } else {
//       navigate("/landing-page");
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (user?.role === "admin") return null;
//   }, [user]);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (showMenu && !event.target.closest('.profile-dropdown')) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [showMenu]);

//   return (
//     <header className={`
//       fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
//       ${scrolled 
//         ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
//         : 'bg-white/80 backdrop-blur-sm shadow-sm'
//       }
//     `}>
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center gap-4">
//             <div 
//               onClick={handleLogoClick}
//               className="flex items-center space-x-3 cursor-pointer group"
//             >
//               <div className="relative">
//                 <img
//                   src={logo}
//                   alt="TutorFinder Logo"
//                   className="h-12 transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-6">
//             {/* Navigation Links for Tutors */}
//             {user?.role === "tutor" && (
//               <div className="hidden md:flex items-center space-x-6">
//                 <Link 
//                   to="/my-contact-list"
//                   className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
//                 >
//                   <List className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
//                   <span className="font-medium">Contact List</span>
//                 </Link>
//                 <Link 
//                   to="/my-booking-list"
//                   className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
//                 >
//                   <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
//                   <span className="font-medium">Booking List</span>
//                 </Link>
//               </div>
//             )}

//             {/* Become a Tutor Button for Users */}
//             {user?.role === "user" && !hideTutorButton && (
//               <button
//                 onClick={() => navigate("/tutorlogin")}
//                 className="
//                   hidden sm:flex items-center space-x-2 px-4 py-2 
//                   bg-gradient-to-r from-orange-500 to-red-500 
//                   text-white rounded-full font-medium text-sm
//                   hover:from-orange-600 hover:to-red-600
//                   transform hover:scale-105 transition-all duration-300
//                   shadow-md hover:shadow-lg
//                 "
//               >
//                 <BookOpen className="h-4 w-4" />
//                 <span>Become a Tutor</span>
//               </button>
//             )}

//             {/* Action Icons */}
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => navigate("/favorites")}
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
//                 title="Favorites"
//               >
//                 <Heart className="h-5 w-5 text-gray-600 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
//               </button>
              
//               <button 
//                 onClick={() => navigate("/help")}
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
//                 title="Help"
//               >
//                 <HelpCircle className="h-5 w-5 text-gray-600 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
//               </button>
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative profile-dropdown">
//               <button
//                 onClick={() => setShowMenu(prev => !prev)}
//                 className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
//               >
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                   <User className="h-4 w-4 text-white" />
//                 </div>
//                 <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`} />
//               </button>

//               {/* Dropdown Menu */}
//               {showMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
//                   <div className="px-4 py-3 border-b border-gray-100">
//                     <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
//                     <p className="text-xs text-gray-500">{user?.email || 'user@example.com'}</p>
//                   </div>
                  
//                   <button
//                     className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//                     onClick={() => {
//                       setShowMenu(false);
//                       navigate("/userprofile");
//                     }}
//                   >
//                     <UserCircle className="h-4 w-4 text-gray-500" />
//                     <span>My Profile</span>
//                   </button>
                  
//                   <button
//                     className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
//                     onClick={() => {
//                       setShowMenu(false);
//                       handleLogout();
//                     }}
//                   >
//                     <LogOut className="h-4 w-4 text-red-500" />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu for Tutor Links */}
//             {user?.role === "tutor" && (
//               <div className="md:hidden">
//                 <button 
//                   onClick={() => setShowMenu(prev => !prev)}
//                   className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <List className="h-5 w-5" />
//                 </button>
                
//                 {showMenu && (
//                   <div className="absolute right-4 top-16 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 md:hidden">
//                     <Link 
//                       to="/my-contact-list"
//                       className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//                       onClick={() => setShowMenu(false)}
//                     >
//                       <List className="h-4 w-4 text-gray-500" />
//                       <span>Contact List</span>
//                     </Link>
                    
//                     <Link 
//                       to="/my-booking-list"
//                       className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//                       onClick={() => setShowMenu(false)}
//                     >
//                       <Calendar className="h-4 w-4 text-gray-500" />
//                       <span>Booking List</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default LoggedInNavbar;


import { Heart, HelpCircle, User, BookOpen, LogOut, UserCircle, List, Calendar, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useAuth } from "../context/AuthContext";
import { MessageCircle } from "lucide-react"; 

const LoggedInNavbar = ({ activePage, hideTutorButton }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  const handleLogoClick = () => {
    if (user?.role === "tutor" && !user?.isApproved) {
      navigate("/landing-page");
    } else if (user?.role === "tutor" && user?.isApproved) {
      navigate("/tutorlogin");
    } else {
      navigate("/landing-page");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (user?.role === "admin") return null;
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest(".profile-dropdown")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
        }
      `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <img
                  src={logo}
                  alt="TutorFinder Logo"
                  className="h-12 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Tutor Links */}
            {user?.role === "tutor" && (
  <div className="hidden md:flex items-center space-x-6">
    <Link to="/my-contact-list" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
      <List className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="font-medium">Contact List</span>
    </Link>
    <Link to="/my-booking-list" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
      <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="font-medium">Booking List</span>
    </Link>
    <Link to="/my-reviews" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
  <span className="font-medium">Reviews</span>
</Link>
  </div>
)}


            {/* Become a Tutor (only for users) */}
            {user?.role === "user" && !hideTutorButton && (
              <button
                onClick={() => navigate("/tutorlogin")}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium text-sm hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <BookOpen className="h-4 w-4" />
                <span>Become a Tutor</span>
              </button>
            )}

            {/* Favorites (only for non-tutors) */}
            {(!user || user?.role === "user") && (
              <button
                onClick={() => navigate("/favorites")}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                title="Favorites"
              >
                <Heart className="h-5 w-5 text-gray-600 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
              </button>
            )}

            {/* Help */}
            <button
              onClick={() => navigate("/help")}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
              title="Help"
            >
              <HelpCircle className="h-5 w-5 text-gray-600 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative profile-dropdown">
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${showMenu ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name || "User"}</p>
                    <p className="text-xs text-gray-500">{user?.email || "user@example.com"}</p>
                  </div>
                  <button
                    className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/userprofile");
                    }}
                  >
                    <UserCircle className="h-4 w-4 text-gray-500" />
                    <span>My Profile</span>
                  </button>
                  <button
                    className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                    onClick={() => {
                      setShowMenu(false);
                      handleLogout();
                    }}
                  >
                    <LogOut className="h-4 w-4 text-red-500" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu for Tutors */}
            {user?.role === "tutor" && (
              <div className="md:hidden">
                <button
                  onClick={() => setShowMenu((prev) => !prev)}
                  className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                >
                  <List className="h-5 w-5" />
                </button>

                {showMenu && (
                  <div className="absolute right-4 top-16 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 md:hidden">
                    <Link
                      to="/my-contact-list"
                      className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setShowMenu(false)}
                    >
                      <List className="h-4 w-4 text-gray-500" />
                      <span>Contact List</span>
                    </Link>
                    <Link
                      to="/my-booking-list"
                      className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setShowMenu(false)}
                    >
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Booking List</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoggedInNavbar;
