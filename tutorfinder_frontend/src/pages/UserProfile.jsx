

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { updateUserProfileApi } from "../apis/api";
// import defaultAvatar from "../assets/logo/avatar.png";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { useAuth } from "../context/AuthContext";

// const UserProfile = () => {
//   const subjectsList = [
//     "Mathematics",
//     "Science",
//     "English",
//     "Computer Science",
//     "Economics",
//     "Accountancy",
//     "Nepali",
//   ];
//   const navigate = useNavigate();
//   const { user, setIsUpdated } = useAuth();

//   const [editing, setEditing] = useState(false);
//   const [name, setName] = useState(user?.name || "");
//   const [number, setNumber] = useState(user?.number || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [location, setLocation] = useState(user?.location || "");
//   const [image, setImage] = useState(user?.image || null);
//   const [subject, setSubject] = useState(user?.subject || "")
//   const [previewUrl, setPreviewUrl] = useState(
//     user?.image ? `${process.env.REACT_APP_API_URL}/${user.image}` : defaultAvatar
//   );

//   useEffect(() => {
//     if (user) {
//       setName(user?.name);
//       setNumber(user?.number);
//       setLocation(user?.location);
//       setEmail(user?.email);
//       setImage(user?.image || null);
//       setSubject(user?.subject)
//       setPreviewUrl(user?.image ? `${process.env.REACT_APP_API_URL}/${user?.image}` : defaultAvatar);
//     }
//   }, [user]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("number", number);
//       formData.append("email", email);
//       formData.append("location", location);
//       formData.append("subject", subject)
//       if (image instanceof File) {
//         formData.append("image", image);
//       }

//       const res = await updateUserProfileApi(formData);

//       if (res.data.success) {
//         alert("Profile updated successfully!");
//         setIsUpdated((prev) => !prev);
//         setEditing(false);
//       } else {
//         alert("Update failed: " + (res.data.message || "Unknown error"));
//       }
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
//       alert("Your account has been permanently deleted.");
//     }
//   };

//   return (
//     <>
//       <LoggedInNavbar />
//       <div className="pt-28 px-6 max-w-7xl mx-auto font-sans">
//         <h2 className="text-3xl font-bold mb-10 text-gray-800">My Profile</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           <div className="space-y-5">
//             <h3 className="text-xl font-semibold text-gray-800">General Information</h3>

//             <input
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full"
//               placeholder="Full Name"
//             />

//             <input
//               name="number"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full"
//               placeholder="Mobile Number"
//             />

//             <input
//               name="email"
//               value={email}
//               disabled
//               className={`w-full border px-5 py-3 rounded-full ${editing ? "border-gray-200" : "bg-gray-100 text-gray-500"}`}
//               placeholder="Email"
//             />

//             <button
//               onClick={() => navigate("/forgot-password")}
//               className="text-sm text-coral-600 hover:underline"
//             >
//               Change / Forgot Password?
//             </button>

//             <div className="flex gap-4">
//               {!editing ? (
//                 <button
//                   className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full"
//                   onClick={() => setEditing(true)}
//                 >
//                   Edit
//                 </button>
//               ) : (
//                 <button
//                   className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full"
//                   onClick={handleUpdate}
//                 >
//                   Save
//                 </button>
//               )}
//             </div>
//           </div>

//           <div className="space-y-5">
//             <h3 className="text-xl font-semibold text-gray-800">Location</h3>
//             <input
//               name="location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full"
//               placeholder="Enter Your Location"
//             />

//             {user?.role === "tutor" && user?.isApproved && (
//               <div className="space-y-5 mt-10">
//                 <h3 className="text-xl font-semibold text-gray-800">Subject</h3>
//                 <select
//                   name="subject"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   disabled={!editing}
//                   className="w-full border border-gray-200 px-5 py-3 rounded-full bg-white text-gray-800"
//                 >
//                   <option value="">Select a Subject</option>
//                   {subjectsList.map((subj) => (
//                     <option key={subj} value={subj}>
//                       {subj}
//                     </option>
//                   ))}
//                 </select>

//               </div>
//             )}

// {/* 
//             <h3 className="text-xl font-semibold mt-10 text-gray-800">My Courses</h3> */}
//             {/* <ul className="space-y-2 list-disc pl-5 text-gray-700">
//               <li>Frontend Development Bootcamp - Completed</li>
//               <li>JavaScript Mastery - In Progress</li>
//               <li>React Essentials - Booked</li>
//             </ul> */}
//           </div>

//           <div className="flex flex-col items-center gap-6">
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-2">Profile Photo</h3>
//               <img
//                 src={previewUrl}
//                 alt="Profile"
//                 className="w-28 h-28 rounded-full object-cover mb-3 border"
//               />

//               <label
//                 htmlFor="fileInput"
//                 className={`${editing ? "cursor-pointer bg-coral-500 hover:bg-coral-600" : "bg-gray-300 cursor-not-allowed"
//                   } text-white px-6 py-2 rounded-full inline-block`}
//               >
//                 Modify Your Photo
//               </label>
//               <input
//                 id="fileInput"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="hidden"
//                 disabled={!editing}
//               />
//             </div>

