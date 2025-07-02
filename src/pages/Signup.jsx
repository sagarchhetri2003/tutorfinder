// import { useState } from "react";
// import { Eye, EyeOff, ArrowLeft } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import Home from "./Home";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     mobile: "",
//     location: "",
//     profilePicture: null,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
//     if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";
//     if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number";
//     return newErrors;
//     if (!formData.location.trim()) newErrors.location = "Location is required";

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log("Signup Data:", formData);
//       // Add backend submission logic here
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Home as background */}
//       <div className="absolute inset-0 z-0">
//         <Home />
//       </div>

//       {/* Blur overlay */}
//       <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black bg-opacity-30" />

//       {/* Signup Modal */}
//       <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
//       <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center relative">


          
//       {/* Back Button */}
//       <button
//         className="absolute top-4 left-4"
//         onClick={() => navigate("/login")} // Navigates to login page
//       >
//         <ArrowLeft className="h-5 w-5 text-gray-600" />
//       </button>


//           <img src={logo} alt="Tutor Finder Logo" className="w-24 mx-auto mb-6" />
//           <h2 className="text-xl font-bold mb-6 text-gray-800">SIGN UP</h2>

//           <form onSubmit={handleSubmit} className="space-y-4 text-left">
//             {/* Full Name */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 ml-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
//                 value={formData.fullName}
//                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               />
//               {errors.fullName && <p className="text-sm text-red-500 ml-2 mt-1">{errors.fullName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 ml-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//               {errors.email && <p className="text-sm text-red-500 ml-2 mt-1">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <label className="text-sm font-medium text-gray-700 ml-2">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Create a password"
//                 className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 pr-12"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//               <button
//                 type="button"
//                 className="absolute top-9 right-4 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//               {errors.password && <p className="text-sm text-red-500 ml-2 mt-1">{errors.password}</p>}
//             </div>

//             {/* Mobile Number */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 ml-2">Mobile Number</label>
//               <input
//                 type="tel"
//                 placeholder="Enter mobile number"
//                 className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
//                 value={formData.mobile}
//                 onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//               />
//               {errors.mobile && <p className="text-sm text-red-500 ml-2 mt-1">{errors.mobile}</p>}
//             </div>

//             {/* Location */}
// <div>
//   <label className="text-sm font-medium text-gray-700 ml-2">Location</label>
//   <input
//     type="text"
//     placeholder="Enter your location"
//     className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
//     value={formData.location}
//     onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//   />
//   {errors.location && <p className="text-sm text-red-500 ml-2 mt-1">{errors.location}</p>}
// </div>


// {/* Profile Picture (optional) */}
// <div>
//   <label className="text-sm font-medium text-gray-700 ml-2">Profile Picture (optional)</label>
//   <input
//     type="file"
//     accept="image/*"
//     className="w-full px-5 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 bg-white"
//     onChange={(e) =>
//       setFormData({ ...formData, profilePicture: e.target.files[0] })
//     }
//   />
// </div>

//             <button
//               type="submit"
//               className="w-full py-3 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Already have an account? */}
//           <p className="mt-6 text-sm text-gray-600 text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="font-bold text-coral-500 hover:underline">
//               Log in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Home from "./Home";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    location: "",
    profilePicture: null,
    countryCode: "+977"
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Signup Data:", {
        ...formData,
        profilePicture: formData.profilePicture?.name || "Not uploaded"
      });
      // Add backend submission logic here
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Home as background */}
      <div className="absolute inset-0 z-0">
        <Home />
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black bg-opacity-30" />

      {/* Signup Modal */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl text-center relative">


          {/* Back Button */}
          <button
            className="absolute top-4 left-4"
            onClick={() => navigate("/login")}
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>

          <img src={logo} alt="Tutor Finder Logo" className="w-24 mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-6 text-gray-800">SIGN UP</h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && <p className="text-sm text-red-500 ml-2 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-sm text-red-500 ml-2 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 ml-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 pr-12"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute top-9 right-4 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.password && <p className="text-sm text-red-500 ml-2 mt-1">{errors.password}</p>}
            </div>

            {/* Mobile Number */}
          {/* Mobile Number with Country Code */}
<div>
  <label className="text-sm font-medium text-gray-700 ml-2">Mobile Number</label>
  <div className="flex items-center gap-2 mt-1">
    <select
      className="px-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-coral-500"
      value={formData.countryCode || "+977"}
      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
    >
      <option value="+977">🇳🇵 +977</option>
      <option value="+91">🇮🇳 +91</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
    </select>
    <input
      type="tel"
      placeholder="Enter mobile number"
      className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
      value={formData.mobile}
      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
    />
  </div>
  {errors.mobile && <p className="text-sm text-red-500 ml-2 mt-1">{errors.mobile}</p>}
</div>


            {/* Location */}
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              {errors.location && <p className="text-sm text-red-500 ml-2 mt-1">{errors.location}</p>}
            </div>

            {/* Profile Picture (optional) */}
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Profile Picture (optional)</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-5 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, profilePicture: e.target.files[0] })
                }
              />
              {formData.profilePicture && (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Preview"
                  className="w-16 h-16 rounded-full object-cover mt-2 mx-auto"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-coral-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
