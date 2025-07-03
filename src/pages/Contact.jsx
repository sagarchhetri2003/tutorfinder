import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <LoggedInNavbar />
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-black flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
        <p className="text-center text-gray-500 mb-12">
          Any question or remarks? Just write us a message!
        </p>

        <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
          {/* Left: Contact Info */}
          <div className="bg-coral-500 text-white p-10 md:w-1/2 space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-sm">Say something to start a connection</p>
            <div className="space-y-4">
              <p>📞 +012 3456 789</p>
              <p>📧 demo@gmail.com</p>
              <p>📍 132 Dartmouth Street Boston, MA 02156</p>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="w-8 h-8 bg-white text-coral-500 rounded-full">🌐</button>
              <button className="w-8 h-8 bg-white text-coral-500 rounded-full">🐦</button>
              <button className="w-8 h-8 bg-white text-coral-500 rounded-full">💬</button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-10 md:w-1/2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border-b p-2 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b p-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b p-2 outline-none col-span-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b p-2 outline-none col-span-2"
              />

              <div className="col-span-2 pt-4">
                <p className="font-medium text-gray-600 mb-2">Select Subject?</p>
                <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                  <label><input type="radio" name="subject" /> General Inquiry</label>
                  <label><input type="radio" name="subject" /> Regard Subject</label>
                  <label><input type="radio" name="subject" /> Regard Payment</label>
                  <label><input type="radio" name="subject" /> Regard Complaint</label>
                </div>
              </div>

              <textarea
                placeholder="Write your message..."
                className="border-b p-2 outline-none col-span-2 mt-6"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="col-span-2 mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
