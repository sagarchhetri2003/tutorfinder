import React, { useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { Search } from "lucide-react";

const Help = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopic, setExpandedTopic] = useState(null); // Track which topic is expanded

  const helpTopics = {
    student: [
      {
        title: "How to find a tutor?",
        description: "Use the subject and location filters on the homepage to find tutors that match your academic needs."
      },
      {
        title: "How to contact a tutor?",
        description: "Visit the tutor’s profile and click on the 'Contact Me' button to send them a message."
      },
      {
        title: "How to book a lesson?",
        description: "Click 'Book Me' on a tutor’s profile, choose your preferred date/time and confirm the booking."
      },
      {
        title: "How to leave a review?",
        description: "After completing a session, go to the tutor’s profile and click 'Leave a Review' to share your feedback."
      },
      {
        title: "How to cancel a session?",
        description: "You can cancel your session from your dashboard. Ensure it’s at least 24 hours in advance."
      },
      {
        title: "How to change my subject preference?",
        description: "Go to your profile settings and update your preferred subjects for more accurate tutor matches."
      }
    ],
    tutor: [
      {
        title: "How to add a course?",
        description: "Navigate to your tutor dashboard and click 'Add Course' to list your subject and lesson details."
      },
      {
        title: "How to manage student requests?",
        description: "All student inquiries appear in your dashboard. Accept or reject them based on your availability."
      },
      {
        title: "How to receive payments?",
        description: "Once a session is completed, payments are processed to your linked wallet or bank account."
      },
      {
        title: "How to respond to reviews?",
        description: "You can reply to any student review publicly from the Reviews tab on your profile."
      },
      {
        title: "How to delete my account?",
        description: "Head to settings and scroll to 'Delete Account'. You’ll be asked to confirm before removal."
      },
      {
        title: "How to update availability?",
        description: "In your tutor dashboard, go to 'Availability' and set the days and times you're available to teach."
      }
    ]
  };

  const filteredTopics = helpTopics[activeTab].filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (title) => {
    setExpandedTopic(prev => (prev === title ? null : title));
  };

  return (
    <div
      className={`min-h-screen w-full transition-all duration-500 ${
        activeTab === "student"
          ? "bg-gradient-to-b from-[#FFE6E6] to-white"
          : "bg-gradient-to-b from-blue-100 to-white"
      }`}
    >
      <LoggedInNavbar activePage="help" />

      <div className="max-w-5xl mx-auto px-4 pt-24 pb-20">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          How can we help you?
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Search common questions, instructions, or tips for using the platform.
        </p>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-6">
          <Search className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-coral-400 transition"
          />
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm ${
              activeTab === "student"
                ? "bg-coral-100 text-black"
                : "bg-white text-gray-600 border"
            }`}
            onClick={() => {
              setActiveTab("student");
              setExpandedTopic(null);
            }}
          >
            Students
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm ${
              activeTab === "tutor"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 border"
            }`}
            onClick={() => {
              setActiveTab("tutor");
              setExpandedTopic(null);
            }}
          >
            Tutors
          </button>
        </div>

        {/* Help Topics */}
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div
                key={index}
                onClick={() => handleToggle(topic.title)}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg border border-gray-100 transition space-y-1 cursor-pointer"
              >
               <h4 className="text-gray-800 font-semibold flex items-center gap-2">
  <Search className="w-4 h-4 text-coral-500" />
  {topic.title}
</h4>

                {expandedTopic === topic.title && (
                  <p className="text-gray-700 text-sm">{topic.description}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No help topics found for "{searchQuery}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
