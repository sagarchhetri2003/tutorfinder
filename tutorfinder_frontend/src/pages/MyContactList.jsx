


// import React, { useEffect, useState } from "react";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { myContactsApi, deleteContactApi } from "../apis/api"; 
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css"; 



// const MyContactList = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const res = await myContactsApi();
//         if (res.data.success) {
//           setContacts(res.data.contacts);
//         }
//       } catch (err) {
//         console.error("Error loading contacts:", err);
//       }
//     };

//     fetchContacts();
//   }, []);
//   const handleDelete = (id) => {
//     confirmAlert({
//       title: "Delete Confirmation",
//       message: "Do you really want to delete this contact?",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: async () => {
//             try {
//               const res = await deleteContactApi(id);
//               if (res.data.success) {
//                 toast.success("Contact deleted successfully");
//                 setContacts((prev) => prev.filter((item) => item._id !== id));
//               } else {
//                 toast.error("Failed to delete contact");
//               }
//             } catch (error) {
//               console.error("Delete failed:", error);
//               toast.error("An error occurred while deleting");
//             }
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {}, // do nothing
//         },
//       ],
//     });
//   };
  


  
//   return (
//     <div className="bg-white min-h-screen">
//       <LoggedInNavbar />
//       <ToastContainer position="top-right" autoClose={3000} /> 
//       <div className="pt-24 px-4 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">My Contact List</h2>
//         {contacts.length === 0 ? (
//           <p>No contacts found.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-100 text-left">
//                   <th className="p-3 border">Image</th>
//                   <th className="p-3 border">Name</th>
//                   <th className="p-3 border">Email</th>
//                   <th className="p-3 border">Phone</th>
//                   <th className="p-3 border">Location</th>
//                   <th className="p-3 border">Message</th>
//                   <th className="p-3 border">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {contacts.map((item) => (
//                   <tr key={item._id} className="hover:bg-gray-50">
//                     <td className="p-3 border">
//                       <img
//                         src={`${process.env.REACT_APP_API_URL}/${item.user?.image}`}
//                         alt="Tutor"
//                         className="w-10 h-10 rounded-full object-cover"
//                       />
//                     </td>
//                     <td className="p-3 border">{item.user?.name}</td>
//                     <td className="p-3 border">{item.user?.email}</td>
//                     <td className="p-3 border">{item.user?.number}</td>
//                     <td className="p-3 border">{item.user?.location}</td>
//                     <td className="p-3 border" title={item.message}>
//                       {item.message?.length > 50
//                         ? item.message.slice(0, 50) + "..."
//                         : item.message}
//                     </td>
//                     <td className="p-3 border">
//                       <button
//                         onClick={() => handleDelete(item._id)}
//                         className="text-red-600 hover:underline"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyContactList;

import React, { useEffect, useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, User, Trash2, Eye, AlertTriangle, Sparkles, MessageCircle } from "lucide-react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { myContactsApi, deleteContactApi } from "../apis/api"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; 

const MyContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [expandedMessage, setExpandedMessage] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await myContactsApi();
        if (res.data.success) {
          setContacts(res.data.contacts);
        }
      } catch (err) {
        console.error("Error loading contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Delete Confirmation",
      message: "Do you really want to delete this contact?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const res = await deleteContactApi(id);
              if (res.data.success) {
                toast.success("Contact deleted successfully");
                setContacts((prev) => prev.filter((item) => item._id !== id));
              } else {
                toast.error("Failed to delete contact");
              }
            } catch (error) {
              console.error("Delete failed:", error);
              toast.error("An error occurred while deleting");
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const toggleMessage = (id) => {
    setExpandedMessage(expandedMessage === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <LoggedInNavbar />
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full mb-6 shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300">
            <MessageCircle className="w-5 h-5 text-purple-500 animate-pulse" />
            <span className="text-sm font-bold text-purple-700">Inbox</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            My Contact List
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage all your student inquiries and messages in one organized place
          </p>
        </div>

        {contacts.length === 0 ? (
          /* Enhanced Empty State */
          <div className="text-center py-20">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-12 max-w-2xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <MessageSquare className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No Messages Yet</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Student inquiries and contact messages will appear here when they reach out to you.
              </p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full shadow-lg border border-purple-200/50">
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                <span className="text-sm font-bold text-purple-700">Ready to receive messages!</span>
              </div>
            </div>
          </div>
        ) : (
          /* Enhanced Contacts Display */
          <div className="space-y-6">
            {/* Stats Header */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Total Messages</h3>
                    <p className="text-gray-600">Student inquiries</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-purple-600">{contacts.length}</span>
                  <p className="text-sm text-gray-500 font-semibold">Messages received</p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Cards */}
            <div className="grid gap-6">
              {contacts.map((item, index) => (
                <div
                  key={item._id}
                  className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full translate-y-12 -translate-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* User Info Header */}
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div className="flex items-center gap-6">
                        <div className="relative group/avatar">
                          <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg ring-4 ring-white group-hover/avatar:ring-purple-200 transition-all duration-300">
                            <img
                              src={`${process.env.REACT_APP_API_URL}/${item.user?.image}`}
                              alt="User"
                              className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white shadow-lg"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                            {item.user?.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Mail className="w-4 h-4 text-blue-500" />
                              <span className="font-medium">{item.user?.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Phone className="w-4 h-4 text-green-500" />
                              <span className="font-medium">{item.user?.number}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4 text-red-500" />
                              <span className="font-medium">{item.user?.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleMessage(item._id)}
                          className="group/btn p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        >
                          <Eye className="w-5 h-5 text-blue-600 group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="group/btn p-3 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50 rounded-2xl hover:from-red-100 hover:to-pink-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        >
                          <Trash2 className="w-5 h-5 text-red-600 group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Message Section */}
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100/50 group-hover:from-gray-100 group-hover:to-blue-100 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <MessageSquare className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="font-bold text-gray-900">Message</span>
                      </div>
                      
                      <div className="relative">
                        {expandedMessage === item._id ? (
                          <div className="space-y-4">
                            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-white/50">
                              <p className="text-gray-700 leading-relaxed text-base">
                                {item.message}
                              </p>
                            </div>
                            <button
                              onClick={() => toggleMessage(item._id)}
                              className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                            >
                              Show less
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-white/50">
                              <p className="text-gray-700 leading-relaxed text-base">
                                {item.message?.length > 100
                                  ? item.message.slice(0, 100) + "..."
                                  : item.message}
                              </p>
                            </div>
                            {item.message?.length > 100 && (
                              <button
                                onClick={() => toggleMessage(item._id)}
                                className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                              >
                                Read more
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group/button overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          <Mail className="w-5 h-5" />
                          Reply
                        </span>
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group/button overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" />
                          Call
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyContactList;