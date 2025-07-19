import axios from "axios";
// import { data } from "react-router-dom";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiWithFormData = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const registerUserApi = (data) => api.post("/api/user/register", data);
export const loginUserApi = (data) => api.post("/api/user/login", data);
export const getUserDetailsApi = (userId) => api.get(`/api/user/details/${userId}`, config);
export const signupAsTutorApi = (data) => apiWithFormData.post("/api/user/signup-as-tutor", data, config);
export const updateUserProfileApi = (data) => apiWithFormData.put("/api/user/update", data, config);
export const searchTutorsApi = (params) => api.get('/api/user/search-tutors', { params, ...config });
export const allTutorsApi = () => api.get("/api/user/all-tutors");
export const getTutorDetailsApi = (tutorId) => api.get(`/api/user/tutor-details/${tutorId}`, config);
export const createContactApi = (data) => api.post("/api/user/contact", data, config);
export const getTutorByIdApi = (id) => api.get(`/api/user/tutor/${id}`, config);
export const myContactsApi = () => api.get("/api/user/my-contacts", config);
export const deleteContactApi = (id) => api.delete(`/api/user/delete-contact/${id}`, config);
export const myBookingsApi = () => api.get("/api/user/my-bookings", config);
export const addReviewsApi = (data) => api.post("/api/user/add-review", data, config);
export const getMyReviewsApi = () => api.get("/api/user/my-reviews", config);
export const getReviewsApi = (id) => api.get(`/api/user/get-review/${id}`,config);
export const getTutorReviewsApi = () => api.get("/api/user/my-reviews", config);
export const deleteReviewApi = (id) => api.delete(`/api/user/review/${id}`, config);
export const editReviewApi = (id, data) =>api.put(`/api/user/update-review/${id}`, data, config);
export const createBookingApi = (data) => api.post("/api/booking/create", data, config);
export const getAllUsersApi = () => api.get("/api/admin/allUsers", config);
export const getAllTutorsApi = () => api.get("/api/admin/allTutors", config);
export const deleteUsersApi = (id) => api.delete(`/api/admin/deleteUsers/${id}`, config);
export const changeApprovalStatus = (id) => api.get(`/api/admin/approve-disapprove/${id}`, config);
export const toggleFavouriteApi = (tutorId) => api.get(`/api/favourite/toggle/${tutorId}`, config);
export const allFavouritesApi = () => api.get("/api/favourite/all", config);