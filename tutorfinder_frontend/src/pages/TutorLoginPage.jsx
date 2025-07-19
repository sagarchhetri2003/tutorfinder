import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import logo from "../assets/logo/logo.png";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useAuth } from "../context/AuthContext";

const TutorLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth()
  const fromSignup = location.state?.fromSignup || false;

  const [email, setEmail] = useState(user?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])

  const steps = [
    {
      number: "01",
      title: "Create your teaching account for free",
      description:
        "Sign up in minutes and create your tutor profile. Add your expertise, set your availability, and showcase your teaching style.",
      image: "https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "02",
      title: "Set your teaching conditions",
      description:
        "Choose your subjects, set your hourly rates, and define your preferred teaching methods. You're in complete control.",
      image: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "03",
      title: "Share your passion!",
      description:
        "Start connecting with students, schedule your first lessons, and begin your rewarding journey as an online tutor.",
      image: "https://plus.unsplash.com/premium_photo-1676838971664-b466a508255b?w=900&auto=format&fit=crop&q=60",
    },
  ];

  const communitySlides = [
    {
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
      title: "Share your passion!",
      description:
        "Join thousands of expert tutors on TutorFinder. By sharing your unique skills and passion daily, you can inspire students and offer meaningful learning experiences that go far beyond traditional lessons.",
    },
    {
      image: "https://images.unsplash.com/photo-1543069752-7148d755b347?w=900&auto=format&fit=crop&q=60",
      title: "Create meaningful connections",
      description:
        "At TutorFinder, human connection is at the heart of every lesson. We match students with tutors who understand their needs, making every learning experience personal and unforgettable.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1670264779270-d26ae0e0ffa6?w=900&auto=format&fit=crop&q=60",
      title: "Teach from anywhere",
      description:
        "Whether you're in a city or the countryside, TutorFinder lets you reach students globally and work flexibly on your terms.",
    },
  ];

  const benefits = [
    {
      title: "Set your rates",
      description:
        "Define your weekly rate and package deals. You decide what your expertise is worth.",
      icon: "💰",
      image:
        "https://plus.unsplash.com/premium_photo-1661311870919-415927d391df?w=900&auto=format&fit=crop&q=60",
    },
    {
      title: "Choose your subjects",
      description:
        "From Math to Music, Biology to Physics - teach what you're passionate about.",
      icon: "📚",
      image:
        "https://images.unsplash.com/photo-1565374703327-3f7d46db8fc3?w=900&auto=format&fit=crop&q=60",
    },
    {
      title: "Work from anywhere",
      description:
        "Online sessions, in-person meetups, or hybrid teaching - total flexibility!",
      icon: "🌍",
      image:
        "https://images.unsplash.com/photo-1649418558488-f98977269b0a?w=900&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 font-sans bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Top Navigation */}
      <div className="relative z-10">
        <LoggedInNavbar hideTutorButton={true} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full text-sm font-medium text-blue-800 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Join 10,000+ Expert Tutors
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              {fromSignup ? (
                <>
                  Welcome to <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">TutorFinder</span>!
                </>
              ) : (
                <>
                  Become a tutor, <br />
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">share your passion!</span>
                </>
              )}
            </h1>
            {!fromSignup && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TutorFinder is the leading tutoring platform to learn and teach anything you want. Join our community today!
              </p>
            )}
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['Flexible Schedule', 'Set Your Rates', 'Global Reach'].map((feature, index) => (
                <span key={index} className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  ✨ {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced Signup Form */}
          {user?.role === "user" && (
            <div className="relative group">
              <div className="relative bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md mx-auto border border-gray-200">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">🎓</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center mt-4">Create your profile</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-2 border-gray-200 focus:border-gray-500 px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/20 bg-gray-50"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <span className="text-gray-400">📧</span>
                    </div>
                  </div>
                  
                  {user?.role === "tutor" && user?.isApproved && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm font-medium">
                        You are already registered as a tutor. Please wait for approval.
                      </p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={user?.role === "tutor" && user?.isApproved}
                    onClick={() => navigate("/tutorsignup")}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="relative z-10">Sign up now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Community Slider */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Join the TutorFinder Community
          </h2>
          <div className="max-w-7xl mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={600}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              dotsClass="slick-dots !bottom-[-60px]"
            >
              {communitySlides.map((slide, index) => (
                <div key={index}>
                  <div className="grid md:grid-cols-2 gap-12 items-center px-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="relative rounded-2xl shadow-xl w-full h-[450px] object-cover transform group-hover:scale-[1.02] transition duration-500"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20 transform hover:scale-[1.02] transition duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">✨</span>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
                          {slide.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            How to become a TutorFinder?
          </h2>
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`relative group ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <img
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="relative rounded-2xl shadow-xl w-full h-80 object-cover transform group-hover:scale-[1.02] transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full text-sm font-medium text-blue-800 backdrop-blur-sm">
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
            Be your own <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Boss</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-white/20"
              >
                  <div className="relative overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent group-hover:from-gray-900/40 transition duration-300"></div>
                  </div>
                <div className="p-8">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-16 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-12 py-6 rounded-full text-xl font-bold transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
            <span className="relative z-10">Start Teaching Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .slick-dots li button:before {
          color: #6366f1 !important;
          font-size: 12px !important;
        }
        
        .slick-dots li.slick-active button:before {
          color: #4f46e5 !important;
        }
      `}</style>
    </div>
  );
};

export default TutorLoginPage;