

// import { useEffect, useState } from "react";
// import { HelpCircle } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo/logo.png";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Only hide JSX after hooks are declared
//   const hideOnRoutes = ["/tutorlogin"];
//   if (hideOnRoutes.includes(location.pathname)) return null;

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow border-b border-gray-100" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-3">
//         <nav className="flex items-center justify-between">
//           {/* Logo + Search */}
//           <div className="flex items-center gap-4">
//             <img src={logo} alt="Logo" className="h-10" />

//             <div className="hidden md:flex">
//               <div className="bg-gray-50 px-4 py-2 rounded-full shadow-sm flex items-center w-96">
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="What would you like to learn?"
//                   className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
//                 />
//                 <button className="bg-coral-500 hover:bg-coral-600 p-2 rounded-full text-white ml-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111.414-1.414l4.35 4.35z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right: Help, Become a Tutor, Login */}
//           <div className="flex items-center gap-4">
//             <HelpCircle className="text-gray-600 hover:text-coral-500 cursor-pointer" />
//             <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full font-medium transition">
//               Become a Tutor
//             </button>
//             <Link
//               to="/login"
//               className="text-gray-800 font-semibold hover:text-coral-500 transition"
//             >
//               Log In
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { useEffect, useState } from "react";
import { HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Hide navbar if the route matches any keyword
  const hideOnRoutes = ["/tutorlogin", "/tutorsignup"];
  const shouldHideNavbar = hideOnRoutes.some((path) =>
    location.pathname.toLowerCase().includes(path)
  );
  if (shouldHideNavbar) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo + Search */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-10" />

            <div className="hidden md:flex">
              <div className="bg-gray-50 px-4 py-2 rounded-full shadow-sm flex items-center w-96">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What would you like to learn?"
                  className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
                />
                <button className="bg-coral-500 hover:bg-coral-600 p-2 rounded-full text-white ml-2">
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

          {/* Right: Help, Become a Tutor, Login */}
          <div className="flex items-center gap-4">
            <HelpCircle className="text-gray-600 hover:text-coral-500 cursor-pointer" />
            <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full font-medium transition">
              Become a Tutor
            </button>
            <Link
              to="/login"
              className="text-gray-800 font-semibold hover:text-coral-500 transition"
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
