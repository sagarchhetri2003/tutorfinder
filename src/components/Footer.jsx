

import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-sm">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Who are we?</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Superprof Global</a></li>
              <li><a href="#" className="hover:text-white">Online Lessons</a></li>
              <li><a href="#" className="hover:text-white">States</a></li>
              <li><a href="#" className="hover:text-white">Superprof Careers</a></li>
            </ul>
          </div>

          {/* All Subjects */}
          <div>
            <h3 className="font-bold mb-4">All Subjects</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Arts & Hobbies</a></li>
              <li><a href="#" className="hover:text-white">Career Development</a></li>
              <li><a href="#" className="hover:text-white">Computer Sciences</a></li>
              <li><a href="#" className="hover:text-white">Languages</a></li>
              <li><a href="#" className="hover:text-white">Music</a></li>
              <li><a href="#" className="hover:text-white">Health & well-being</a></li>
              <li><a href="#" className="hover:text-white">Academic tutoring</a></li>
              <li><a href="#" className="hover:text-white">Sports</a></li>
            </ul>
          </div>

          {/* Join the adventure */}
          <div>
            <h3 className="font-bold mb-4">Join the adventure</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">The Superprof Blog</a></li>
              <li><a href="#" className="hover:text-white">Teaching resources</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="font-bold mb-4">Follow us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2025 TutorFinder. The best way to learn.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
