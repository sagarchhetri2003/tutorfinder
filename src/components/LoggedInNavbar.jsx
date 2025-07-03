

// import { User, Heart, HelpCircle } from "lucide-react";
// import logo from "../assets/logo/logo.png";

// const LoggedInNavbar = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Left: Logo + Search */}
//         <div className="flex items-center gap-4">
//           <img src={logo} alt="TutorFinder Logo" className="h-10" />

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

//         {/* Right: Become a Tutor, Heart, Help, Profile */}
//         <div className="flex items-center space-x-6">
//           <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition">
//             Become a Tutor
//           </button>
//           <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />
//           <HelpCircle className="w-5 h-5 text-gray-700 cursor-pointer" />
//           <User className="w-6 h-6 text-gray-700 cursor-pointer" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default LoggedInNavbar;


import { User, Heart, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const LoggedInNavbar = ({ activePage }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="TutorFinder Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="hidden md:flex">
            <div className="bg-gray-50 px-4 py-2 rounded-full shadow-sm flex items-center w-96">
              <input
                type="text"
                placeholder="What would you like to learn?"
                className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
              />
              <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full text-white ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111.414-1.414l4.35 4.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Become a Tutor, Heart, Help, Profile */}
        <div className="flex items-center space-x-6">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition"
            onClick={() => navigate("/become-a-tutor")}
          >
            Become a Tutor
          </button>

          <Heart
            className={`w-5 h-5 cursor-pointer transition ${
              activePage === "favorites"
                ? "text-coral-500"
                : "text-gray-700 hover:text-coral-500"
            }`}
            onClick={() => navigate("/favorites")}
          />

          <HelpCircle
            className={`w-5 h-5 cursor-pointer transition ${
              activePage === "help"
                ? "text-coral-500"
                : "text-gray-700 hover:text-coral-500"
            }`}
            onClick={() => navigate("/help")}
          />

          <User
            className={`w-6 h-6 cursor-pointer transition ${
              activePage === "profile"
                ? "text-coral-500"
                : "text-gray-700 hover:text-coral-500"
            }`}
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>
    </header>
  );
};

export default LoggedInNavbar;
