



import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUserApi } from "../apis/api";
import logo from "../assets/logo/logo.png";
import Home from "./Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.fullName);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("number", formData.mobile);
      data.append("location", formData.location);
      if (formData.profilePicture) {
        data.append("image", formData.profilePicture);
      }

      const res = await registerUserApi(data);
      console.log("Registration response:", res);

      if (res.data.success) {
        toast.success(" Registration successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(" Registration failed");
      }
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Home as background */}
      <div className="absolute inset-0 z-0">
        <Home />
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black bg-opacity-30" />

      {/* Signup Modal */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-md text-center relative">
          {/* Back Button */}
          <button
            className="absolute top-3 left-3"
            onClick={() => navigate("/login")}
          >
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </button>

          <img src={logo} alt="Tutor Finder Logo" className="w-20 mx-auto mb-4" />
          <h2 className="text-lg font-bold mb-4 text-gray-800">SIGN UP</h2>

          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            {/* Full Name */}
            <div>
              <label className="text-xs font-medium text-gray-700 ml-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-sm"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && <p className="text-xs text-red-500 ml-2 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-medium text-gray-700 ml-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-xs text-red-500 ml-2 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-xs font-medium text-gray-700 ml-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 pr-10 text-sm"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute top-8 right-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              {errors.password && <p className="text-xs text-red-500 ml-2 mt-1">{errors.password}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-xs font-medium text-gray-700 ml-2">Mobile Number</label>
              <div className="flex items-center gap-2 mt-1">
                <select
                  className="px-3 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-coral-500 text-sm"
                  value={formData.countryCode}
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
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-sm"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>
              {errors.mobile && <p className="text-xs text-red-500 ml-2 mt-1">{errors.mobile}</p>}
            </div>

            {/* Location */}
            <div>
              <label className="text-xs font-medium text-gray-700 ml-2">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full px-4 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-sm"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              {errors.location && <p className="text-xs text-red-500 ml-2 mt-1">{errors.location}</p>}
            </div>

            {/* Profile Picture */}
            <div>
              <label className="text-xs font-medium text-gray-700 ml-2">Profile Picture (optional)</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-1.5 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 bg-white text-sm"
                onChange={(e) =>
                  setFormData({ ...formData, profilePicture: e.target.files[0] })
                }
              />
              {formData.profilePicture && (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Preview"
                  className="w-12 h-12 rounded-full object-cover mt-2 mx-auto"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-600 text-center">
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
