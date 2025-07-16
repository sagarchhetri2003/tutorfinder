// import React, { useEffect, useState } from "react";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { myContactsApi } from "../apis/api";

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

//   return (
//     <div className="bg-white min-h-screen">
//       <LoggedInNavbar />
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
import React, { useEffect, useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { myContactsApi, deleteContactApi } from "../apis/api"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; 



const MyContactList = () => {
  const [contacts, setContacts] = useState([]);

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
          onClick: () => {}, // do nothing
        },
      ],
    });
  };
  


  
  return (
    <div className="bg-white min-h-screen">
      <LoggedInNavbar />
      <ToastContainer position="top-right" autoClose={3000} /> 
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Contact List</h2>
        {contacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">Image</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Phone</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">Message</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="p-3 border">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${item.user?.image}`}
                        alt="Tutor"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-3 border">{item.user?.name}</td>
                    <td className="p-3 border">{item.user?.email}</td>
                    <td className="p-3 border">{item.user?.number}</td>
                    <td className="p-3 border">{item.user?.location}</td>
                    <td className="p-3 border" title={item.message}>
                      {item.message?.length > 50
                        ? item.message.slice(0, 50) + "..."
                        : item.message}
                    </td>
                    <td className="p-3 border">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyContactList;

