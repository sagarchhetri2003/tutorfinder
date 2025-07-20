import { HelpCircle, Search, User, BookOpen, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Routes that require blurred navbar and hiding UI elements
  const blurredRoutes = ["/login", "/signup"];
  const isBlurredPage = blurredRoutes.includes(location.pathname.toLowerCase());

  // Hide navbar on these routes entirely
  const hideOnRoutes = ["/tutorlogin", "/tutorsignup", "/tutorlandingpage", "/admin/dashboard"];
  const shouldHideNavbar = hideOnRoutes.some((path) => 
    location.pathname.toLowerCase().includes(path)
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHideNavbar) return null;

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm'
      }
      ${isBlurredPage ? 'backdrop-blur-xl bg-white/30' : ''}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
    
          </Link>

          {/* Search Bar - Hidden on blurred pages */}
          {!isBlurredPage && (
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What would you like to learn?"
                  className="
                    w-full pl-12 pr-4 py-3 
                    bg-gray-50 border border-gray-200 rounded-full
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                    placeholder-gray-400 text-gray-700
                    transition-all duration-300 ease-in-out
                    hover:bg-gray-100 hover:border-gray-300
                    focus:bg-white focus:shadow-lg
                  "
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Help */}
            {!isBlurredPage && (
              <Link 
                to="/help" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
              >
                <HelpCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Help</span>
              </Link>
            )}

            {/* Become a Tutor */}
            {user && !isBlurredPage && (
              <Link 
                to="/become-tutor" 
                className="
                  flex items-center space-x-2 px-4 py-2 
                  bg-gradient-to-r from-green-500 to-emerald-500 
                  text-white rounded-full font-medium
                  hover:from-green-600 hover:to-emerald-600
                  transform hover:scale-105 transition-all duration-300
                  shadow-md hover:shadow-lg
                "
              >
                <BookOpen className="h-4 w-4" />
                <span>Become a Tutor</span>
              </Link>
            )}

            {/* Login/User */}
            {!isBlurredPage && (
              user ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700"></span>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="
                    flex items-center space-x-2 px-6 py-2 
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    text-white rounded-full font-medium
                    hover:from-blue-600 hover:to-purple-600
                    transform hover:scale-105 transition-all duration-300
                    shadow-md hover:shadow-lg
                  "
                >
                  <User className="h-4 w-4" />
                  <span>Log In</span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-3">
              {/* Mobile Search */}
              {!isBlurredPage && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What would you like to learn?"
                    className="
                      w-full pl-10 pr-4 py-2 
                      bg-gray-50 border border-gray-200 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                      placeholder-gray-400 text-gray-700
                    "
                  />
                </div>
              )}

              {/* Mobile Navigation Links */}
              {!isBlurredPage && (
                <>
                  <Link 
                    to="/help" 
                    className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HelpCircle className="h-5 w-5" />
                    <span>Help</span>
                  </Link>

                  {user && (
                    <Link 
                      to="/become-tutor" 
                      className="flex items-center space-x-3 px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <BookOpen className="h-5 w-5" />
                      <span>Become a Tutor</span>
                    </Link>
                  )}

                  {!user && (
                    <Link 
                      to="/login" 
                      className="flex items-center space-x-3 px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-5 w-5" />
                      <span>Log In</span>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