//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-1">Delete Account</h3>
//               <p className="text-sm text-gray-600 mb-3">
//                 ATTENTION! All of your data will be permanently deleted.
//               </p>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
//                 onClick={handleDelete}
//               >
//                 Delete my account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserProfile;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserProfileApi } from "../apis/api";
import defaultAvatar from "../assets/logo/avatar.png";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useAuth } from "../context/AuthContext";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  Camera, 
  Edit3, 
  Save, 
  Trash2, 
  Lock, 
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const UserProfile = () => {
  const subjectsList = [
    "Mathematics",
    "Science",
    "English",
    "Computer Science",
    "Economics",
    "Accountancy",
    "Nepali",
  ];
  const navigate = useNavigate();
  const { user, setIsUpdated } = useAuth();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [number, setNumber] = useState(user?.number || "");
  const [email, setEmail] = useState(user?.email || "");
  const [location, setLocation] = useState(user?.location || "");
  const [image, setImage] = useState(user?.image || null);
  const [subject, setSubject] = useState(user?.subject || "")
  const [previewUrl, setPreviewUrl] = useState(
    user?.image ? `${process.env.REACT_APP_API_URL}/${user.image}` : defaultAvatar
  );

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setNumber(user?.number);
      setLocation(user?.location);
      setEmail(user?.email);
      setImage(user?.image || null);
      setSubject(user?.subject)
      setPreviewUrl(user?.image ? `${process.env.REACT_APP_API_URL}/${user?.image}` : defaultAvatar);
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("number", number);
      formData.append("email", email);
      formData.append("location", location);
      formData.append("subject", subject)
      if (image instanceof File) {
        formData.append("image", image);
      }

      const res = await updateUserProfileApi(formData);

      if (res.data.success) {
        alert("Profile updated successfully!");
        setIsUpdated((prev) => !prev);
        setEditing(false);
      } else {
        alert("Update failed: " + (res.data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Your account has been permanently deleted.");
    }
  };

  return (
    <>
      <LoggedInNavbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">My Profile</h1>
            <p className="text-slate-600">Manage your personal information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* General Information Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg shadow-slate-200/50 border border-white/20 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-slate-900">General Information</h2>
                  </div>
                  
                  {user?.role === "tutor" && user?.isApproved && (
                    <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Verified Tutor
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!editing}
                      className={`w-full border-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                        editing 
                          ? "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Phone className="w-4 h-4" />
                      Mobile Number
                    </label>
                    <input
                      name="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      disabled={!editing}
                      className={`w-full border-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                        editing 
                          ? "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={email}
                      disabled
                      className="w-full border-2 border-slate-200 bg-slate-50 text-slate-500 px-4 py-3 rounded-xl cursor-not-allowed"
                      placeholder="Email cannot be changed"
                    />
                    <button
                      onClick={() => navigate("/forgot-password")}
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                    >
                      <Lock className="w-3 h-3" />
                      Change / Forgot Password?
                    </button>
                  </div>

                  {/* Location Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <MapPin className="w-4 h-4" />
                      Location
                    </label>
                    <input
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      disabled={!editing}
                      className={`w-full border-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                        editing 
                          ? "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                      placeholder="Enter your location"
                    />
                  </div>
                </div>

                {/* Subject Selection for Tutors */}
                {user?.role === "tutor" && user?.isApproved && (
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <BookOpen className="w-4 h-4" />
                        Teaching Subject
                      </label>
                      <select
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        disabled={!editing}
                        className={`w-full md:w-1/2 border-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                          editing 
                            ? "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                            : "border-slate-200 bg-slate-50 text-slate-600"
                        }`}
                      >
                        <option value="">Select a Subject</option>
                        {subjectsList.map((subj) => (
                          <option key={subj} value={subj}>
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-slate-200">
                  {!editing ? (
                    <button
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
                      onClick={() => setEditing(true)}
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit Profile
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30"
                      onClick={handleUpdate}
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Photo & Actions Sidebar */}
            <div className="space-y-8">
              
              {/* Profile Photo Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg shadow-slate-200/50 border border-white/20 p-8">
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <Camera className="w-5 h-5 text-slate-600" />
                    <h3 className="text-xl font-semibold text-slate-900">Profile Photo</h3>
                  </div>
                  
                  <div className="relative inline-block mb-6">
                    <img
                      src={previewUrl}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {editing && (
                      <label
                        htmlFor="fileInput"
                        className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow-lg transition-colors duration-200"
                      >
                        <Camera className="w-4 h-4" />
                      </label>
                    )}
                  </div>

                  <label
                    htmlFor="fileInput"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      editing 
                        ? "cursor-pointer bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-lg shadow-slate-600/25" 
                        : "bg-slate-200 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    {editing ? "Change Photo" : "Photo Locked"}
                  </label>
                  
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={!editing}
                  />
                </div>
              </div>

              {/* Danger Zone Card */}
              <div className="bg-red-50/70 backdrop-blur-sm rounded-3xl shadow-lg border border-red-200/50 p-8">
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h3 className="text-xl font-semibold text-red-900">Danger Zone</h3>
                  </div>
                  
                  <p className="text-sm text-red-700 mb-6 leading-relaxed">
                    <strong>WARNING:</strong> Deleting your account will permanently remove all your data, including profile information, favorites, and history. This action cannot be undone.
                  </p>
                  
                  <button
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30"
                    onClick={handleDelete}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Account
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;