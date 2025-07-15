import React, { useEffect, useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { myBookingsApi } from "../apis/api";

const MyBookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await myBookingsApi();
        if (res.data.success) {
          setBookings(res.data.bookings);
        }
      } catch (err) {
        console.error("Error loading bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <LoggedInNavbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Booking List</h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
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
                  <th className="p-3 border">From</th>
                  <th className="p-3 border">To</th>
                  <th className="p-3 border">Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="p-3 border">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${item.user?.image}`}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-3 border">{item.user?.name}</td>
                    <td className="p-3 border">{item.user?.email}</td>
                    <td className="p-3 border">{item.user?.number}</td>
                    <td className="p-3 border">{item.user?.location}</td>
                    <td className="p-3 border">
                      {new Date(item.fromDate).toLocaleDateString()}
                    </td>
                    <td className="p-3 border">
                      {new Date(item.toDate).toLocaleDateString()}
                    </td>
                    <td className="p-3 border">
                      {item.time}
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

export default MyBookingList;
