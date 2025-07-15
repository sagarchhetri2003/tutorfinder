import React, { useEffect, useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { myContactsApi } from "../apis/api";

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

  return (
    <div className="bg-white min-h-screen">
      <LoggedInNavbar />
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
