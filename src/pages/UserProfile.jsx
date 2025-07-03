// import { useState, useEffect } from "react";

// const UserProfile = () => {
//   const [user, setUser] = useState(() => {
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : {};
//   });

//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     setUser(formData);
//     localStorage.setItem("user", JSON.stringify(formData));
//     setEditing(false);
//   };

//   const handleDelete = () => {
//     if (window.confirm("Delete your profile permanently?")) {
//       localStorage.removeItem("user");
//       window.location.href = "/";
//     }
//   };

//   return (
//     <div className="pt-28 px-6 max-w-xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">My Profile</h2>
//       {!editing ? (
//         <div className="space-y-4">
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <button
//             className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded"
//             onClick={() => setEditing(true)}
//           >
//             Edit Profile
//           </button>
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-4"
//             onClick={handleDelete}
//           >
//             Delete Profile
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           <input
//             name="name"
//             value={formData.name || ""}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             placeholder="Name"
//           />
//           <input
//             name="email"
//             value={formData.email || ""}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             placeholder="Email"
//           />
//           <button
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//             onClick={handleUpdate}
//           >
//             Save Changes
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;




// import { useState } from "react";
// import defaultAvatar from "../assets/logo/avatar.png"; // updated avatar path

// const UserProfile = () => {
//   const [user, setUser] = useState({
//     firstName: "Sagar",
//     lastName: "Chhetri",
//     email: "sagarkshetri0000@gmail.com",
//     gender: "",
//     location: "",
//     profilePicture: null,
//   });

//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, profilePicture: e.target.files[0] });
//   };

//   const handleUpdate = () => {
//     setUser(formData);
//     alert("Profile updated successfully!");
//     setEditing(false);
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
//       setUser(null);
//       alert("Your account has been permanently deleted.");
//     }
//   };

//   return (
//     <div className="pt-28 px-6 max-w-7xl mx-auto font-sans">
//       <h2 className="text-3xl font-bold mb-10 text-gray-800">My Profile</h2>
//       {user ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Left Section - General Info */}
//           <div className="space-y-5">
//             <h3 className="text-xl font-semibold text-gray-800">General Information</h3>
//             <input
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-500"
//               placeholder="First Name"
//             />
//             <input
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full"
//               placeholder="Last Name"
//             />
//             <input
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full"
//               placeholder="Gender"
//             />
//             <input
//               name="email"
//               value={formData.email}
//               disabled
//               className="w-full border border-gray-200 px-5 py-3 rounded-full bg-gray-100 text-gray-500"
//               placeholder="Email"
//             />
//             <div className="flex gap-4">
//               <button
//                 className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full"
//                 onClick={() => setEditing(true)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full"
//                 onClick={handleUpdate}
//               >
//                 Save
//               </button>
//             </div>
//           </div>

//           {/* Middle Section - Location */}
//           <div className="space-y-5">
//             <h3 className="text-xl font-semibold text-gray-800">Location</h3>
//             <input
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               disabled={!editing}
//               className="w-full border border-gray-200 px-5 py-3 rounded-full"
//               placeholder="Enter Your Location"
//             />
//           </div>

//           {/* Right Section - Profile Picture & Delete */}
//           <div className="flex flex-col items-center gap-6">
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-2">Profile Photo</h3>
//               <img
//                 src={formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : defaultAvatar}
//                 alt="Profile"
//                 className="w-28 h-28 rounded-full object-cover mb-3 border"
//               />
//               <label className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full cursor-pointer">
//                 Modify Your Photo
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="hidden"
//                   disabled={!editing}
//                 />
//               </label>
//             </div>
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-1">Delete an account</h3>
//               <p className="text-sm text-gray-600 mb-3">ATTENTION! All of your data will be definitively and irreversibly deleted.</p>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
//                 onClick={handleDelete}
//               >
//                 Delete my account
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center text-gray-600 text-lg">Profile not found.</div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";
import defaultAvatar from "../assets/logo/avatar.png";

const UserProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "Sagar Chhetri",
    email: "sagarkshetri0000@gmail.com",
    phone: "9800000000",
    location: "Butwal",
    profilePicture: null,
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleUpdate = () => {
    setUser(formData);
    alert("Profile updated successfully!");
    setEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      setUser(null);
      alert("Your account has been permanently deleted.");
    }
  };

  return (
    <>
      <LoggedInNavbar />
      <div className="pt-28 px-6 max-w-7xl mx-auto font-sans">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">My Profile</h2>

        {user ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left Section */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-gray-800">General Information</h3>

              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-200 px-5 py-3 rounded-full"
                placeholder="Full Name"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-200 px-5 py-3 rounded-full"
                placeholder="Phone Number"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editing}
                className={`w-full border px-5 py-3 rounded-full ${editing ? "border-gray-200" : "bg-gray-100 text-gray-500"}`}
                placeholder="Email"
              />

              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-coral-600 hover:underline"
              >
                Change / Forgot Password?
              </button>

              <div className="flex gap-4">
                {!editing ? (
                  <button
                    className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full"
                    onClick={() => setEditing(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>

            {/* Middle Section */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-200 px-5 py-3 rounded-full"
                placeholder="Enter Your Location"
              />

              <h3 className="text-xl font-semibold text-gray-800 mt-10">My Courses</h3>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>Frontend Development Bootcamp - Completed</li>
                <li>JavaScript Mastery - In Progress</li>
                <li>React Essentials - Booked</li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Profile Photo</h3>
                <img
                  src={formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : defaultAvatar}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover mb-3 border"
                />
                <label className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full cursor-pointer">
                  Modify Your Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={!editing}
                  />
                </label>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">Delete Account</h3>
                <p className="text-sm text-gray-600 mb-3">
                  ATTENTION! All of your data will be permanently deleted.
                </p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                  onClick={handleDelete}
                >
                  Delete my account
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg">Profile not found.</div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
