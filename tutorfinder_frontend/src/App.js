// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from './pages/ForgotPassword';
// import LandingPage from './pages/LandingPage';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/landing-page" element={<LandingPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TutorCard from "./components/TutorCard";
import { AuthContextProvider } from "./context/AuthContext";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import FavoritePage from "./pages/Favorites";
import ForgotPassword from "./pages/ForgotPassword";
import HelpCenter from "./pages/Help";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TutorDetail from "./pages/TutorDetail";
import TutorLandingPage from "./pages/TutorLandingPage";
import TutorLoginPage from "./pages/TutorLoginPage";
import TutorSignupForm from "./pages/TutorSignupform";
import UserProfile from "./pages/UserProfile";
import UserRoutes from "./protected/UserRoutes";
import { SearchPage } from "./pages/SearchPage";
import AdminRoutes from "./protected/AdminRoutes";
import { AdminPanel } from "./pages/admin/AdminPanel";
import MyContactList from "./pages/MyContactList";
import MyBookingList from "./pages/MyBookingList";
import PaymentPage from "./pages/PaymentPage";
import ResetPassword from "./pages/ResetPassword";
import MyReviews from "./pages/MyReviews";



function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/landing-page";

  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route element={<UserRoutes />}>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/tutor/:tutorId" element={<TutorDetail />} />
            <Route path="/tutors" element={<TutorCard />} />
            <Route path="/contact/:id" element={<Contact />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/tutorlogin" element={<TutorLoginPage />} />
            <Route path="/tutorsignup" element={<TutorSignupForm />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/my-contact-list" element={<MyContactList />} />
            <Route path="/my-booking-list" element={<MyBookingList />} />
            <Route path="/my-reviews" element={<MyReviews />} />

            
          </Route>
          <Route path="/tutorlandingpage" element={<TutorLandingPage />} />
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<AdminPanel />} />
          </Route>

          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <AppContent />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
