// import axios from "axios";
// // import { data } from "react-router-dom";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const apiWithFormData = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });

// const config = {
//   headers: {
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// };

// export const registerUserApi = (data) => api.post("/api/user/register", data);
// export const loginUserApi = (data) => api.post("/api/user/login", data);
// export const getUserDetailsApi = (userId) => api.get(`/api/user/details/${userId}`, config);
// export const signupAsTutorApi = (data) => apiWithFormData.post("/api/user/signup-as-tutor", data, config);
// export const updateUserProfileApi = (data) => apiWithFormData.put("/api/user/update", data, config);
// export const searchTutorsApi = (params) => api.get('/api/user/search-tutors', { params, ...config });
// export const allTutorsApi = () => api.get("/api/user/all-tutors");
// export const getTutorDetailsApi = (tutorId) => api.get(`/api/user/tutor-details/${tutorId}`, config);
// export const createContactApi = (data) => api.post("/api/user/contact", data, config);
// export const getTutorByIdApi = (id) => api.get(`/api/user/tutor/${id}`, config);
// export const myContactsApi = () => api.get("/api/user/my-contacts", config);
// export const deleteContactApi = (id) => api.delete(`/api/user/delete-contact/${id}`, config);
// export const myBookingsApi = () => api.get("/api/user/my-bookings", config);
// export const addReviewsApi = (data) => api.post("/api/user/add-review", data, config);
// export const getMyReviewsApi = () => api.get("/api/user/my-reviews", config);
// export const getReviewsApi = (id) => api.get(`/api/user/get-review/${id}`,config);
// export const getTutorReviewsApi = () => api.get("/api/user/my-reviews", config);
// export const deleteReviewApi = (id) => api.delete(`/api/user/review/${id}`, config);
// export const editReviewApi = (id, data) =>api.put(`/api/user/update-review/${id}`, data, config);
// export const createBookingApi = (data) => api.post("/api/booking/create", data, config);
// export const getAllUsersApi = () => api.get("/api/admin/allUsers", config);
// export const getAllTutorsApi = () => api.get("/api/admin/allTutors", config);
// export const deleteUsersApi = (id) => api.delete(`/api/admin/deleteUsers/${id}`, config);
// export const changeApprovalStatus = (id) => api.get(`/api/admin/approve-disapprove/${id}`, config);
// export const toggleFavouriteApi = (tutorId) => api.get(`/api/favourite/toggle/${tutorId}`, config);
// export const allFavouritesApi = () => api.get("/api/favourite/all", config);

import axios from "axios";

// Create base API instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create API instance for form data
const apiWithFormData = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Add request interceptor to automatically include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiWithFormData.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // Optionally redirect to login
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

apiWithFormData.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

// User Authentication APIs
export const registerUserApi = (data) => api.post("/api/user/register", data);
export const loginUserApi = (data) => api.post("/api/user/login", data);
export const getUserDetailsApi = (userId) => api.get(`/api/user/details/${userId}`);
export const signupAsTutorApi = (data) => apiWithFormData.post("/api/user/signup-as-tutor", data);
export const updateUserProfileApi = (data) => apiWithFormData.put("/api/user/update", data);

// Tutor APIs
export const searchTutorsApi = (params) => api.get('/api/user/search-tutors', { params });
export const allTutorsApi = () => api.get("/api/user/all-tutors");
export const getTutorDetailsApi = (tutorId) => api.get(`/api/user/tutor-details/${tutorId}`);
export const getTutorByIdApi = (id) => api.get(`/api/user/tutor/${id}`);

// Contact APIs
export const createContactApi = (data) => api.post("/api/user/contact", data);
export const myContactsApi = () => api.get("/api/user/my-contacts");
export const deleteContactApi = (id) => api.delete(`/api/user/delete-contact/${id}`);

// Booking APIs
export const createBookingApi = (data) => api.post("/api/booking/create", data);
export const myBookingsApi = () => api.get("/api/user/my-bookings");

// Review APIs
export const addReviewsApi = (data) => api.post("/api/user/add-review", data);
export const getMyReviewsApi = () => api.get("/api/user/my-reviews");
export const getReviewsApi = (id) => {
  if (!id) {
    throw new Error("Review ID is required");
  }
  return api.get(`/api/user/get-review/${id}`);
};
export const getTutorReviewsApi = (tutorId) => {
  if (!tutorId) {
    throw new Error("Tutor ID is required");
  }
  return api.get(`/api/user/tutor-reviews/${tutorId}`);
};
export const deleteReviewApi = (id) => {
  if (!id) {
    throw new Error("Review ID is required");
  }
  return api.delete(`/api/user/review/${id}`);
};
export const editReviewApi = (id, data) => {
  if (!id) {
    throw new Error("Review ID is required");
  }
  return api.put(`/api/user/update-review/${id}`, data);
};

// Admin APIs
export const getAllUsersApi = () => api.get("/api/admin/allUsers");
export const getAllTutorsApi = () => api.get("/api/admin/allTutors");
export const getAllReviewsApi = () => api.get("/api/admin/allReviews"); // Fixed endpoint to match your backend
export const deleteUsersApi = (id) => api.delete(`/api/admin/deleteUsers/${id}`);
export const changeApprovalStatusApi = (id) => api.put(`/api/admin/approve-disapprove/${id}`); // Changed to PUT for state changes

// Favourite APIs
export const toggleFavouriteApi = (tutorId) => api.post(`/api/favourite/toggle/${tutorId}`); // Changed to POST for actions
export const allFavouritesApi = () => api.get("/api/favourite/all");