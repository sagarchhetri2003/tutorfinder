
// import { ArrowLeft } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { createContactApi, getTutorByIdApi } from "../apis/api";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { useAuth } from "../context/AuthContext";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // tutorId
//   const { user } = useAuth();

//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [tutor, setTutor] = useState(null);

//   useEffect(() => {
//     const fetchTutor = async () => {
//       try {
//         const res = await getTutorByIdApi(id);
//         if (res.data.success) {
//           const t = res.data.tutor;
//           if (!t.role || t.role !== "tutor" || !t.isApproved) {
//             toast.error("This tutor is not available to contact.");
//             navigate("/");
//           } else {
//             setTutor(t);
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching tutor:", err);
//         toast.error("Could not load tutor details.");
//       }
//     };
//     fetchTutor();
//   }, [id, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!subject || !message) {
//       toast.error("Please fill in subject and message");
//       return;
//     }

//     try {
//       const data = {
//         tutorId: id,
//         subject,
//         message,
//       };
//       const response = await createContactApi(data);
//       if (response.data.success) {
//         toast.success("Message sent successfully!");
//         setSubject("");
//         setMessage("");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to send message");
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       <LoggedInNavbar />
//       <ToastContainer position="top-center" />
//       <div className="pt-24 px-4 max-w-6xl mx-auto">
//         <button
//           onClick={() => navigate(-1)}
//           className="text-gray-500 hover:text-black flex items-center mb-6"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back
//         </button>

//         <h2 className="text-3xl font-bold text-center mb-2">
//           Contact {tutor?.name || "Tutor"}
//         </h2>
//         <p className="text-center text-gray-500 mb-12">
//           Any question or remarks? Just write us a message!
//         </p>

//         <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
//           {/* Left: Contact Info */}
//           <div className="bg-red-500 text-white p-10 md:w-1/2 space-y-6">
//             <h3 className="text-xl font-semibold">Contact Information</h3>
//             <p className="text-sm">Say something to start a connection</p>

//             <div className="space-y-4">
//               <img
//                 src={
//                   tutor?.image
//                     ? `http://localhost:5500/${tutor.image}`
//                     : "/default-avatar.png"
//                 }
//                 alt="Tutor"
//                 className="w-20 h-20 rounded-full object-cover border-2 border-white"
//               />
//               <p>📞 {tutor?.number || "+012 3456 789"}</p>
//               <p>📧 {tutor?.email || "demo@gmail.com"}</p>
//               <p>📍 {tutor?.location || "No location specified"}</p>
//             </div>

//             <div className="flex gap-4 pt-4">
//               <button className="w-8 h-8 bg-white text-red-500 rounded-full">🌐</button>
//               <button className="w-8 h-8 bg-white text-red-500 rounded-full">🐦</button>
//               <button className="w-8 h-8 bg-white text-red-500 rounded-full">💬</button>
//             </div>
//           </div>

//           {/* Right: Contact Form */}
//           <div className="bg-white p-10 md:w-1/2">
//             <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 value={user?.name || ""}
//                 disabled
//                 placeholder="Name"
//                 className="border-b p-2 outline-none"
//               />
//               <input
//                 type="email"
//                 value={user?.email || ""}
//                 disabled
//                 placeholder="Email"
//                 className="border-b p-2 outline-none col-span-2"
//               />
//               <input
//                 type="text"
//                 value={user?.number || ""}
//                 disabled
//                 placeholder="Phone Number"
//                 className="border-b p-2 outline-none col-span-2"
//               />

//               <div className="col-span-2 pt-4">
//                 <p className="font-medium text-gray-600 mb-2">Select Subject?</p>
//                 <div className="flex flex-wrap gap-6 text-sm text-gray-700">
//                   {["General Inquiry", "Regard Subject", "Regard Payment", "Regard Complaint"].map((subj) => (
//                     <label key={subj}>
//                       <input
//                         type="radio"
//                         name="subject"
//                         value={subj}
//                         checked={subject === subj}
//                         onChange={(e) => setSubject(e.target.value)}
//                         className="mr-1"
//                       />
//                       {subj}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <textarea
//                 placeholder="Write your message..."
//                 className="border-b p-2 outline-none col-span-2 mt-6"
//                 rows="4"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>

