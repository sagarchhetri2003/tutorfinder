

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import logo from "../assets/logo/logo.png";

// // const steps = [
// //   "Basic Info",
// //   "Contact",
// //   "Subjects",
// //   "Location",
// //   "Experience",
// //   "Qualification",
// //   "Rate",
// //   "Bio",
// //   "Profile Picture"
// // ];

// // const TutorSignupForm = () => {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [formData, setFormData] = useState({});
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const requiredFields = {
// //     0: ["fullName", "email"],
// //     1: ["mobile"],
// //     2: ["subjects", "mode"],
// //     3: ["location", "availability"],
// //     4: ["experience"],
// //     5: ["qualification"],
// //     6: ["rate"],
// //     7: ["bio"],
// //     8: ["profilePic"]
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: files ? files[0] : value,
// //     });

// //     // Clear error when user starts typing
// //     if (errors[name]) {
// //       setErrors({ ...errors, [name]: "" });
// //     }
// //   };

// //   const validateStep = () => {
// //     const fieldsToCheck = requiredFields[currentStep] || [];
// //     const newErrors = {};
// //     fieldsToCheck.forEach((field) => {
// //       if (!formData[field]) {
// //         newErrors[field] = "This field is required.";
// //       }
// //     });
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const nextStep = () => {
// //     if (validateStep()) {
// //       setCurrentStep((prev) => prev + 1);
// //     }
// //   };

// //   const prevStep = () => setCurrentStep((prev) => prev - 1);

// //   const handleSubmit = () => {
// //     if (validateStep()) {
// //       console.log("Submitted Data:", formData);
// //       navigate("/");
// //     }
// //   };

// //   const inputStyle = (name) =>
// //     `w-full px-6 py-3 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-full outline-none focus:ring-2 focus:ring-red-400`;

// //   const textareaStyle = (name) =>
// //     `w-full px-6 py-3 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-xl outline-none focus:ring-2 focus:ring-red-400`;

// //   const StepDisplay = () => {
// //     switch (currentStep) {
// //       case 0:
// //         return (
// //           <>
// //             <input
// //               name="fullName"
// //               placeholder="Full Name"
// //               value={formData.fullName || ""}
// //               onChange={handleChange}
// //               className={inputStyle("fullName")}
// //             />
// //             <input
// //               name="email"
// //               type="email"
// //               placeholder="Email"
// //               value={formData.email || ""}
// //               onChange={handleChange}
// //               className={inputStyle("email")}
// //             />
// //           </>
// //         );
// //       case 1:
// //         return (
// //           <input
// //             name="mobile"
// //             placeholder="Mobile Number"
// //             value={formData.mobile || ""}
// //             onChange={handleChange}
// //             className={inputStyle("mobile")}
// //           />
// //         );
// //       case 2:
// //         return (
// //           <>
// //             <input
// //               name="subjects"
// //               placeholder="Subjects you teach"
// //               value={formData.subjects || ""}
// //               onChange={handleChange}
// //               className={inputStyle("subjects")}
// //             />
// //             <input
// //               name="mode"
// //               placeholder="Mode (Online/In-person/Hybrid)"
// //               value={formData.mode || ""}
// //               onChange={handleChange}
// //               className={inputStyle("mode")}
// //             />
// //           </>
// //         );
// //       case 3:
// //         return (
// //           <>
// //             <input
// //               name="location"
// //               placeholder="Location"
// //               value={formData.location || ""}
// //               onChange={handleChange}
// //               className={inputStyle("location")}
// //             />
// //             <input
// //               name="availability"
// //               placeholder="Availability"
// //               value={formData.availability || ""}
// //               onChange={handleChange}
// //               className={inputStyle("availability")}
// //             />
// //           </>
// //         );
// //       case 4:
// //         return (
// //           <textarea
// //             name="experience"
// //             placeholder="Experience"
// //             value={formData.experience || ""}
// //             onChange={handleChange}
// //             className={textareaStyle("experience")}
// //           />
// //         );
// //       case 5:
// //         return (
// //           <textarea
// //             name="qualification"
// //             placeholder="Qualification"
// //             value={formData.qualification || ""}
// //             onChange={handleChange}
// //             className={textareaStyle("qualification")}
// //           />
// //         );
// //       case 6:
// //         return (
// //           <input
// //             name="rate"
// //             placeholder="Hourly Rate"
// //             value={formData.rate || ""}
// //             onChange={handleChange}
// //             className={inputStyle("rate")}
// //           />
// //         );
// //       case 7:
// //         return (
// //           <textarea
// //             name="bio"
// //             placeholder="Short Bio"
// //             value={formData.bio || ""}
// //             onChange={handleChange}
// //             className={textareaStyle("bio")}
// //           />
// //         );
// //       case 8:
// //         return (
// //           <input
// //             type="file"
// //             name="profilePic"
// //             onChange={handleChange}
// //             className={inputStyle("profilePic")}
// //           />
// //         );
// //       default:
// //         return null;
// //     }
// //   };
  
// //   return (
// //     <div className="relative min-h-screen overflow-hidden">
// //       {/* Blurred Background */}
// //       <iframe
// //         src="/tutorlogin"
// //         title="Tutor Login Background"
// //         className="absolute top-0 left-0 w-full h-full pointer-events-none blur-sm scale-105"
// //       ></iframe>

// //       {/* Foreground Content */}
// //       <div className="relative z-10 px-6 py-6 min-h-screen flex flex-col">
// //         {/* Logo Top Left */}
// //         <div className="flex justify-start mb-4">
// //           <img src={logo} alt="Tutor Logo" className="h-10" />
// //         </div>

// //         {/* Progress Bar */}
// //         <div className="flex flex-col items-center mb-10">
// //           <div className="text-sm text-gray-700 font-medium mb-1">
// //             Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
// //           </div>
// //           <div className="w-full max-w-xl h-2 bg-gray-200 rounded-full">
// //             <div
// //               className="h-2 bg-red-500 rounded-full transition-all"
// //               style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
// //             ></div>
// //           </div>
// //         </div>

// //         {/* Form Card */}
// //         <div className="w-full max-w-[700px] mx-auto bg-white bg-opacity-95 backdrop-blur-md p-10 rounded-2xl shadow-xl transition-all duration-300">
// //           <div className="grid gap-6 mb-8">
// //             <StepDisplay />
// //           </div>

// //           {/* Error message display (optional) */}
// //           {Object.values(errors).length > 0 && (
// //             <p className="text-red-500 text-sm mb-4">Please fill in all required fields.</p>
// //           )}

// //           {/* Navigation Buttons */}
// //           <div className="flex justify-between">
// //             {currentStep === 0 ? (
// //               <button
// //                 onClick={() => navigate("/tutorlogin")}
// //                 className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300"
// //               >
// //                 Back to Login
// //               </button>
// //             ) : (
// //               <button
// //                 onClick={prevStep}
// //                 className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300"
// //               >
// //                 Back
// //               </button>
// //             )}

// //             {currentStep < steps.length - 1 ? (
// //               <button
// //                 onClick={nextStep}
// //                 className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 ml-auto"
// //               >
// //                 Next
// //               </button>
// //             ) : (
// //               <button
// //                 onClick={handleSubmit}
// //                 className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 ml-auto"
// //               >
// //                 Submit
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TutorSignupForm;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo/logo.png";

// const TutorSignupForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     subjects: "",
//     mode: "",
//     location: "",
//     availability: "",
//     experience: "",
//     qualification: "",
//     rate: "",
//     bio: "",
//     profilePic: null,
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.entries(formData).forEach(([key, value]) => {
//       if (!value) newErrors[key] = "This field is required";
//     });
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       console.log("Form Submitted:", formData);
//       navigate("/");
//     }
//   };

//   const inputStyle = (name) =>
//     `w-full px-5 py-3 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-xl outline-none focus:ring-2 focus:ring-red-400`;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fff4f4] to-[#ffe6e6] flex flex-col px-6 py-10">
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

//           <input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className={inputStyle("mobile")} />
//           <input name="subjects" placeholder="Subjects You Teach" value={formData.subjects} onChange={handleChange} className={inputStyle("subjects")} />

//           <input name="mode" placeholder="Teaching Mode (Online/In-person/Hybrid)" value={formData.mode} onChange={handleChange} className={inputStyle("mode")} />
//           <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className={inputStyle("location")} />

//           <input name="availability" placeholder="Availability (Weekdays/Weekends)" value={formData.availability} onChange={handleChange} className={inputStyle("availability")} />
//           <input name="rate" placeholder="Hourly Rate (NPR)" value={formData.rate} onChange={handleChange} className={inputStyle("rate")} />

//           <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} className={`${inputStyle("experience")} md:col-span-2`} />
//           <textarea name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} className={`${inputStyle("qualification")} md:col-span-2`} />

//           <textarea name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} className={`${inputStyle("bio")} md:col-span-2`} />

//           <div className="md:col-span-2">
//             <label className="block mb-2 font-medium">Upload Profile Picture</label>
//             <input type="file" name="profilePic" onChange={handleChange} className="w-full" />
//             {errors.profilePic && <p className="text-red-500 text-sm mt-1">{errors.profilePic}</p>}
//             {formData.profilePic && typeof formData.profilePic === "object" && (
//               <p className="text-sm text-green-600 mt-2">Selected: {formData.profilePic.name}</p>
//             )}
//           </div>

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
import logo from "../assets/logo/logo.png";

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+977",
    mobile: "",
    subjects: "",
    mode: "",
    location: "",
    availability: "",
    certificates: null,
    rate: "",
    gender: "",
    aboutYou: "",
    aboutLessons: "",
    profilePic: null,
  });

  const [errors, setErrors] = useState({});

  const inputStyle = (name) =>
    `w-full px-5 py-3 border ${
      errors[name] ? "border-red-500" : "border-gray-300"
    } rounded-xl outline-none focus:ring-2 focus:ring-red-400`;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      toast.success("Tutor profile created successfully!");
      setTimeout(() => navigate("/"), 2000); // Navigate after toast
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff4f4] to-[#ffe6e6] flex flex-col px-6 py-10">
      <ToastContainer />
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-10 cursor-pointer" onClick={() => navigate("/")} />
      </div>

      {/* Form Card */}
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full mx-auto p-10 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">Create Your Tutor Profile</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className={inputStyle("fullName")} />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputStyle("email")} />

          {/* Mobile Number with Country Code */}
          <div className="flex gap-2">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="w-24 border rounded-xl px-3">
              <option value="+977">+977</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>
            <input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className={inputStyle("mobile")} />
          </div>

          {/* Subject Dropdown */}
          <select name="subjects" value={formData.subjects} onChange={handleChange} className={inputStyle("subjects")}>
            <option value="">Select Subject</option>
            {subjectsList.map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>

          {/* Teaching Mode */}
          <select name="mode" value={formData.mode} onChange={handleChange} className={inputStyle("mode")}>
            <option value="">Select Teaching Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>

          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className={inputStyle("location")} />

          {/* Availability Dropdown */}
          <select name="availability" value={formData.availability} onChange={handleChange} className={inputStyle("availability")}>
            <option value="">Select Availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Flexible">Flexible</option>
          </select>

          {/* Rate with Rs prefix */}
          <div className="flex items-center">
            <span className="bg-gray-100 px-4 py-3 rounded-l-xl border border-r-0 border-gray-300">Rs</span>
            <input name="rate" placeholder="Hourly Rate" value={formData.rate} onChange={handleChange} className={`rounded-l-none ${inputStyle("rate")}`} />
          </div>

          {/* Gender Dropdown */}
          <select name="gender" value={formData.gender} onChange={handleChange} className={inputStyle("gender")}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Certificates Upload */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Upload Certificates</label>
            <input type="file" name="certificates" onChange={handleChange} className="w-full" />
            {errors.certificates && <p className="text-red-500 text-sm mt-1">{errors.certificates}</p>}
          </div>

          {/* About You */}
          <textarea name="aboutYou" placeholder="About You" value={formData.aboutYou} onChange={handleChange} className={`${inputStyle("aboutYou")} md:col-span-2`} />

          {/* About the Lessons */}
          <textarea name="aboutLessons" placeholder="About the Lessons" value={formData.aboutLessons} onChange={handleChange} className={`${inputStyle("aboutLessons")} md:col-span-2`} />

          {/* Profile Pic Upload */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Upload Profile Picture</label>
            <input type="file" name="profilePic" onChange={handleChange} className="w-full" />
            {errors.profilePic && <p className="text-red-500 text-sm mt-1">{errors.profilePic}</p>}
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorSignupForm;
