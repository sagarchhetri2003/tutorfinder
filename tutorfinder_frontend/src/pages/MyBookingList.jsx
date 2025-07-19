import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, User, Star, Sparkles, Users } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <LoggedInNavbar />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full mb-6 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
            <Calendar className="w-5 h-5 text-blue-500 animate-pulse" />
            <span className="text-sm font-bold text-blue-700">Your Sessions</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            My Booking List
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Track and manage all your tutoring sessions in one beautiful place
          </p>
        </div>

        {bookings.length === 0 ? (
          /* Enhanced Empty State */
          <div className="text-center py-20">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-12 max-w-2xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No Bookings Yet</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your tutoring sessions will appear here once students start booking with you.
              </p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
                <span className="ml-3 text-sm text-gray-500 font-semibold">Ready for your first 5-star session!</span>
              </div>
            </div>
          </div>
        ) : (
          /* Enhanced Bookings Grid */
          <div className="space-y-6">
            {/* Stats Header */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Total Bookings</h3>
                    <p className="text-gray-600">Active sessions</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-green-600">{bookings.length}</span>
                  <p className="text-sm text-gray-500 font-semibold">Sessions booked</p>
                </div>
              </div>
            </div>

            {/* Enhanced Booking Cards */}
            <div className="grid gap-6">
              {bookings.map((item, index) => (
                <div
                  key={item._id}
                  className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full translate-y-12 -translate-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* User Info Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="relative group/avatar">
                        <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg ring-4 ring-white group-hover/avatar:ring-blue-200 transition-all duration-300">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${item.user?.image}`}
                            alt="User"
                            className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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

                    {/* Session Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Date Range */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <Calendar className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="font-bold text-blue-900">Session Period</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">From:</span>
                            <span className="font-bold text-gray-900">
                              {new Date(item.fromDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">To:</span>
                            <span className="font-bold text-gray-900">
                              {new Date(item.toDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100/50 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <Clock className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="font-bold text-green-900">Session Time</span>
                        </div>
                        <div className="text-2xl font-black text-green-700">
                          {item.time}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100/50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <User className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="font-bold text-purple-900">Status</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-bold text-gray-700">Active Booking</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group/button overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          View Session Details
                          <Sparkles className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
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

export default MyBookingList;




