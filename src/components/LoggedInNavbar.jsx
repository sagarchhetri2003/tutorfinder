


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


import { useState } from "react";
import { User, Heart, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const LoggedInNavbar = ({ activePage }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user"); // or your auth token
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="TutorFinder Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
          {/* ... Search Input if needed */}
        </div>

        <div className="flex items-center space-x-6 relative">
          <Heart onClick={() => navigate("/favorites")} className="w-6 h-6 cursor-pointer" />
          <HelpCircle onClick={() => navigate("/help")} className="w-6 h-6 cursor-pointer" />

          {/* Profile Dropdown */}
          <div className="relative">
            <User
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-50">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-coral-100 w-full text-left"
                  onClick={() => {
                    setShowMenu(false);
                    navigate("/userprofile");
                  }}
                >
                  My Profile
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-coral-100 w-full text-left"
                  onClick={() => {
                    setShowMenu(false);
                    if (window.confirm("Are you sure you want to logout?")) {
                      handleLogout();
                    }
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoggedInNavbar;
