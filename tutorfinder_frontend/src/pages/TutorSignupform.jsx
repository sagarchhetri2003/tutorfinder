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
  const { user, setIsUpdated } = useAuth()
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
    `w-full px-5 py-3 border ${errors[name] ? "border-red-500" : "border-gray-300"
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
        setIsUpdated((prev) => !prev);
        setTimeout(() => navigate("/landing-page"), 2000);
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

          {user?.image && (
            <div className="md:col-span-2">
              <img
                src={`${process.env.REACT_APP_API_URL}/${user?.image}`}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />

            </div>
          )}

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
