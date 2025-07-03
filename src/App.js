
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

import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from "./pages/Login"; 
import Signup from "./pages/Signup";
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import FavoritePage from './pages/Favorites';
import TutorDetail from './pages/TutorDetail';
import TutorCard from './components/TutorCard';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import HelpCenter from './pages/Help';
import SearchResults from './pages/SearchResults';
import UserProfile from './pages/UserProfile';
import TutorLoginPage from './pages/TutorLoginPage';
import TutorSignupForm from './pages/TutorSignupform';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/landing-page";

  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/tutor/:tutorId" element={<TutorDetail />} />
          <Route path="/tutors" element={<TutorCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/tutorlogin" element={<TutorLoginPage />} />
          <Route path="/tutorsignup" element={<TutorSignupForm />} />




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
      <AppContent />
    </Router>
  );
}

export default App;
