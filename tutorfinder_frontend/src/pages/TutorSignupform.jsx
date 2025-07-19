// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signupAsTutorApi } from "../apis/api";
// import logo from "../assets/logo/logo.png";
// import { useAuth } from "../context/AuthContext";

// const subjectsList = [
//   "Mathematics",
//   "Science",
//   "English",
//   "Computer Science",
//   "Economics",
//   "Accountancy",
//   "Nepali",
// ];

// const TutorSignupForm = () => {
//   const navigate = useNavigate();
//   const { user, setIsUpdated } = useAuth()
//   const [formData, setFormData] = useState({
//     fullName: user?.name || "",
//     email: user?.email || "",
//     countryCode: "+977",
//     mobile: user?.number || "",
//     subjects: user?.subject || "",
//     mode: user?.teachingMode || "",
//     location: user?.location || "",
//     availability: user?.availability || "",
//     certificates: null,
//     rate: user?.price || "",
//     gender: user?.gender || "",
//     aboutYou: user?.aboutYou || "",
//     aboutLessons: user?.aboutLesson || "",
//     profilePic: null,
//   });

//   const [errors, setErrors] = useState({});

//   const inputStyle = (name) =>
//     `w-full px-5 py-3 border ${errors[name] ? "border-red-500" : "border-gray-300"
//     } rounded-xl outline-none focus:ring-2 focus:ring-red-400`;

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     Object.entries(formData).forEach(([key, value]) => {
//       if (!value) newErrors[key] = "This field is required";
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("name", formData.fullName);
//       data.append("email", formData.email);
//       data.append("number", formData.mobile);
//       data.append("location", formData.location);
//       data.append("subject", formData.subjects);
//       data.append("teachingMode", formData.mode);
//       data.append("availability", formData.availability);
//       data.append("gender", formData.gender);
//       data.append("aboutYou", formData.aboutYou);
//       data.append("aboutLesson", formData.aboutLessons);
//       data.append("price", formData.rate);

//       if (formData.profilePic) {
//         data.append("image", formData.profilePic);
//       }
//       if (formData.certificates) {
//         data.append("certificate", formData.certificates);
//       }
//       const res = await signupAsTutorApi(data);

//       if (res.data.success) {
//         toast.success("Tutor profile submitted please wait for approval from admin!");
//         setIsUpdated((prev) => !prev);
//         setTimeout(() => navigate("/landing-page"), 2000);
//       } else {
//         toast.error(res.data.message || "Submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting tutor profile:", error);
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Try again."
//       );
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fff4f4] to-[#ffe6e6] flex flex-col px-6 py-10">
//       <ToastContainer />
//       {/* Logo */}
//       <div className="mb-8">
//         <img src={logo} alt="Logo" className="h-10 cursor-pointer" onClick={() => navigate("/")} />
//       </div>

//       {/* Form Card */}
//       <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full mx-auto p-10 backdrop-blur-md">
//         <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">Create Your Tutor Profile</h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className={inputStyle("fullName")} />
//           <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputStyle("email")} />

//           {/* Mobile Number with Country Code */}
//           <div className="flex gap-2">
//             <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="w-24 border rounded-xl px-3">
//               <option value="+977">+977</option>
//               <option value="+91">+91</option>
//               <option value="+1">+1</option>
//             </select>
//             <input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className={inputStyle("mobile")} />
//           </div>

//           {/* Subject Dropdown */}
//           <select name="subjects" value={formData.subjects} onChange={handleChange} className={inputStyle("subjects")}>
//             <option value="">Select Subject</option>
//             {subjectsList.map((subj) => (
//               <option key={subj} value={subj}>{subj}</option>
//             ))}
//           </select>

//           {/* Teaching Mode */}
//           <select name="mode" value={formData.mode} onChange={handleChange} className={inputStyle("mode")}>
//             <option value="">Select Teaching Mode</option>
//             <option value="Online">Online</option>
//             <option value="Offline">Offline</option>
//             <option value="Both">Both</option>
//           </select>

//           <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className={inputStyle("location")} />

//           {/* Availability Dropdown */}
//           <select name="availability" value={formData.availability} onChange={handleChange} className={inputStyle("availability")}>
//             <option value="">Select Availability</option>
//             <option value="Weekdays">Weekdays</option>
//             <option value="Weekends">Weekends</option>
//             <option value="Flexible">Flexible</option>
//           </select>

//           {/* Rate with Rs prefix */}
//           <div className="flex items-center">
//             <span className="bg-gray-100 px-4 py-3 rounded-l-xl border border-r-0 border-gray-300">Rs</span>
//             <input name="rate" placeholder="Hourly Rate" value={formData.rate} onChange={handleChange} className={`rounded-l-none ${inputStyle("rate")}`} />
//           </div>

//           {/* Gender Dropdown */}
//           <select name="gender" value={formData.gender} onChange={handleChange} className={inputStyle("gender")}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>

//           {/* Certificates Upload */}
//           <div className="md:col-span-2">
//             <label className="block mb-1 font-medium">Upload Certificates</label>
//             <input type="file" name="certificates" onChange={handleChange} className="w-full" />
//             {errors.certificates && <p className="text-red-500 text-sm mt-1">{errors.certificates}</p>}
//           </div>

//           {/* About You */}
//           <textarea name="aboutYou" placeholder="About You" value={formData.aboutYou} onChange={handleChange} className={`${inputStyle("aboutYou")} md:col-span-2`} />

//           {/* About the Lessons */}
//           <textarea name="aboutLessons" placeholder="About the Lessons" value={formData.aboutLessons} onChange={handleChange} className={`${inputStyle("aboutLessons")} md:col-span-2`} />

//           {/* Profile Pic Upload */}
//           <div className="md:col-span-2">
//             <label className="block mb-1 font-medium">Upload Profile Picture</label>
//             <input type="file" name="profilePic" onChange={handleChange} className="w-full" />
//             {errors.profilePic && <p className="text-red-500 text-sm mt-1">{errors.profilePic}</p>}
//           </div>

//           {user?.image && (
//             <div className="md:col-span-2">
//               <img
//                 src={`${process.env.REACT_APP_API_URL}/${user?.image}`}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover"
//               />

//             </div>
//           )}

//           <button
//             type="submit"
//             className="md:col-span-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-transform hover:scale-105"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TutorSignupForm;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signupAsTutorApi } from "../apis/api";
import logo from "../assets/logo/logo.png";
import { useAuth } from "../context/AuthContext";

const subjectsList = [
  "Mathematics",
  "Science",
  "English",
  "Computer Science",
  "Economics",
  "Accountancy",
  "Nepali",
];

const TutorSignupForm = () => {
  const navigate = useNavigate();
  const { user, setIsUpdated } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    countryCode: "+977",
    mobile: user?.number || "",
    subjects: user?.subject || "",
    mode: user?.teachingMode || "",
    location: user?.location || "",
    availability: user?.availability || "",
    certificates: null,
    rate: user?.price || "",
    gender: user?.gender || "",
    aboutYou: user?.aboutYou || "",
    aboutLessons: user?.aboutLesson || "",
    profilePic: null,
  });

  const [errors, setErrors] = useState({});

  const inputStyle = (name) =>
    `w-full px-5 py-3 border ${
      errors[name] ? "border-red-500" : "border-gray-300"
    } rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 hover:border-blue-300`;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.fullName);
      data.append("email", formData.email);
      data.append("number", formData.mobile);
      data.append("location", formData.location);
      data.append("subject", formData.subjects);
      data.append("teachingMode", formData.mode);
      data.append("availability", formData.availability);
      data.append("gender", formData.gender);
      data.append("aboutYou", formData.aboutYou);
      data.append("aboutLesson", formData.aboutLessons);
      data.append("price", formData.rate);

      if (formData.profilePic) {
        data.append("image", formData.profilePic);
      }
      if (formData.certificates) {
        data.append("certificate", formData.certificates);
      }
      const res = await signupAsTutorApi(data);

      if (res.data.success) {
        toast.success("Tutor profile submitted please wait for approval from admin!");
        
        // Clear user state to prevent auto-redirects
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        
        setTimeout(() => {
          // Use window.location for more reliable navigation
          window.location.href = "/login";
        }, 2000);
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting tutor profile:", error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col px-6 py-10">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 cursor-pointer transition-transform hover:scale-110" 
              onClick={() => navigate("/")} 
            />
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">Tutor Registration</h1>
              <p className="text-gray-600">Join our community of educators</p>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-200 to-purple-200"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full flex items-center justify-center text-gray-600 text-sm">2</div>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl max-w-5xl w-full mx-auto overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-8 text-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Create Your Tutor Profile</h2>
              <p className="text-indigo-100">Share your expertise and connect with students worldwide</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      name="fullName" 
                      placeholder="Enter your full name" 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      className={inputStyle("fullName")} 
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={inputStyle("email")} 
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                    <div className="flex gap-2">
                      <select 
                        name="countryCode" 
                        value={formData.countryCode} 
                        onChange={handleChange} 
                        className="w-24 px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                      >
                        <option value="+977">+977</option>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                      </select>
                      <input 
                        name="mobile" 
                        placeholder="9812345678" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        className={inputStyle("mobile")} 
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                    <select 
                      name="gender" 
                      value={formData.gender} 
                      onChange={handleChange} 
                      className={inputStyle("gender")}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                    <input 
                      name="location" 
                      placeholder="City, Country" 
                      value={formData.location} 
                      onChange={handleChange} 
                      className={inputStyle("location")} 
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                </div>
              </div>

              {/* Teaching Information Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Teaching Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select 
                      name="subjects" 
                      value={formData.subjects} 
                      onChange={handleChange} 
                      className={inputStyle("subjects")}
                    >
                      <option value="">Select Subject</option>
                      {subjectsList.map((subj) => (
                        <option key={subj} value={subj}>{subj}</option>
                      ))}
                    </select>
                    {errors.subjects && <p className="text-red-500 text-sm mt-1">{errors.subjects}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Mode *</label>
                    <select 
                      name="mode" 
                      value={formData.mode} 
                      onChange={handleChange} 
                      className={inputStyle("mode")}
                    >
                      <option value="">Select Teaching Mode</option>
                      <option value="Online">📹 Online</option>
                      <option value="Offline">🏠 Offline</option>
                      <option value="Both">🔄 Both</option>
                    </select>
                    {errors.mode && <p className="text-red-500 text-sm mt-1">{errors.mode}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                    <select 
                      name="availability" 
                      value={formData.availability} 
                      onChange={handleChange} 
                      className={inputStyle("availability")}
                    >
                      <option value="">Select Availability</option>
                      <option value="Weekdays">📅 Weekdays</option>
                      <option value="Weekends">🎯 Weekends</option>
                      <option value="Flexible">⚡ Flexible</option>
                    </select>
                    {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate *</label>
                    <div className="flex items-center">
                      <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-3 rounded-l-xl border border-r-0 border-gray-300 text-blue-700 font-semibold">Rs</span>
                      <input 
                        name="rate" 
                        placeholder="1000" 
                        value={formData.rate} 
                        onChange={handleChange} 
                        className={`rounded-l-none ${inputStyle("rate")}`} 
                      />
                    </div>
                    {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate}</p>}
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Tell Us About Yourself
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">About You *</label>
                    <textarea 
                      name="aboutYou" 
                      placeholder="Describe your background, experience, and teaching philosophy..." 
                      value={formData.aboutYou} 
                      onChange={handleChange} 
                      rows="4"
                      className={inputStyle("aboutYou")} 
                    />
                    {errors.aboutYou && <p className="text-red-500 text-sm mt-1">{errors.aboutYou}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">About Your Lessons *</label>
                    <textarea 
                      name="aboutLessons" 
                      placeholder="Describe your teaching methodology, lesson structure, and what students can expect..." 
                      value={formData.aboutLessons} 
                      onChange={handleChange} 
                      rows="4"
                      className={inputStyle("aboutLessons")} 
                    />
                    {errors.aboutLessons && <p className="text-red-500 text-sm mt-1">{errors.aboutLessons}</p>}
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documents & Profile
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Certificates *</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        name="certificates" 
                        onChange={handleChange} 
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-50 file:to-purple-50 file:text-blue-700 hover:file:from-blue-100 hover:file:to-purple-100 transition-all duration-200" 
                      />
                      {errors.certificates && <p className="text-red-500 text-sm mt-1">{errors.certificates}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Profile Picture *</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        name="profilePic" 
                        onChange={handleChange} 
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-50 file:to-purple-50 file:text-blue-700 hover:file:from-blue-100 hover:file:to-purple-100 transition-all duration-200" 
                      />
                      {errors.profilePic && <p className="text-red-500 text-sm mt-1">{errors.profilePic}</p>}
                    </div>
                  </div>
                </div>

                {user?.image && (
                  <div className="mt-6 flex justify-center">
                    <div className="relative">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${user?.image}`}
                        alt="Current Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center space-x-3 mx-auto"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Submit Application</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                
                <p className="text-gray-600 text-sm mt-4">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSignupForm;