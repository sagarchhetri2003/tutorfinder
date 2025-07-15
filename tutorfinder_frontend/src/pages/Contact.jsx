// import { ArrowLeft } from "lucide-react";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { createContactApi } from "../apis/api";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { useAuth } from "../context/AuthContext";

// const Contact = () => {
//   const navigate = useNavigate();
//   const { id } = useParams()
//   const { user } = useAuth()
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!subject || !message) {
//       alert("Please fill in subject and message");
//       return;
//     }

//     try {
//       const data = {
//         tutorId: id,
//         subject,
//         message,
//       }
//       const response = await createContactApi(data);
//       if (response.data.success) {
//         alert("Message sent successfully!");
//         setSubject("");
//         setMessage("");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to send message");
//     }
//   };


//   return (
//     <div className="bg-white min-h-screen">
//       <LoggedInNavbar />
//       <div className="pt-24 px-4 max-w-6xl mx-auto">
//         <button
//           onClick={() => navigate(-1)}
//           className="text-gray-500 hover:text-black flex items-center mb-6"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back
//         </button>

//         <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
//         <p className="text-center text-gray-500 mb-12">
//           Any question or remarks? Just write us a message!
//         </p>

//         <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
//           {/* Left: Contact Info */}
//           <div className="bg-coral-500 text-white p-10 md:w-1/2 space-y-6">
//             <h3 className="text-xl font-semibold">Contact Information</h3>
//             <p className="text-sm">Say something to start a connection</p>
//             <div className="space-y-4">
//               <p>📞 +012 3456 789</p>
//               <p>📧 demo@gmail.com</p>
//               <p>📍 132 Dartmouth Street Boston, MA 02156</p>
//             </div>
//             <div className="flex gap-4 pt-4">
//               <button className="w-8 h-8 bg-white text-coral-500 rounded-full">🌐</button>
//               <button className="w-8 h-8 bg-white text-coral-500 rounded-full">🐦</button>
//               <button className="w-8 h-8 bg-white text-coral-500 rounded-full">💬</button>
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
//                 disabled={!subject || !message}
//                 type="submit"
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

//   // fetch tutor info by ID
//   useEffect(() => {
//     const fetchTutor = async () => {
//       try {
//         const res = await getTutorByIdApi(id);
//         if (res.data.success) {
//           setTutor(res.data.tutor);
//         }
//       } catch (err) {
//         console.error("Error fetching tutor:", err);
//       }
//     };
//     fetchTutor();
//   }, [id]);
  

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

//         <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
//         <p className="text-center text-gray-500 mb-12">
//           Any question or remarks? Just write us a message!
//         </p>

//         <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
//           {/* Left: Contact Info */}
//           <div className="bg-red-500 text-white p-10 md:w-1/2 space-y-6">
//             <h3 className="text-xl font-semibold">Contact Information</h3>
//             <p className="text-sm">Say something to start a connection</p>
//             <div className="space-y-4">
//             <p>📞 {tutor?.number || "+012 3456 789"}</p>
// <p>📧 {tutor?.email || "demo@gmail.com"}</p>
// <p>📍 {tutor?.location || "No location specified"}</p>

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
    <div className="bg-white min-h-screen">
      <LoggedInNavbar />
      <ToastContainer position="top-center" />
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-black flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">
          Contact {tutor?.name || "Tutor"}
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Any question or remarks? Just write us a message!
        </p>

        <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden">
          {/* Left: Contact Info */}
          <div className="bg-red-500 text-white p-10 md:w-1/2 space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-sm">Say something to start a connection</p>

            <div className="space-y-4">
              <img
                src={
                  tutor?.image
                    ? `http://localhost:5500/${tutor.image}`
                    : "/default-avatar.png"
                }
                alt="Tutor"
                className="w-20 h-20 rounded-full object-cover border-2 border-white"
              />
              <p>📞 {tutor?.number || "+012 3456 789"}</p>
              <p>📧 {tutor?.email || "demo@gmail.com"}</p>
              <p>📍 {tutor?.location || "No location specified"}</p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="w-8 h-8 bg-white text-red-500 rounded-full">🌐</button>
              <button className="w-8 h-8 bg-white text-red-500 rounded-full">🐦</button>
              <button className="w-8 h-8 bg-white text-red-500 rounded-full">💬</button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-10 md:w-1/2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={user?.name || ""}
                disabled
                placeholder="Name"
                className="border-b p-2 outline-none"
              />
              <input
                type="email"
                value={user?.email || ""}
                disabled
                placeholder="Email"
                className="border-b p-2 outline-none col-span-2"
              />
              <input
                type="text"
                value={user?.number || ""}
                disabled
                placeholder="Phone Number"
                className="border-b p-2 outline-none col-span-2"
              />

              <div className="col-span-2 pt-4">
                <p className="font-medium text-gray-600 mb-2">Select Subject?</p>
                <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                  {["General Inquiry", "Regard Subject", "Regard Payment", "Regard Complaint"].map((subj) => (
                    <label key={subj}>
                      <input
                        type="radio"
                        name="subject"
                        value={subj}
                        checked={subject === subj}
                        onChange={(e) => setSubject(e.target.value)}
                        className="mr-1"
                      />
                      {subj}
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Write your message..."
                className="border-b p-2 outline-none col-span-2 mt-6"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                onClick={handleSubmit}
                type="submit"
                disabled={!subject || !message}
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