//               <button
//                 onClick={handleSubmit}
//                 type="submit"
//                 disabled={!subject || !message}
//                 className="col-span-2 mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createContactApi, getTutorByIdApi } from "../apis/api";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // tutorId
  const { user } = useAuth();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const res = await getTutorByIdApi(id);
        if (res.data.success) {
          const t = res.data.tutor;
          if (!t.role || t.role !== "tutor" || !t.isApproved) {
            toast.error("This tutor is not available to contact.");
            navigate("/");
          } else {
            setTutor(t);
          }
        }
      } catch (err) {
        console.error("Error fetching tutor:", err);
        toast.error("Could not load tutor details.");
      }
    };
    fetchTutor();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subject || !message) {
      toast.error("Please fill in subject and message");
      return;
    }

    try {
      const data = {
        tutorId: id,
        subject,
        message,
      };
      const response = await createContactApi(data);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setSubject("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <LoggedInNavbar />
      <ToastContainer position="top-center" />
      <div className="pt-28 pb-12 px-4 max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group text-slate-600 hover:text-slate-900 flex items-center mb-8 transition-all duration-200 hover:translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Contact {tutor?.name || "Tutor"}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to connect? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left: Contact Info */}
            <div className="bg-gradient-to-br from-red-500 via-red-600 to-pink-600 text-white p-8 lg:p-12 lg:w-2/5 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
                  <p className="text-red-100 text-base leading-relaxed">
                    Ready to start your learning journey? Let's connect and make it happen!
                  </p>
                </div>

                {/* Tutor Profile */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={
                          tutor?.image
                            ? `http://localhost:5500/${tutor.image}`
                            : "/default-avatar.png"
                        }
                        alt="Tutor"
                        className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{tutor?.name || "Tutor"}</h4>
                      <p className="text-red-100 text-sm">Available for contact</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                        <span className="text-lg">📞</span>
                      </div>
                      <span className="font-medium">{tutor?.number || "+012 3456 789"}</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                        <span className="text-lg">📧</span>
                      </div>
                      <span className="font-medium">{tutor?.email || "demo@gmail.com"}</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                        <span className="text-lg">📍</span>
                      </div>
                      <span className="font-medium">{tutor?.location || "No location specified"}</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-auto">
                  <p className="text-red-100 text-sm mb-4">Connect with us</p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white text-red-500 rounded-full hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-lg">
                      🌐
                    </button>
                    <button className="w-10 h-10 bg-white text-red-500 rounded-full hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-lg">
                      🐦
                    </button>
                    <button className="w-10 h-10 bg-white text-red-500 rounded-full hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-lg">
                      💬
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 lg:p-12 lg:w-3/5">
              <form className="h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Send us a Message</h3>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you soon.</p>
                </div>

                {/* User Info (Disabled Fields) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={user?.name || ""}
                      disabled
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="text"
                      value={user?.number || ""}
                      disabled
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Subject Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-4">What can we help you with?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["General Inquiry", "Regard Subject", "Regard Payment", "Regard Complaint"].map((subj) => (
                      <label key={subj} className="relative">
                        <input
                          type="radio"
                          name="subject"
                          value={subj}
                          checked={subject === subj}
                          onChange={(e) => setSubject(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`p-3 border-2 rounded-xl cursor-pointer transition-all hover:border-red-300 ${
                          subject === subj 
                            ? 'border-red-500 bg-red-50 text-red-700' 
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}>
                          <span className="text-sm font-medium">{subj}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8 flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all h-32"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={!subject || !message}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;