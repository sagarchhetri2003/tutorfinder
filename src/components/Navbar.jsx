const Navbar = () => {
    return (
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-coral-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Tutor</span>
            </div>
  
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Find Tutors</a>
              <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Become a Tutor</a>
              <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Login</a>
            </div>
  
            <div className="flex items-center gap-4">
              <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Become a Tutor
              </button>
              <button className="text-gray-600 hover:text-coral-500 transition-colors">
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  