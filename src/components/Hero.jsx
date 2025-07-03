
import { useState } from "react";
import { Search } from "lucide-react";

const subjects = [
  "Maths", "Physics", "Chemistry", "Biology", "English", "History", "Computer Science", "Art", "Music"
];

const locations = [
  "Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Butwal", "Biratnagar", "Dharan", "Chitwan"
];

const modes = ["Online", "Offline"];

const Hero = ({ searchQuery, setSearchQuery }) => {
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedMode, setSelectedMode] = useState("");

  return (
    <section className="container mx-auto px-4 py-20 font-sans">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Find<br />
          <span className="text-coral-500">the perfect tutor</span>
        </h1>

        {/* Search Fields */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-12 relative">
          {/* Subject */}
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Subject"
              value={selectedSubject}
              onFocus={() => setShowSubjectDropdown(true)}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-5 py-4 rounded-full border border-gray-300 shadow-sm text-base outline-none"
            />
            {showSubjectDropdown && (
              <ul
                onMouseLeave={() => setShowSubjectDropdown(false)}
                className="absolute z-10 w-full bg-white shadow-md rounded-xl mt-1 max-h-60 overflow-y-auto text-sm text-gray-700"
              >
                {subjects
                  .filter(sub =>
                    sub.toLowerCase().includes(selectedSubject.toLowerCase())
                  )
                  .map((subject, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedSubject(subject);
                        setShowSubjectDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-coral-100 cursor-pointer transition"
                    >
                      {subject}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Location */}
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Location"
              value={selectedLocation}
              onFocus={() => setShowLocationDropdown(true)}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-5 py-4 rounded-full border border-gray-300 shadow-sm text-base outline-none"
            />
            {showLocationDropdown && (
              <ul
                onMouseLeave={() => setShowLocationDropdown(false)}
                className="absolute z-10 w-full bg-white shadow-md rounded-xl mt-1 max-h-60 overflow-y-auto text-sm text-gray-700"
              >
                {locations
                  .filter(loc =>
                    loc.toLowerCase().includes(selectedLocation.toLowerCase())
                  )
                  .map((location, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-coral-100 cursor-pointer transition"
                    >
                      {location}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Mode (Online/Offline) */}
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Mode"
              value={selectedMode}
              onFocus={() => setShowModeDropdown(true)}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full px-5 py-4 rounded-full border border-gray-300 shadow-sm text-base outline-none"
            />
            {showModeDropdown && (
              <ul
                onMouseLeave={() => setShowModeDropdown(false)}
                className="absolute z-10 w-full bg-white shadow-md rounded-xl mt-1 max-h-60 overflow-y-auto text-sm text-gray-700"
              >
                {modes
                  .filter(mode =>
                    mode.toLowerCase().includes(selectedMode.toLowerCase())
                  )
                  .map((mode, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedMode(mode);
                        setShowModeDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-coral-100 cursor-pointer transition"
                    >
                      {mode}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button
          className="inline-flex items-center gap-2 px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white rounded-full text-sm font-medium transition"
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;
